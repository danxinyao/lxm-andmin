// 此处配置根路径以及全局错误处理
export const qiniuApi = 'http://oss-api.loonxierp.com/api' // 对应七牛相关接口
export const qiniuCDN = 'http://cdn.loonxierp.com/' // 七牛cdn

export const rootPath = 'http://192.168.88.22:9430/api' // 后端接口

export const errHandler = (e) => {
    console.log(e)
};
