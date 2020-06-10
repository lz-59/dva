import axios from 'axios'
import qs from 'qs'
// 添加请求拦截器
axios.interceptors.request.use(config => {

  return config

}, error => {
  // 对请求错误做些什么
  console.log(error);
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(response => {
  // 根据状态码跳转
  return response
}, error => {
  return Promise.reject(error)
})


export function post (url, data) {
  return new Promise((resolve, reject) => {
    axios({
      url,
      method: 'POST',
      data: qs.stringify(data),
    })
      .then(res => resolve(res.data))
      .catch(err => console.log(err))
  })
}

export function get (url, data = '') {
  return new Promise((resolve, reject) => {
    axios({
      url,
      method: 'GET',
      params: '',
    })
      .then(res => resolve(res.data))
      .catch(err => console.log(err))
  })
}