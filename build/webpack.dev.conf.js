const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: baseWebpackConfig.externals.paths.dist,
        historyApiFallback: true,
       // host: 'test.delivery-club.ru',
        port: 80,
         https: false,
        // proxy: { // Собственно настройки прокси
        //     '**': { // С какого адреса webpack dev server'a будут проксироваться запросы на адрес локального сервера. 
        //       // В данном случае ** - значит все адреса проксировать, начиная с корня http://anyships.site:3000
        //       // Например: http://anyships.site:3000/user запрос на http://anyships.site/user (адрес из target ниже)
        //       target: `http://test.delivery-club.ru`, // Целевой адрес локального сервера, куда будут проксироваться запросы с дев сервера 
        //       onProxyRes(proxyRes, req, res) {
        //         if (proxyRes.headers.location) { // Если есть заголовок со свойством location (Где храниться полный адрес запроса к локальному серверу)
        //           let location = proxyRes.headers.location; // Сохраняем адрес зоголовка location из ответа в переменную location
        //           console.log(`LOCATION: ${proxyRes.headers.location}`); // Выводит в консоль адрес до замены
        //           location = location.replace('test.delivery-club.ru', 'test.delivery-club.ru:8080'); // Заменяем адрес локального сервера на адрес webpack dev server'a
        //           proxyRes.headers.location = location; // Присваиваем в заголовок location подмененный адрес из переменной location
        //           console.log(`REPLACED: ${proxyRes.headers.location}`); // Выводит в консоль адрес после замены
        //         }
        //       }
        //     }
        //   },
        overlay: {
            warnings: false,
            errors: true
        },
        historyApiFallback: true,
        watchOptions: { aggregateTimeout: 300, poll: 1000 },       
              
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map'
        })
    ]
})



module.exports = new Promise((resolve, reject) => {
    resolve(devWebpackConfig)
})


