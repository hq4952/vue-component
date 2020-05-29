<template>
 <ul class="todo-main">
    <Item v-for="(content,index) in contents" 
          :key="content.id" 
          :content="content" 
          :index="index" 
          :change="change"
          :deleteC="deleteC"/>
</ul>
</template>

<script type="text/ecmascript-6">
import Item from "./Item.vue"
export default {
    components:{
        Item
    },
    props:{
        contents:Array,
        change:Function,
        deleteC:Function
    }
}
</script>

<style scoped>


</style>
