<template>
    <div class="content" :style="{overflow:scroll?'auto':'hidden'}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'Content',
        props:{
            scroll:{
                type:Boolean,
                default:false
            }
        }
    }
</script>

<style scoped>
.content{
    flex: 1;
    /* display: flex; */
    /* overflow: auto */
}
</style>