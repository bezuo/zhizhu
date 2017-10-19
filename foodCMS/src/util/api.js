import axios from 'axios'
import qs from 'qs'
import { Message } from 'element-ui'

// axios 配置
let version = "v1";
axios.defaults.timeout = 5000;
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.headers.post['Content-Type'] = "application/json;charset=UTF-8"
axios.defaults.headers.put['Content-Type'] = "application/json;charset=UTF-8"
axios.defaults.withCredentials = true					// 可写入设置的cookies
axios.defaults.baseURL = '/food-cms-api/sys/' + version;				// 测试环境

//POST传参序列化
axios.interceptors.request.use((config) => {
    if(config.method  === 'post' || config.method  === 'put'){
//      config.data = qs.stringify(config.data); 
		config.data = JSON.stringify(config.data);
    }
    return config;
},(error) =>{
	console.log("错误的传参")
	Message({
		type: 'warning',
		message: '错误的传参！'
	});
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
	console.log("网络异常")
	Message({
		type: 'warning',
		message: '网络异常，请求超时！'
	});
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

// delete方式
export function deleteFetch(url, params) {
	return new Promise((resolve, reject) => {
        axios.delete(url, params)
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

// put方式
export function putFetch(url, params) {
    return new Promise((resolve, reject) => {
        axios.put(url, params)
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
	
	getCategeryList(params) {		// 分组列表
		return getFetch('/categery/list', params);
	},
	
	createCategery(params) {			// 添加分组
		return postFetch('/categery/save', params);
	},
	
	deleteCategery(params) {			// 删除分组
		return deleteFetch('/categery/de/' + params);
	},
	
	editCategery(params) {			// 修改分组
		return putFetch('/categery/update', params);
	},
	
	getDeskList(params) {			// 餐桌列表
		return getFetch('/desk/list', params);
	},
	
	createDesk(params) {				// 添加餐桌
		return postFetch('/desk/save', params);
	},
	
	deleteDesk(params) {				// 删除餐桌
		return deleteFetch('/desk/de/' + params);
	},
	
	editDesk(params) {				// 修改餐桌
		return putFetch('/desk/update', params);
	},
}