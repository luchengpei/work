<template>
    <div class="news">
         <Navbar title="信息中心">
            
            <div slot="left" >返回</div>
            <div slot="right">详情页</div>
        </Navbar>
        <Content>
             消息中心 
        </Content>
    </div>
</template>

<script>
    export default {
      
    }
</script>

<style scoped>
.news{
    flex:1;
    display: flex;
    flex-direction: column;
}
</style>