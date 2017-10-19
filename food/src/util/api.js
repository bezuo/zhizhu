import axios from 'axios'
import qs from 'qs'

// axios 配置
let version = "v1";
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
//axios.defaults.headers.post['Content-Type'] = "application/json;charset=UTF-8"
axios.defaults.withCredentials = true					// 可写入设置的cookies
axios.defaults.baseURL = '/api/' + version;				// 测试环境

//POST传参序列化
axios.interceptors.request.use((config) => {
    if(config.method  === 'post'){
//      config.data = qs.stringify(config.data); 
		config.data = JSON.stringify(config.data);
    }
    return config;
},(error) =>{
	console.log("错误的传参");
	alert("错误的传参")
    return Promise.reject(error);
});

//返回状态判断 
axios.interceptors.response.use((res) =>{
    if(res.statusText === 'ok'){
//		console.log(res.data.msg)
        return Promise.reject(res);
    }
    return res;
}, (error) => {
	console.log("网络异常");
	alert("网络异常")
	return Promise.reject(error);
});

// get方式
export function getFetch(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, params)
            .then(response => {
				resolve(response.data);
            }, err => {
                reject(err);
            })
            .catch((error) => {
               	reject(error)
            })
    })
}

// post方式
export function postFetch(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
            .catch((error) => {
               	reject(error)
            })
    })
}

export default {
	
	// 商家分类
	getMerchantCategery(params) {
		return getFetch('merchantcat/list', params);
	},
	
	// 商家列表
	getMerchantList(params) {
		return getFetch('merchant/list', params);
	},
	
	// 分类列表
	getCategeryList(params) {
		return getFetch('/categery/list', params);
	},
	
	// 分类列表
	getCategeryList(params) {
		return getFetch('/categery/list', params);
	}	
}