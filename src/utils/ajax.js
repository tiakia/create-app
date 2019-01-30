/*
 *  功能：封装 axios
 *  create by tiankai on 05/16/18 17:15:07
 *  在使用函数中 try/catch 捕捉错误后 console.log(e.msg || e.text || '查询失误');
 */

import axios from "axios";
import { stringify } from "qs";
import Config from "src/config";

const codeMessage = {
  200: "服务器成功返回请求的数据。",
  201: "新建或修改数据成功。",
  202: "一个请求已经进入后台排队（异步任务）。",
  204: "删除数据成功。",
  400: "发出的请求有错误，服务器没有进行新建或修改数据的操作。",
  401: "用户没有权限（令牌、用户名、密码错误）。",
  403: "用户得到授权，但是访问是被禁止的。",
  404: "发出的请求针对的是不存在的记录，服务器没有进行操作。",
  406: "请求的格式不可得。",
  410: "请求的资源被永久删除，且不会再得到的。",
  422: "当创建一个对象时，发生一个验证错误。",
  500: "服务器发生错误，请检查服务器。",
  502: "网关错误。",
  503: "服务不可用，服务器暂时过载或维护。",
  504: "网关超时。"
};

function checkStatus(response) {
  // console.log(response)
  if (!response) {
    throw new Error("response is undefined");
  }
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const errorText = codeMessage[response.status] || response.statusText;
  const error = new Error(errorText);
  error.name = response.status;
  error.response = response;
  error.text = errorText;
  throw error;
}

export const config = {
  //`baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
  baseURL: Config.reqPrefix,
  // 在请求发送前，可以根据实际要求，是否要对请求的数据进行转换
  // 仅应用于 post、put、patch 请求
  transformRequest: [
    function(data, headers) {
      // Do whatever you want to transform the data
      //在这里自动设置了POST的请求头 application/x-www-form-urlencoded
      return stringify(data);
    }
  ],

  //  `transformResponse` 在传递给 then/catch 前，允许修改响应数据
  // it is passed to then/catch
  transformResponse: [
    function(data) {
      // Do whatever you want to transform the data

      return data;
    }
  ],

  // 请求头信息
  headers: {
    //如果POST请求这个请求头会收不到数据
    //axios自动设置了POST的请求头尾 application/x-www-form-urlencoded
    // 'Content-Type': 'application/json;charset=UTF-8',
  },
  // 设置超时时间
  timeout: 1000,
  // 携带凭证
  withCredentials: false
};

const instance = axios.create(config);

//请求拦截器
instance.interceptors.request.use(
  config => {
    // Do something before request is sent
    // 可以在这里做一些事情在请求发送前
    // config.headers['TOKEN']=''// 在这里设置请求头与携带token信息;
    return config;
  },
  error => {
    // Do something whit request error
    // 请求失败可以做一些事情
    return Promise.reject(error);
  }
);

//响应拦截器
instance.interceptors.response.use(
  response => {
    // Do something with response data
    // 在这里你可以判断后台返回数据携带的请求码
    return response;
  },
  //TODO: ajax错误处理
  error => {
    // Do something whit response error
    // 根据 错误码返回信息
    return checkStatus(error.response);
  }
);

/* method GET/POST/PUT
 * url
 * params/data
 * headers { 'content-type': 'application/x-www-form-urlencoded'}
 */
const ajax = options => {
  return new Promise((resolve, reject) => {
    instance(options)
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        //checkStatus 返回的错误可以在这里接收
        console.dir(error);
        reject(error);
      });
  });
};

export default ajax;
