/**
 * @author xiajing
 * @date 2019/5/26 17:03
 */
import moment from 'moment'
import 'moment/locale/zh-cn'
// moment.locale('zh-cn')
const time = moment().endOf('day').fromNow()
console.log('time',time)
