<template>
    <div role="tabpanel" class="tab-panel" id="News">
        <ul class="list-group">
            <li class="list-group-item" v-for="n in news" :key="n.id">
                {{n.content}}
                <button type="button" 
                class="btn btn-primary"
                data-toggle="button"
                aria-pressed="false" 
                autocomplete="off"
                @click="handlejump(n)"
                >{{n.id}}
                </button>
            </li>
            
        </ul>
        <button @click="back">返回</button>
        <button @click="forward">前进</button>
        <div class="alert alert-success" role="alert">
            <router-view></router-view>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    data(){
        return {
            news:[
                {id:1,content:"news1"},
                {id:2,content:"news2"},
                {id:3,content:"news3"}
            ]
        }
    },
    methods:{
        handlejump(n){
            this.$router.push({name:"newsInfo",params:{newsId:n.id},query:{newsContent:n.content}})
        },
        back(){
            this.$router.back()
        },
        forward(){
            this.$router.go(1)
        }
    }
}
</script>

<style scoped>


</style>
