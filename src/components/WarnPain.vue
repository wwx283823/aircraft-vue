<template>
　　<div id="bodyHtml">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xs-2 col-sm-2 col-md-2">
            <label class="bodyHtmlLabel">用户数</label>
            <input type="text" class="bodyHtmlInput" value="22"/>
          </div>
          <div class="col-xs-2 col-sm-2 col-md-2">
            <label class="bodyHtmlLabel">小区干扰2</label>
            <input type="text" class="bodyHtmlInput" value="22"/>
          </div>
          <div class="col-xs-2 col-sm-2 col-md-2">
            <label class="bodyHtmlLabel">ULPRB利用率</label>
            <input  type="text" class="bodyHtmlInput" value="22"/>
          </div>
          <div class="col-xs-2 col-sm-2 col-md-2">
            <label class="bodyHtmlLabel">DLPRB利用率</label>
            <input  type="text" class="bodyHtmlInput"value="22"/>
          </div>
          <div class="col-xs-1 col-sm-1 col-md-1">
            <button @click="getHighHeavyLoad">过滤</button>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-6 col-sm-6 col-md-6">
            <embed id="svgId" style="width: 100%;height: 100%" src="../../static/images/3F.svg" type="image/svg+xml" />
          </div>
          <div class="col-xs-5 col-md-5 col-sm-5">
            <v-table
              is-vertical-resize
              style="width:100%"
              is-horizontal-resize
              :vertical-resize-offset='55'
              :min-height='100'
              :columns="columns"
              :table-data="tableData"
              row-hover-color="#eee"
              row-click-color="#edf7ff"
            ></v-table>
        </div>
          <!--<div class="col-xs-1 col-md-1 col-sm-1">-->
            <!--<div class="row">-->
              <!--<div class="col-xs-12 col-sm-12 col-md-12">-->
                <!--<a onclick="getSVGDocument()"  class="bodyHtmlLabelR">痛点指示告警</a>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="row topR">-->
              <!--<div class="col-xs-12 col-sm-12 col-md-12">-->
                <!--<a class="bodyHtmlLabelR">大话务保障</a>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="row topR">-->
              <!--<div class="col-xs-12 col-sm-12 col-md-12">-->
                <!--<a class="bodyHtmlLabelR">AI参数优化</a>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="row topR">-->
              <!--<div class="col-xs-12 col-sm-12 col-md-12">-->
                <!--<a class="bodyHtmlLabelR">智能分析系统</a>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
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
        nowTime:new Date(),
        tableData: [
          {"svcCellId":"小区1","userCnt":"21","ULCellInterference":"-122dpm","ucULRbRate":"56%","ucDLRbRate":"65%"},
          {"svcCellId":"小区1","userCnt":"21","ULCellInterference":"-122dpm","ucULRbRate":"56%","ucDLRbRate":"65%"},
          {"svcCellId":"小区1","userCnt":"21","ULCellInterference":"-122dpm","ucULRbRate":"56%","ucDLRbRate":"65%"},
          {"svcCellId":"小区1","userCnt":"21","ULCellInterference":"-122dpm","ucULRbRate":"56%","ucDLRbRate":"65%"},
          {"svcCellId":"小区1","userCnt":"21","ULCellInterference":"-122dpm","ucULRbRate":"56%","ucDLRbRate":"65%"},
          {"svcCellId":"小区1","userCnt":"21","ULCellInterference":"-122dpm","ucULRbRate":"56%","ucDLRbRate":"65%"},
          {"svcCellId":"小区1","userCnt":"21","ULCellInterference":"-122dpm","ucULRbRate":"56%","ucDLRbRate":"65%"},
          {"svcCellId":"小区1","userCnt":"21","ULCellInterference":"-122dpm","ucULRbRate":"56%","ucDLRbRate":"65%"},
          {"svcCellId":"小区1","userCnt":"21","ULCellInterference":"-122dpm","ucULRbRate":"56%","ucDLRbRate":"65%"},
          {"svcCellId":"小区1","userCnt":"21","ULCellInterference":"-122dpm","ucULRbRate":"56%","ucDLRbRate":"65%"},
          {"svcCellId":"小区1","userCnt":"21","ULCellInterference":"-122dpm","ucULRbRate":"56%","ucDLRbRate":"65%"},
          {"svcCellId":"小区1","userCnt":"21","ULCellInterference":"-122dpm","ucULRbRate":"56%","ucDLRbRate":"65%"},
          {"svcCellId":"小区1","userCnt":"21","ULCellInterference":"-122dpm","ucULRbRate":"56%","ucDLRbRate":"65%"},
          {"svcCellId":"小区1","userCnt":"21","ULCellInterference":"-122dpm","ucULRbRate":"56%","ucDLRbRate":"65%"},
          {"svcCellId":"小区1","userCnt":"21","ULCellInterference":"-122dpm","ucULRbRate":"56%","ucDLRbRate":"65%"},
          {"svcCellId":"小区1","userCnt":"21","ULCellInterference":"-122dpm","ucULRbRate":"56%","ucDLRbRate":"65%"},
          {"svcCellId":"小区1","userCnt":"21","ULCellInterference":"-122dpm","ucULRbRate":"56%","ucDLRbRate":"65%"},
          {"svcCellId":"小区1","userCnt":"21","ULCellInterference":"-122dpm","ucULRbRate":"56%","ucDLRbRate":"65%"},
          {"svcCellId":"小区1","userCnt":"21","ULCellInterference":"-122dpm","ucULRbRate":"56%","ucDLRbRate":"65%"},
          {"svcCellId":"小区1","userCnt":"21","ULCellInterference":"-122dpm","ucULRbRate":"56%","ucDLRbRate":"65%"},
          {"svcCellId":"小区1","userCnt":"21","ULCellInterference":"-122dpm","ucULRbRate":"56%","ucDLRbRate":"65%"},
          {"svcCellId":"小区1","userCnt":"21","ULCellInterference":"-122dpm","ucULRbRate":"56%","ucDLRbRate":"65%"}
        ],
        columns: [
          {field: 'svcCellId', title: '小区名', width: 50, titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'userCnt', title: '用户数', width: 50, titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'ULCellInterference', title: '上行干扰', width: 50, titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'ucULRbRate', title: '上行PRB利用率', width: 50, titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'ucDLRbRate', title: '下行PRB利用率', width: 50, titleAlign: 'center', columnAlign: 'center',isResize:true}
        ]
      }
    },
    componets:{icon},
    methods:{
      getSvgDocuments(){
        var myDocument = document.getElementById("svgId");
        var sss = "textId";
        myDocument.getSVGDocument().getElementById(sss).setAttributeNS(null, "fill", "blue")
      }

    }
//    mounted(){
//      this.timeFormate();
//    }
  }

</script>

<style>
</style>
