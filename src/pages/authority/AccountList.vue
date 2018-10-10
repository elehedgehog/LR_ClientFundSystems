<template>
  <div class="AccountList homePage">
    <div class="addModule">
      <div class="createAccount" @click="isShowCreateAgencyModule=!isShowCreateAgencyModule"><span class="infoMsgs" >创建用户</span></div>
      <input class="createAccountInput" type="text" placeholder="账户名">
      <button class="createAccountButton">查询</button>
    </div>
    <div class="homepage-bottom">
      <div class="homepage-bottom-title">
        <span class="condition">账户列表</span>
      </div>
      <ul class="cf">
        <li class="header-list">
          <span v-for="item in headList" :key="item"> {{ item }}</span>
        </li>
        <li class="content" v-for="(item, key) in accountList" :key="key">
          <span class="">{{ item.date}}</span>
          <span class="">{{ item.name }}</span>
          <span class="">{{ item.account }}</span>
          <span class="">{{ item.jurisdiction }}</span>
          <span class="">{{ item.status }}</span>
          <span class="">{{ item.user }}</span>
          <span class="">{{ item.latedate }}</span>
          <span class="operation" @click="modification(item)">{{ item.operation }}</span>
        </li>
      </ul>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage3"
          :page-size="100"
          layout="prev, pager, next, jumper"
          :total="1000">
        </el-pagination>
      </div>
    </div>
    
    <div class="CreateAgencyModule" v-if="isShowCreateAgencyModule">
			<div class="CreateAgencyList">
				<div class="close" @click="isShowCreateAgencyModule=!isShowCreateAgencyModule"></div>
				<div class="CreateAgency-title">
	    			<span>修改账户</span>
	    		</div>
	    		<div class="CreateAgencyInputList">
	    			<div class="list-item">
	    				<span>账户名</span>
	    				<input type="text" placeholder="输入您的账户名"/>
	    			</div>
	    			<div class="list-item">
	    				<span>登录手机号</span>
	    				<input type="text" placeholder="输入您的手机号"/>
	    			</div>
	    			<div class="list-item">
	    				<span>登录密码</span>
	    				<input type="password" placeholder="输入您的密码"/>
	    			</div>
						<div class="list-item">
	    				<span>权限类型</span>
	    				<!--<input type="text" placeholder="输入您的充值金额"/>-->
	    				<el-select v-model="value" placeholder="产品">
						    <el-option
						      v-for="item in options"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						  </el-select>
	    				<el-checkbox v-model="checkedEnable">启用状态</el-checkbox>
	    			</div>
	    		</div>
	    		
	    		<div class="buttom">修  改</div>
	    		
			</div>
		</div>
    
  </div>
</template>
<script>
  export default {
  name: 'AccountList',  //账户列表
  data () {
    return {
      headList: ['创建时间', '账户名', '登录账号', '角色权限', '启用状态', '最近操作人', '最近操作时间', '操作'],
      accountList:[
         { date: '2018.08.18 15:30', name: 'zhangsna', account: '1365***5656', jurisdiction: '产品', status: '正常', user: 'zhangsna', latedate: '2018.08.18 15:30', operation: '修改'},
         { date: '2018.08.18 15:30', name: 'zhangsna', account: '1365***5656', jurisdiction: '产品', status: '正常', user: 'zhangsna', latedate: '2018.08.18 15:30', operation: '修改'},
         { date: '2018.08.18 15:30', name: 'zhangsna', account: '1365***5656', jurisdiction: '产品', status: '正常', user: 'zhangsna', latedate: '2018.08.18 15:30', operation: '修改'},
         { date: '2018.08.18 15:30', name: 'zhangsna', account: '1365***5656', jurisdiction: '产品', status: '正常', user: 'zhangsna', latedate: '2018.08.18 15:30', operation: '修改'},
         { date: '2018.08.18 15:30', name: 'zhangsna', account: '1365***5656', jurisdiction: '产品', status: '正常', user: 'zhangsna', latedate: '2018.08.18 15:30', operation: '修改'},
         { date: '2018.08.18 15:30', name: 'zhangsna', account: '1365***5656', jurisdiction: '产品', status: '正常', user: 'zhangsna', latedate: '2018.08.18 15:30', operation: '修改'},
         { date: '2018.08.18 15:30', name: 'zhangsna', account: '1365***5656', jurisdiction: '产品', status: '正常', user: 'zhangsna', latedate: '2018.08.18 15:30', operation: '修改'},
         { date: '2018.08.18 15:30', name: 'zhangsna', account: '1365***5656', jurisdiction: '产品', status: '正常', user: 'zhangsna', latedate: '2018.08.18 15:30', operation: '修改'},
         { date: '2018.08.18 15:30', name: 'zhangsna', account: '1365***5656', jurisdiction: '产品', status: '正常', user: 'zhangsna', latedate: '2018.08.18 15:30', operation: '修改'},
         { date: '2018.08.18 15:30', name: 'zhangsna', account: '1365***5656', jurisdiction: '产品', status: '正常', user: 'zhangsna', latedate: '2018.08.18 15:30', operation: '修改'},

       ],

        value4: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        value5: '',
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,

        isShowCreateAgencyModule: false,
        checkedEnable:false,
        
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
    }
  },

  mounted () {

  },
  methods: {
    handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },

    modification(item) {   //修改账户

    }

  }
}
</script>
<style scoped lang="scss" scoped>
  .AccountList{
    .addModule{
      margin-top: 34px;
      overflow: auto;
    }
    .createAccount{
      margin-left: 34px;
      width: 214px;
      height: 100px;
      float: left;
      background-image: url(~Img/account_list.png);
      background-repeat: no-repeat;
      background-size: 100% 100%;
      cursor: pointer;
    }
    .createAccountInput{
      float: left;
      margin-left: 50px;
      margin-top: 40px;
      padding-left: 20px;
      width: 139px;
      height: 36px;
      border: none;
      outline: none;
      color: #999;
      border: 1px solid #EEF3F6;
      font-size: 16px;
    }
    .createAccountButton{
      float: left;
      margin-left: 50px;
      margin-top: 40px;
      width: 101px;
      height: 36px;
      background-color: #409fff;
      color: #fff;
      font-size: 16px;
      cursor: pointer;
      border-radius: 5px;

    }
    .infoMsgs{
      display: inline-block;
      color: #FFFFFF;
      margin-top: 53px;
      margin-left: 78px;
    }
    li.content{
	    &:hover{
	
	    }
	    span{
	      float: left;
	      display: inline-block;
	      width: calc(100%/8);
	      &.operation{
	       color: #409FFF;
	       cursor: pointer;
	      }
	
	    }
	
	  }

  }
  
  
  .CreateAgencyModule{
  	position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    background-color: rgba(0,0,0,0.3);
    .CreateAgencyList{
    	position: absolute;
    	width: 660px;
      height: 700px;
      background-color: #FFFFFF;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      .close{
      	width: 33px;
      	height: 33px;
      	position: absolute;
      	top: 18px;
      	right: 18px;
      	background-image: url(../../assets/imgs/close_icon.png);
      	background-repeat: no-repeat;
        background-size: 100% 100%;
        cursor: pointer;
      }
      .CreateAgency-title{
      	height: 200px;
      	width: 100%;
      	background-image: url(../../assets/imgs/operation/title.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        span{
        	display: inline-block;
        	font-size: 30px;
        	font-weight: 700;
        	color: #FFFFFF;
        	margin-top: 70px;
        }
      }
      .CreateAgencyInputList{
      	margin-top: 45px;
      	.list-item{
      		overflow:auto;
      		margin-bottom:17px;
      		margin-left:80px;
      		>span{
      			float: left;
      			width: 85px;
      			line-height:49px;
      			margin-right: 32px;
      			font-size: 16px;
      			color: #333333;
      			text-align: right;
      		}
      		input{
      			float: left;
      			width: 370px;
      			height: 49px;
      			font-size: 16px;
      			padding-left: 15px;
      			border: 1px solid #BCBCBC;
      			border-radius: 5px;
      		}
      		.AgencyName{
      			float: left;
      			line-height: 49px;
      		}
      		.el-select{
      			float: left !important;
      		}
      		.el-checkbox{
      			float: left !important;
      			margin-top: 7px;
      			margin-left: 50px;
      			
      		}
      	}
      }
      
      .buttom{
      	width: 460px;
      	height: 70px;
      	line-height: 70px;
      	font-size: 22px;
      	color: #FFFFFF;
      	text-align: center;
      	cursor: pointer;
      	background-color: #419FFF;
      	margin: 0 auto;
      	margin-top: 50px;
      	border-radius: 5px;
      }
    }
  }
  
  /*样式覆盖elementUI的*/
 
  /deep/ .list-item .el-checkbox__inner{
  	width: 25px !important;
  	height: 25px !important;
  	
  }
  /deep/ .list-item .el-checkbox__label{
  	font-size: 16px;
  }
  /deep/ .list-item .el-checkbox__inner::after{
  	width: 8px;
  	height: 15px;
  	left: 6px;
  }
</style>
