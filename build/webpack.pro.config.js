const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    plugins: [
        // 清空this目录
        new CleanWebpackPlugin()
    ]
}
