<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
            <input type="text" placeholder="enter the name you search" v-model="username"/>
            <button @click="get">Search</button>
        </div>
    </section>
</template>

<script type="text/ecmascript-6">
export default {
    data(){
        return {
            username:""
        }
    },
    methods:{
        get(){
            if(this.username.trim()){
                // this.$bus.$emit("vueAjax",this.username) 全局事件总线写法
                   this.$store.dispatch("reqs",this.username)
            }
        }
    }
}
</script>

<style scoped>


</style>
