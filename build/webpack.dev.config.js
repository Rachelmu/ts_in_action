// module.exports = {
//     devtool: 'cheap-module-eval-source-map'
// }
// cheap 忽略类信息
// module 定位ts源码

const webpack = require('webpack');
module.exports = {
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                devtools: 'cheap-module-eval-source-map'
            }
        })
    ]
}