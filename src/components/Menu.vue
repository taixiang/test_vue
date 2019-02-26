<template>
  <div class="sidebar">
    <el-menu class="el_menu_left" :collapse="collapse" backgroundColor="#fff" textColor="#868E8E"
             activeTextColor="#222" router :defaultActive="onRoutes">
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{item.title}}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-menu-item :index="subItem.index">
                <span>{{subItem.title}}</span>
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item v-bind:index="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{item.title}}</span>
          </el-menu-item>
        </template>
      </template>

    </el-menu>
  </div>
</template>

<script>
  import bus from '../util/bus'

  export default {
    data () {
      return {
        collapse: false,
        items: [
          {
            icon: 'el-icon-lx-home',
            index: '/home',
            title: '首页'
          },
          {
            icon: 'el-icon-lx-blog',
            index: '/blog',
            title: '博客'
          },
          {
            icon: 'el-icon-lx-type',
            index: '/type',
            title: '分类'
          },
          {
            icon: 'el-icon-lx-img',
            index: '/img',
            title: '字符画'
          },
          {
            icon: 'el-icon-lx-file',
            index: '/file',
            title: 'word转html'
          },
          {
            icon: 'el-icon-lx-people',
            index: '/me',
            title: '我的'
          }
        ]
      }
    },
    computed:{
      onRoutes(){
        return this.$route.path.replace("/","")
      }
    },
    created () {
      bus.$on('collapse', msg => {
        this.collapse = msg
      })
    }
  }
</script>

<style>
  .sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 65px;
    bottom: 0;
    overflow-y: scroll;
  }

  .sidebar::-webkit-scrollbar {
    width: 0;
  }

  .sidebar > ul {
    height: 100%;
  }

  .el_menu_left:not(.el-menu--collapse) {
    width: 200px;
  }
</style>
