// const { FuseBox, RawPlugin, HTMLPlugin, BabelPlugin } = require('fsbx');

// let fuse = FuseBox.init({
//     homeDir: "./src",
//     output: "./dist/$name.js",
//     plugins: [
//         RawPlugin(['.css']),
//         HTMLPlugin({ useDefault: true }),
//         BabelPlugin()
//     ]
// });

// let vendorModules = [
//     'aurelia-loader-fusebox',
//     'aurelia-bootstrapper',
//     'aurelia-pal-browser',
//     'aurelia-framework',
//     'aurelia-logging-console',
//     'aurelia-templating-binding',
//     'aurelia-history-browser',
//     'aurelia-templating-resources',
//     'aurelia-templating-router',
//     'aurelia-fetch-client',
//     'aurelia-animator-css',
//     'material-design-lite',
//     'aurelia-mdl-plugin',
//     'whatwg-fetch'
// ];

// fuse.register('material-design-lite', {
//     homeDir: 'node_modules/material-design-lite/dist',
//     main: 'material.min.js',
//     instructions: 'material.min.css',
// });

// fuse.bundle('vendor-bundle')
//     .instructions(`${ vendorModules.join(' + ') }`);

// fuse.bundle('app-bundle')
//     .watch()
//     .hmr()
//     .sourceMaps(true)
//     .instructions(`!> [main.js] + [**/*.{js,html,css}]`);

// fuse.dev({ root: './dist' });
// fuse.run();
