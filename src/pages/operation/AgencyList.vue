<template>
  <div class="AgencyList homePage">
    <div class="addModule">
    	<div class="creatAgency"  @click="isShowCreateAgencyModule=!isShowCreateAgencyModule"><span class="infoMsg">创建机构</span></div>
    	<div class="relationAgency" @click="isShowRelationProduct=!isShowRelationProduct"><span class="infoMsg">关联产品</span></div>
    	
    	<div class="CreateAgencyModule" v-if="isShowCreateAgencyModule">
    		<div class="CreateAgencyList">
    			<div class="close" @click="isShowCreateAgencyModule=!isShowCreateAgencyModule"></div>
    			<div class="CreateAgency-title">
	    			<span>创建机构</span>
	    		</div>
	    		<div class="CreateAgencyInputList">
	    			<div class="list-item">
	    				<span>机构名称</span>
	    				<input type="text" placeholder="输入您的充值金额"/>
	    			</div>
	    			<div class="list-item">
	    				<span>登录手机号</span>
	    				<input type="text" placeholder="输入您的账号名"/>
	    			</div>
	    			<div class="list-item">
	    				<span>登录密码</span>
	    				<input type="password" placeholder="输入您的银行卡号"/>
	    			</div>
						<div class="list-item">
	    				<span>权限类型</span>
	    				<!--<input type="text" placeholder="输入您的充值金额"/>-->
	    				<el-checkbox size='small'  v-model="checkedRelation">合作机构</el-checkbox>
	    				<el-checkbox v-model="checkedEnable">启用状态</el-checkbox>
	    			</div>
	    		</div>
	    		
	    		<div class="buttom">创建机构</div>
	    		
    		</div>
    	</div>
    	
    	<div class="CreateAgencyModule" v-if="isShowRelationProduct">
    		<div class="CreateAgencyList">
    			<div class="close" @click="isShowRelationProduct=!isShowRelationProduct"></div>
    			<div class="CreateAgency-title">
	    			<span>关联产品</span>
	    		</div>
	    		<div class="CreateAgencyInputList">
	    			<div class="list-item">
	    				<span>机构名称</span>
	    				<div class="AgencyName">众合金融有限公司</div>
	    			</div>
	    			<div class="list-item">
	    				<span>关联产品</span>
	    				<input type="text" placeholder="搜索产品名称"/>
	    			</div>
	    		</div>
	    		
	    		<div class="buttom">关联产品</div>
	    		
    		</div>
    	</div>
			
    </div>
    	<div class="dataList">
	      <el-table
			    ref="multipleTable"
			    :data="tableData3"
			    tooltip-effect="dark"
			    style="width: 100%"
			    align='left'
			    stripe
			    @selection-change="handleSelectionChange">
			    <el-table-column
			      type="selection"
			      width="55">
			    </el-table-column>
			    <el-table-column
			      label="创建时间">
			      <template slot-scope="scope">{{ scope.row.date }}</template>
			    </el-table-column>
			    <el-table-column
			      prop="name"
			      label="机构名称">
			    </el-table-column>
			    <el-table-column
			      prop="address"
			      label="账号"
			      show-overflow-tooltip>
			    </el-table-column>
			    <el-table-column
			      prop="jurisdictionType"
			      label="权限类型"
			      show-overflow-tooltip>
			    </el-table-column>
			    <el-table-column
			      prop="relationAgency"
			      label="关联产品"
			      show-overflow-tooltip>
			    </el-table-column>
			    <el-table-column
			      prop="useState"
			      label="启用状态"
			      show-overflow-tooltip>
			    </el-table-column>
			    <el-table-column
			      prop="user"
			      label="操作人"
			      show-overflow-tooltip>
			    </el-table-column>
			    <el-table-column
			      prop="recentTime"
			      label="最近操作时间"
			      show-overflow-tooltip>
			    </el-table-column>
			    <el-table-column
			      prop="operation"
			      label="操作"
			      show-overflow-tooltip>
			       	<template slot-scope="scope">
				        <el-button @click="editCurrentRow(scope.row)" type="text">修改</el-button>
				      </template>
			    </el-table-column>
			  </el-table>
		  </div>
  </div>
</template>
<script>
  export default {
  name: 'AgencyList',
  data() {
      return {
      	isShowCreateAgencyModule:false,
      	isShowRelationProduct:false,
      	checkedRelation:false,
      	checkedEnable:false,
      	
        tableData3: [{
          date: '2016-05-03',
          name: '众合科技',
          address: '1234567890',
          jurisdictionType : '联合机构',
          relationAgency : '联合机构',
          useState : '未启用',
          user : '超级管理员',
          recentTime : '2016-05-03 18:00'
        }, {
          date: '2016-05-02',
          name: '众合科技',
          address: '1234567890',
          jurisdictionType : '联合机构',
          relationAgency : '联合机构',
          useState : '未启用',
          user : '超级管理员',
          recentTime : '2016-05-03 18:00'
        }, {
          date: '2016-05-04',
          name: '众合科技',
          address: '1234567890',
          jurisdictionType : '联合机构',
          relationAgency : '联合机构',
          useState : '未启用',
          user : '超级管理员',
          recentTime : '2016-05-03 18:00'
        }, {
          date: '2016-05-01',
          name: '众合科技',
          address: '1234567890',
          jurisdictionType : '联合机构',
          relationAgency : '联合机构',
          useState : '未启用',
          user : '超级管理员',
          recentTime : '2016-05-03 18:00'
        }, {
          date: '2016-05-08',
          name: '众合科技',
          address: '1234567890',
          jurisdictionType : '联合机构',
          relationAgency : '联合机构',
          useState : '未启用',
          user : '超级管理员',
          recentTime : '2016-05-03 18:00'
        }, {
          date: '2016-05-06',
          name: '众合科技',
          address: '1234567890',
          jurisdictionType : '联合机构',
          relationAgency : '联合机构',
          useState : '未启用',
          user : '超级管理员',
          recentTime : '2016-05-03 18:00'
        }, {
          date: '2016-05-07',
          name: '众合科技',
          address: '1234567890',
          jurisdictionType : '联合机构',
          relationAgency : '联合机构',
          useState : '未启用',
          user : '超级管理员',
          recentTime : '2016-05-03 18:00'
        }],
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '100px',
        multipleSelection: []
      }
    },

  mounted () {
		
  },
  methods: {
		toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      editCurrentRow(val) {
      	console.log(val)
      },

  }
}
</script>
<style scoped lang="scss">
  .AgencyList{
		padding-left: 34px;
  }
  .el-dialog__header{
  	padding: 0 0 !important;
  	width: 664px !important;
  	height: 500px !important;
  }
  .dialogMsk{
  	height: 100%;
  	width: 1000;
  	position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #808080;
    opacity: 0.5;
    z-index: 1000;
  }
  .alertModule{
		position: fixed;
		width: 668px;
		height: 637px;
		border: 1px solid red;
		z-index: 1001;
		margin: 0 auto;
		margin-top: 150px;
		.alertModule-title{
			line-height: 165px;
			background-image: url(../../assets/imgs/operation/title.png);
			background-repeat: no-repeat;
			background-size: 100% 100%;
		}
	}
  .creatAgency ,  .relationAgency{
  	float: left;
  	background-image: url(../../assets/imgs/operation/creatAgency.png);
  	background-repeat: no-repeat;
  	background-size: 100% 100%;
		cursor:pointer;
  }
  .addModule{
  	margin-top: 34px;
  	overflow: auto;
	  .creatAgency{
	  	width:195px;
	  	height: 100px;
	  }
	  .relationAgency{
	  	width:195px;
	  	height: 97px;
	  	margin-left: 42px;
	  	background-image: url(../../assets/imgs/operation/relationAgency.png);
	  }
	  .infoMsg{
  		display: inline-block;
  		color: #FFFFFF;
  		margin-top: 48px;
  		margin-left: 78px;
  	}
  }
  .dataList{
  	clear: both;
  	margin-top: 26px;
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
      		.el-checkbox{
      			float: left !important;
      			margin-top: 13px;
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
