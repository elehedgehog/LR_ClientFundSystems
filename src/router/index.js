import Vue from 'vue'
import Router from 'vue-router'
const Login = r => require.ensure([], () => r(require('../components/Login')), 'Login')
// const HomePage = r => require.ensure([], () => r(require('../components/HomePage')), 'HomePage')
const AgencyHomePage = r => require.ensure([], () => r(require('../pages/Agency/AgencyHomePage')), 'AgencyHomePage')
const OrderInquiry = r => require.ensure([], () => r(require('../pages/order/OrderInquiry')), 'OrderInquiry')
const ConsumeRecord = r => require.ensure([], () => r(require('../pages/account/ConsumeRecord')), 'ConsumeRecord')
const RechargeRecord = r => require.ensure([], () => r(require('../pages/account/RechargeRecord')), 'RechargeRecord')
const AgencyList = r => require.ensure([], () => r(require('../pages/operation/AgencyList')), 'AgencyList')
const PushData = r => require.ensure([], () => r(require('../pages/dataCenter/PushData')), 'PushData')
const AccountList = r => require.ensure([], () => r(require('../pages/authority/AccountList')), 'AccountList')
const ConfigAuthority = r => require.ensure([], () => r(require('../pages/authority/ConfigAuthority')), 'ConfigAuthority')
Vue.use(Router)

export default new Router({
  routes: [
    {  //登录页面
      path: '/',
      name: 'Login',
      component: Login
    },
    // {  //登录页面
    //   path: '/HomePage',
    //   name: 'HomePage',
    //   component: HomePage
    // },
    {  //机构首页
      path: '/AgencyHomePage',
      name: 'AgencyHomePage',
      component: AgencyHomePage
    },
    {  //订单查询
      path: '/OrderInquiry',
      name: 'OrderInquiry',
      component: OrderInquiry
    },
    {  //消费记录
      path: '/ConsumeRecord',
      name: 'ConsumeRecord',
      component: ConsumeRecord
    },
    {  //充值记录
      path: '/RechargeRecord',
      name: 'RechargeRecord',
      component: RechargeRecord
    },
    {  //机构列表
      path: '/AgencyList',
      name: 'AgencyList',
      component: AgencyList
    },
    {  //联登机构推单数据
      path: '/PushData',
      name: 'PushData',
      component: PushData
    },
    {  //账户列表
      path: '/AccountList',
      name: 'AccountList',
      component: AccountList
    },
    {  //配置权限
      path: '/ConfigAuthority',
      name: 'ConfigAuthority',
      component: ConfigAuthority
    },

  ]
})
