import $axios from "./axios";
let url = "/api"

export const getPageId = () => $axios(url + '/v3/m1/cms/nav', "GET")

export const getHomeData = (data) => $axios(url + '/v3/m1/cms/page/detail', "GET",data)
