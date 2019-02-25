<template>
  <el-card>
    <el-form class="form-box">
      <el-form-item label="标题" labelWidth="80px">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="描述" labelWidth="80px">
        <el-input type="textarea" rows="5"></el-input>
      </el-form-item>
      <el-form-item label="时间" labelWidth="80px">
        <el-date-picker v-model="date_v" type="date"></el-date-picker>
        <el-time-picker v-model="time_v"></el-time-picker>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>

  export default {
    data: function () {
      return {
        date_v: '',
        time_v: ''
      }
    },
    created: function () {
      this.time_v = this.date_v = this.$util.getCurTime()
    }
  }
</script>

<style scoped>

</style>
