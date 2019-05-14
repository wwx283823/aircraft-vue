<template>
　　<div id="bodyHtml">
      <div class="container-fluid">

        <div class="row" style="margin-top: 15px;    margin-left: 1.3%; text-align: left;">
          <div class="col-xs-2 col-sm-2 col-md-2">
            <label class="bodyHtmlLabel">最大用户数</label>
            <input id="userId" type="text" class="bodyHtmlInput" v-model="myParam.userCnt" />
          </div>
          <div class="col-xs-2 col-sm-2 col-md-2 divMargin" >
            <label class="bodyHtmlLabel">小区干扰</label>
            <input id="cellInterferenceId" type="text" class="bodyHtmlInput"  v-model="myParam.cellInterference" />
          </div>
          <div class="col-xs-2 col-sm-2 col-md-2" style="margin-left: -78px" >
            <label class="bodyHtmlLabel">上行RB利用率</label>
            <input id="ucULRbRateId" type="text" class="bodyHtmlInput"  v-model="myParam.ucULRbRate" />
          </div>
          <div class="col-xs-2 col-sm-2 col-md-2 "style="margin-left: -34px;">
            <label class="bodyHtmlLabel">下行RB利用率</label>
            <input  id="ucDLRbRateId" type="text" class="bodyHtmlInput" v-model="myParam.ucDLRbRate" />
          </div>
          <div class="col-xs-1 col-sm-1 col-md-1 divMargin">
            <button @click="getWirelessInfoByParam" type="button" class="btn btn-info" style="color: #000;background-color: #6DFDFD;border-color: #6DFDFD;" >过滤</button>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-6 col-sm-12 col-md-6">
            <embed id="svgId" style="width: 100%;height: 100%" src="../../static/images/u5-3.svg" type="image/svg+xml" />
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
              :column-cell-class-name="columnCellClass2"
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
<style >
  @import '../../static/css/app.css';
</style>
<script type="text/javascript">
  import axios from 'axios'
  export default {
    data() {
      return {
        myCellIdList:['16','17','18'],
        myParam:{
          userCnt:10,
          cellInterference:-101,
          ucULRbRate:56,
          ucDLRbRate:45
        },
        cellIdLists:[],
        restCellIdLists:[],
        nowTime:new Date(),
        myTableData:[],
        columns: [
          {field: 'ulServiceCellId', title: '小区Id', width: 5, titleAlign: 'center',titleCellClassName:'title-cell-class-name-test',columnAlign: 'center',isResize:true},
          {field: 'uleNodebId', title: '基站Id', width: 10, titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'timestamp', title: '时间', width: 35, titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'usMaxUserNum', title: '最大用户数', width: 13, titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'ulCellInterference', title: '小区干扰(dBm)', width: 15, titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'ucULRbRate', title: '上行RB利用率(%)', width: 30, titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'ucDLRbRate', title: '下行RB利用率(%)', width: 30, titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'ucULAvgMcs', title: '上行平均MCS', width: 15, titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'ucDLAvgMcs', title: '下行平均MCS', width: 15, titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'ulActiveUserNum', title: '激活用户数(人/s)', width: 30, titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'ulULActiveUserAvgRate', title: '上行平均感知速率(mbps)', width: 50, titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'ulULCellTraffic', title: '上行小区流量(mbps)', width: 35, titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'usAvgUserNum', title: '平均用户数', width: 15, titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'usCpuRate', title: 'CPU利用率(%)', width: 15, titleAlign: 'center', columnAlign: 'center',isResize:true}

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
          seleteDocument.setAttributeNS(null, "opacity", "0.5");
        }
      },
      columnCellClass2(rowIndex,columnName,rowData){

        return 'column-cell-class-name-test';

      },
      restSvgDocuments(){
        let myDocument = document.getElementById("svgId");
        for(let i = 0;i<this.cellIdLists.length;i++){
          let cellId = this.cellIdLists[i];
//          let cellId = "cellId"+id;
//          myDocument.getSVGDocument().getElementById(cellId).setAttributeNS(null, "fill", "#FEEEFF")
          let seleteDocument = myDocument.getSVGDocument().getElementById(cellId);
          if(seleteDocument!=null){
            seleteDocument.setAttributeNS(null, "fill", "#6DFDFD");
            seleteDocument.setAttributeNS(null, "opacity", "0.5");
          }
        }
        this.cellIdLists = [];
      },
      dataFor(resultData){
        for(let i = 0 ;i<resultData.length;i++){
          let results = resultData[i];
          let models = results.timestamp;

          let times = models.split("T")[1].split(".")[0];
          let timesSet = times.split(":");
          let result = parseInt(timesSet[0])+8
          if(result>23){
            result = result-24;
          }
          results.timestamp = result+":"+timesSet[1]+":"+timesSet[2];
        }
        return resultData;
      },
      getWirelessInfos(){
          let _this = this;
          axios.get('/api/getWirelessInfos').
          then(function(response){
            _this.myTableData = _this.dataFor(response.data);
          }).catch(function(err){
            console.log(err);
          });
        setTimeout(function()  {
          if(_this.$route.path.split("warn").length>1){
            _this.getWirelessInfos()//娃娃消失
            _this.reWirelessInfoByParam();
          }
        }, 2000);

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
      getHeavyLoadParam(){
        axios.get('/api/getHeavyLoadParam').
        then(response =>{
          let dataList = response.data;
          if(dataList.length>0){
            this.myParam = dataList[0];
          }
        }).catch(function(err){
          console.log(err);
        });
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

      },
      checkMyParam(){
        let params = this.myParam;
        if((params.cellInterference==null||params.cellInterference=="")&&(params.ucDLRbRate==null
          ||params.ucDLRbRate=="")&&(params.ucULRbRate==null||params.ucULRbRate=="")&&
          (params.userCnt==null||params.userCnt=="")){
          console.log(false);
            return false;

        }else{
          console.log(true);
          return true;

        }
      },
      reWirelessInfoByParam(){
//        this.restSvgDocuments();
        let _this = this;
        if(this.checkMyParam()){
          axios.get('/api/reWirelessInfoByParam',{
            params:
            this.myParam
          }).
          then(response =>{
            let dataList = response.data;
            _this.restCellIdLists = [];
            let tempLists = [];
            Object.assign(tempLists,_this.cellIdLists);
            for(let i = 0;i<dataList.length;i++){
              let model = dataList[i];
              let setRed = false;
              for(let j = 0;j<tempLists.length;j++){
                if(model.ulServiceCellId==tempLists[j]){
                  setRed = true;
                  if(_this.restCellIdLists.indexOf(j)==-1){
                    _this.restCellIdLists.push(j);
                  }
                }
              }
              if(!setRed){
                _this.cellIdLists.push(model.ulServiceCellId);
                _this.redSvgDocuments(model.ulServiceCellId);
              }
            }
            if(_this.restCellIdLists.length!=0&&_this.restCellIdLists.length!=tempLists.length){
              let tempList = [];
              Object.assign(tempList,_this.cellIdLists);
              for(let a = 0;a<_this.restCellIdLists.length;a++){
                tempList.splice(_this.restCellIdLists[a],1);
              }
              for(let b = 0;b<tempList.length;b++){
                let cellIds = tempList[b];
                let myDocument = document.getElementById("svgId");
                let seleteDocument = myDocument.getSVGDocument().getElementById(cellIds);
                if(seleteDocument!=null){
                  seleteDocument.setAttributeNS(null, "fill", "#6DFDFD");
                  seleteDocument.setAttributeNS(null, "opacity", "0.5");
                  for(let c = 0 ;c <_this.cellIdLists.length;c++){
                    if(_this.cellIdLists[c]==cellIds){
                      _this.cellIdLists.splice(c,1);
                    }
                  }
                }
              }
            }
            if(dataList.length==0){
              _this.restSvgDocuments();
            }
          }).catch(function(err){
            console.log(err);
          });
        }else{
          _this.restSvgDocuments();
        }
      }
    },
    created(){
      this.getWirelessInfos();
    },
    mounted(){
      setTimeout(() => {
        this.addSvgClick();
        this.reWirelessInfoByParam();
      }, 1000)
      this.getHeavyLoadParam();
    },
  }

</script>

<style>
</style>
