<template>
    <ul class="list-group">
        <li class="list-group-item">newsid:{{this.newsId}}</li>
        <li class="list-group-item">newscontent:{{this.newsContent}}</li>
    </ul>
</template>

<script type="text/ecmascript-6">
export default {
    props:["newsId","newsContent"]
}
</script>

<style scoped>


</style>
