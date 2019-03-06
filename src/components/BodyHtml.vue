<template>
　　<div id="bodyHtml">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xs-2 col-sm-2 col-md-2">
            <label class="bodyHtmlLabel">用户数</label>
            <input type="text" class="bodyHtmlInput" value="22"/>
          </div>
          <div class="col-xs-2 col-sm-2 col-md-2">
            <label class="bodyHtmlLabel">小区干扰</label>
            <input type="text" class="bodyHtmlInput" value="22"/>
          </div>
          <div class="col-xs-3 col-sm-3 col-md-3">
            <label class="bodyHtmlLabel">ULPRB利用率</label>
            <input  type="text" class="bodyHtmlInput" value="22"/>
          </div>
          <div class="col-xs-3 col-sm-3 col-md-3">
            <label class="bodyHtmlLabel">DLPRB利用率</label>
            <input  type="text" class="bodyHtmlInput"value="22"/>
          </div>
          <div class="col-xs-1 col-sm-1 col-md-1">
            <button>过滤</button>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-6 col-sm-6 col-md-6">
            <img src="../../static/images/1-left.png"/>
          </div>
          <div class="col-xs-5 col-md-5 col-sm-5">
            <img src="../../static/images/1-rigth.png"/>
          </div>
          <div class="col-xs-1 col-md-1 col-sm-1">
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12">
                <label class="bodyHtmlLabelR">痛点指示告警</label>
              </div>
            </div>
            <div class="row topR">
              <div class="col-xs-12 col-sm-12 col-md-12">
                <label class="bodyHtmlLabelR">大话务保障</label>
              </div>
            </div>
            <div class="row topR">
              <div class="col-xs-12 col-sm-12 col-md-12">
                <label class="bodyHtmlLabelR">AI参数优化</label>
              </div>
            </div>
            <div class="row topR">
              <div class="col-xs-12 col-sm-12 col-md-12">
                <label class="bodyHtmlLabelR">智能分析系统</label>
              </div>
            </div>
          </div>
        </div>
      </div>
　　</div>
</template>
<style scoped>
  @import '../../static/css/app.css';
</style>
<script type="text/javascript">
  export default {
    data() {
      return {
        nowTime:new Date()
      }
    }
//    mounted(){
//      this.timeFormate();
//    }
  }
</script>

<style>
</style>
