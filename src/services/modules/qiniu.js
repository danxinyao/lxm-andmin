import ajax from '../fetch'
import 'whatwg-fetch'
import store from '../../vuex'

const cdn = 'http://upload.qiniu.com/'

// 资源类型
const resourceType = {
    '21': 'qrcode',
    '11': 'goods',
    '31': 'brand',
    '41': 'group',
    '61': 'authorization',
    '71': 'PayApply',
    '51': 'pay',
    '91': 'materialStock',
    '101': 'headpic',
    '111': 'companyInfo',
    '121': 'cloudIndex',
    '131': 'certificate'
}

// /uploadfiles/img/商家ID/当前时间年月/类型文件夹/新文件名
// 生成文件名
const getResourceKey = (file, type) => {
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let suffix = file.name.split('.').pop()
    return `/uploadfiles/img/${store.getters.account.merchantID}/${year.toString() + month.toString()}/${resourceType[type]}/${date.valueOf()}_${RndNum(4)}.${suffix}`
}

// 生成随机数
const RndNum = (n) => {
    let rnd = ''
    for (let i = 0; i < n ; i++) {
        rnd += Math.floor(Math.random() * 10)
    }

    return rnd
}

export default {
    // 获取七牛上传token
    getUploadToken(isQiniu = true, fileName = '') {
        return ajax({
            url: '/Qiniu/GetUploadToken',
            method: 'post',
            body: {
                fileName: fileName
            },
            isQiniu
        })
    },
    // 上传图片
    uploadImg(file, type) {
        let data = new FormData()
        data.append('key', getResourceKey(file, type))
        data.append('token', store.getters.qiniuUploadToken)
        data.append('file', file)
        return new Promise((resolve, reject) => {
            fetch(cdn, {
                method: 'post',
                body: data,
            })
            .then((response) => response.json())
            .then((result) => {
                if (result.key && result.key != '') {
                    resolve(result.key)
                }
                else {
                    reject(result)
                    throw new Error(result.error)
                }
            })
            .catch((error) => {
                reject(error)
            })
        })
    }
}