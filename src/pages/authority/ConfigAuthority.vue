<template>
  <div class="ConfigAuthority homePage">
    <div class="addModule">
      <div class="configAuthority" @click="isShowCreateAgencyModule=!isShowCreateAgencyModule"><span class="infoMsgs">角色权限</span></div>
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
          <span class="operation">{{ item.operation }}</span>
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
	    			<span>创建角色</span>
	    		</div>
	    		<div class="CreateAgencyInputList">
	    			<div class="list-item">
	    				<span>角色编码</span>
	    				<input type="text" placeholder="输入角色编码"/>
	    			</div>
	    			<div class="list-item">
	    				<span>角色名称</span>
	    				<input type="text" placeholder="输入角色名称"/>
	    			</div>
	    			<div class="list-item">
	    				<span>角色描述</span>
	    				<input type="password" placeholder="输入角色描述"/>
	    			</div>
						<div class="configInfo">
							<span class="line-left"></span>
							<span class="center-text">权限配置</span>
							<span class="line-right"></span>
						</div>
						<div class="configList">
							<div class="configList-tiem">
								<span>机构首页 :</span>
								<el-checkbox v-model="checkedEnable">机构首页</el-checkbox>
							</div>
							<div class="configList-tiem orderConfig">
								<span>订单管理 :</span><el-checkbox v-model="checkedEnable">进度查询</el-checkbox>
							</div>
							<div class="configList-tiem">
								<span>账户管理 :</span>
								<el-checkbox v-model="checkedEnable">充值记录</el-checkbox>
								<el-checkbox v-model="checkedEnable">消费记录</el-checkbox>
							</div>
							<div class="configList-tiem cl">
								<span>运营管理 :</span>
								<el-checkbox v-model="checkedEnable">机构列表</el-checkbox>
							</div>
							<div class="configList-tiem dataCenter">
								<span>数据中心 :</span>
								<el-checkbox v-model="checkedEnable">联合订单综合查询</el-checkbox>
							</div>
							<div class="configList-tiem ">
								<span>权限管理 :</span>
								<el-checkbox v-model="checkedEnable">账号列表</el-checkbox>
								<el-checkbox v-model="checkedEnable">角色权限</el-checkbox>
							</div>
							
							
						</div>
						
	    		</div>
	    		
	    		<div class="buttom">修  改</div>
	    		
			</div>
		</div>
    
  </div>
</template>
<script>
  export default {
  name: 'ConfigAuthority',
  data () {
    return {
      headList: ['创建时间', '角色编号', '角色名称', '角色描述', '操作'],
      accountList:[
         { date: '2018.08.18 15:30', name: 'zhangsna', account: '1365***5656', jurisdiction: '产品',  operation: '修改'},
         { date: '2018.08.18 15:30', name: 'zhangsna', account: '1365***5656', jurisdiction: '产品',  operation: '修改'},
         { date: '2018.08.18 15:30', name: 'zhangsna', account: '1365***5656', jurisdiction: '产品',  operation: '修改'},
         { date: '2018.08.18 15:30', name: 'zhangsna', account: '1365***5656', jurisdiction: '产品',  operation: '修改'},
         { date: '2018.08.18 15:30', name: 'zhangsna', account: '1365***5656', jurisdiction: '产品',  operation: '修改'},
         { date: '2018.08.18 15:30', name: 'zhangsna', account: '1365***5656', jurisdiction: '产品',  operation: '修改'},
         { date: '2018.08.18 15:30', name: 'zhangsna', account: '1365***5656', jurisdiction: '产品',  operation: '修改'},
         { date: '2018.08.18 15:30', name: 'zhangsna', account: '1365***5656', jurisdiction: '产品',  operation: '修改'},
         { date: '2018.08.18 15:30', name: 'zhangsna', account: '1365***5656', jurisdiction: '产品',  operation: '修改'},
         { date: '2018.08.18 15:30', name: 'zhangsna', account: '1365***5656', jurisdiction: '产品',  operation: '修改'},

       ],

        value4: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        value5: '',
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        
        isShowCreateAgencyModule: false,
        checkedEnable:''
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

  }
}
</script>
<style scoped lang="scss" scoped>
  .ConfigAuthority{
    .addModule{
      margin-top: 34px;
      overflow: auto;
    }
    .configAuthority{
      margin-left: 34px;
      width: 214px;
      height: 100px;
      float: left;
      background-image: url(~Img/config_authority.png);
      background-repeat: no-repeat;
      background-size: 100% 100%;
      cursor: pointer;
    }
    .infoMsgs{
      display: inline-block;
      color: #FFFFFF;
      margin-top: 53px;
      margin-left: 78px;
    }
    .header-list{
    	span{
    		width: calc(100%/5) !important;
    	}
    }
    li.content{

          span{
            float: left;
            display: inline-block;
            width: calc(100%/5);
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
      height: 730px;
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
      	margin-top: 35px;
      	overflow: auto;
      	.list-item{
      		overflow:auto;
      		margin-bottom:17px;
      		margin-left:70px;
      		>span{
      			float: left;
      			width: 85px;
      			line-height:39px;
      			margin-right: 32px;
      			font-size: 16px;
      			color: #333333;
      			text-align: right;
      		}
      		input{
      			float: left;
      			width: 370px;
      			height: 39px;
      			font-size: 16px;
      			padding-left: 15px;
      			border: 1px solid #BCBCBC;
      			border-radius: 5px;
      		}
      		.AgencyName{
      			float: left;
      			line-height: 39px;
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
      	
      	.configInfo{
      		width: 90%;
      		margin: 0 auto;
      		font-size: 15px;
      		line-height: 20px;
      		span{
      			display: inline-block;
      		}
      		.line-left{
      			margin-top: 10px;
      			float: left;
      			width: 40%;
      			border-top: 1px solid #E6E6E6;
      		}
      		.line-right{
      			margin-top: 10px;
      			float: right;
      			width: 40%;
      			border-top: 1px solid #E6E6E6;
      		}
      	}
      	.configList{
      		text-align: left;
      		margin-left: 90px;
      		padding-top: 30px;
      		height: auto;
      		.configList-tiem{
      			
      			float:left;
      			margin-bottom:15px;
      			span{
	      			display: inline-block;
	      			margin-right: 30px;
	      		}
      		}
      		.cl{
      			clear: all;
      			clear: both;
      		}
      		.dataCenter{
      			margin-left: 30px;
      		}
      		.orderConfig{
      			margin-left: 30px;
      			
      		}
      	}
      }
      
      .buttom{
      	width: 460px;
      	height: 60px;
      	line-height: 60px;
      	font-size: 22px;
      	color: #FFFFFF;
      	text-align: center;
      	cursor: pointer;
      	background-color: #419FFF;
      	margin: 0 auto;
      	margin-top: 20px;
      	border-radius: 5px;
      }
    }
  }
  
  /*样式覆盖elementUI的*/
 
  /deep/ .configList .el-checkbox__inner{
  	width: 25px !important;
  	height: 25px !important;
  	
  }
  /deep/ .configList .el-checkbox__label{
  	font-size: 16px;
  }
  /deep/ .configList .el-checkbox__inner::after{
  	width: 8px;
  	height: 15px;
  	left: 6px;
  }
  
</style>
