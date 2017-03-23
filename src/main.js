import 'aurelia-loader-fusebox';
import 'aurelia-bootstrapper';

import 'material-design-lite';

export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .plugin('aurelia-animator-css')
        .plugin('aurelia-mdl-plugin')
        .feature('shared')
        .feature('home')
        .feature('users');

    // TODO if env is development
    aurelia.use.feature('aurelia-fusebox-hmr');

    aurelia.start().then(() => aurelia.setRoot('shell/app'));
}
