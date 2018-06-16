<template>
  <div id="app">
    <transition
    name="slide"
    :enter-active-class="transitionIn"
    :leave-active-class="transitionOut"
    >
    <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      transitionIn: '',
      transitionOut:''
    }
  },
  watch:{
    $route(to,from){
      let topath = to.path.split('/').length
      let frompath = from.path.split('/').length
      if(topath>frompath){
        this.transitionIn= 'animated slideInRight'
        this.transitionOut = 'animated slideOutLeft'
      }else if(topath<frompath){
        this.transitionIn = 'animated slideInLeft'
        this.transitionOut ='animated slideOutRight'
      }
    }
  }
  
}
</script>

<style>
html,body{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#app{
  width: 10rem;
  height:100% ;
  margin: 0 auto;
  /* background: #ff88bb; */
  position: relative;
  font-size: 32px;
}
</style>
