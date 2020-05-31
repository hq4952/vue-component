<template>
    <div>
        <h2>
            haha
            <slot>哦哦哦哦</slot>
            <slot name="h">我是具名的</slot>
        </h2>
        <ul>
            <li v-for="person in persons" :key="person.id">
                <slot name="uu" :person="person">{{person.name}}</slot>
            </li>
        </ul>
    </div>
    
</template>

<script type="text/ecmascript-6">
export default {
    data(){
        return {
            persons:[
                {id:1,name:"hh",age:20},
                {id:1,name:"hd",age:21},
                {id:1,name:"hw",age:22}
            ]
        }
    }
}
</script>

<style scoped>


</style>
