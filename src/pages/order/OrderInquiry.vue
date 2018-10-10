<template>
  <div class="OrderInquiry homePage">
     <div class="homepage-bottom">
      <div class="homepage-bottom-title">
        <span class="condition">订单查询</span>

        <span class="export">导出</span>
        <span class="search">查询</span>
        <span class="date">
          <p class="date-time">结算时间：</p>
          <div class="block date-content">
            <el-date-picker
              v-model="value5"
              type="datetimerange"
              :picker-options="pickerOptions2"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              align="right">
            </el-date-picker>
          </div>
        </span>
      </div>
      <ul class="cf">
        <li class="header-list">
          <span v-for="item in headList" :key="item"> {{ item }}</span>
        </li>
        <li class="content" v-for="(item, key) in orderList" :key="key">
          <span class="">{{ item.date}}</span>
          <span class="">{{ item.num }}</span>
          <span class="">{{ item.phone }}</span>
          <span class="">{{ item.name }}</span>
          <span class="">{{ item.id }}</span>
          <span class="">{{ item.use }}</span>
          <span class="">{{ item.money }}元</span>
          <span class="">{{ item.deadline }}期</span>
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
  name: 'OrderInquiry',  //订单查询
  data () {
    return {
       headList: ['订单时间', '订单号', '手机号', '姓名', '身份证号', '借款用途', '借款金额', '借款期限'],
       orderList:[
         { date: '2018.08.18 15:30', num: '1234567890', phone: '1365***5656', name: '**文', id: '365432********3546', use: '购物', money: '4000', deadline: '12'},
         { date: '2018.08.18 15:30', num: '1234567890', phone: '1365***5656', name: '**文', id: '365432********3546', use: '购物', money: '4000', deadline: '12'},
         { date: '2018.08.18 15:30', num: '1234567890', phone: '1365***5656', name: '**文', id: '365432********3546', use: '购物', money: '4000', deadline: '12'},
         { date: '2018.08.18 15:30', num: '1234567890', phone: '1365***5656', name: '**文', id: '365432********3546', use: '购物', money: '4000', deadline: '12'},
         { date: '2018.08.18 15:30', num: '1234567890', phone: '1365***5656', name: '**文', id: '365432********3546', use: '购物', money: '4000', deadline: '12'},
         { date: '2018.08.18 15:30', num: '1234567890', phone: '1365***5656', name: '**文', id: '365432********3546', use: '购物', money: '4000', deadline: '12'},
         { date: '2018.08.18 15:30', num: '1234567890', phone: '1365***5656', name: '**文', id: '365432********3546', use: '购物', money: '4000', deadline: '12'},
         { date: '2018.08.18 15:30', num: '1234567890', phone: '1365***5656', name: '**文', id: '365432********3546', use: '购物', money: '4000', deadline: '12'},
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
        value4: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        value5: '',
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

  }
}
</script>
<style scoped lang="scss">
  .OrderInquiry{

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
          &.export{
            float: right;
            margin-top: 22px;
            margin-right: 34px;
            color: #999;
            width: 100px;
            height: 36px;
            line-height: 36px;
            text-align: center;
            background-color: #66C33A;
            color: #fff;
            border-radius: 5px;
            cursor: pointer;
          }
        }
      }
      ul{
        margin: 0 32px;
        min-height: 660px;
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
            }
            span{
              float: left;
              display: inline-block;
              width: calc(100%/8);


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
