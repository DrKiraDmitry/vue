import Vue from 'vue'
import header from './template/header/header.vue'
// import header from './template/header/header.vue'
import contact from './template/contact/contact.vue'
import footer from './template/footer/footer.vue'



new Vue({
  el: '#header',
  render: h => h(header)
})
// new Vue({
//   el: '#header',
//   render: h => h(header)
// })
new Vue({
  el: '#contact',
  render: h => h(contact)
})
new Vue({
  el: '#footer',
  render: h => h(footer)
})
