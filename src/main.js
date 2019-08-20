import Vue from 'vue'
import Router from 'vue-router'
import app from './app.vue'
import header from './template/header/header.vue'
import animation from './template/animation/animation.vue'
import index from './template/index/index.vue'
import contact from './template/contact/contact.vue'
import footer from './template/footer/footer.vue'

Vue.use(Router)

const router = new Router({
 routes: [
   {path: '/index', component: index},
   {path: '/animation', component: animation}
 ]
})

new Vue({
  el: '#app',
  render: h => h(app),
  router
})
new Vue({
  el: '#header',
  render: h => h(header)
})
new Vue({
  el: '#index',
  render: h => h(index)
})
new Vue({
  el: '#animation',
  render: h => h(animation)
})
new Vue({
  el: '#contact',
  render: h => h(contact)
})
new Vue({
  el: '#footer',
  render: h => h(footer)
})