module.exports = {
    css: {
        loaderOptions: {
            scss: {
                prependData: '@import "./src/sass/prepends.scss";'
            }
        }
    }
};