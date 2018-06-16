<template>
    <div class="car">
         <Navbar title="汽车中心">
            <div slot="left">返回</div>
            <div slot="right">详情页</div>
        </Navbar>
        <Content>
            汽车中心
        </Content>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.car{
    flex:1;
    display: flex;
    flex-direction: column;
}
</style>