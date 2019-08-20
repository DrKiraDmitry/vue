import Vue from 'vue'
import app from './app.vue'
import header from './template/header/header.vue'
import animation from './template/animation/animation.vue'
import index from './template/index/index.vue'
import contact from './template/contact/contact.vue'
import footer from './template/footer/footer.vue'


new Vue({
  el: '#app',
  render: h => h(app)
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