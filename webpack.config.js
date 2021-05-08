const path = require("path");

module.exports = {
  mode: "development",
  // 入口
  entry: "./src/index.js", // 路径
  //   输出
  output: {
    //   输出的文件名
    // filename: "main.js",
    filename: "boundle.js",

    // 输出的路径
    path: path.resolve(__dirname, "dist")
  },
  //   添加loader
  module: {
    //   规则
    rules: [
      // 数组是添加多个规则
      //   处理css
      {
        test: /\.css$/i, // 匹配对应的文件后最
        use: ["style-loader", "css-loader"] // 使用对应的loader
      },
      //   处理图片
      {
        test: /\.(png|svg|jpg|gif)$/i,
        type: "asset/resource" // webpack5 中使用的是 内置的 Asset Modules
      },
      // 处理字体
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource"
      },
      // 加载数据
      // csv
      {
        test: /\.(csv|tsv)$/i,
        use: ["csv-loader"]
      },
      // 加载数据
      // csv
      {
        test: /\.xml$/i,
        use: ["xml-loader"]
      }
    ]
  }
};
