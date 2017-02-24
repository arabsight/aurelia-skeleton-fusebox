import { Router } from 'aurelia-router';

export function configure(aureliaConfig) {
    let router = aureliaConfig.container.get(Router);

    let routes = [
        { route: '', name: 'home', moduleId: 'home/welcome', title: 'Home' }
    ];

    routes.forEach(route => router.addRoute(route));
}
