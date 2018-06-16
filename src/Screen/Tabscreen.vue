<template>
     <Screen>
        <!-- <Content >
            
        </Content> -->
          <router-view></router-view>
        <Tabbar :items="items"></Tabbar>
    </Screen>
</template>

<script>
export default {
    data() {
    return {
      items:[

        {
          icon:'shouye',
          label:'首页',
          to:'/home'
        },
        {
           icon:'hui',
          label:'车汇',
          to:'/cars'
        },
        {
           icon:'xiaoxi',
          label:'消息',
          to:'/news'
        },
        {
           icon:'user-o',
          label:'我的',
          to:'/mine'
        }

      ]
    }
  },
};
</script>

<style scoped>
</style>