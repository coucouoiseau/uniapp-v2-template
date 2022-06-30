import config from './config.js'
import {whiteList} from './whiteList.js'


const needSetAuthHead = (url) => {
    return whiteList.indexOf(url) === -1;
}

const request = (param) => {
    // 请求参数
    var url = param.url,
        method = (param.method || 'POST').toUpperCase(),
        header = {},
        data = param.data || {},
        token = param.token || "",
        hideLoading = param.hideLoading || false;

    var requestUrl = config.api() + url;

    if (method) {
        if (method === "POST") {
            header = {
                'content-type': "application/x-www-form-urlencoded"
            };
        } else {
            header = {
                'content-type': "application/json"
            };
        }
        if (needSetAuthHead(url)) {
            header.token = token;
        }
    }

    // 加载loading
    if (!hideLoading) {
        uni.showLoading({
            title: '加载中...'
        });
    }

    return new Promise((resolve, reject) => {
        uni.request({
            url: requestUrl,
            header: header,
            method: method,
            data: data,
            success: (res) => {
                // 判断 请求api 格式是否正确
                if (res.statusCode && res.statusCode != 200) {
                    uni.showToast({
                        title: "api错误" + res.errMsg,
                        icon: 'none'
                    });
                    return;
                }
                resolve(res.data)
            },
            // 请求失败
            fail: (e) => {
                uni.showToast({
                    title: "" + e.data.msg,
                    icon: 'none'
                });
                reject(e.data);
            },
            complete: () => {
                // 隐藏loading
                if (!hideLoading) {
                    uni.hideLoading();
                }
                resolve();
            }
        })
    })
}

export default request
