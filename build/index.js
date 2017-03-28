const {
    Sparky,
    FuseBox,
    EnvPlugin,
    RawPlugin,
    HTMLPlugin,
    BabelPlugin,
    UglifyJSPlugin
} = require('fuse-box');
const config = require('./config');

const vendorModules = [
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

Sparky.task('dev', () => {
    const fuse = FuseBox.init({
        homeDir: config.paths.src,
        output: `${ config.paths.dist }/$name.js`,
        plugins: [
            // EnvPlugin({ NODE_ENV: 'development' }),
            RawPlugin(['.css']),
            HTMLPlugin({ useDefault: true }),
            BabelPlugin(),
        ]
    });

    fuse.register('material-design-lite', {
        homeDir: '../node_modules/material-design-lite/dist',
        main: 'material.min.js',
        instructions: 'material.min.css',
    });

    fuse.bundle('vendor')
        .instructions(`${ vendorModules.join(' + ') }`);

    fuse.bundle('app')
        .watch()
        .hmr()
        .sourceMaps(true)
        .instructions(`!> [main.js] + [**/*.{js,html,css}]`);

    fuse.dev({ root: config.paths.dist });
    fuse.run();
});

Sparky.task('prod', () => {
    const fuse = FuseBox.init({
        homeDir: config.paths.src,
        output: `${ config.paths.dist }/$name.js`,
        plugins: [
            // EnvPlugin({ NODE_ENV: 'production' }),
            RawPlugin(['.css']),
            HTMLPlugin({ useDefault: true }),
            BabelPlugin(),
            UglifyJSPlugin()
        ]
    });

    fuse.register('material-design-lite', {
        homeDir: '../node_modules/material-design-lite/dist',
        main: 'material.min.js',
        instructions: 'material.min.css',
    });

    fuse.bundle('vendor')
        .instructions(`${ vendorModules.join(' + ') }`);

    fuse.bundle('app')
        .instructions(`!> [main.js] + [**/*.{js,html,css}]`);

    fuse.run();
});
