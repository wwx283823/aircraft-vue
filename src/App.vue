<template>
  <div id="app">
    <!--<img src="./assets/logo.png">
    <h1>{{msg}}</h1>
    <firstcomponent></firstcomponent>-->
    <menuId></menuId>
    <body-html></body-html>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
  </div>
</template>
<style scoped>
  @import '../static/css/app.css';
</style>
<script>
  import firstcomponent from './components/FirstComponent.vue'
  import menuId from './components/Menu.vue'
  import bodyHtml from './components/BodyHtml.vue'
  import axios from 'axios'
  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {menuId,bodyHtml},
    methods:{
      get(){
        axios.get('/api/hperfdef1').
        then(function(response){
            console.log(response);
           }).catch(function(err){
            console.log(err);
        });

      }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
