import 'aurelia-loader-fusebox';
import 'aurelia-bootstrapper';
import 'material-design-lite';

export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .plugin('aurelia-animator-css')
        .plugin('aurelia-mdl-plugin')
        .feature('shared')
        .feature('home')
        .feature('users');

    if (process.env.NODE_ENV === 'development') {
        aurelia.use.developmentLogging();
    }

    aurelia.start().then(() => aurelia.setRoot('shell/app'));
}
