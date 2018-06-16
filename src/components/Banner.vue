<template>
    <v-touch class="banner"
    @swipeleft="swipeleft"
    @swiperight="swiperight"
    >
   
      <transition-group
      class="banner"
      name="swiper"
      :enter-active-class="transitionIn"
      :leave-active-class="transitionOut"
      >
            <div class="imgage" v-for="(item,key) in datas" :key="key"
            v-if="key==index"
            >
                <img :src="item"  >
            </div>
      </transition-group>
      <div class="dots">
          <div class="dot" v-for="(item,key) in datas" :key="key" 
          :class="{acitive:key==index}"
          >
          </div>
      </div>
    </v-touch>
</template>

<script>
    export default {
        name:'Banner',
        props:{
            datas:{
                type:Array,
                default:[]
            },
            // height:{
            //     type:Number,
            //     default:100
            // }
        },
        data() {
            return {
                index: 0,
                transitionIn:'',
                transitionOut:'',
                timer:null
            }
        },
        methods: {
            // autoPlay(){
            //     this.index--
            //     if(this.index<=0){
            //         this.index=this.datas.length-1
            //     }
            // },
          

            swipeleft() {
                this.index++
               
                if(this.index>=this.datas.length){
                    this.index=this.datas.length-1
                }
                 this.transitionIn = 'animated slideInRight'
                this.transitionOut = 'animated slideOutLeft'

            },
            swiperight(){
                this.index--
                
                if(this.index<=-1){
                    this.index= this.datas.length-1
                }
                this.transitionIn = 'animated slideInLeft'
                this.transitionOut = 'animited slideOutRight'
            },
            //  play(){
                
            // },
            created(){
                // this.play()
                this.timer=setInterval(this.swiperight,2000)
            },
        },
    }
</script>

<style scoped>
.banner{
        width: 10rem;
        height: 4.6rem;
        position: relative;
        overflow: hidden;
}
.banner .image{
    height: inherit;
    width: inherit;
    overflow: hidden;
    position: absolute;

}
.banner .dots{
    width: inherit;
    height: 16px;
    position: absolute;
    /* background: red; */
    top: 320px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.banner .dots .dot{
    width: 16px;
    height: 16px;
    background: rgba(255, 255, 255, .7);
    border-radius: 8px;
    margin:  0 8px;
}
.banner .dots .dot.acitive{
    background: #ff88bb
}
img{
    width: 100%;
}

</style>