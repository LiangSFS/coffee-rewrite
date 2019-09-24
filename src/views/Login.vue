<template>
    <div class="login">
        <div :class="['declaration', isShowDeclaration?'show':'']"><span @touchstart="isShowDeclaration = !isShowDeclaration">注意</span>
        <p>没有后台，不会真正的提交数据，可以直接登录。
        只需要email形式  例如sjhs@qq.com</p>
        </div>
        <img src="../assets/login/icon.png" alt="">
        <CoffeeForm :model="formModel" :rules="formRules" ref="CoffeeForm" >
            <CoffeeFormItem prop="email">
                <CoffeeFormInput placeholder="电子邮箱" type="text" name="email" v-model="formModel.email"  />
            </CoffeeFormItem>
            <CoffeeFormItem prop="password">
                <CoffeeFormInput placeholder="6-10位数字、字母、下划线组成的密码" type="password" name="password" v-model="formModel.password"  />
            </CoffeeFormItem>
            <CoffeeFormItem  >
                <CoffeeFormInput @touchstart.native="submitForm"   type="button" value="登录"/>
            </CoffeeFormItem>
        </CoffeeForm>
        <div class="login-router">
            <router-link  to="#">忘记密码？</router-link>
            <router-link to="/register">立即注册</router-link>
        </div>
    </div>
</template>

<script>
// import validateRules from '../utils/validateRules.js'

import MD5 from 'md5'
import lockr from 'lockr'

import CoffeeForm from '@/components/CoffeeForm.vue'
import CoffeeFormItem from '@/components/CoffeeFormItem.vue'
import CoffeeFormInput from '@/components/CoffeeFormInput.vue'

export default {
  name: 'Login',
  data: () => ({
    formRules: {
      email: {
        pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
        required: true
      },
      password: {
        pattern: /^[a-zA-Z0-9_]{6,10}$/, // 验证长度必须 ^ $ 从开始到结尾
        required: true
      }
    },
    formModel: {
      email: '',
      password: ''
    },
    isShowDeclaration: false // 测试专用
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

        lockr.set('email', this.formModel.email)
        lockr.set('password', MD5Password)

        this.$router.push('/')
      }).catch((errors) => {
        console.log(errors)
      })
    }
  },
  // created() {
  //   //console.log(validateRules);
  //  // console.log(this.formModel);
  // },
  components: {
    CoffeeForm,
    CoffeeFormItem,
    CoffeeFormInput
  }
}
</script>

<style scoped lang="less">
  .login{
      width: 750px;
      height: 100vh;
      background: url("../assets/login/000.jpg") no-repeat center;
      background-size: cover;
      display: flex;
      flex-direction:column;
      align-items:center;
      position: relative;
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
      .declaration{
          position: absolute;
          right: 30px;
          top:30px;
          width: 100px;
          height: 60px;
          border-radius: 20px;
          overflow:hidden;
          transition: all 1s linear;
          padding: 0 20px;
          &.show{
              width: 650px;
              height: 300px;
              background-color:#fff;
              span {
                  color: #00aabb;
                  text-decoration:underline;
              }
              p {
                  color: #000;
              }
          }
          span{
              padding: 20px;
              color: #fff;
              cursor: pointer;
              font-size: 30px;
          }
          p{
              color: #fff;
              font-size: 30px;
          }
      }
  }
  .login-router{
       position: relative;
       top: -30px;
      a{
          font-size: 40px;
          font-weight:900;
          color: #000;
       }
  }
</style>
