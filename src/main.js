import 'aurelia-loader-fusebox';
import 'aurelia-bootstrapper';
import 'material-design-lite/material.min.js';

export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .plugin('aurelia-animator-css')
        .plugin('aurelia-mdl-plugin')
        .feature('shared')
        .feature('home')
        .feature('users');

    aurelia.start().then(() => aurelia.setRoot('shell/app'));
}