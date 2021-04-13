/*
 * @Author: cjee
 */
import { get, post } from '../api/ajax'
import Global from '../api/global'
import interfaces from './index'

const global = Global.getInstance()
const SERVICE__NAME = 'system'

export function getDicDTOListByType(params = {}) {
  const url = global.getRequestUrl(SERVICE__NAME, interfaces.system.getDicDTOListByType)
  console.log(url)
  if (url !== undefined) {
    return get(url, params)
  }
}
