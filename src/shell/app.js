export class App {

    configureRouter(config, router) {
        config.title = 'Aurelia & FuseBox';
        config.options.pushState = true;
        config.options.root = '/';

        this.router = router;
    }
}
