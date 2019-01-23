import { Loading } from 'element-ui'
import { Message } from 'element-ui';

let loading

export function load (isload = true) {
  if(isload){
    loading = Loading.service({
      lock: true,
      background: 'rgba(0, 0, 0, 0)',
      target:".a_loading"
    })
  }
}

export function hideLoad (isload = true) {
  if(isload){
    loading.close()
  }
}

export function showSuccess (message) {
  Message.success({
    message,
    duration:2000,
    center:true
  })
}

export function showError (message) {
  Message.error({
    message,
    duration:2000,
    center:true
  })
}
