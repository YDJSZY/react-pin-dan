/**
 * Created by luwenwe on 2017/10/11.
 */
import axios from 'axios';
import { showLoading,hideLoading } from '../untils/commonMethods';
var hasError;
axios.defaults.timeout = 5000;// 超时时间
// http请求拦截器
axios.interceptors.request.use((config) => {
    if(config.loading){
        showLoading();
    }
    return config;
}, (error) => {
    console.debug(error);
    return error;
})
// http响应拦截器
axios.interceptors.response.use((res) => {// 响应成功关闭loading
    if(res.config.loading){
        hideLoading();
    }
    return res;
}, (error) => {
    if (error.response.status == 401 || error.response.status == 403) {
        if(!hasError) {
            alert("登录已经失效，请重新登录。");
            hasError = true;
        }
        window.location.pathname = "/accounts/login/";
        return error;
    }
    /*if (error.status == 404) {
        $location.path("/404/");
    }
    if (error.status == 500) {
        $location.path("/500/");
    }*/
    return error;
})

export default axios;