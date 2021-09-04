require('../css/normal.css');
require('../css/special.less');
let Info = require('../js/info');

let personInfo = new Info.PersonInfo('kapcb', 17, '男', '深圳');
Info.HighQualityPersonCheck(personInfo);
