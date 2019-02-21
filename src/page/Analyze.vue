<template>
  <div>
    <el-row :gutter="20" class="mgb20">
      <el-col :span="8">
        <el-card shadow="hover" :body-style="{ padding: '0px' }">
          <div class="grid-div grid-icon1">
            <i class="el-icon-lx-visit grid-con-icon"></i>
            <div class="grid-cont-right">
              <div class="grid-num">{{total}}</div>
              <div>总访问量</div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover" :body-style="{ padding: '0px' }">
          <div class="grid-div grid-icon2">
            <i class="el-icon-lx-num grid-con-icon"></i>
            <div class="grid-cont-right">
              <div class="grid-num">{{blog_count}}</div>
              <div>文章数</div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover" :body-style="{ padding: '0px' }">
          <div class="grid-div grid-icon3">
            <i class="el-icon-lx-people grid-con-icon"></i>
            <div class="grid-cont-right">
              <div class="grid-num">{{me_count}}</div>
              <div>关于我</div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="16">
        <el-card shadow="hover">
          <div slot="header" class="blog_head">
            <span>文章</span>
            <span>阅读数</span>
          </div>
          <template >
            <div class="blog_con" v-for="item in blogs">
              <span class="blog_line">{{item.title}}</span>
              <span>{{item.count}}</span>
            </div>
          </template>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover">
          <div slot="header">
            分类
          </div>
          <template>
            <div class="blog_con">
              <span class="blog_line">python</span>
              <span>12</span>
            </div>
          </template>
        </el-card>

      </el-col>
    </el-row>

  </div>
</template>

<script>
  export default {
    name: 'analyze',
    data: function () {
      return {
        total: '',
        blog_count:'',
        me_count:'',
        blogs:[]
      }
    },
    created: function () {
      this.$get(this.$api.home_url).then(v => {
        console.log(v)
        this.total = v.data.total
        this.blog_count = v.data.blog_count
        this.me_count = v.data.me_count
        this.blogs = v.data.blogs
      })
    }
  }
</script>

<style scoped>
  .grid-div {
    display: flex;
    align-items: center;
  }

  .grid-icon1 .grid-con-icon {
    background: #19CAAD;
  }

  .grid-icon2 .grid-con-icon {
    background: #8CC7B5;
  }

  .grid-icon3 .grid-con-icon {
    background: #A0EEE1;
  }

  .grid-cont-right {
    flex: 1;
    text-align: center;
    font-size: 14px;
    color: #999;
  }

  .grid-con-icon {
    font-size: 50px;
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    color: white;
  }

  .grid-num {
    font-size: 30px;
    font-weight: bold;
  }

  .grid-icon1 .grid-num {
    color: #19CAAD;
  }

  .grid-icon2 .grid-num {
    color: #8CC7B5;
  }

  .grid-icon3 .grid-num {
    color: #A0EEE1;
  }

  .blog_head, .blog_con {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }

  .blog_con {
    font-size: 16px;
    margin-bottom: 18px;
  }

  .blog_line {
    flex: 1;
    /*text-overflow: ellipsis;*/
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

</style>
