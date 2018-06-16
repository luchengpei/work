<template>
    <div  class="comment">
        <div class="comheader">
            <Logo :src="this.pc"></Logo>
            <span class="usename">{{this.usename}}</span>
            <small class="pbtime">{{this.pbtime}}</small>
        </div>
        <div class="cominfo" >
            <div class="zw"></div>
            <span class="info">{{this.req}}</span>
        </div>
        <div class="response" v-show="this.res">
            <div class="zw"></div>
            <div class="res-info">
                <span>
                    回复 {{this.usename}} 
                </span>
                <div class="res-p">
                    {{this.res}}
                </div>
            </div>
            
        </div>
        
    </div>
</template>

<script>
    

    export default {
        name:'Comment',
        props:['pc','usename','pbtime','req','res','isfal']
    }
</script>

<style scoped>
.comment{
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid rgb(219, 215, 215);
    width: inherit;
    padding: 20px 0;
    position: relative;
}
.comment .comheader{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.comment .comheader .usename{
    flex: 1;
    margin-left: 20px;
}
.comment .cominfo{
    display: flex;
    flex-wrap: wrap
}
.comment .response{
     display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
    color: #999;
}
.comment .response .zw{
    width: 103px;
}
.comment .response .res-info{
    flex: 1;
    background:rgb(245, 245, 245);
    padding: 10px;
    margin-right: 10px
}
.comment .response .res-p{
    flex-flow: wrap;
    display: flex;
    margin-top: 10px;
}
.comment .cominfo .zw{
    width: 103px;
}
.comment .cominfo .info{
    flex: 1;
    flex-flow: wrap;
    display: flex;
}
.comment .showcom{
    box-shadow: 0 -1px 10px 5px rgb(204, 194, 194);
    position: absolute;
    bottom: -100px;
}
</style>