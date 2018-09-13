/*
 *  功能：封装 axios
 *  create by tiankai on 05/16/18 17:15:07
 */

import Axios from 'axios';

const ajax = {
  get: (url) => {
    return new Promise((resolve,reject) => {
      Axios({
        method: 'get',
        url: url
      }).then(response => {
        resolve({data: response.data});
      }).catch(error => {
        reject({data: error});
      });
    });
  }
};

export default {
  ...ajax
}
