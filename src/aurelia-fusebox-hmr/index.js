import { HmrContext } from 'aurelia-hot-module-reload';

let context;

export function configure(config) {
    context = new HmrContext(config.aurelia.loader);
    FuseBox.addPlugin({ hmrUpdate });
}

function hmrUpdate({ type, path, content }) {
    // js, html and css -> type is 'js'
    // if (type === 'js') {
    //     fuseIt(path, content);
    //     renderIt(path).then(() => {
    //         console.log('renderIt finished');
    //         return true;
    //     });
    // }

    // for now lets just reload
    window.location.reload();

    return true;
}

function fuseIt(path, content) {
    FuseBox.flush();
    FuseBox.dynamic(path, content);
    FuseBox.import(FuseBox.mainFile)
}

function renderIt(path) {
    if (path.endsWith('.html')) {
        console.log('path ->', path);
        return context.handleViewChange(path);
    } else if (path.endsWith('.js')) {
        console.log('path ->', path);
        return context.handleModuleChange(path.replace(/\.js$/i, ''), {});
    } else {
        console.log('path ->', path);
    }
}
