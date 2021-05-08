import _ from "lodash";
// 引入class
import "./style.css";
// 引入图片
import Icon from "./ico.png";
// 引入数据格式
import Data from "./data.xml";
import Notes from "./data.csv";
function component() {
  const element = document.createElement("div");

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  //   添加一个样式的类
  element.classList.add("hello");
  //   创建一个img标签
  const myIcon = new Image();
  //   添加src的属性 赋值为  Icon
  myIcon.src = Icon;
  //   添加到div 元素内
  element.appendChild(myIcon);

  // 在控制台输出
  console.log(Data);
  console.log(Notes);

  return element;
}

document.body.appendChild(component());
