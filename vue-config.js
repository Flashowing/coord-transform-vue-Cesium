const webpack = require("webpack");
const CompressionPlugin = require("compression-webpack-plugin")

module.exports = {
    configureWebpack: {
        //支持jquery
        plugins: [
            new webpack.ProvidePlugin({
                $:"jquery",
                jQuery:"jquery",
                "windows.jQuery":"jquery"
            }),
            new CompressionPlugin({
                algorithm: 'gzip',
                test: /\.(js|css|less)$/, // 匹配文件名
                threshold: 10240, // 对超过10k的数据压缩
                minRatio: 0.8,
                deleteOriginalAssets: true // 删除源文件
            })
        ]
    },
};