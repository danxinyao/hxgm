// 此处配置根路径以及全局错误处理
//export const rootPath = 'http://192.168.88.149:88/api'
export const rootPath = 'http://192.168.88.14:8002/api'//何伟
//export const rootPath = 'http://test.loonxierp.com/api'
//export const rootPath = '/Api' //打包前后端代码放一块发布 

export const errHandler = (e) => {
	console.log(e)
}