import $axios from "./axios";
let url = "/api"

export const getPageId = () => $axios(url + '/v3/m1/cms/nav', "GET")

export const getHomeData = (data) => $axios(url + '/v3/m1/cms/page/detail', "GET", data)

export const getDuctIds = (data) => $axios(url + '/v3/m1/product/list/by_ids', "POST", data)

export const hotSearch = () => $axios(url + '/v3/page/keywords', "GET")

export const getDetail = (data) => $axios(url + '/v3/m1/cms/page/detail', "GET", data)

