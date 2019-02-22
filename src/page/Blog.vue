<template>
  <div>
    <el-card shadow="hover">
      <div slot="header" class="blog_head">
        <span>文章</span>
        <div class="right">
          <span class="read">阅读数</span>
          <span class="edit">操作</span>
        </div>
      </div>
      <template>
        <div class="blog_con" v-for="item in blogs">
          <span class="blog_line">{{item.title}}</span>

          <div class="right">
            <span class="read">
            {{item.count}}
          </span>
            <div class="edit">
              操作
            </div>
          </div>
        </div>
      </template>
    </el-card>
  </div>
</template>
<script>
  export default {
    name: 'blog',
    data: function () {
      return {
        blogs: []
      }
    },
    created: function () {
      this.$get(this.$api.blog_url).then(v => {
        console.log(v)
        this.blogs = v.data.blogs
      })
    }
  }
</script>
<style scoped="">
  .blog_con {
    font-size: 16px;
    margin-bottom: 18px;
  }

  .blog_head, .blog_con {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }

  .right {
    width: 300px;
    display: flex;
  }

  .read {
    flex: 1;
    text-align: center;
  }

  .edit {
    flex: 2;
    text-align: center;
  }
</style>
