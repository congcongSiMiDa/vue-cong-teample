// 引入vue模块
import Vue from 'vue'
// 引入单页面的vue元素文件
import App from './app.vue'

// 挂载根元素
const root = document.createElement('div')

document.body.appendChild(root)

//实例化vue 挂载在root节点上
new Vue({
  render:(h)=>h(App)
}).$mount(root)