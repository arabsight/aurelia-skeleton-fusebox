const {
    FuseBox,
    EnvPlugin,
    RawPlugin,
    HTMLPlugin,
    BabelPlugin,
    UglifyJSPlugin,
    WebIndexPlugin
} = require('fuse-box');
const { src, task, context } = require('fuse-box/sparky');

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

context(class {
    constructor() {
        this.production = process.env.NODE_ENV === 'production';
    }

    config() {
        const fuse = FuseBox.init({
            homeDir: './src',
            output: './dist/$name.js',
            hash: this.production,
            cache: !this.production,
            plugins: [
                EnvPlugin({ NODE_ENV: this.production ? 'production' : 'development' }),
                RawPlugin(['.css']),
                HTMLPlugin({ useDefault: true }),
                BabelPlugin(),
                this.production && UglifyJSPlugin(),
                WebIndexPlugin({ template: './index.html' })
            ]
        });

        fuse.register('material-design-lite', {
            homeDir: './node_modules/material-design-lite/dist',
            main: 'material.min.js',
            instructions: 'material.min.css',
        });

        return fuse;
    }
});

task('build', async ctx => {
    const fuse = ctx.config();

    const vendor = fuse.bundle('vendor')
        .instructions(`${vendorModules.join(' + ')}`);

    const app = fuse.bundle('app')
        .instructions(`!> [main.js] + [**/*.{js,html,css}]`);

    if (!ctx.production) {
        app.sourceMaps(true).hmr({ reload: true }).watch();
    }

    if (!ctx.production) { fuse.dev({ root: './dist' }); }

    await fuse.run();
});

task('clean', async () => await src('dist/*').clean('dist').exec());

task('copy', async () => await src('./favicon.ico').dest('./dist').exec());

task('default', ['clean', 'copy', 'build']);
