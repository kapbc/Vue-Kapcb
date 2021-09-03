require('../css/normal.css');
require('../css/special.less')
const Info = require('../js/info');

const personInfo = new Info.PersonInfo('kapcb', 17, '男', '深圳');
Info.HighQualityPersonCheck(personInfo);
