module.exports = {
    css: {
        extract: process.env.NODE_ENV !== 'development',
        sourceMap: true,
        requireModuleExtension: true,
        loaderOptions: {
            stylus: {
                'resolve url': true,
                import: [
                    './src/theme'
                ]
            }
        },
        modules: true
    },
    productionSourceMap: true,
    devServer: {
        proxy: {
            '^/api': {
                target:'https://m.bmtrip.com/api',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                },
            }
        }
    }

}