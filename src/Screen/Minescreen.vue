<template>
    <div class="mine">
         <Navbar title="我的">
             
            <div slot="left">返回</div>
            <div slot="right">详情页</div>
        </Navbar>
          <Content>
              <div class="usinfo">
                  <Logo src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3408257267,2134990609&fm=27&gp=0.jpg"></Logo>
                  <div class="info">
                      <span class="from" style="color:#ff88bb;padding:4px 0">来自广州</span>
                      <span class="phone">13800138000</span>
                  </div>
                  <div class="end">

                  </div>
              </div>
            <div class="list">
                <ListItem  v-for="(item,index) in datalist" :key="index"  :lists="item"></ListItem>
            </div>
            <Iswitch></Iswitch>
        </Content>
    </div>
</template>

<script>
    export default {
        name:'Mine',
        data() {
            return {
                datalist: [
                    {
                        titel:'账户余额',
                        icon:'hui',
                        cash:'10086'
                    },
                    {
                        titel:'车辆信息',
                        icon:'hui',
                    },
                    {
                        titel:'我的订单',
                        icon:'hui',
                    },
                    {
                        titel:'我的发布',
                        icon:'hui'
                    },
                    {
                        titel:'意见反馈',
                        icon:'hui',
                        mag:true//如果需要margin 就在子组件先设置一个class 通过传参让样式起效
                    },
                    {
                        titel:'关于车友汇',
                        icon:'hui'
                    },
                    {
                        titel:'分享车友汇 ',
                        icon:'hui'
                    },
                    {
                        titel:'检车更新',
                        icon:'hui'
                    },
                    {
                        titel:'更多设置',
                        icon:'hui'
                    }
                ]
            }
        },
    }
</script>

<style scoped>
.mine{
    flex:1;
    display: flex;
    flex-direction: column;
}
.list{
    padding: 10px 0;
}
.usinfo{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 10px;
    border-bottom:1px solid #999; 
}
.usinfo .info{
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-left: 20px;

}
.usinfo .end{
    max-width: 100px;
}
</style>