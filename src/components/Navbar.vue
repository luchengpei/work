<template>
    <div class="navbar">
        <div class="navbarleft">
            <slot name="left"></slot>
        </div>
        <div class="navcontent">
            <div class="title">
                
                {{title}}
            </div>
        </div>
        <div class="navbarright">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Navbar',
       props:{
           title:String
       }
    }
</script>

<style scoped>
    .navbar{
        height: 1.08rem;
        background: #ff88bb;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1em;
        color:#fff;
        box-shadow: 0  1px  10px 5px #969494;
    }
    .navbar .navbarleft , .navbar .navbarright{
        width: 100px;
        max-width: 100px;
        display: flex;
        font-size: 0.7em;
    }
   
    .navcontent{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>