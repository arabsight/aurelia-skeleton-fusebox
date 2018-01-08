import 'aurelia-loader-fusebox';
import 'aurelia-bootstrapper';
import 'material-design-lite';
import { PLATFORM } from 'aurelia-pal';

export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .plugin(PLATFORM.moduleName('aurelia-animator-css'))
        .plugin(PLATFORM.moduleName('aurelia-mdl-plugin'))
        .feature(PLATFORM.moduleName('shared/index'))
        .feature(PLATFORM.moduleName('home/index'))
        .feature(PLATFORM.moduleName('users/index'));

    if (process.env.NODE_ENV === 'development') {
        aurelia.use.developmentLogging();
    }

    aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('shell/app')));
}
