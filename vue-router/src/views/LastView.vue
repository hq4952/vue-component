<template>
    <ul>
        <li>msgId:{{this.msgId}}</li>
        <li>msgContent:{{this.msgContent}}</li>
        <li>msgTitle:{{title}}</li>
    </ul>
</template>

<script type="text/ecmascript-6">
let msgTitle = [
    {id:1,title:"titleOne"},
    {id:2,title:"titleTwo"},
    {id:3,title:"titleThree"},
    {id:4,title:"titleFour"}
]
export default {
    name:"lastView",
    props:["msgId","msgContent"],
    data(){
        return {
            title:""
        }
    },
    mounted(){
        console.log(666)
        setTimeout(() => {
            this.change()
        },1000)
    },
    watch:{
        $route(newval,oldval){
            this.change()
        }
    },
    methods:{
        change(){
            this.title = msgTitle.find(item => item.id === this.msgId*1).title
        }
    }

}
</script>

<style scoped>


</style>
