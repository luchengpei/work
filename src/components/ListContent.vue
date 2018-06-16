<template>
    <div class="list-content" @click="$emit('tap',datalist)">
        <div class="top">
            <Logo :src="datalist.pc"></Logo>
            <div class="top-info">
                <div class="top-title">
                    <span class="usname">{{datalist.username}}</span>
                    <Icon :name="datalist.icon" color="skyblue"></Icon>
                </div>
                <div class="top-time">
                    <small class="pbtime">{{datalist.pbtime}}</small>
                    <small class="car-info">{{datalist.cartype}}</small>
                </div>
            </div>
            <Icon name="down"></Icon>
        </div>
        <p class="content">
            {{datalist.title}}
        </p>
        <div class="midPc">
            <div class="pc" v-for="(item,index) in datalist.imgs" :key="index"
            :style="{backgroundImage:`url(${item})`}"
            v-if="datalist.imgs"
            >
               
            </div>
            <div v-if="datalist.video">
                <video :src="datalist.video"></video>
            </div>
        </div>
        <div class="foot">
            <div class="foot-info">
                <i>{{datalist.like}}赞 {{datalist.comment}}评论</i>
            </div>
            <div class="foot-right">
                <button class="btn" @click.stop="like" :class="{active:datalist.isliked}">
                    <Icon name="like" ></Icon>
                </button>
                <button @click="comment">
                    <Icon name="xiaoxi"></Icon>
                </button>
                <button>
                    <Icon name="zhuanfa"></Icon>
                </button>
            </div>
        </div>
        
    </div>
</template>

<script>
    export default {
        name:'ListContent',
        props:['datalist'],
        data() {
            return {
                iscom:this. datalist.iscom
            }
        },
        methods: {
            like() {
                if(this.datalist.isliked){
                    this.datalist.isliked=false
                    if(this.datalist.like!=0){
                        this.datalist.like--
                    }
                }else{
                    this.datalist.isliked=true
                    this.datalist.like++
                    this.datalist.iscom=true;
                    console.log(this.datalist.iscom)
                }
                
            },
            comment(){
                setTimeout(()=>{
                    this.datalist.iscom=true;
                },1500)
            }
        },
        
    }
</script>

<style scoped>
.comment{
    margin-top: 20px;
}
.list-content{
    display: flex;
    width: 10rem;
    flex-direction: column;
    height: 6rem;
    /* background: rgb(240, 237, 237); */
    margin-top:10px;
    padding: 15px 0;
}
.list-content .top{
    display: flex;
    width: inherit;
    height: 1.2rem;
    justify-content: space-between;
    align-items: center;
    /* border: 1px solid  skyblue; */
}
.top .top-info{
    height: inherit;
    display: flex;
    flex: 1;
    width: 6rem;
    flex-direction: column;
    margin-left: 18px;
    /* border: 1px solid cyan; */
}
.top .top-info .usname{
    margin-right: 6px;
}
.top .top-info h4{
    margin: 0;
    padding: 0;
    font-weight: normal;
    margin-right:20px; 
}

.top .top-info .top-time .pbtime{
    color: rgb(206, 203, 203);
    font-size: 22px;
}
.top .top-info .top-time .car-info{
    color: #ff88bb;
    font-size: 22px;
    margin-left: 6px;
}
.top .top-info .top-title{
    display: flex;
    /* justify-content: center; */
    align-items: center
}
.midPc{
    /* height: 3.8rem; */
    width: 10rem;
    display: flex;
    flex-wrap: wrap;
    /* border: 1px solid red; */
    overflow: hidden;
}

.midPc .pc{
    width: 3.2rem;
    height: 3.2rem;
    margin:3px;
    /* border: 1px solid red; */
    background-image: url('https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=124155087,2314196803&fm=27&gp=0.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
.foot{
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.foot .foot-right{
    display: flex;
    align-items: center
}
.foot .foot-right button{
    margin: 0 20px;
    border: none;
    outline: none;
    background: none;
    color:#999;
}
.foot .foot-right button.active{
    color: #ff88bb;
}


</style>