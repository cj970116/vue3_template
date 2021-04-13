/*
 * @Author: cjee
 * @description: 初始化加载配置文件的单例模式类
 *
 * 　　┏┓　　　┏┓+ +
 * 　┏┛┻━━━┛┻┓ + +
 * 　┃　　　　　　　┃
 * 　┃　　　━　　　┃ ++ + + +
 *  ████━████ ┃+
 * 　┃　　　　　　　┃ +
 * 　┃　　　┻　　　┃
 * 　┃　　　　　　　┃ + +
 * 　┗━┓　　　┏━┛
 * 　　　┃　　　┃
 * 　　　┃　　　┃ + + + +
 * 　　　┃　　　┃
 * 　　　┃　　　┃ +  神兽保佑
 * 　　　┃　　　┃    代码无bug
 * 　　　┃　　　┃　　+
 * 　　　┃　 　　┗━━━┓ + +
 * 　　　┃ 　　　　　　　┣┓
 * 　　　┃ 　　　　　　　┏┛
 * 　　　┗┓┓┏━┳┓┏┛ + + + +
 * 　　　　┃┫┫　┃┫┫
 * 　　　　┗┻┛　┗┻┛+ + + +
 *
 */
import axios from 'axios'
const configUrl = './config.json'
class Global {
  public configer: { [propName: string]: any }
  // 静态私有成员变量存储唯一实例
  private static instance: Global
  // 单例模式的构造函数私有化,确保用户无法通过new操作符创建实例
  private constructor() {
    this.configer = {}
  }
  InitConfig() {
    return axios.get(configUrl).then(
      (resp) => {
        console.log(resp)
        this.configer = resp.data
        return resp.data
      },
      () => {
        console.error('config parse error')
      }
    )
  }
  //  静态公有方法,验证实例的存在性并实例化
  public static getInstance() {
    if (!Global.instance) {
      Global.instance = new Global()
    }
    return Global.instance
  }
  public getRequestUrl(ctx: string, apiurl: string) {
    let url = '',
      serverUrl: string = this.configer ? this.configer.serverUrl : null
    const serverCtx: string = this.configer.service[ctx]
    if (serverUrl === null) {
      console.error('configer is null')
      return
    }
    if (!serverUrl.startsWith('/')) {
      serverUrl += '/'
    }
    url = serverUrl + serverCtx + apiurl
    return url
  }
}
export default Global
