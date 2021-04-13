import axios, { AxiosRequestConfig, AxiosResponse, AxiosPromise, AxiosInstance } from 'axios'
import Qs from 'qs'

import { get as _get } from 'lodash'
// 创建axios实例
const ajax: AxiosInstance & { [method: string]: any } = axios.create({
  withCredentials: true,
  timeout: 10000
})
// 错误处理回调函数
const errorHandler = (error: Error) => {
  const status = _get(error, 'response.status')
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

export function get(url: string, params?: any): AxiosPromise {
  return new Promise((resolve, reject) => {
    ajax({
      method: 'get',
      url,
      params
    })
      .then((resp) => {
        resolve?.(resp.data)
      })
      .catch((err: Error) => {
        reject?.(err)
      })
  })
}

export function post(url: string, data?: any, headers = {}): AxiosPromise {
  return new Promise((resolve, reject) => {
    ajax({
      method: 'post',
      url,
      data: Qs.stringify(data),
      headers
    })
      .then((resp) => {
        resolve?.(resp.data)
      })
      .catch((err: Error) => {
        reject?.(err)
      })
  })
}
