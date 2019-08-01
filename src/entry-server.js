// 服务端入口文件
// 需要把访问的路径给到vue-router

const createApp = require('./app.js');

/**
 * 外面的express服务使用
 *  @param:
 *      context: {
 *          url: String -- '/about'    
 *      }
 * */ 
module.exports = (context, data) => {
    return new Promise((resolve, reject) => {
        let { app, router } = createApp(context, data);

        // 通知客户端，跳转到对应地址
        router.push(context.url);

        // 钩子函数，所有异步请求结束后触发
        router.onReady(() => {
            // 获取当前路由下，匹配到的组件
            let matchedComponents = router.getMatchedComponents();
            console.log(matchedComponents);
            if(matchedComponents.length === 0) {
                return reject({code: 404});
            }
            
            resolve(app);
        }, reject)
    })
}