import axios from 'axios'
import { load, hideLoad, showSuccess, showError} from './loading'

//get请求
export function get (url, params = {}, loading = true, isShow) {
  load(loading)
  return axios.get(url, {params}) // {params} 等同于 {params:params}
    .then(response => {
      hideLoad(loading)
      if (response.data.code == 200) {
        if(isShow){
          showSuccess(response.data.msg)
        }
        return response.data
      }else {
        showError(response.data.msg)
      }
    })
    .catch((e) => {
      hideLoad(loading)
      showError("网络错误")
    })
}

//post 请求
export function post (url, params = {}, loading = true) {
  load(loading)
  return axios.post(url, params)
    .then(response => {
      hideLoad(loading)
      if (response.data.code == 200) {
        showSuccess(response.data.msg)
        return response.data
      }else {
        showError(response.data.msg)
      }
    })
    .catch((e) => {
      hideLoad(loading)
      showError("网络错误")
    })
}
