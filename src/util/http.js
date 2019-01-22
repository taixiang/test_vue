import axios from 'axios'

export function get (url, params = {}) {
  return axios.get(url, params).then(response => {
    if(response.data.code == 200){

    }
  })
}
