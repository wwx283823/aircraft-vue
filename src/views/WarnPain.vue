<template>
　　<div id="bodyHtml">
      <div class="container-fluid">
        <div class="row" style="margin-top: 15px;">
          <div class="col-xs-2 col-sm-2 col-md-2">
            <label class="bodyHtmlLabel">用户数</label>
            <input id="userId" type="text" class="bodyHtmlInput" v-model="myParam.userCnt" />
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
            <button @click="getWirelessInfoByParam" type="button" class="btn btn-info" >过滤</button>
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
              :table-data="myTableData"
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
  import axios from 'axios'
  export default {
    data() {
      return {
        myParam:{
          userCnt:10,
          cellInterference:-101,
          ucULRbRate:56,
          ucDLRbRate:45
        },
        cellIdLists:[],
        nowTime:new Date(),
        myTableData:[],
        columns: [
          {field: 'ulServiceCellId', title: 'ulServiceCellId', width: 15, titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'uleNodebId', title: 'uleNodebId', width: 15, titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'ulCellInterference', title: 'ulCellInterference', width: 15, titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'ucULRbRate', title: 'ucULRbRate', width: 15, titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'ucDLAvgMcs', title: 'ucDLAvgMcs', width: 15, titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'ucULAvgMcs', title: 'ucULAvgMcs', width: 15, titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'ulActiveUserNum', title: 'ulActiveUserNum', width: 15, titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'ulULActiveUserAvgRate', title: 'ulULActiveUserAvgRate', width: 15, titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'ulULCellTraffic', title: 'ulULCellTraffic', width: 15, titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'usAvgUserNum', title: 'usAvgUserNum', width: 15, titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'usCpuRate', title: 'usCpuRate', width: 15, titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'usMaxUserNum', title: 'usMaxUserNum', width: 15, titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'ucDLRbRate', title: 'ucDLRbRate', width: 15, titleAlign: 'center', columnAlign: 'center',isResize:true}
        ]
      }
    },
    methods:{
      redSvgDocuments(cellId){
        let myDocument = document.getElementById("svgId");
        let sss = "cellId"+cellId;
        myDocument.getSVGDocument().getElementById(sss).setAttributeNS(null, "fill", "red")
      },
      restSvgDocuments(){
        let myDocument = document.getElementById("svgId");
        for(let i = 0;i<this.cellIdLists.length;i++){
          let id = this.cellIdLists[i];
          let cellId = "cellId"+id;
          myDocument.getSVGDocument().getElementById(cellId).setAttributeNS(null, "fill", "#FEEEFF")
        }
        this.cellIdLists = [];
      },
      getWirelessInfos(){
          let _this = this;
          axios.get('/api/getWirelessInfos').
          then(function(response){
            _this.myTableData = response.data;
            console.log(this.myTableData);
          }).catch(function(err){
            console.log(err);
          });

      },
      getWirelessInfoByParam(){
        this.restSvgDocuments();
        axios.get('/api/getWirelessInfoByParam',{
          params:
            this.myParam
        }).
        then(response =>{
          let dataList = response.data;
          for(let i = 0;i<dataList.length;i++){
            let model = dataList[i];
            this.cellIdLists.push(model.ulServiceCellId);
            this.redSvgDocuments(model.ulServiceCellId);
          }
        }).catch(function(err){
          console.log(err);
        });

      }
    },
    created(){
      this.getWirelessInfos();
    }
  }

</script>

<style>
</style>
