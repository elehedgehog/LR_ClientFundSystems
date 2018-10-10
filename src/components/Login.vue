<template>
  <div class="login">
    <div class="login-content">
      <p class="login-title">登录</p>
      <div class="content-list-border">
        <div class="content-list">
            <em class="username"></em>
            <input type="text" :placeholder="placeholderUser"
                                v-model="username"
                                @focus="placeholderUser = null"
                                @blur="placeholderUser = '输入登录账号'">
        </div>
        <div class="content-list">
            <em class="password"></em>
            <input type="text" :placeholder="placeholderPwd"
                                v-model="password"
                                @focus="placeholderPwd = null"
                                @blur="placeholderPwd='输入密码'">
        </div>
        <div class="content-list verificationCode-border">
            <em class="code"></em>
            <input type="text" class="verificationCode-input" :placeholder="placeholderCode"
                                v-model="verificationCode"
                                @focus="placeholderCode = null"
                                @blur="placeholderCode='输入验证码'"
                                @keyup.13="login">
        </div>
        <img class="verificationCode-img" src="" alt="">
        <span class="exchange" @click="exchangeCode">换一换</span>
      </div>


      <button @click="login" class="login-btn">登录</button>
      <span class="forget-btn" @click="forget">忘记密码</span>
    </div>

  </div>
</template>

<script>
import { userClient } from './../utils/clientHelper'
import { Message } from 'element-ui'
export default {
  name: 'Login',
  data () {
    return {
      username: null,
      password: null,
      verificationCode: null,
      isLoginSuccessed: true,
      placeholderUser: '输入登录账号',
      placeholderPwd: '输入密码',
      placeholderCode: '输入验证码',
    }
  },

  mounted () {
    // this.$store.dispatch({     //提交mutation修改
    //   type: 'setUserInfo',
    //   userInfo: {
    //     name: 'bbb'
    //   }
    // });
    // console.log(this.$store.state.Home.userInfo); //获取state数据
  },
  methods: {
   async login() {    //登录
      this.$router.push({
          name: 'AgencyHomePage',
          params: {

          },
          query: {

          }
        })
    // let data = await userClient.login(this.username, this.password)
    // if (data) {
    //   this.isLoginSuccessed = false
    //   // localStorage.setItem('login', JSON.stringify({
    //   //   data: `${this.username}%${this.password}`,
    //   //   date: Date.now()
    //   // }))
    //   Message({
    //     type: 'success',
    //     message: '成功登陆'
    //   })

    // } else {
    //   this.displayMsg = true
    //   Message({
    //     type: 'error',
    //     message: '用户名密码错误'
    //   })
    // }
    },
    forget() {         //忘记密码按钮

    },
    exchangeCode() {  //更换验证码接口

    }

  }
}

</script>
<style scoped lang="scss">
  .login{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-width: 1921px;
    height: 100%;
    background-image: url(~Img/login/background.png);
    background-repeat: no-repeat;
    background-size: 100%;
    .login-title{
      margin: 45px 0 60px 0 ;
      color: #333333;
      font-size: 28px;
    }
    .login-content{
      position: absolute;
      right: 231px;
      top: 205px;
      width: 600px;
      height: 630px;
      background-color: #fff;
      .content-list-border{
        width: 480px;
        margin-left: 60px;
        margin-bottom: 35px;
      }
      .content-list{
        width: 100%;
        height: 70px;
        line-height: 70px;
        margin-bottom: 30px;
        border: 1px solid #EFEFEF;
        border-radius: 5px;
        &.verificationCode-border{
          float: left;
          width:210px!important;
        }
        em{
          float: left;
          margin-top: 15px;
          display: inline-block;
          margin-top: 20px;
          margin-left: 30px;
          background-repeat: no-repeat;
          background-size: 100%;
          &.username{
            width: 29px;
            height: 30px;
            background-image: url(~Img/login/user.png);
          }
          &.password{
            width: 26px;
            height: 31px;
            background-image: url(~Img/login/password.png);

          }
          &.code{
            width: 26px;
            height: 26px;
            background-image: url(~Img/login/code.png);

          }
        }
        input{
          float: left;
          width: 260px;
          margin-top: 20px;
          height: 30px;
          line-height: 30px;
          outline: none;
          border: none;
          margin-left: 20px;
          font-size: 16px;
          color: #999;
          &.verificationCode-input{
            width: 100px!important;

          }
        }

      }
      .verificationCode-img{
          float: left;
          margin-left: 30px;
          margin-top: 5px;
          display: inline-block;
          width: 150px;
          height: 60px;
          background-color: #ccc;
        }
        .exchange{
          float: right;
          height: 70px;
          line-height: 70px;
          margin-left: 15px;
          color: #398dfd;
          font-size: 14px;
          cursor: pointer;
        }
      button{
        width: 480px;
        height: 70px;
        line-height: 70px;
        color: #fff;
        display: block;
        margin: 15px auto 20px;
        border: none;
        outline: none;
        background-color: #FFAB0A;
        border-radius: 5px;
        font-size: 24px;
        cursor: pointer;
      }
      .forget-btn{
        position: relative;
        width: 100%;
        display: inline-block;
        height: 30px;
        line-height: 30px;
        margin-top: 15px;
        color: #494949;
        font-size: 14px;
        cursor: pointer;
        &:before{
          position: absolute;
          content: '';
          left: 110px;
          top: 14px;
          width: 23%;
          height: 1px;
          background-color: #EBEBEB;
        }
         &:after{
          position: absolute;
          content: '';
          right: 110px;
          top: 14px;
          width: 23%;
          height: 1px;
          background-color: #EBEBEB;
        }
      }
    }
  }
</style>
