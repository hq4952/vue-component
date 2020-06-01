<template>
 <ul class="todo-main">
    <Item v-for="(content,index) in contents" 
          :key="content.id" 
          :content="content" 
          :index="index" 
          />
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
    }
}
</script>

<style scoped>


</style>
