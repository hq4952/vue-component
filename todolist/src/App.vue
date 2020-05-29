<template>
<div class="todo-container">
    <div class="todo-wrap">
        <Header :addC="addC"/>
        <Main :contents="contents" :change="change" :deleteC="deleteC"/>
        <Footer :contents="contents" :clC="clC"/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Header from "./component/Header.vue";
import Main from "./component/main.vue";
import Footer from "./component/Footer.vue";

export default {
    components:{
        Header,
        Main,
        Footer
    },
    data(){
        return {
            contents:[
                {id:1,content:"吃饭",isDone:true},
                {id:2,content:"睡觉",isDone:false},
                {id:3,content:"打游戏",isDone:false}
            ],
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
    }
}
</script>

<style scoped>


</style>
