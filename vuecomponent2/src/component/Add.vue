<template>
 <div class="col-md-4">
        <form class="form-horizontal">
          <div class="form-group">
            <label>用户名</label>
            <input type="text" class="form-control" placeholder="用户名" v-model="username">
          </div>
          <div class="form-group">
            <label>评论内容</label>
            <textarea class="form-control" rows="6" placeholder="评论内容" v-model="comment"></textarea>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <button type="button" class="btn btn-default pull-right" @click="sub">提交</button>
            </div>
          </div>
        </form>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  props:["addC"],
  data(){
    return {
      username:"",
      comment:"",
      id:Date.now()
    }
  },
  methods:{
    sub(){
      let username = this.username;
      let comment = this.comment;
      let id = this.id;
      if(username.trim() && comment.trim()){
        let obj = {id,username,comment};
        this.addC(obj)
      }
      this.username = "";
      this.comment = "";
    }
  }
}
</script>

<style scoped>


</style>
