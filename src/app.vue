<template>
    <div>
        <div id="header"></div>
        <div id="index">{{firstblock}}</div>
        <div id="contact"></div>
        <div id="footer"></div>
    </div>
</template>
<script>
export default {
  el:'#firstblock',
  data:{
    currentView: 'index'
  },
  components: {
    index: {
      el:"#index"
    },
    animation: {
      el:"#animation"
    }
  },
  methods:{
    switchView: function(view){
      this.currentView = view
    }
  },
  render: h => h(app)
}
</script>