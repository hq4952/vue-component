<template>
<div class="todo-container">
    <div class="todo-wrap">
        <Header/>
        <Main :contents="contents"/>
        <Footer :contents="contents" />
        <Buttom/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Header from "./component/Header.vue";
import Main from "./component/main.vue";
import Footer from "./component/Footer.vue";
import Buttom from "./component/buttom.vue"
export default {
    components:{
        Header,
        Main,
        Footer,
        Buttom
    },
    data(){
        return {
            contents:JSON.parse(localStorage.getItem("conts_k")) || []
        }
    },
    methods:{
        //添加任务函数
       addC(obj){
           this.contents.unshift(obj)
       },
       //改变数据函数
       change(index,val){
           this.contents[index].isDone = val
       },
       //删除任务函数
       deleteC(index){
           this.contents.splice(index,1);
       },
       clC(){
           this.contents = this.contents.filter(item => !item.isDone);
           console.log(this.contents)
       }
    },
    mounted(){
        this.$GobalEventBus.$on("Clc",this.clC)//全局事件总线绑定
        this.$GobalEventBus.$on("deleteC",this.deleteC);
        this.$GobalEventBus.$on("changeC",this.change);
        this.$GobalEventBus.$on("addC",this.addC);
    },
    watch:{
        contents:{
            deep:true,
            handler(newVal,oldVal){
                localStorage.setItem("conts_k",JSON.stringify(newVal))
            }
        }
    }
}
</script>

<style scoped>


</style>
