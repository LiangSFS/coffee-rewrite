<template>
    <ul class="user-detail">
        <li><span>用户名</span> <input type="text"  name="username" v-model="username"/></li>
        <li><span>性别</span>
            <div class="choose-gender">
            <label ><input type="radio" value="先生" name="gender" v-model="gender"/><div class="ball"><span></span></div>先生</label>
            <label><input type="radio" value="女士" name="gender" v-model="gender"/><div class="ball"><span></span></div>女士</label>
            </div>
        </li>
        <li>手机号 <input type="tel" placeholder="不保存手机号"  /></li>
        <button @click="saveMessage"  class="user-save">保存</button>
    </ul>
</template>

<script>
import lockr from 'lockr'

export default {
  name: 'UserModify',
  created () {
    this.username = lockr.get('username') ? lockr.get('username') : '咖啡小生'
    this.gender = lockr.get('gender') ? lockr.get('gender') : '先生'
  },
  data: function () {
    return {
      username: '',
      gender: ''
    }
  },
  methods: {
    saveMessage () {
      // postData = {
      //   username: this.username,
      //   gender: this.gender
      // }

      let reg = /[^0-9A-Za-z_\u4e00-\u9fa5]/ // 只许输入中文、英文、数字以及下划线
      if (reg.test(this.username)) {
        this.$message({ type: 'error', text: '请输入中文、英文、数字以及下划线组成的用户名' })
        return false
      }
      lockr.set('username', this.username)

      lockr.set('gender', this.gender)

      this.$router.replace({
        path: '/user'
      })
    }
  }
}
</script>

<style scoped lang="less">
    .user-detail{
        padding:0;
        margin:0;
        width:100%;
        height:100%;
        background-color:#f5f8fa;
        li{
            background-color:#fff;
            border-bottom: 2px solid #ddd;
            font-size: 30px;
            color: gray;
            padding: 20px 40px;
            display:flex;
            justify-content: space-between;
            align-items: center;
        }
        .user-save{
            margin-top: 30px;
            padding: 18px 0;
            border-radius: 10px;
            width: 600px;
            border:none;
            font-size: 30px;
            color: #fff;
            background-color: #705252;
            display: inline-block;
        }
        .choose-gender{
            width: 380px;
            text-align:left;
            label{
                margin-left: 20px;
                position: relative;
                .ball{
                    position: absolute;
                    width: 36px;
                    height: 36px;
                    top:50%;
                    left:0;
                    transform: translateY(-50%) scale(.7);
                    border:2px solid #000;
                    border-radius: 50%;
                    span{
                        position: absolute;
                        top: 18px;
                        left: 18px;
                        transform:translate(-12px, -12px);
                        width: 24px;
                        height: 24px;
                        border-radius: 50%;
                    }
                }
                input:checked + .ball{
                    span{
                        background-color: #FF6F00;
                    }
                }
            }
        }
        input[type="radio"]{
            visibility: hidden;
        }
        input{
            border:none;
            font-size: 30px;
            &:placeholder{
                color: #9E9E9E;
            }
        }
    }
</style>
