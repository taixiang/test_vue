<template>
  <div>
    <el-card shadow="hover">
      <template>
        <el-table :data="blogs">
          <el-table-column prop="title" label="文章">
          </el-table-column>
          <el-table-column prop="count" label="阅读" width="100">
          </el-table-column>
          <el-table-column label="操作" width="320">
            <template slot-scope="scope">
              <el-button type="text" icon="el-icon-edit" @click="edit(scope.$index)">编辑</el-button>
              <el-button type="text" icon="el-icon-info" @click="read(scope.$index)">浏览</el-button>
              <el-button type="text" icon="el-icon-delete" class="red">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>

      <div>
        <el-pagination
          @current-change="pageChange"
          layout="prev, pager, next"
          :total="totalNum">
        </el-pagination>
      </div>
    </el-card>
  </div>
</template>
<script>
  export default {
    name: 'blog',
    data: function () {
      return {
        blogs: [],
        totalNum: 0
      }
    },
    methods: {
      pageChange: function (page) {
        this.$get(this.$api.blog_url, {page}).then(v => {
          console.log(v)
          this.blogs = v.data.blogs
          this.totalNum = v.data.total_page
        })
      },
      //编辑
      edit: function (i) {
        console.log('i====' + i)
        const id = this.blogs[i].id
        this.$router.push(`/blog/${id}`)
      },
      read: function (i) {
        window.open(this.$api.base_url + this.blogs[i].id + '/detail')
      }
    },
    created: function () {
      this.pageChange(1)
    },

  }
</script>
<style scoped>
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

  .red {
    color: #ff0000;
  }
</style>
