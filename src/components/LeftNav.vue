<template>
  <div class="LeftNav">
    <em class="logo-img"></em>
    <ul class="LeftNav-title">
      <li :class="{'on': item.pop}" v-for="(item, key) in menu" :key="key">
        <el-button @click="item.pop = !item.pop">
            <span :class="item.logo">{{ item.name}}</span>
        </el-button>
        <el-collapse-transition  @click="item.pop = !item.pop">
          <ul class="leftNav-title-list"  v-show="item.pop">
              <router-link tag="li"
                           :to="{ name: el.href }"
                           :class="{'on': $route.name == el.href}"
                           v-for="(el, val) in item.subMenu"
                           :key="val">
                          <!-- <li :class="{'on': false}" v-for="(el, val) in item.subMenu" :key="val" > -->
                          {{ el.subName }}
                          <!-- </li> -->
                          </router-link>
          </ul>
        </el-collapse-transition>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
  name: 'LeftNav',
  data () {
    return {
      menu: [  //导航栏列表
        {
          name: '机构首页',
          logo: 'home',
          pop: true,
          subMenu:[
            {
              subName: '机构首页',
              href: 'AgencyHomePage',
            },
          ]
        },
        {
          name: '订单管理',
          logo: 'order',
          pop: true,
          subMenu:[
            {
              subName: '订单查询',
              href: 'OrderInquiry',
            },
          ]
        },
        {
          name: '账户管理',
          logo: 'account',
          pop: true,
          subMenu:[
            {
              subName: '充值记录',
              href: 'RechargeRecord',
            },
            {
              subName: '消费记录',
              href: 'ConsumeRecord',
            },
          ]
        },
        {
          name: '运营管理',
          logo: 'operation',
          pop: true,
          subMenu:[
            {
              subName: '机构列表',
              href: 'AgencyList',
            },
          ]
          },
        {
          name: '数据中心',
          logo: 'data',
          pop: true,
          subMenu:[
            {
              subName: '联登机构推单数据',
              href: 'PushData',
            },
          ]
        },
        {
          name: '权限管理',
          logo: 'agency',
          pop: true,
          subMenu:[
            {
              subName: '账户列表',
              href: 'AccountList',
            },
            {
              subName: '配置权限',
              href: 'ConfigAuthority',
            },
          ]
        },
      ]
    }
  },

  mounted () {

  },
  methods: {
    // togglePages(el){
    //   this.$router.push({ name: el.href, params: {}, query:{} })
    // }

  }
}
</script>
<style scoped lang="scss">
  .LeftNav{
    position: absolute;
    left: 0;
    top: 0;
    width: 280px;
    height: 100%;
    background-color: #398FFC;
    background-image: url(~Img/leftBar/left_background.png);
    background-size: 100%;
    background-repeat: no-repeat;
    z-index: 1;
    .logo-img{
      display: inline-block;
      margin: 30px 0 20px -60px;
      width: 167px;
      height: 48px;
      background-image: url(~Img/leftBar/logo.png);
      background-size: 100%;
      background-repeat: no-repeat;
    }
    ul.LeftNav-title{
      width: 100%;
      // margin-left: -45px;
      >li{
        width: 100%;
        min-height: 40px;
        line-height: 40px;
        color: #fff;
        font-size: 28px;
        cursor: pointer;
        button{
          width: calc( 100% - 60px);
          padding: 0;
          text-align: left;
          margin-left: 60px;
        }
        span{
          position: relative;
          display: inline-block;
          height: 40px;
          line-height: 40px;
           &:before{
              position: absolute;
              top: 8px;
              left: -30px;
              display: inline-block;
              content: '';
            }
            &:after{
              position: absolute;
              top: 15px;
              left: 170px;
              display: inline-block;
              content: '';
              width: 5px;
              height: 10px;
              background-image: url(~Img/leftBar/arrows.png);
            }
          &.home{
            &:before{
              width: 25px;
              height: 24px;
              background-image: url(~Img/leftBar/home_page.png);
            }
          }
          &.order{
            &:before{
              top: 10px;
              width: 25px;
              height: 21px;
              background-image: url(~Img/leftBar/order.png);
            }
          }
          &.account{
            &:before{
              top: 2px;
              width: 25px;
              height: 28px;
              background-image: url(~Img/leftBar/account.png);
            }
          }
          &.operation{
            &:before{
              width: 26px;
              height: 26px;
              background-image: url(~Img/leftBar/operation.png);
            }
          }
          &.data{
            &:before{
              left: -32px;
              width: 26px;
              height: 26px;
              background-image: url(~Img/leftBar/data_center.png);
            }
          }
          &.agency{
            &:before{
              width: 23px;
              height: 26px;
              background-image: url(~Img/leftBar/authority.png);
            }
          }
        }
        &.on{
          span{
             &:after{
                width: 10px;
                height: 5px;
                background-image: url(~Img/leftBar/arrows_open.png);
             }
          }
        }
        .leftNav-title-list{
          li{
            height: 35px;
            line-height: 35px;
            font-size: 14px;
            color: rgba(255,255,255,0.8)!important;
            text-decoration:none!important;
            text-align: left;
            padding-left: 64px;
            &:hover{
              position: relative;
              background-color: #48C3FE;
              &:before{
                position: absolute;
                content: '';
                left: 0;
                top: 0;
                width: 5px;
                height: 35px;
                background-color: #F5A60D;
              }
            }
            &.on{
              position: relative;
              background-color: #48C3FE;
              &:before{
                position: absolute;
                content: '';
                left: 0;
                top: 0;
                width: 5px;
                height: 35px;
                background-color: #F5A60D;
              }

            }
          }
        }
      }
    }
    .el-button{
      border: none!important;
      background: none!important;
      color: #fff;
      font-size: 18px;
    }
    a{
      text-decoration: none;
    }
  }
</style>
