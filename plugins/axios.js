import {showLoading, hideLoading} from '../utils/loading';
export default async function({ $axios, redirect }) {
  // request interceptor
  let jsonData = {
    code: '',
    data: ''
  };
  await $axios.interceptors.request.use(
    config => {
      // do something before request is sent
      config.withCredentials = true; // 允许携带token ,这个是解决跨域产生的相关问题
      config.timeout = 30000;
      if (config.method == "post"){
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
      }
      if (config.dataType == 'stringfy'){
        config.headers['Content-Type'] = 'application/json; charset=UTF-8'
      }
      return config;
    },
    error => {
      // do something with request error
      return Promise.reject(error)
    }
  );
  $axios.onRequest(config => {
    //console.log(config)
    if (config.loading != false){
      showLoading();
    }
  });

  // 服务器返回异常拦截
  $axios.onError((error) => {
    return error
  })

  // response interceptor
  $axios.interceptors.response.use(
    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    response => {
      const res = response;
      if(response.config.url.indexOf(".json") != -1){
        hideLoading();
        return res
      }else{
        if (res.data){
          if (res.data.code === 200) {
            hideLoading();
            return res;
          } else if (res.data.code === 3022) {
            return res;
          } else if (res.data.code === 401) {
            hideLoading();
            redirect('/login');
            return res;
          } else if (res.data.code === 403) {
            hideLoading();
            redirect('/noPermission');
            return res;
          } else if (res.data.code === 404) {
            hideLoading();
            redirect('/404');
            return res;
          }else {
            hideLoading();
            return res;
          }
        }else {
          hideLoading();
          return res;
        }
      }
      return Promise.reject(new Error(res.msg || 'Error'))
    },
    error => {
      //console.log('err' + error) // for debug

      return Promise.reject(error)
    }
  )
}
