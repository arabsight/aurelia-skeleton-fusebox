import { Router } from 'aurelia-router';

export function configure(aureliaConfig) {
    let router = aureliaConfig.container.get(Router);

    let routes = [
        { route: 'users', name: 'users', moduleId: 'users/users', title: 'Users' }
    ];

    routes.forEach(route => router.addRoute(route));
}
