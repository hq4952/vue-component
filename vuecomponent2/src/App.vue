<template>
<div>
    <div>
        <header class="site-header jumbotron">
        <div class="container">
            <div class="row">
            <div class="col-xs-12">
                <h1>请发表对React的评论</h1>
            </div>
            </div>
        </div>
        </header>
        <div class="container">
            <!-- <Add :addC="addC"/> 通过props传递数据-->
            <Add ref="add"/>
            <List :comments="comments" :deleteC="deleteC"/>
        </div>
    </div>
</div>
 
</template>

<script type="text/ecmascript-6">
import List from "./component/List.vue";
import Add from "./component/Add.vue"
export default {
    components:{
        Add,
        List
    },
    data(){
        return {
            comments:[
                {id:1,username:"小脑斧",comment:"我在哪？？"},
                {id:2,username:"小猫咪",comment:"我是谁？？"},
                {id:3,username:"小老鼠",comment:"我要去哪？？"}
            ]
        }
    },
    mounted(){
        this.$refs.add.$on("addComment",this.addC);
    },
    methods:{
        addC(obj){
            this.comments.unshift(obj)
        },
        deleteC(index){
            this.comments.splice(index,1);
        }
    }
}
</script>

<style scoped>


</style>
