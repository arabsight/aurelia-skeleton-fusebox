const { FuseBox, RawPlugin, HTMLPlugin, BabelPlugin } = require('fusebox');

let fuse = FuseBox.init({
    homeDir: "./src",
    outFile: "./dist/bundle.js",
    cache: false,
    log: true,
    debug: true,
    sourceMap: {
        bundleReference: 'bundle.js.map',
        outFile: './dist/bundle.js.map',
    },
    plugins: [
        [/\.css$/, RawPlugin({ extensions: ['.css'] })],
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
