require('../css/normal.css')
require('../css/special.less')
const { PersonInfo, HighQualityPersonCheck } = require('./info')

let info = new PersonInfo('kapcb', 17, '男', '深圳')
HighQualityPersonCheck(info)
