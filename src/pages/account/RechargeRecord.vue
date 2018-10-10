<template>
  <div class="RechargeRecord homePage">
    <p class="company-name">深圳众合财富金融投资管理有限公司</p>
    <div class="rechargeRecord-top">
      <div class="rechargeRecord-top-center">
        <p>18000.00</p>
        <p>账户金额（元）</p>
      </div>
      <div class="rechargeRecord-top-btn">
        <span class="recharge" @click="rechargePop=!rechargePop">充值</span>
        <span class="export">导出</span>
      </div>
    </div>
    <div class="homepage-bottom">
      <div class="homepage-bottom-title">
        <span class="condition">充值记录</span>
      </div>
      <ul class="cf">
          <li class="header-list">
            <span v-for="item in headList" :key="item"> {{ item }}</span>
          </li>
          <li :class="['content',status[item.statusNum]]" v-for="(item, key) in orderList" :key="key">
            <span class="date">{{ item.date}}</span>
            <span class="type">{{ item.type }}</span>
            <span class="mode">{{ item.mode }}</span>
            <span class="money">{{ item.money }}元</span>
            <span class="status">{{ item.status }}</span>
          </li>
        </ul>
    </div>

     <div class="recharge-frame" v-if="rechargePop">  <!--充值彈窗-->
       <div class="recharge-frame-content">
         <em class="header"><i @click="rechargePop=false"></i></em>
         <p class="recharge-frame-name">深圳众合财富金融投资管理有限公司</p>
         <div class="recharge-frame-way recharge-fill">
           <span>充值方式</span>
           <em></em>
           <span class="back-transfer">银行转账</span>
         </div>
         <div class="recharge-frame-money recharge-fill">
           <span>充值金额</span>
           <input type="text" placeholder="输入你的充值账户金额">
         </div>
         <div class="recharge-frame-account recharge-fill">
           <span>账户名 </span>
           <input type="text" placeholder="输入你的账户名">
         </div>
         <div class="recharge-frame-card recharge-fill">
           <span>银行卡号 </span>
           <input type="text" placeholder="输入你的银行卡号">
         </div>
         <div class="recharge-frame-date recharge-fill">
           <span>打款日期</span>
           <input type="text" placeholder="打款日期">
         </div>
         <button @click="submitRecharge">提交</button>
       </div>
    </div>
  </div>
</template>
<script>
  export default {
  name: 'RechargeRecord',//充值记录
  data () {
    return {
       headList: ['提交时间', '操作类型', '充值方式', '充值金额', '状态'],
       orderList:[
         { date: '2018.08.18 15:30', type: '账户充值', mode: '充值方式', money: '4000', status: '处理中', statusNum:'2'},
         { date: '2018.08.18 15:30', type: '账户充值', mode: '充值方式', money: '4000', status: '充值成功',statusNum:'1' },
         { date: '2018.08.18 15:30', type: '账户充值', mode: '充值方式', money: '4000', status: '充值失败: 重复充值', statusNum:'3'},
         { date: '2018.08.18 15:30', type: '账户充值', mode: '充值方式', money: '4000', status: '处理中', statusNum:'2'},
         { date: '2018.08.18 15:30', type: '账户充值', mode: '充值方式', money: '4000', status: '处理中', statusNum:'2'},
         { date: '2018.08.18 15:30', type: '账户充值', mode: '充值方式', money: '4000', status: '处理中', statusNum:'2'},
         { date: '2018.08.18 15:30', type: '账户充值', mode: '充值方式', money: '4000', status: '处理中', statusNum:'2'},
       ],
       status: {
          1: 'success',
          2: 'in',
          3: 'failed',
       },
       rechargePop: false,
    }
  },

  mounted () {

  },
  methods: {
    submitRecharge() {  //提交按钮
      this.rechargePop = false
    },

  }
}
</script>
<style scoped lang="scss">
  .RechargeRecord{
    .rechargeRecord-top{
        height: 171px;
      .rechargeRecord-top-center{
        float: left;
        width: 404px;
        height: 171px;
        margin-left: 34px;
        background-image: url(~Img/account_background.png);
        background-repeat: no-repeat;
        background-size: 100%;
        p{
          width: 270px;
          &:nth-child(1){
            padding: 36px 0 15px 0;
            font-size: 45px;
            color: #f4a60c;
          }
          &:nth-child(2){
            font-size: 16px;
            color: #999;
          }
        }
      }
      .rechargeRecord-top-btn{
        float: left;
        span{
          display: block;
          margin-left: 47px;
          color: #fff;
          width: 100px;
          height: 36px;
          line-height: 36px;
          text-align: center;
          background-color: #419FFF;
          color: #fff;
          border-radius: 5px;
          cursor: pointer;
          &:nth-child(1){
            margin-top: 38px;
            background-color: #d82020;

          }
          &:nth-child(2){
            margin-top: 22px;
            background-color: #66c33a;

          }

        }
      }
    }
    .company-name{
      margin: 34px 0 22px 34px;
      text-align: left;
      color: #333;
      font-size: 20px;
    }
    .homepage-bottom{
      ul{
        li{
          &.header-list{
            height: 60px;
            line-height: 60px;
            >span{
              width: calc(100%/5);
              display: inline-block;
              float: left;
              text-align: center;
            }
          }
          &:nth-child(2n+1){
              background-color: #fff;
          }
            &:nth-child(2n){
            background-color: #F5F5F5;
          }
          &.head{
            height: 60px;
            line-height: 60px;
            span.head-name{
              float: left;
              margin-left: 32px;
            }
          }
          &.content{
            &:hover{
              color: #409FFF;
            }
            span{
              float: left;
              display: inline-block;
              width: calc(100%/5);


            }
            span.date{
              position: relative;
              &:before{
                position: absolute;
                content: '';
                top: 15px;
                left: 45px;
                width: 10px;
                height: 10px;
                border-radius: 10px;
                background-color: #ccc;
              }
            }

          }
          &.in{
            span.date{
              position: relative;
              &:before{
                background-color: #f4a60c;
              }
            }
            span.status{
              color: #f4a60c;
            }
          }
          &.success{
            span.date{
              position: relative;
              &:before{
                background-color: #66c33a;
              }
            }
            span.status{
              color: #66c33a;
            }
          }
          &.failed{
            span.date{
              position: relative;
              &:before{
                background-color: #ccc;
              }
            }
            span.status{
              color: #ccc;
            }
          }

        }
      }
    }

  }
  .recharge-frame{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    background-color: rgba(0,0,0,0.3);
    .recharge-frame-content{
      position: absolute;
      // left: calc(50% + 280px);
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      width: 660px;
      height: 750px;
      background-color: #fff;
      em.header{
        position: relative;
        display: inline-block;
        width: 660px;
        height: 188px;
        background-image: url(~Img/recharge_frame.png);
        background-repeat: no-repeat;
        background-size: 100%;
        >i{
          position: absolute;
          top: 18px;
          right: 18px;
          display: inline-block;
          width: 33px;
          height: 33px;
          background-image: url(~Img/close_icon.png);
          background-repeat: no-repeat;
          background-size: 100%;
          cursor: pointer;
        }
      }
      .recharge-frame-name{
        margin: 20px 0;
        text-align: center;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #333;
        font-size: 18px;
      }
      .recharge-fill{
        height: 50px;
        line-height: 50px;
        margin: 15px 0 15px 98px;
        >span{
          float: left;
          display: inline-block;
          width: 65px;
          text-align: right;
          color: #333;
          font-size: 16px;
          &.back-transfer{
            margin-left: 10px;
          }
        }
        >em{
          float: left;
          display: inline-block;
          margin-left: 30px;
          margin-top: 10px;
          width: 30px;
          height: 30px;
          background-image: url(~Img/select_icon.png);
          background-repeat: no-repeat;
          background-size: 100%;
          cursor: pointer;

        }
        >input{
          float: left;
          margin-left: 30px;
          height: 48px;
          width: 370px;
          border: 1px solid #dedede;
          text-indent: 16px;
          color: #999;
          font-size: 16px;
        }
      }
      >button{
        width: 460px;
        height: 70px;
        margin-top: 34px;
        color: #fff;
        background-color: #409FFF;
        font-size: 28px;
        border-radius: 5px;
        cursor: pointer;
      }
    }
  }
</style>
