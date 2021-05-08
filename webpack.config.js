const path = require("path");
// 添加插件
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  // 创建多个入口
  entry: {
    index: "./src/index.js",
    print: "./src/print.js"
  },
  output: {
    // 输出的文件名 [name]: entry的key + .boundle.js
    filename: "[name].boundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "/"
  },
  // 开个服务器 需要安装 webpack-dev-server
  devServer: {
    contentBase: "./dist"
  },
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development"
    })
  ]
};
