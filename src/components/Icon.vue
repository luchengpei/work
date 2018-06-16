<template>
    <i class="iconfont" :class="[`icon-${this.name}`]" :style="{color:color,background:bg}">
        <slot></slot>
    </i>
</template>

<script>
import '@/assets/font/iconfont.css'
    export default {
        name:'Icon',
        props:{
            name:String,
            color:String,
            bg:String,
        }
    }
</script>

<style scoped>

</style>