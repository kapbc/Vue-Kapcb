import PersonInfo from "./info";

const info = new PersonInfo.Person('kapcb', 18, '男');
info.showMessage();

PersonInfo.HighQualityPersonCheck(info);

// 依赖css文件, 让在打包js文件的时候可以将css文件也打包进来
require('!_style-loader@3.2.1@style-loader!_css-loader@6.2.0@css-loader!../css/common.css');
