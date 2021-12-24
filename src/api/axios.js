
import axios from 'axios';
/**
 * @param {String} api 接口
 * @param {Date} 2021-12-23 14:20:00 
 * @param {Object} data by: mikey.zhaopeng
 * @param {String} method
 */


export default function $axios(url, method, data) {
    return new Promise(function (resolve, reject) {
        let prop = method == "GET" ? "params" : "data"
        axios({
            url,
            method,
            [prop]: data || {}
        }).then(res=>{
            resolve(res.data)
        }).catch(err=>{
            reject(err)
        })
    })

}