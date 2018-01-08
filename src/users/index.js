import { Router } from 'aurelia-router';
import { PLATFORM } from 'aurelia-pal';

export function configure(aureliaConfig) {
    let router = aureliaConfig.container.get(Router);

    let routes = [
        { route: 'users', name: 'users', moduleId: PLATFORM.moduleName('users/users'), title: 'Users' }
    ];

    routes.forEach(route => router.addRoute(route));
}
