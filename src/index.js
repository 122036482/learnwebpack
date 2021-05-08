import _ from "lodash";
// 引入函数
import printMe from "./print.js";
function component() {
  const element = document.createElement("div");
  // 创建一个按钮
  const btn = document.createElement("button");

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  // 给按钮添加内容
  btn.innerHTML = "Click me and check the console!";
  // 绑定事件
  btn.onclick = printMe;
  // 天加到 element 元素内
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
