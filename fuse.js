const fb = require('fuse-box');
const FuseBox = fb.FuseBox;

let fuse = FuseBox.init({
    homeDir: "./src",
    outFile: "./dist/bundle.js",
    cache: false,
    sourceMap: {
        bundleReference: 'bundle.js.map',
        outFile: './dist/bundle.js.map',
    },
    plugins: [
        [/\.css$/, fb.RawPlugin({ extensions: ['.css'] })],
        fb.HTMLPlugin({ useDefault: true }),
        fb.BabelPlugin()
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
