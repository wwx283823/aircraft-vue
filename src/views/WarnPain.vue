<template>
　　<div id="bodyHtml">
      <div class="container-fluid">
        <div class="row" style="margin-top: 15px;">
          <div class="col-xs-2 col-sm-2 col-md-2">
            <label class="bodyHtmlLabel">用户数</label>
            <input id="userId" type="text" class="bodyHtmlInput" v-model="myParam.userCount" />
          </div>
          <div class="col-xs-2 col-sm-2 col-md-2">
            <label class="bodyHtmlLabel">小区干扰</label>
            <input id="cellInterferenceId" type="text" class="bodyHtmlInput"  v-model="myParam.cellInterference" />
          </div>
          <div class="col-xs-2 col-sm-2 col-md-2">
            <label class="bodyHtmlLabel">ULPRB利用率</label>
            <input id="ucULRbRateId" type="text" class="bodyHtmlInput"  v-model="myParam.ucULRbRate" />
          </div>
          <div class="col-xs-2 col-sm-2 col-md-2">
            <label class="bodyHtmlLabel">DLPRB利用率</label>
            <input  id="ucDLRbRateId" type="text" class="bodyHtmlInput" v-model="myParam.ucDLRbRate" />
          </div>
          <div class="col-xs-1 col-sm-1 col-md-1">
            <button @click="getHighHeavyLoad" type="button" class="btn btn-info" >过滤</button>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-6 col-sm-12 col-md-6">
            <embed id="svgId" style="width: 100%;height: 100%" src="../../static/images/3F.svg" type="image/svg+xml" />
          </div>
          <div class="col-xs-6 col-md-6 col-sm-12" style="padding-top: 1.5%;">
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
  import icon from 'vue-svg-icon/Icon.vue'
  import axios from 'axios'
  export default {
    data() {
      return {
        myParam:{
          userCount:12,
          cellInterference:'-102dpm',
          ucULRbRate:'56%',
          ucDLRbRate:'45%'
        },
        nowTime:new Date(),
        tableData: [
          {"svcCellId":"小区1","userCnt":"12","ULCellInterference":"-102dpm","ucULRbRate":"56%","ucDLRbRate":"55%"},
          {"svcCellId":"小区2","userCnt":"21","ULCellInterference":"-122dpm","ucULRbRate":"47%","ucDLRbRate":"24%"},
          {"svcCellId":"小区3","userCnt":"11","ULCellInterference":"-108dpm","ucULRbRate":"68%","ucDLRbRate":"67%"},
          {"svcCellId":"小区4","userCnt":"25","ULCellInterference":"-105dpm","ucULRbRate":"52%","ucDLRbRate":"53%"},
          {"svcCellId":"小区1","userCnt":"12","ULCellInterference":"-102dpm","ucULRbRate":"56%","ucDLRbRate":"55%"},
          {"svcCellId":"小区2","userCnt":"21","ULCellInterference":"-122dpm","ucULRbRate":"47%","ucDLRbRate":"24%"},
          {"svcCellId":"小区3","userCnt":"11","ULCellInterference":"-108dpm","ucULRbRate":"68%","ucDLRbRate":"67%"},
          {"svcCellId":"小区4","userCnt":"25","ULCellInterference":"-105dpm","ucULRbRate":"52%","ucDLRbRate":"53%"},
          {"svcCellId":"小区1","userCnt":"12","ULCellInterference":"-102dpm","ucULRbRate":"56%","ucDLRbRate":"55%"},
          {"svcCellId":"小区2","userCnt":"21","ULCellInterference":"-122dpm","ucULRbRate":"47%","ucDLRbRate":"24%"},
          {"svcCellId":"小区3","userCnt":"11","ULCellInterference":"-108dpm","ucULRbRate":"68%","ucDLRbRate":"67%"},
          {"svcCellId":"小区4","userCnt":"25","ULCellInterference":"-105dpm","ucULRbRate":"52%","ucDLRbRate":"53%"},
          {"svcCellId":"小区1","userCnt":"12","ULCellInterference":"-102dpm","ucULRbRate":"56%","ucDLRbRate":"55%"},
          {"svcCellId":"小区2","userCnt":"21","ULCellInterference":"-122dpm","ucULRbRate":"47%","ucDLRbRate":"24%"},
          {"svcCellId":"小区3","userCnt":"11","ULCellInterference":"-108dpm","ucULRbRate":"68%","ucDLRbRate":"67%"},
          {"svcCellId":"小区4","userCnt":"25","ULCellInterference":"-105dpm","ucULRbRate":"52%","ucDLRbRate":"53%"}
//          {"svcCellId":"小区1","userCnt":"21","ULCellInterference":"-122dpm","ucULRbRate":"56%","ucDLRbRate":"65%"},
//          {"svcCellId":"小区1","userCnt":"21","ULCellInterference":"-122dpm","ucULRbRate":"56%","ucDLRbRate":"65%"},
//          {"svcCellId":"小区1","userCnt":"21","ULCellInterference":"-122dpm","ucULRbRate":"56%","ucDLRbRate":"65%"},
//          {"svcCellId":"小区1","userCnt":"21","ULCellInterference":"-122dpm","ucULRbRate":"56%","ucDLRbRate":"65%"},
//          {"svcCellId":"小区1","userCnt":"21","ULCellInterference":"-122dpm","ucULRbRate":"56%","ucDLRbRate":"65%"},
//          {"svcCellId":"小区1","userCnt":"21","ULCellInterference":"-122dpm","ucULRbRate":"56%","ucDLRbRate":"65%"},
//          {"svcCellId":"小区1","userCnt":"21","ULCellInterference":"-122dpm","ucULRbRate":"56%","ucDLRbRate":"65%"},
//          {"svcCellId":"小区1","userCnt":"21","ULCellInterference":"-122dpm","ucULRbRate":"56%","ucDLRbRate":"65%"},
//          {"svcCellId":"小区1","userCnt":"21","ULCellInterference":"-122dpm","ucULRbRate":"56%","ucDLRbRate":"65%"},
//          {"svcCellId":"小区1","userCnt":"21","ULCellInterference":"-122dpm","ucULRbRate":"56%","ucDLRbRate":"65%"},
//          {"svcCellId":"小区1","userCnt":"21","ULCellInterference":"-122dpm","ucULRbRate":"56%","ucDLRbRate":"65%"},
//          {"svcCellId":"小区1","userCnt":"21","ULCellInterference":"-122dpm","ucULRbRate":"56%","ucDLRbRate":"65%"},
//          {"svcCellId":"小区1","userCnt":"21","ULCellInterference":"-122dpm","ucULRbRate":"56%","ucDLRbRate":"65%"},
//          {"svcCellId":"小区1","userCnt":"21","ULCellInterference":"-122dpm","ucULRbRate":"56%","ucDLRbRate":"65%"},
//          {"svcCellId":"小区1","userCnt":"21","ULCellInterference":"-122dpm","ucULRbRate":"56%","ucDLRbRate":"65%"},
//          {"svcCellId":"小区1","userCnt":"21","ULCellInterference":"-122dpm","ucULRbRate":"56%","ucDLRbRate":"65%"},
//          {"svcCellId":"小区1","userCnt":"21","ULCellInterference":"-122dpm","ucULRbRate":"56%","ucDLRbRate":"65%"},
//          {"svcCellId":"小区1","userCnt":"21","ULCellInterference":"-122dpm","ucULRbRate":"56%","ucDLRbRate":"65%"}
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
        var sss = "cellId2";
        myDocument.getSVGDocument().getElementById(sss).setAttributeNS(null, "fill", "red")
      },
      getHighHeavyLoad(){
        this.getSvgDocuments();
        axios.get('/api/getHighHeavyLoad').
        then(function(response){
          console.log(response);
          console.log(response.data);
        }).catch(function(err){
          console.log(err);
        });

      }
    }
//    mounted(){
//      this.timeFormate();
//    }
  }

</script>

<style>
</style>
