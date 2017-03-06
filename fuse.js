const { FuseBox, RawPlugin, HTMLPlugin, BabelPlugin } = require('fuse-box');

let fuse = FuseBox.init({
    homeDir: "./src",
    outFile: "./dist/bundle.js",
    sourcemaps: true,
    plugins: [
        RawPlugin(['.css']),
        HTMLPlugin({ useDefault: true }),
        BabelPlugin()
    ]
});

let appModules = '**/*.{js,html,css}';

let vendorModules = [
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
    'aurelia-mdl-plugin',
    'whatwg-fetch'
];

fuse.devServer(`> main.js + ${appModules} + ${vendorModules.join(' + ')}`);
