import { PLATFORM } from 'aurelia-pal';

export function configure(config) {
    config.globalResources([
        PLATFORM.moduleName('./header/au-header'),
        PLATFORM.moduleName('./drawer/au-drawer'),
        PLATFORM.moduleName('./footer/au-footer'),
        PLATFORM.moduleName('./limit.vc'),
    ]);
}
