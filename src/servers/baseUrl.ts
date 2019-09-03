/*
 * @Description: 根据当前环境获取不同的baseUrl
 * @Author: your name
 * @Date: 2019-09-03 08:43:33
 * @LastEditTime: 2019-09-03 08:50:46
 * @LastEditors: Please set LastEditors
 */
const getBaseUrl = () => {
  return process.env.NODE_ENV === 'development' ? 'https://www.buchang.com/' : 'https://www.buchang.com/'
}

export default getBaseUrl;
