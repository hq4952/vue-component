<template>
    <div role="tabpanel" class="tab-panel active" id="Message">
        <ul class="list-group">
            <li class="list-group-item" v-for="message in messages" :key="message.id">
                <!-- 原始传参  "/home/message/last"+message.id+"?msgContent="+message.content  -->
                <router-link :to='{name:"msgInfo",params:{msgId:message.id},query:{mesgContent:message.content}}'>{{message.content}}</router-link>
            </li>
            
        </ul>
        <input type="text">
        <div class="alert alert-success" role="alert">
            <keep-alive include="lastView">
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    name:"Message",
    data(){
        return {
            messages:[
                {id:1,content:"信息one"},
                {id:2,content:"信息two"},
                {id:3,content:"信息three"},
                {id:4,content:"信息four"}
            ]
        }
    }
}
</script>

<style scoped>


</style>
