/**
 * 获取当期日期
 */
const getCurDate = () => {
  let date = new Date()
  let sep = '-'
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  if (month >= 1 && month <= 9) {
    month = '0' + month
  }
  if (day >= 0 && day <= 9) {
    day = '0' + day
  }
  return year + sep + month + sep + day
}

/**
 * 获取当期时间
 */
const getCurTime = () => {
  let date = new Date()
  let sep = ':'
  let hour = date.getHours()
  let min = date.getMinutes()
  let s = date.getSeconds()
  if (hour >= 1 && hour <= 9) {
    hour = '0' + hour
  }
  if (min >= 1 && min <= 9) {
    min = '0' + min
  }
  if (s >= 1 && s <= 9) {
    s = '0' + s
  }
  let t = hour + sep + min + sep + s
  let y = getCurDate()
  return y+" "+t
}

export default {
  getCurDate,
  getCurTime
}
