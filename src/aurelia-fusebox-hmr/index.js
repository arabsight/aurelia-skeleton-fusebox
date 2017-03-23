// import { HmrContext } from 'aurelia-hot-module-reload';

// let context;

export function configure(config) {
    // context = new HmrContext(config.aurelia.loader);
    FuseBox.addPlugin({ hmrUpdate });
}

function hmrUpdate({ type, path, content }) {
    // js, html and css -> type is 'js'
    // if (type === 'js') {
    //     FuseBox.flush();
    //     FuseBox.dynamic(path, content);
    //     FuseBox.import(FuseBox.mainFile);

    //     if (path.endsWith('.html')) context.handleViewChange(path);
    //     if (path.endsWith('.js'))
    //         context.handleModuleChange(path.replace(/\.js$/, ''), {});
    // }

    // for now lets just reload
    window.location.reload();

    return true;
}
