<template>
    <div class="register">
        <img src="../assets/login/icon.png" alt="">
        <CoffeeForm :model="formModel" :rules="formRules" ref="CoffeeForm" >
            <CoffeeFormItem prop="username">
                <CoffeeFormInput placeholder="用户名" type="text" name="username" v-model="formModel.username"  />
            </CoffeeFormItem>
            <CoffeeFormItem prop="email">
                <CoffeeFormInput placeholder="电子邮箱" type="text" name="email" v-model="formModel.email"  />
            </CoffeeFormItem>
            <CoffeeFormItem prop="password">
                <CoffeeFormInput placeholder="6-10位数字、字母、下划线组成的密码" type="password" name="password" v-model="formModel.password"  />
            </CoffeeFormItem>
            <CoffeeFormItem  >
                <CoffeeFormInput @touchstart.native="submitForm"   type="button" value="注册并登录"/>
            </CoffeeFormItem>
        </CoffeeForm>
        <p class="register-info">登录即代表同意咖啡的《用户使用协议》</p>
        <router-link class="register-router" to="/login">已有账户，马上登陆 </router-link>
    </div>
</template>

<script>
import MD5 from 'md5'
import lockr from 'lockr'

import CoffeeForm from '@/components/CoffeeForm.vue'
import CoffeeFormItem from '@/components/CoffeeFormItem.vue'
import CoffeeFormInput from '@/components/CoffeeFormInput.vue'
export default {
  name: 'Register',
  data: () => ({
    formRules: {
      username: {
        pattern: /^[0-9A-Za-z_\u4e00-\u9fa5]+$/, // 只许输入中文、英文、数字以及下划线
        required: true
      },
      email: {
        pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
        required: true
      },
      password: {
        pattern: /[a-zA-Z0-9_-]{6,10}/,
        required: true
      }
    },
    formModel: {
      username: '',
      email: '',
      password: ''
    }
  }),
  methods: {
    submitForm () {
      // console.log("submitForm");
      // console.log(this.$refs.CoffeeForm.allValidate)
      // console.log(this.formModel)
      let nextPromise = this.$refs.CoffeeForm.allValidate()
      nextPromise.then(() => {
        const MD5Password = MD5(this.formModel.password)
        // const postData = {
        //   'email': this.formModel.email,
        //   'password': MD5Password
        // }

        lockr.set('username', this.username)
        lockr.set('email', this.formModel.email)
        lockr.set('password', MD5Password)

        this.$message({ type: 'success', text: '登录成功' })
        this.$router.push('/')
      }).catch((errors) => {
        // console.log(errors)
      })
    }
  },
  components: {
    CoffeeForm,
    CoffeeFormItem,
    CoffeeFormInput
  }
}
</script>

<style scoped lang="less">
    .register{
      width: 750px;
      height: 100vh;
      background: url("../assets/login/000.jpg") no-repeat center;
      background-size: cover;
      display: flex;
      flex-direction:column;
      align-items:center;
      img{
          margin-top: 80px;
          width: 130px;
          height: 130px;
          border-radius: 50%;
      }
      input::placeholder{
          color: #9E9E9E;
          font-size: 30px;
      }
      .coffee-form-item:nth-last-child(1){
          border:none;
      }
      input[type="button"]{
          width: 680px;
          border-radius: 20px;
          padding: 20px 0;
          background-color: #000 !important;
          font-size: 40px;
          color: #fff;
          cursor: pointer;
          &:disabled{
              color: #6e6e6e !important;
          }
          &:active{
              box-shadow: 0 0 20px 0 #fff;
          }
          &:focus{
              box-shadow: none;
          }
      }
  }
    .register-info{
        margin:0;
        position: relative;
        top: -40px;
        font-size: 38px;
        font-weight: 900;
        color: #FF6F00;
    }
    .register-router{
        position: relative;
        top: -30px;
        font-size: 40px;
        font-weight: 900;
        color:#fff;
    }
</style>
