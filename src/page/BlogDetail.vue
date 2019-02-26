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
      <el-form-item label='文件' labelWidth="80px">
        <el-upload action="http://127.0.0.1:8000/upload/" :limit="1">
          <el-button>
            点击上传
          </el-button>
        </el-upload>
      </el-form-item>
      <el-form-item label="分类" labelWidth="80px">
        <el-checkbox-group>
          <el-checkbox></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="次数" labelWidth="80px">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="显示" labelWidth="80px">
        <el-input></el-input>
      </el-form-item>
      <el-form-item labelWidth="80px">
        <el-button type="primary" @click="onSubmit">表单提交</el-button>
        <el-button>取消</el-button>
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
    methods:{
      onSubmit:function () {

      }
    },
    created: function () {
      this.time_v = this.date_v = this.$util.getCurTime()
    }
  }
</script>

<style scoped>

</style>
