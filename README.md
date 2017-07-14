# NyuWa Project(女娲计划)
 
 本项目为wolf erp 重构项目
 
 
 ## 常用指令
 * npm install 初次启动时,需要运行npm install 安装所有开发依赖
 * npm run mb mac打包指令
 * npm run wb windows 打包指令
 * npm run dev localhost启动,端口8080
 * npm run port localhost指定端口启动
 * npm run hot 热更新
 * npm run ip 指定ip端口启动
 
 ## 版本提交
 只需要提交src文件夹里面的内容,其他的文件夹或文件不需要提交
 
 ## 开发页面流程
 1. 在routes的map下新建路由模块,配置路由对象及tab和auth属性(tab和auth属性选填,tab表示当前路由页面是否在头部tab栏显示,auth表示是否需要登录才能查看)
 2. 如果配置了tab,需要在configs的tabs中进行想关配置,配置说明见tabs.js的注释
 3. 在data的nav.js中将旧的path替换成新建路由的path(此步骤上线后省略,协同后端修改即可)
 4. 根据nav.js中对应path的权限,配置configs中的powers,配置说明见powers.js中的注释
 5. 配置configs的tips.js中对应的页面提示
 6. 新建对应的views services vuex开始开发
 
 ## element-ui default theme
 * 需全局安装 element-theme cli npm install element-theme -g
 * 安装主题`node_modules/.bin/et -i [path]` || `et -i [path]`,如`node_modules/.bin/et -i ./src/assets/styles/theme/base/element-variables.css`, 主题文件应该安装在theme对应的主题下面
 * 编译主题`node_modules/.bin/et -c [path] -o [path]` ||  `et -c [path] -o [path]` 如`node_modules/.bin/et -c ./src/assets/styles/theme/base/element-variables.css -o ./src/assets/styles/theme/base/element-theme`,生成的主题也应该放在对应的theme主题下面,并且命名为`element-theme`
