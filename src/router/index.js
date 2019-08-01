var vueRouter = require('vue-router');
var Vue = require('vue');

Vue.use(vueRouter);

// 定义路径和组件的对应关系
// 每次请求都是新的路由实例
// 封装成工厂函数
module.exports = () => {
    return new vueRouter({
            mode: 'history',
            routes: [
                {
                    path: '/',
                    name: 'home',
                    component: {
                        template: `
                            <div>我是首页</div>
                        `
                    }
                },
                {
                    path: '/about',
                    name: 'about',
                    component: {
                        template: `
                            <div>我是关于我</div>
                        `
                    }
                },
                {
                    path: '*',
                    name: '404',
                    component: {
                        template: `
                            <div>我是404</div>
                        `
                    }
                },
            ]
        })
}