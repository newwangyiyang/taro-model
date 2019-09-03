/* eslint-disable import/prefer-default-export */
import HTTPREQUEST from "./http"

export const getSignByUrl = () => {
  return HTTPREQUEST.post('/NxtzCWMemberWar/wx/redirect/getSignByUrl', {url: 'https://www.buchang.com'})
}
