<template>
  <div class="header">
    <div class="collapse-btn" @click="collapseEvent">
      <i class="el-icon-menu"></i>
    </div>
    <div class="title">后台管理</div>
    <div class="header-right">
    </div>
  </div>
</template>

<script>
  import bus from '../util/bus'

  export default {
    data () {
      return {
        collapse: false
      }
    },
    methods: {
      collapseEvent () {
        this.collapse = !this.collapse
        bus.$emit('collapse', this.collapse)
      }
    }
  }
</script>
<style scoped>
  .header {
    height: 64px;
    color: #666;
    font-size: 22px;
    border-bottom: 1px #eee solid;
  }

  .collapse-btn {
    float: left;
    line-height: 64px;
    padding: 0 21px;
    cursor: pointer;
  }

  .title {
    float: left;
    line-height: 64px;
  }

  .header-right {
    float: right;
    line-height: 64px;
  }
</style>
