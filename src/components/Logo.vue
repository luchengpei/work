<template>
    <div class="logo" :style="{width:size+'rem',height:size+'rem'}">
        <img :src="src" alt="" v-if="src">
    </div>
</template>

<script>
    export default {
        name:'Logo',
        props:{
            size:{
                type:Number,
                default:1.11
            },
            src:{
                type:String,
                default:''
            }
        }
    }
</script>

<style scoped>
.logo{
    border-radius: 50%;
    background: #ddd;
    overflow: hidden;
}
.logo img{
    width: 100%;
}
</style>