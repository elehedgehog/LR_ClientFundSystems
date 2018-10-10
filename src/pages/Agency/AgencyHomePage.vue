<template>
  <div class="AgencyHomePage homePage">
    <p class="company-name">深圳众合财富金融投资管理有限公司</p>
    <div class="homepage-top">
      <ul>
        <li>
          <p class="homepage-top-money">18000.00</p>
          <p class="homepage-top-describe">账户金额(元)</p>
        </li>
        <li>
          <p class="homepage-top-money top-money">18000.00</p>
          <p class="homepage-top-describe">平均单价</p>
        </li>
        <li>
          <p class="homepage-top-money">20000</p>
          <p class="homepage-top-describe">今日进单量</p>
        </li>
        <li>
          <p class="homepage-top-money top-money upper">18000.00<em></em></p>
          <p class="homepage-top-describe">日进单上限</p>
        </li>

      </ul>
    </div>
    <div class="homepage-bottom">
      <div class="homepage-bottom-title">
        <span class="condition">日进行情况</span>
        <span class="search">查询</span>
        <span class="date">
          <p class="date-time">订单日期：</p>
          <div class="block date-content">
            <!-- {{value6}} -->
            <el-date-picker
              v-model="value6"
              type="daterange"
              range-separator="——"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </div>

        </span>
      </div>
      <ul class="cf">
        <li class="head">
          <span class="head-name">好易借</span>
          <span class="head-num">总进单件数6555单</span>
        </li>
        <li class="content" v-for="(item, key) in detail" :key="key">
          <span class="content-date">{{ item.date}}</span>
          <span class="content-num">{{ item.num }}单</span>
          <span class="content-detail">
            <button class="content-detail-btn" @click="toOrderInquiry()">明细</button>
          </span>
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
  import { DatePicker, Pagination } from 'element-ui';
  export default {
  name: 'AgencyHomePage',      //机构首页
  data () {
    return {
      detail: [
        {date: '2018.07.18',num: '10000'},
        {date: '2018.07.18',num: '10000'},
        {date: '2018.07.18',num: '10000'},
        {date: '2018.07.18',num: '10000'},
        {date: '2018.07.18',num: '10000'},
        {date: '2018.07.18',num: '10000'},
      ],
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
        value6: '',
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      };
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


      toOrderInquiry(){      //明细按钮
        this.$router.push({ name: 'OrderInquiry', params: {}, query:{} })
      }

  }
}
</script>
<style scoped lang="scss">
  .AgencyHomePage{
    .el-range-editor.el-input__inner{
      width: 280px;
    }
    .el-date-editor .el-range__icon{
      margin-left: 5px;
    }
    .el-pager li{
      color: #5A687D;
    }
    .company-name{
      margin: 34px 0 22px 34px;
      text-align: left;
      color: #333;
      font-size: 20px;
    }
    .homepage-top{
      height: 200px;
      width: calc(100% - 68px);
      margin: 0 34px;
      background-color: #fff;
      ul{
        li{
          float: left;
          width: calc((100% - 68px)/4);
          text-align: center;
          .homepage-top-money{
            margin: 47px 0 26px 0;
            font-size: 45px;
            color: #f4a60c;
            &.top-money{
              color: #333333;
            }
            &.upper{
              position: relative;
              em{
                position: absolute;
                right: -15px;
                top: 13px;
                width: 34px;
                height: 34px;
                display: inline-block;
                background-image: url(~Img/editor.png);
                background-repeat: no-repeat;
                background-size: 100%;
                cursor: pointer;
              }
            }
          }
          .homepage-top-describe{
            font-size: 16px;
            color: #999;
          }
        }
      }
    }
    .homepage-bottom{
      width: calc(100% - 68px);
      margin: 20px 34px 0;
      background-color: #fff;
      .homepage-bottom-title{
        position: relative;
        height: 80px;
        line-height: 80px;
        &:after{
          position: absolute;
          display: inline-block;
          bottom: 0;
          left: 34px;
          content: '';
          height: 1px;
          width: calc(100% - 68px);
          background-color: #E7E7E7;
        }
        >span{
          float: left;
            font-size: 16px;
          &.condition{
            margin-left: 34px;
            color: #333;
          }
          &.date{
            float: right;
            color: #999;
            .date-time{
              float: left;
            }
            .date-content{
              float: left;
              margin-left: 13px;
            }
          }
          &.search{
            float: right;
            margin-top: 22px;
            margin-right: 34px;
            margin-left: 32px;
            color: #999;
            width: 100px;
            height: 36px;
            line-height: 36px;
            text-align: center;
            background-color: #419FFF;
            color: #fff;
            border-radius: 5px;
            cursor: pointer;
          }
        }
      }
      ul{
        margin: 0 32px;
        min-height: 380px;
        overflow: hidden;
        li{
          height: 40px;
          line-height: 40px;
          font-size: 14px;
          color: #333;
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
              button.content-detail-btn{
                  background-color: #409FFF;
                  color: #fff;
              }
            }
            span{
              float: left;
              display: inline-block;
              &.content-date{
                width: calc(33.33% - 30px);
                text-align: left;
                margin-left: 30px
              }
              &.content-num{
                width: 33.33%;
                text-align: center;
              }
              &.content-detail{
                width: calc(33.33% - 100px);
                text-align: right;
                margin-right: 100px;
                >button{
                  width: 54px;
                  height: 28px;
                  background-color: #fff;
                  color: #333;
                  border-radius: 5px;
                  border: 1px solid #DEDEDE;
                  cursor: pointer;
                }
              }
            }

          }

        }
      }
    }
    .block{
      text-align: right;
      margin-right: 50px;
    }
  }
</style>
