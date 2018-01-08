const {
    FuseBox,
    EnvPlugin,
    RawPlugin,
    HTMLPlugin,
    BabelPlugin,
    UglifyJSPlugin,
    WebIndexPlugin
} = require('fuse-box');
const { src, task, context } = require('fuse-box/sparky');
const {
    AureliaModuleDependencies,
    AureliaHtmlDependencies
} = require('fusebox-aurelia-plugin');

context(class {
    constructor() {
        this.production = process.env.NODE_ENV === 'production';
    }

    config() {
        return FuseBox.init({
            homeDir: './src',
            output: './dist/$name.js',
            hash: this.production,
            cache: !this.production,
            runAllMatchedPlugins: true,
            plugins: [
                EnvPlugin({ NODE_ENV: this.production ? 'production' : 'development' }),
                RawPlugin(['.css']),
                HTMLPlugin({ useDefault: true }),
                AureliaModuleDependencies(),
                AureliaHtmlDependencies(),
                BabelPlugin(),
                this.production && UglifyJSPlugin(),
                WebIndexPlugin({ template: './index.html' })
            ]
        });
    }
});

task('build', async ctx => {
    const fuse = ctx.config();

    const app = fuse.bundle('app').instructions(`> main.js`);

    if (!ctx.production) {
        app.sourceMaps(true).hmr({ reload: true }).watch();
    }

    if (!ctx.production) { fuse.dev({ root: './dist' }); }

    await fuse.run();
});

task('clean', async () => await src('dist/*').clean('dist').exec());

task('copy', async () => await src('./favicon.ico').dest('./dist').exec());

task('default', ['clean', 'copy', 'build']);
