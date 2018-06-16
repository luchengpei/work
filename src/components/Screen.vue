<template>
    <v-touch class="screen">
        <slot></slot>
    </v-touch>
</template>

<script>
    export default {
        name:'Screen'
    }
</script>

<style scoped>
.screen{
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 10rem;
    height: 100%;
    overflow: hidden; 
}
</style>