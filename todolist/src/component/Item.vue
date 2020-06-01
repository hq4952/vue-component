<template>
    <li @mouseenter="show(true)" @mouseleave="show(false)" :class="myClass">
        <label>
            <input type="checkbox" v-model="isCheck"/>
            <span>{{content.content}}</span>
        </label>
        <button class="btn btn-danger" v-show="isShow" @click="del">删除</button>
    </li>
</template>

<script type="text/ecmascript-6">
export default {
    data(){
        return {
            // isDone : this.content.isDone,
            isShow:false,
            myClass :"leave"
        }
    },
    props:{
        content:Object,
        // change:Function,    props通信写法
        index:Number,
        // deleteC:Function props通信
    },
    methods:{
        // change(){
        //     this.isDone = !this.isDone
        // },
        show(falg){
            // if(falg){
            //     this.myClass = "enter";
                
            // }else{
            //     this.myClass = "leave"
            // }
            //简易写法
            this.myClass = falg?"enter":"leave";
            this.isShow = falg;

        },
        del(){
            // this.deleteC(this.index) props方法
            this.$GobalEventBus.$emit("deleteC",this.index)//全局事件总线通信
        }
    },
    computed:{
        isCheck:{
            get(){
                return this.content.isDone;
            },
            set(val){
                this.$GobalEventBus.$emit("changeC",this.index,val)//事件总线通信写法
            }
        }
    }
}
</script>

<style scoped>
.enter{
    background-color: #dddddd;
}
.leave{
    background-color: white;
}
</style>
