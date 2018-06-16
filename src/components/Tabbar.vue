<template>
    <div  class="tabbar">
        <router-link :to="item.to" v-for="(item,key) in items" :key="key">
            <div class="tabitem" >
                <Icon :name="item.icon"></Icon>
                <span>{{item.label}}</span>
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name:'Tabbar',
        props:{
            items:{
                type:Array,
                default:[]
            }
        }
    }
</script>

<style scoped>
.tabbar{
    height: 1.3rem;
    width: 10rem;
    border-top: 1px solid #ddd;
    display: flex;
    background:rgb(204, 194, 194);
    box-shadow: 0 -1px 10px 5px rgb(204, 194, 194);
    justify-content: space-around;
    font-size: 0.8em;
}
.tabbar .tabitem{
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.tabbar a{
    text-decoration: none;
}
.tabbar .router-link-exact-active {
    color: #ff88bb;
}
</style>