<template>
  <div class="ConsumeRecord homePage">
     <div class="homepage-bottom">
      <div class="homepage-bottom-title">
        <span class="condition">消费记录</span>
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
            <span class="">{{ item.name }}</span>
            <span class="">{{ item.money }}元</span>
            <span class="">{{ item.deadline }}期</span>
            <span class="">{{ item.type }}</span>
            <span class="">{{ item.consume }}元</span>
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
  name: 'ConsumeRecord',
  data () {
    return {
       headList: ['结束时间', '订单号', '申请人', '借款金额', '借款期限', '借款用途', '操作类型', '消费金额'],
       orderList:[
         { date: '2018.08.18 15:30', num: '1234567890',  name: '**文',  money: '4000',deadline: '12',type: '消费扣款', consume: '11', },
         { date: '2018.08.18 15:30', num: '1234567890',  name: '**文',  money: '4000',deadline: '12',type: '消费扣款', consume: '11', },
         { date: '2018.08.18 15:30', num: '1234567890',  name: '**文',  money: '4000',deadline: '12',type: '消费扣款', consume: '11', },
         { date: '2018.08.18 15:30', num: '1234567890',  name: '**文',  money: '4000',deadline: '12',type: '消费扣款', consume: '11', },
         { date: '2018.08.18 15:30', num: '1234567890',  name: '**文',  money: '4000',deadline: '12',type: '消费扣款', consume: '11', },
         { date: '2018.08.18 15:30', num: '1234567890',  name: '**文',  money: '4000',deadline: '12',type: '消费扣款', consume: '11', },
         { date: '2018.08.18 15:30', num: '1234567890',  name: '**文',  money: '4000',deadline: '12',type: '消费扣款', consume: '11', },
         { date: '2018.08.18 15:30', num: '1234567890',  name: '**文',  money: '4000',deadline: '12',type: '消费扣款', consume: '11', },
         { date: '2018.08.18 15:30', num: '1234567890',  name: '**文',  money: '4000',deadline: '12',type: '消费扣款', consume: '11', },
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
<style scoped lang="scss">
  .ConsumeRecord{
    .header-list{
      height: 60px;
      line-height: 60px;
      >span{
        width: calc(100%/8);
        display: inline-block;
        float: left;
        text-align: center;

      }
    }
    .content{
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
</style>
