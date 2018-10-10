<template>
  <div class="ConfigAuthority homePage">
    <div class="searchModule">
    	<span class="settlementTime">结算时间 :</span>
    	<span>
    		<el-date-picker
          v-model="value5"
          type="datetimerange"
          :picker-options="pickerOptions2"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          align="right">
        </el-date-picker>
    	</span>
    	<span>
    		<el-select v-model="value" placeholder="合作机构">
			    <el-option
			      v-for="item in options"
			      :key="item.value"
			      :label="item.label"
			      :value="item.value">
			    </el-option>
			  </el-select>
    	</span>
    	<span>
    		<el-select v-model="value" placeholder="用户类型">
			    <el-option
			      v-for="item in options"
			      :key="item.value"
			      :label="item.label"
			      :value="item.value">
			    </el-option>
			  </el-select>
    	</span>
    	<span class="searchBtn">查询</span>
    </div>
    
    <div class="topMsgItemModule">
    	<div class="item-list">
    		<div class="item-logo order-logo"></div>
    		<div class="item-value">
    			<span class="item-value-top">8</span>
    			<span class="item-value-bottom">总订单数</span>
    		</div>
    	</div>
    	<div class="item-list">
    		<div class="item-logo new-logo"></div>
    		<div class="item-value">
    			<span class="item-value-top">8</span>
    			<span class="item-value-bottom">新用户</span>
    		</div>
    	</div>
    	<div class="item-list">
    		<div class="item-logo old-logo"></div>
    		<div class="item-value">
    			<span class="item-value-top">8</span>
    			<span class="item-value-bottom">我方老用户</span>
    		</div>
    	</div>
    	<div class="item-list">
    		<div class="item-logo other-logo"></div>
    		<div class="item-value">
    			<span class="item-value-top">8</span>
    			<span class="item-value-bottom">其他渠道老用户</span>
    		</div>
    	</div>
    </div>
    
    <div class="homepage-bottom">
      <div class="homepage-bottom-title">
        <span class="condition">联登机构推单数据</span>
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
  </div>
</template>
<script>
  export default {
  name: 'ConfigAuthority',
  data () {
    return {
      headList: ['推单时间', '机构名称', '产品号', '订单号', '手机号', '姓名', '身份证', '借款金额','借款期限','返回用户类型'],
      accountList:[
         { date: '2018.08.18 15:30', name: 'zhangsna', account: '1365***5656', jurisdiction: '产品', status: '正常', user: 'zhangsna', latedate: '2018.08.18 15:30', operation: '修改'},
         { date: '2018.08.18 15:30', name: 'zhangsna', account: '1365***5656', jurisdiction: '产品', status: '正常', user: 'zhangsna', latedate: '2018.08.18 15:30', operation: '修改'},
         { date: '2018.08.18 15:30', name: 'zhangsna', account: '1365***5656', jurisdiction: '产品', status: '正常', user: 'zhangsna', latedate: '2018.08.18 15:30', operation: '修改'},
         { date: '2018.08.18 15:30', name: 'zhangsna', account: '1365***5656', jurisdiction: '产品', status: '正常', user: 'zhangsna', latedate: '2018.08.18 15:30', operation: '修改'},
         { date: '2018.08.18 15:30', name: 'zhangsna', account: '1365***5656', jurisdiction: '产品', status: '正常', user: 'zhangsna', latedate: '2018.08.18 15:30', operation: '修改'},
         { date: '2018.08.18 15:30', name: 'zhangsna', account: '1365***5656', jurisdiction: '产品', status: '正常', user: 'zhangsna', latedate: '2018.08.18 15:30', operation: '修改'},
         

       ],
       
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
        
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },

        value4: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        value5: '',
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
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
  	.searchModule{
  		width: 100%;
  		margin-top: 35px;
  	  text-align: left;
  		overflow: auto;
  		span{
  			display: inline-block;
  			margin-left: 34px;
  		}
  		.settlementTime{
  			margin-left: 34px;
  			/*margin-right: 29px;*/
  		}
  		.searchBtn{
  			width: 100px;
		    height: 36px;
		    line-height: 36px;
		    text-align: center;
		    background-color: #419FFF;
		    font-size: 16px;
		    color: #FFFFFF;
		    border-radius: 5px;
		    cursor: pointer;
  		}
  	}
    .topMsgItemModule{
    	height: 160px;
	    width: calc(100% - 68px);
	    margin: 0 34px;
	    background-color: #fff;
    	margin-top: 20px;
    	.item-list{
    		width: calc(100%/4) ;
    		float: left;
    		.item-logo{
    			float: left;
			 	  width: 94px;
			 	  height: 94px;
			 	  margin-top: 33px;
			 	  margin-left: 70px;
			 	  
			 	  background-repeat: no-repeat;
			 	  background-size: 100% 100%;
    		}
    		.order-logo{
    			background-image: url(../../assets/imgs/operation/orderNum.png);
    		}
    		.new-logo{
    			background-image: url(../../assets/imgs/operation/newUser.png);
    		}
    		.old-logo{
    			background-image: url(../../assets/imgs/operation/ours.png);
    		}
    		.other-logo{
    			background-image: url(../../assets/imgs/operation/other.png);
    		}
    		.item-value{
    			float: left;
    			margin-top: 40px;
    			margin-left: 20px;
    			span{
    				display: block;
    			}
			 	  .item-value-top{
			 	  	font-size: 35px;
			 	  	font-weight: 600;
			 	  }
			 	  .item-value-bottom{
			 	  	font-size: 16px;
			 	  	color: #999999;
			 	  	margin-top: 5px;
			 	  }
    		}
    	}
    }
    .header-list{
    	span{
    		width: calc(100%/10) !important;
    	}
    }
    li.content{

          span{
            float: left;
            display: inline-block;
            width: calc(100%/10) !important;
            &.operation{
               color: #409FFF;
               cursor: pointer;
            }

          }

        }
  }
</style>
