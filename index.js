const express = require('express');
const app = express();
const path = require('path');

// 在服务器使用VUE
const Vue = require('vue');
const vueServerRender = require('vue-server-renderer').createRenderer({
    template: require('fs').readFileSync(path.join(__dirname, './test.html'), 'utf-8'),
});

/**
 * 用node运行此文件，即启动Node服务
 * 
*/

const vueApp = require('./src/app.js')
// 响应后端路由, 不做限制
app.get('*', (req, res) => {
    res.status(200);
    // 设置头部，表明响应的是一个页面
    res.setHeader('Content-Type', 'text/html;charset=utf-8;');

    let ssrApp = vueApp({url: req.url});

    // 将实例转成字符串输出
    vueServerRender.renderToString(ssrApp)
        .then((html) => {
            // 将页面发送至前台
            res.end(html);
        })
        .catch(err => console.log(err));
})

// 监听端口
app.listen(4000, () => {
    console.log('启动成功');
})

