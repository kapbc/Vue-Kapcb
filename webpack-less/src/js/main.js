import '!../css/normal.css';
import '!../css/special.less';
import PersonInfo from '../js/info';

const kapcb = new PersonInfo.PersonInfo('kapcb', 18, '男', '深圳');
PersonInfo.HighQualityPersonCheck(kapcb);