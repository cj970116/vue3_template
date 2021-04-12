import axios, { AxiosRequestConfig, AxiosResponse, AxiosPromise, AxiosInstance } from 'axios'
import Qs from 'qs'

import { get } from 'lodash'
import { useRouter } from 'vue-router'
const router = useRouter()
// 创建axios实例
const ajax = axios.create({
  // api默认前缀
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  withCredentials: true,
  timeout: 10000
})
const errorHandler = (error: Error) => {
  const status = get(error, 'response.status')
  switch (status) {
    case 400:
      error.message = '请求错误'
      break
    case 401:
      error.message = '未授权，请登录'
      // 跳转登录页
      // do something...
      break
    case 403:
      error.message = ''
      break
    case 404:
      error.message = '请求地址出错'
      break
    case 408:
      error.message = '请求超时'
      break
    case 500:
      error.message = '服务器内部错误'
      break
    case 501:
      error.message = '服务未实现'
      break
    case 502:
      error.message = '网关错误'
      break
    case 503:
      error.message = '服务不可用'
      break
    case 504:
      error.message = '网关超时'
      break
    case 505:
      error.message = 'HTTP版本不受支持'
      break
    default:
      break
  }
  return Promise.reject(error)
}

// 请求拦截
ajax.interceptors.request.use((config: AxiosRequestConfig) => {
  // do something
  return config
}, errorHandler)

// 响应拦截
ajax.interceptors.response.use((response: AxiosResponse) => {
  const dataAxios = response.data
  const { code } = dataAxios
  if (code === undefined) {
    return dataAxios
  } else {
    switch (code) {
      case 0:
        return dataAxios.data
      default:
        return dataAxios.message
    }
  }
}, errorHandler)

export default function (
  url: string,
  params: any = {},
  config: AxiosRequestConfig,
  type: string
): AxiosPromise {
  const method = type.toLocaleLowerCase()
  let request: any = []
  switch (method) {
    case 'get':
      request = [url, config]
      break
    case 'post':
      request = [url, Qs.stringify(params), config]
      break
  }
  return new Promise((resolve, reject) => {
    ajax[method](...request).then((resp) => {
      if (url === './config.json') {
        resolve && resolve(resp.data)
      }
      if (resp.code === 0) {
        resolve && resolve(resp.data)
      } else {
        reject(resp.data)
      }
    })
  })
}
