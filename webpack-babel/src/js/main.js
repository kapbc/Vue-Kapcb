require('../css/normal.css');
require('../css/special.less');
const {Info, HighQualityPersonCheck} = require('./info');

let info = new Info('kapcb', 18, '男', '深圳');
HighQualityPersonCheck(info);