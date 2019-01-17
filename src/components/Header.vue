<template>
  <div class="header">
    <div class="collapse-btn" @click="collapse">
      <i class="el-icon-menu"></i>
    </div>
    <div class="title">后台管理</div>
    <div class="header-right">
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    methods:{
      collapse(){
        console.log("=====================")

      }
    }
  }
</script>
<style scoped>
  .header {
    height: 70px;
    color: white;
    font-size: 22px;
  }

  .collapse-btn {
    float: left;
    line-height: 70px;
    padding: 0 21px;
    cursor: pointer;
  }

  .title {
    float: left;
    line-height: 70px;
  }

  .header-right {
    float: right;
    line-height: 70px;
  }
</style>
