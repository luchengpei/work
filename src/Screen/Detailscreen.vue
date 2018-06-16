<template>
   <Screen>
            <Navbar title="内容详情">
                <div slot="left"  @click="back">返回</div>
            </Navbar>
            <Content scroll>
                   
            <div class="comments">
                    <ListContent :datalist='data'></ListContent>
                    <Comment :pc="data.pc"  :usename="data.username" :pbtime="data.pbtime"
                    :req="data.commen"
                    :res="data.conten"
                    :isfal="data.iscom"
                    >
                    </Comment>
                    <Comment :pc="data.pc"  :usename="data.username" :pbtime="data.pbtime"
                    :req="data.commen"
                    :res="data.conten"
                    :isfal="data.iscom"
                    >
                    </Comment>
                    <Comment :pc="data.pc"  :usename="data.username" :pbtime="data.pbtime"
                    :req="data.commen"
                    :res="data.conten"
                    :isfal="data.iscom"
                    >
                    </Comment>
                    <div class="showcom">
                        <textarea name="" id="text" cols="46" rows="2" placeholder="输入你精彩的评论吧"></textarea>
                    </div>
            </div>
            
            </Content>
    </Screen>
</template>

<script>
    export default {
          methods: {
            back() {
                this.$router.back()
            }
        },
        created(){
            let {params}=this.$route
            this.data=params
        },
        data() {
            return {
                data: {}
            }
        },
    }
</script>

<style scoped>
.showcom{
    position: absolute;
    bottom: -8px;
}
</style>