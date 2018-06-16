<template>
    <div class="home">
         <Navbar title="广州奥迪车友汇">
            <div slot="left">返回</div>
            <div slot="right"
             @click="$router.push('/home/detail')">
             详情页
             </div>
        </Navbar>
        <Content scroll>
           <Banner :datas="data">

           </Banner>
           <div>
                <ListContent  v-for="(item,index) in datas" :key="index" :datalist="item"
                @tap="tap"
                >

                </ListContent>
                <div >
                    {{datas[0].iscom}}
                </div>
           </div>
        </Content>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                 data: [
                    'https://www3.autoimg.cn/newsdfs/g1/M09/D2/3F/720x360_0_autohomecar__wKgHFVsU7NqAP6uZAAdW1q1ZKko914.jpg',
                    'https://www2.autoimg.cn/newsdfs/g2/M05/E4/A7/720x360_0_autohomecar__ChcCRFsWyRmACl6LAArDC9J9w7A920.jpg',
                    'https://www2.autoimg.cn/newsdfs/g1/M02/FE/F1/720x360_0_autohomecar__ChcCQ1sZ84OAX41zAAPiYJhQ0Ow388.jpg',
                    'https://img2.autoimg.cn/admdfs/g1/M06/59/F8/wKgHFVsH4rCAHmTDAAL5Fl_bPFI494.jpg'
                ],
                datas:[],

            }
        },
        methods: {
            tap(info) {
            info.iscom=true
              this.$router.push({name:'detail',params:info})
            }
        },
        created(){
            let data = [
                {
                    id:1,
                    username:'Nancy',
                    conten:' 确实不错的哦，你这是去哪儿耍的呢，自己驾车去的还是 组团去的',
                    commen:'对的啊',
                    pbtime:new Date().toLocaleString(),
                    cartype:'奥迪A6SUV 黑色 五座',
                    imgs:[
                    'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=124155087,2314196803&fm=27&gp=0.jpg',
                    'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1943249770,628140654&fm=200&gp=0.jpg',
                    'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3918696994,507318821&fm=200&gp=0.jpg'
                ],
                like:3,
                isliked:false,
                iscom:false,
                comment:8,
                pc:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=139341360,2473459530&fm=27&gp=0.jpg',
                icon:'zhifubao',
                title:'今天玩的真开心啊啊啊啊！'
                },
                {
                    id:2,
                    username:'Lay',
                    // conten:' 确实不错的哦，你这是去哪儿耍的呢，自己驾车去的还是 组团去的',
                    commen:'对的啊111111111111111111111111111111',
                    pbtime:new Date().toLocaleString(),
                    cartype:'奥迪A6SUV 白色 五座',
                    imgs:[
                    'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1104204400,3481577629&fm=11&gp=0.jpg',
                    'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=424688174,1733549080&fm=27&gp=0.jpg',
                    'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2363471691,3225430828&fm=27&gp=0.jpg'
                ],
                like:4,
                comment:8,
                pc:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1104204400,3481577629&fm=11&gp=0.jpg',
                icon:'zhifubao',
                title:'Vue 难死了 我透！'
                },
                {
                    id:3,
                    conten:' 没事慢慢来，这一两个月内能掌握了，准备出去闯闯吧，兄dei',
                    commen:'嗯嗯，我也觉得，妈的数据处理真的头晕，估计留级了',
                    username:'ChinaWeb',
                    pbtime:new Date().toLocaleString(),
                    cartype:'奥迪A6SUV 白色 五座',
                    imgs:[
                    'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1257196754,3171363795&fm=27&gp=0.jpg',
                    'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3947190564,117939753&fm=27&gp=0.jpg',
                    'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1630983250,1428493774&fm=27&gp=0.jpg'
                ],
                like:4,
                comment:8,
                pc:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2999925668,1634630350&fm=27&gp=0.jpg',
                icon:'zhifubao',
                title:'前端水深！'
                },
            ]
            this.datas=data
           
        }
    }
</script>

<style scoped>
.home{
    flex:1;
    display: flex;
    flex-direction: column;
}
</style>