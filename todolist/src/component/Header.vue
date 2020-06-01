<template>
    <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="content" @keyup.enter="did"/>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    props:{
        // addC:Function  props通信写法
    },
    data(){
        return {
            content:"",
            isDone:false
        }
    },
    methods:{
        did(){
            if(this.content.trim()){
                let {id,content,isDone} = this;
                let obj = {
                    id:Date.now(),
                    content,
                    isDone
                };
                this.$GobalEventBus.$emit("addC",obj)//全局事件总线写法
            }
            this.content = ""
        }
    }
}
</script>

<style scoped>


</style>
