<template>
  <div class="CommonHeader">
     <ul>
       <li class="borrow">好易借</li>
       <li>合作机构</li>
       <li>退出</li>
     </ul>
  </div>
</template>
<script>
  export default {
  name: 'CommonHeader',
  data () {
    return {

    }
  },

  mounted () {

  },
  methods: {


  }
}
</script>
<style scoped lang="scss">
  .CommonHeader{
    position: absolute;
    right: 0;
    top: 0;
    height: 90px;
    width: calc( 100% - 280px);
    min-width: 1120px;
    float: right;
    background-color: #fff;
    ul{
      float: right;
      li{
        float: left;
        height: 90px;
        line-height: 90px;
        width: 180px;
        text-align: center;
        color: #333;
        font-size: 16px;
        cursor: pointer;
        &.borrow{
          position: relative;
          &:after{
            position: absolute;
            content: '';
            top: 43px;
            display: inline-block;
            right: 40px;
            width: 9px;
            height: 5px;
            background-image: url(~Img/arrows_down.png);
            background-repeat: no-repeat;
            background-size: 100%;
          }
        }
      }
    }
  }
</style>
