<template>
    <div class="list-item">
        <div class="left">
            <Icon :name="lists.icon"></Icon>
            <span>{{lists.titel}}</span>
        </div>
        <div class="right">
            <span v-if="lists.cash">{{lists.cash}}元</span>
             <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name:'ListItem',
        props:{
           lists:{
               type:Object
           }
        }
    }
</script>

<style scoped>
    .list-item{
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid  #ddd;
        padding:10px 0;
    }
    .list-item .left{
        flex: 1;
        padding: 10px;
    }
    .list-item:active{
        background: #e2c0cf;
        transition: background .2s linear;
    }
</style>