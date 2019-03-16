<template>
　　<div id="bodyHtml">
      <div class="container-fluid">

        <router-link class="routerClass" to="/paramConfig" style="font-size: 18px;color: aquamarine;">参数配置</router-link>

        <div class="row" style="margin-top: 15px;">
          <div class="col-xs-2 col-sm-2 col-md-2">
            <label class="bodyHtmlLabel">最大用户数</label>
            <input id="userId" type="text" class="bodyHtmlInput" v-model="myParam.userCnt" />
          </div>
          <div class="col-xs-2 col-sm-2 col-md-2">
            <label class="bodyHtmlLabel">小区干扰</label>
            <input id="cellInterferenceId" type="text" class="bodyHtmlInput"  v-model="myParam.cellInterference" />
          </div>
          <div class="col-xs-2 col-sm-2 col-md-2">
            <label class="bodyHtmlLabel">上行RB利用率</label>
            <input id="ucULRbRateId" type="text" class="bodyHtmlInput"  v-model="myParam.ucULRbRate" />
          </div>
          <div class="col-xs-2 col-sm-2 col-md-2">
            <label class="bodyHtmlLabel">下行RB利用率</label>
            <input  id="ucDLRbRateId" type="text" class="bodyHtmlInput" v-model="myParam.ucDLRbRate" />
          </div>
          <div class="col-xs-1 col-sm-1 col-md-1">
            <button @click="getWirelessInfoByParam" type="button" class="btn btn-info" >过滤</button>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-6 col-sm-12 col-md-6">
            <embed id="svgId" style="width: 100%;height: 100%" src="../../static/images/u5-2F.svg" type="image/svg+xml" />
          </div>
          <div class="col-xs-6 col-md-6 col-sm-12" style="padding-top: 1.5%;">
            <v-table
              is-vertical-resize
              style="width:100%"
              is-horizontal-resize
              :vertical-resize-offset='55'
              :min-height='150'
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
        myCellIdList:['133636880','133636881','133636882'],
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
          {field: 'ulServiceCellId', title: '小区ID', width: 10, titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'uleNodebId', title: 'NodebId', width: 10, titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'usMaxUserNum', title: '最大用户数', width: 15, titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'ulCellInterference', title: '小区干扰(dBm)', width: 20, titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'ucULRbRate', title: '上行RB利用率(%)', width: 30, titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'ucDLRbRate', title: '下行RB利用率(%)', width: 30, titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'ucULAvgMcs', title: '上行平均MCS', width: 15, titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'ucDLAvgMcs', title: '下行平均MCS', width: 15, titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'ulActiveUserNum', title: '活动用户数(人/s)', width: 30, titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'ulULActiveUserAvgRate', title: '上行平均感知速率(kbps)', width: 50, titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'ulULCellTraffic', title: '上行小区流量(kbps)', width: 35, titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'usAvgUserNum', title: '平均用户数', width: 15, titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'usCpuRate', title: 'CPU利用率', width: 15, titleAlign: 'center', columnAlign: 'center',isResize:true}

        ]
      }
    },
    methods:{
      redSvgDocuments(cellId){
        let myDocument = document.getElementById("svgId");
//        let cellIds = "cellId"+cellId;
        let seleteDocument = myDocument.getSVGDocument().getElementById(cellId);
        if(seleteDocument!=null){
          seleteDocument.setAttributeNS(null, "fill", "red");
        }
      },
      restSvgDocuments(){
        let myDocument = document.getElementById("svgId");
        for(let i = 0;i<this.cellIdLists.length;i++){
          let cellId = this.cellIdLists[i];
//          let cellId = "cellId"+id;
//          myDocument.getSVGDocument().getElementById(cellId).setAttributeNS(null, "fill", "#FEEEFF")
          let seleteDocument = myDocument.getSVGDocument().getElementById(cellId);
          if(seleteDocument!=null){
            seleteDocument.setAttributeNS(null, "fill", "#4CB9FF");
          }
        }
        this.cellIdLists = [];
      },
      getWirelessInfos(){
          let _this = this;
          axios.get('/api/getWirelessInfos').
          then(function(response){
            _this.myTableData = response.data;
          }).catch(function(err){
            console.log(err);
          });
        setTimeout(function()  {
          if(_this.$route.path.split("warn").length>1){
            _this.getWirelessInfos()//娃娃消失
            _this.getWirelessInfoByParam();
          }
        }, 4000);

      },
      addSvgClick(){
        let _this = this;
        let myDocument = document.getElementById("svgId");
        for (let i = 0 ; i <_this.myCellIdList.length;i++){
          let cellId = _this.myCellIdList[i];
          myDocument.getSVGDocument().getElementById(cellId).addEventListener("click",function() {
            _this.$router.push({path:'/bigTalk/'+cellId})
          });
        }
      },
      getWirelessInfoByParam(){
//        this.addSvgClick();
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
    },
    mounted(){
      setTimeout(() => {
        this.addSvgClick();
        this.getWirelessInfoByParam();
      }, 1000)

    },
  }

</script>

<style>
</style>
