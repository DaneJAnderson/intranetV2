const mix = require('laravel-mix');

require('vuetifyjs-mix-extension');


mix.js('resources/js/app.js', 'public/js').vuetify('vuetify-loader', {
    extract: 'css/vuetify-components.css'
})  
.extract(['vue'])  
.sass('resources/sass/app.scss', 'public/css')
/* .options({
    processCssUrls: false
 }) */
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

// mix.browserSync('localhost/intranetV2/public')
mix.browserSync('127.0.0.1:8000')
.options({
    watchOptions: {
        ignored: /node_modules/
    }
});








/* mix.styles([
    'public/css/vendor/normalize.css',
    'public/css/vendor/videojs.css'
], 'public/css/all.css'); */