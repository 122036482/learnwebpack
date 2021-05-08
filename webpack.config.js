const path = require("path");

module.exports = {
  mode: "development",
  // 入口
  entry: "./src/index.js", // 路径
  //   输出
  output: {
    //   输出的文件名
    filename: "main.js",
    // 输出的路径
    path: path.resolve(__dirname, "dist")
  }
};
