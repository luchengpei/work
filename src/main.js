// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import '@/assets/font/animate.css'
import  Cp from '@/components'
import VueTouch from 'vue-touch'
Vue.use(VueTouch,{name:'v-touch'})
Vue.use(Cp)
Vue.config.productionTip = false

let winWidth = window.innerWidth
let winHeight = window.innerHeight
let  num
if(winWidth>winHeight){
  num=winHeight
}else{
  num=winWidth
}
let root = document.children[0]
root.style.fontSize=num/10+'px'
window.addEventListener('resize',function(){
  root.style.fontSize=num/10+'px'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
