/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-03 08:43:33
 * @LastEditTime: 2019-09-03 10:48:07
 * @LastEditors: Please set LastEditors
 */
import Taro from '@tarojs/taro'
import getBaseUrl from './baseUrl'

class httpRequest {
  baseOptions(params, method = "GET") {
    let { url, data } = params;
    const BASE_URL = getBaseUrl();
    let contentType = "application/json";
    contentType = params.contentType || contentType;
    type OptionType = {
      url: string,
      data?: object | string,
      method?: any, 
      header: object,
      // mode: string,
      success?: any,
      error?: any,
      xhrFields?: object,
    }
    const Token = Taro.getStorageSync('Token')

    // 校验缓存中是否存在Token
    const option: OptionType = Token ? 
    {
      url: url.indexOf('http') !== -1 ? url : BASE_URL + url,
      data: data,
      method: method,
      header: {
        'content-type': contentType,
        Token
      }
    } : {
      url: url.indexOf('http') !== -1 ? url : BASE_URL + url,
      data: data,
      method: method,
      header: {
        'content-type': contentType
      }
    }

    return Taro.request(option);
  }

  get(url: string, data: object | '' = '') {
    let option = { url, data };
    return this.baseOptions(option);
  }

  post(url: string, data: object, contentType: string) {
    let params = { url, data, contentType };
    return this.baseOptions(params, "POST");
  }

  put(url: string, data = "") {
    let option = { url, data };
    return this.baseOptions(option, "PUT");
  }

  delete(url: string, data = "") {
    let option = { url, data };
    return this.baseOptions(option, "DELETE");
  }

}

export default new httpRequest()
