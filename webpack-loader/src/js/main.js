import PersonInfo from "./info";

const info = new PersonInfo.Person('kapcb', 18, '男');
info.showMessage();

PersonInfo.highQualityPersonCheck(info);