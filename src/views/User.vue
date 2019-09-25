<template>
    <div class="user">
        <div aspectratio class="banner">
            <img aspectratio-content src="../assets/user/banner.jpg" alt="">
            <div class="user-modal"></div>
            <div class="profile">
                <IconSvg className="touxiang"  />
            </div>
            <span class="user-name">{{username}}</span>
        </div>
        <ul class="user-list">
            <li @click="isStartModal = true"><router-link  to="/user" class="personal">
                <div>
                    <IconSvg className="wutouxiang"   />个人资料
                </div>  <span class="arrow"> > </span></router-link></li>
            <li><router-link to="/user" class="order">
                <div>
                    <IconSvg className="dingdan"   />我的订单
                </div> <span class="arrow"> > </span></router-link></li>
            <li><router-link to="/user" class="collection">
                <div>
                    <IconSvg className="aixin"   />我的收藏
                </div> <span class="arrow"> > </span></router-link></li>
            <li><router-link to="/user" class="free-ticket">优惠券 <span class="arrow"> > </span></router-link></li>
            <li><router-link to="/user" class="help-reaction">
                <div>
                    <IconSvg className="store101"   />帮助反馈
                </div> <span class="arrow"> > </span></router-link></li>
        </ul>
        <ModalCover animation="slide-up" class="user-modal" :start="isStartModal">
            <template #close>
                <div class="close">
                    <span  @click.stop="isStartModal = false">返回</span>
                </div>
            </template>
            <template #default>
                <ul class="user-detail">
                    <li>头像 <span class="arrow"> > </span></li>
                    <li>用户名 <span class="arrow">{{username}} > </span></li>
                    <li>性别 <span class="arrow">{{gender}} > </span></li>
                    <li>绑定手机 <span class="arrow"> > </span></li>
                    <li>收货地址管理 <span class="arrow"> > </span></li>
                    <button @click.stop="changeInfo" class="change-info">修改信息</button>
                    <button @click.stop="loginout" class="login-out">退出登录</button>
                </ul>

            </template>
        </ModalCover>
    </div>
</template>

<script>
import lockr from 'lockr'

import IconSvg from '@/components/IconSvg.vue'
import ModalCover from '@/components/ModalCover.vue'

export default {
  name: 'User',
  created () {
    this.username = lockr.get('username') ? lockr.get('username') : '咖啡小生'
    this.gender = lockr.get('gender') ? lockr.get('gender') : '先生'
  },
  data: function () {
    return {
      username: '',
      gender: '',
      isStartModal: false
    }
  },
  methods: {
    loginout () {
      lockr.flush()

      this.$router.push('/')
    },
    changeInfo () {
      this.$router.push('/user-modify')
    }
  },
  components: {
    IconSvg,
    ModalCover
  }
}
</script>

<style scoped lang="less">
    .user{
       .banner{
           width: 750px;
           position: relative;
           .profile{
               font-size: 180px;
               position: absolute;
               left: 50%;
               top:50%;
               transform: translate(-50%, -40%);
           }
           .user-modal{
               position: absolute;
               top:0;
               left:0;
               width:100%;
               height:100%;
               background-color:rgba(0,0,0, .3);
           }
           .user-name{
               font-size: 46px;
               color:#fff;
               font-weight: 900;
               position: absolute;
               left: 50%;
               bottom: 14%;
               transform: translateX(-50%);
           }
       }
       .banner{
           aspect-ratio: '3:2'
       }
   }
    .user-list{
        padding:0;
        margin:0;
        height: 48vh;
        background-color:#f5f8fa;
        li{
            background-color:#fff;
            a{
                border-bottom: 2px solid #ddd;
                font-size: 30px;
                color: gray;
                padding: 20px 40px;
                display:flex;
                justify-content: space-between;
                align-items: center;
                svg{
                    margin-right: 20px;
                }
            }
            .free-ticket{
                color: #323233;
                font-size: 32px;
            }
            .help-reaction {
                margin: 40px 0;
                border-top: 2px solid #ddd;
                svg{
                    font-size: 42px;
                }
            }
        }
    }
    .user-modal {
        background-color: #fff;
        display:block;
        .close{
            text-align: left;
            background-color: #000;
            padding: 20px 16px;
            span{
                color: #fff;
                font-size: 30px;
                font-weight: 700;
            }
        }
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
            .change-info, .login-out{
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
        }
    }
</style>
