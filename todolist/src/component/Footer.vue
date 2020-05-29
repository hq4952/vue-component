<template>
    <div class="todo-footer">
        <label>
          <input type="checkbox" v-model="isSame"/>
        </label>
        <span>
          <span>已完成{{Did}}</span> / 全部{{AllNum}}
        </span>
        <button class="btn btn-danger" @click="clear">清除已完成任务</button>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    props:{
        contents:Array,
        clC:Function
    },
    methods:{
        clear(){
            this.clC()
        }
    },
    computed:{
        Did(){
            return this.contents.filter(item => item.isDone).length;
        },
        AllNum(){
            return this.contents.length
        },
        isSame:{
            get(){
                return this.Did === this.AllNum && this.AllNum > 0
            },
            set(val){

                this.contents.forEach(item => item.isDone = val)
            }
        },
    }
}
</script>

<style scoped>


</style>
