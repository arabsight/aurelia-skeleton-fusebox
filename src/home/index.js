import { Router } from 'aurelia-router';
import { PLATFORM } from 'aurelia-pal';

export function configure(aureliaConfig) {
    let router = aureliaConfig.container.get(Router);

    let routes = [
        { route: '', name: 'home', moduleId: PLATFORM.moduleName('home/welcome'), title: 'Home' }
    ];

    routes.forEach(route => router.addRoute(route));
}
