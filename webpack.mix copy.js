const mix = require('laravel-mix');

require('vuetifyjs-mix-extension');

const urlBase = "/intranet/public/"


mix.js('resources/js/app.js', 'public/js').vuetify('vuetify-loader', {
    extract: 'css/vuetify-components.css'
})  
.extract(['vue'])  
.sass('resources/sass/app.scss', 'public/css')

.sourceMaps()


if (mix.inProduction()) {
    mix.version();
}else{

    mix.options({
        processCssUrls: false,
        uglify: {
            parallel: 8, // Use multithreading for the processing
            uglifyOptions: {
                mangle: true,
                compress: false, // The slow bit
            }
        }
    })
}

// mix.browserSync('127.0.0.1:8000')
mix.browserSync('localhost/intranet/public')
.options({
    watchOptions: {
        ignored: /node_modules/
    }
});

mix.webpackConfig({
    output: {
        publicPath: urlBase,
        chunkFilename: 'js/[name].js'
}});

