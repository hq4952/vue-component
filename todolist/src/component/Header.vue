<template>
    <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="content" @keyup.enter="did"/>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    props:{
        addC:Function
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
                this.addC(obj)
            }
            this.content = ""
        }
    }
}
</script>

<style scoped>


</style>
