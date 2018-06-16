<template>
    <div class="out" :class="{active:state}" @click="state=!state">
        <div class="in" :class="{active:state}" ></div>
    </div>
</template>

<script>
    export default {
        name:'Iswitch',
        data() {
            return {
                state: false
            }
        },
    }
</script>

<style scoped>
  .out{
      width: 1rem;
      height: 0.5rem;
      border-radius: 0.25rem;
      background: #ccc;
      display: flex;
      align-items: center;
      position: relative;
      transition: all .3s linear;
  }
  .in{
      width: 0.45rem;
      height: 0.45rem;
      border-radius: 50%;
      background:white;
      position: absolute;
      left: 2px;
      transition: all .3s linear;
  }
  .out.active{
      background: skyblue;
  }
  .in.active{
      left: 0.46rem;
  }
</style>