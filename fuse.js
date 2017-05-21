const {
    Sparky,
    FuseBox,
    EnvPlugin,
    RawPlugin,
    HTMLPlugin,
    BabelPlugin,
    UglifyJSPlugin,
    WebIndexPlugin
} = require('fuse-box');

let production = process.env.NODE_ENV === 'production';

let vendorModules = [
    'aurelia-loader-fusebox',
    'aurelia-bootstrapper',
    'aurelia-pal-browser',
    'aurelia-framework',
    'aurelia-logging-console',
    'aurelia-templating-binding',
    'aurelia-history-browser',
    'aurelia-templating-resources',
    'aurelia-templating-router',
    'aurelia-fetch-client',
    'aurelia-animator-css',
    'material-design-lite',
    'aurelia-mdl-plugin',
    'whatwg-fetch'
];

Sparky.task('clean', () => Sparky.src('dist/*').clean('dist'));

Sparky.task('build', () => {
    const fuse = FuseBox.init({
        homeDir: './src',
        output: './dist/$name.js',
        hash: production,
        cache: !production,
        plugins: [
            EnvPlugin({ NODE_ENV: production ? 'production' : 'development' }),
            RawPlugin(['.css']),
            HTMLPlugin({ useDefault: true }),
            BabelPlugin(),
            production && UglifyJSPlugin(),
            WebIndexPlugin({ template: './index.html' })
        ]
    });

    fuse.register('material-design-lite', {
        homeDir: './node_modules/material-design-lite/dist',
        main: 'material.min.js',
        instructions: 'material.min.css',
    });

    const vendor = fuse.bundle('vendor')
        .instructions(`${ vendorModules.join(' + ') }`);

    const app = fuse.bundle('app')
        .instructions(`!> [main.js] + [**/*.{js,html,css}]`);

    if (!production) {
        app.watch().hmr().sourceMaps(true);
    }

    if (!production) { fuse.dev({ root: './dist' }); }

    return fuse.run();
});

Sparky.task('copy', () => {
    return Sparky.src('./favicon.ico').dest('./dist');
});

Sparky.task('default', ['clean', 'copy', 'build'], () => {});
