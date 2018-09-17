/*
 *  功能：封装 axios
 *  create by tiankai on 05/16/18 17:15:07
 */

import axios from 'axios';

export const config = {
    baseURL: '/api',
    // 在请求发送前，可以根据实际要求，是否要对请求的数据进行转换
    // 仅应用于 post、put、patch 请求
    transformRequest: [function (data, headers) {
        // Do whatever you want to transform the data

        return data;
    }],

    // `transformResponse` allows changes to the response data to be made before
    // it is passed to then/catch
    transformResponse: [function (data) {
        // Do whatever you want to transform the data

        return data;
    }],

    // 请求头信息
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json;charset=UTF-8'
    },
    // 设置超时时间
    timeout: 1000,
    // 携带凭证
    withCredentials: false
}

const instance = axios.create(config);

//请求拦截器
instance.interceptors.request.use( config => {
    // Do something before request is sent
    // 可以在这里做一些事情在请求发送前
    config.setHeaders([
        // 在这里设置请求头与携带token信息
    ]);
    return config;
}, error => {
    // Do something whit request error
    // 请求失败可以做一些事情
    return Promise.reject(error);
});

//响应拦截器
instance.interceptors.response.use( response => {
    // Do something with response data
    // 在这里你可以判断后台返回数据携带的请求码
    return response;
}, error => {
    // Do something whit response error
    // 根据 错误码返回信息
    return Promise.reject(error);
})

/* method GET/POST/PUT
 * url
 * params/data
 * headers { 'content-type': 'application/x-www-form-urlencoded'}
 */
const ajax = (options) => {
    return instance(options)
      .then(response => {
        resolve(response);
    }).catch(error => {
        reject(error);
    });
}
export default ajax;

/* const ajax = {
 *     get: (url, params) => {
 *         return new Promise((resolve,reject) => {
 *             axios({
 *                 method: 'get',
 *                 url: url,
 *                 params: params
 *             }).then(response => {
 *                 resolve({data: response.data});
 *             }).catch(error => {
 *                 reject({data: error});
 *             });
 *         });
 *     },
 *     post: (url, params) => {
 *         return new Promise((resolve, reject) => {
 *             axios({
 *                 method: 'post',
 *                 url: url,
 *                 data: params
 *             }).then( response => {
 *                 resolve({data: response.data});
 *             }).catch( error => {
 *                 reject({data: error});
 *             });
 *         });
 *     }
 * };
 *
 * export default {
 *     ...ajax
 * } */
