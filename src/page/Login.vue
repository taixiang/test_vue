<template>
  <div class="login-wrap a_loading">
    <div class="ms-login">
      <div class="ms-title">后台管理系统</div>
      <el-form class="ms-content" labelWidth="0px" v-bind:model="ruleModel" :rules="rules" ref="ruleModel">
        <el-form-item prop="name">
          <el-input placeholder="账号" v-model="ruleModel.name" >
            <el-button slot="prepend" icon="el-icon-lx-people"></el-button>
          </el-input>
        </el-form-item>
        <el-form-item prop="pwd">
          <el-input placeholder="密码" v-model="ruleModel.pwd" type="password">
            <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
          </el-input>
        </el-form-item>
        <el-button type="primary" class="login-btn" v-on:click="submitForm('ruleModel')" nativeType="submit" @click.prevent="submitForm" >
          登录
        </el-button>
      </el-form>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Login',
    data: function () {
      return {
        ruleModel: {
          name: '',
          pwd: ''

        },
        rules: {
          name: [
            {required: true, message: '请输入账号', trigger: 'blur'},
            {min: 3, max: 12, message: '长度在3到12个字符', trigger: 'blur'}
          ],
          pwd: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ]

        }
      }
    },
    methods: {
      submitForm (ruleModel) {
        this.$refs.ruleModel.validate((valid) => {
          if (valid) {
            this.$post(this.$api.login_url, this.ruleModel).then((v) => {
              console.log(v)
              localStorage.setItem('user', JSON.stringify(this.ruleModel))
              this.$router.push('/home')
            })
          }
        })
      }
    },
    created: function () {
      var user = localStorage.getItem('user')
      if (user) {
        this.ruleModel = JSON.parse(user)
      }
    }
  }
</script>

<style scoped>

  .login-wrap {
    width: 100%;
    height: 100%;
    background-image: url(../assets/img/login-bg.jpg);
    background-size: cover;
  }

  .ms-login {
    width: 350px;
    position: absolute;
    margin: -160px 0 0 -175px;
    left: 50%;
    top: 50%;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 5px;
  }

  .ms-title {
    width: 100%;
    font-size: 20px;
    color: #666;
    line-height: 50px;
    text-align: center;
    border-bottom: 1px solid #dddddd;
  }

  .ms-content {
    padding: 30px 30px;
  }

  .login-btn {
    width: 100%;

  }
</style>
