<template>
<div>
    <Child>
        <template>
            <h1>我是谁</h1>
            <p>wohinibaba</p>
            <!-- <a href="" slot="h">a</a> -->
        </template>
        <p slot="h">我是具名插槽</p>
        <span slot-scope="slotAttr" v-show="isshow" slot="uu">
            !!{{slotAttr.person.name}}
        </span>
    </Child>
    <!-- <Child>
        <template>
            <h1>我是第二次使用</h1>
        </template>
        <a href="" slot="h">我是第二次的具名插槽</a>
    </Child> -->
</div>
</template>

<script type="text/ecmascript-6">
import Child from "./component/child.vue"
export default {
    components:{
        Child
    },
    data(){
        return {
            isshow:true
        }
    }
}
</script>

<style scoped>


</style>
