import ajax from '../fetch'
import { rootPath } from '../fetch/config'

export default {
    /**
     * 登录获取token
     * @param  {object} data 登录信息
     * @return {[type]}      [description]
     */
    login(data) {
        return ajax({
            url: '/token',
            formJson: false,
            method: 'post',
            body: data,
            headersData: { 'Content-Type': 'application/x-www-form-urlencoded' },
            path: rootPath.substring(0, rootPath.length - 4)
        })
    },
    /**
     * 获取登陆者信息
     * @param  {Boolean} auth 是否需要登录
     * @return {[type]}       [description]
     */
    getAccount(auth = true) {
        return ajax({
            url: '/Account/getAccount',
            auth,
            method: 'get'
        })
    }
}