const path = require('path');


module.exports = {
    css: {
        loaderOptions: {
            scss: {
                prependData: '@import "./src/sass/prepends.scss";'
            }
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js',
                '@': path.resolve(__dirname, 'src/'), // この行を追加！
            },
        },
    },
};