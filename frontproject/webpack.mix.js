let mix = require('laravel-mix');

mix.js('src/app.js', 'public/js')
    .sass('src/sass/app.scss', 'public/css', {
        implementation: require('node-sass')
    });