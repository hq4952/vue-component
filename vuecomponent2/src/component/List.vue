<template>
<div class="col-md-8">
        <h3 class="reply">评论回复：</h3>
        <h2 style='display: none'>暂无评论，点击左侧添加评论！！！</h2>
        <ul class="list-group">
            <Item ref="del" v-for="(comment,index) in comments" :key="comment.id" :comment="comment" :index="index"/>
        </ul>
      </div>
</template>

<script type="text/ecmascript-6">
import Item from "./Item.vue"
export default {
    components:{
        Item
    },
    props:["comments","deleteC"],
    mounted(){
        // console.log(this.$refs)
        for(let i = 0;i<this.$refs.del.length;i++){
            this.$refs.del[i].$on("deleteComment",this.deleteC)
        }
    }
}
</script>

<style scoped>
/* .reply {
    margin-top: 0px;
} */


</style>
