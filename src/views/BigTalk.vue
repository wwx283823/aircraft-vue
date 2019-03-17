<template>
　　<div id="bodyHtml">
      <div class="container-fluid">
        <!--<div class="row" style="margin-top: 15px;">-->
          <!--<div class="col-xs-3 col-sm-3 col-md-3">-->
            <!--<label class="bodyHtmlLabel">调整策略:</label>-->
            <!--<select v-model="HeavyLoadParam.type" class="bigTalkSelect">-->
              <!--<option v-for="item in options" :value="item.value">-->
                <!--{{item.name}}-->
              <!--</option>-->
            <!--</select>-->
          <!--</div>-->
          <!--<div v-show="HeavyLoadParam.type==0" class="col-xs-7 col-sm-7 col-md-7"　>-->
            <!--<label class="bodyHtmlLabel">总开关</label>-->
            <!--<select class="bigTalkSelect" v-model="HeavyLoadParam.openClose">-->
              <!--<option value="1">开</option>-->
              <!--<option value="0">关</option>-->
            <!--</select>-->
            <!--<label class="bodyHtmlLabel">上行RB利用率</label>-->
            <!--<input type="text" class="bigTalkInput"  v-model="HeavyLoadParam.ulrbmaxrate" />-->
            <!--<label class="bodyHtmlLabel">下行RB利用率</label>-->
            <!--<input  type="text" class="bigTalkInput" v-model="HeavyLoadParam.dlrbmaxrate" />-->
            <!--<label class="bodyHtmlLabel">用户数开关</label>-->
            <!--<select class="bigTalkSelect" v-model="HeavyLoadParam.usercntsw">-->
              <!--<option value="1">开</option>-->
              <!--<option value="0">关</option>-->
            <!--</select>-->
            <!--<label class="bodyHtmlLabel">用户数步长</label>-->
            <!--<input  type="text" class="bigTalkInput" v-model="HeavyLoadParam.usercnt" />-->
            <!--<button @click="subBigTalkByCellId" type="button" class="btn btn-info" >调整</button>-->
          <!--</div>-->
          <!--<div v-show="HeavyLoadParam.type==1">-->
            <!--<label class="bodyHtmlLabel">总开关</label>-->
            <!--<select class="bigTalkSelect" v-model="HeavyLoadParam.openClose">-->
              <!--<option value="1">开</option>-->
              <!--<option value="0">关</option>-->
            <!--</select>-->
            <!--<label class="bodyHtmlLabel">最大上行干扰</label>-->
            <!--<input  type="text" class="bigTalkInput"  v-model="HeavyLoadParam.ulcellmaxinterference" />-->
            <!--<label class="bodyHtmlLabel">用户数开关</label>-->
            <!--<select  v-model="HeavyLoadParam.usercntsw" class="bigTalkSelect">-->
              <!--<option value="1">开</option>-->
              <!--<option value="0">关</option>-->
            <!--</select>-->
            <!--<label  class="bodyHtmlLabel">RSRP门限开关</label>-->
            <!--<select v-model="HeavyLoadParam.rsrpdeltasw" class="bigTalkSelect">-->
              <!--<option value="1">开</option>-->
              <!--<option value="0">关</option>-->
            <!--</select>-->
            <!--<label class="bodyHtmlLabel">RS功率开关</label>-->
            <!--<select  v-model="HeavyLoadParam.rspwrdeltasw" class="bigTalkSelect">-->
              <!--<option value="1">开</option>-->
              <!--<option value="0">关</option>-->
            <!--</select>-->
            <!--<label class="bodyHtmlLabel" >用户数步长</label>-->
            <!--<input  type="text" class="bigTalkInput" v-model="HeavyLoadParam.usercnt" />-->
            <!--<label class="bodyHtmlLabel">RSRP门限步长</label>-->
            <!--<input  type="text" class="bigTalkInput" v-model="HeavyLoadParam.rsrpdelta" />-->
            <!--<label class="bodyHtmlLabel">RS功率步长</label>-->
            <!--<input  type="text" class="bigTalkInput" v-model="HeavyLoadParam.rspwrdelta" />-->
            <!--<button @click="subBigTalkByCellId" type="button" class="btn btn-info" >调整</button>-->
          <!--</div>-->
          <!--<div v-show="HeavyLoadParam.type==2">-->
            <!--<label class="bodyHtmlLabel">总开关</label>-->
            <!--<select class="bigTalkSelect" v-model="HeavyLoadParam.openClose">-->
              <!--<option value="1">开</option>-->
              <!--<option value="0">关</option>-->
            <!--</select>-->
            <!--<label class="bodyHtmlLabel">最大用户数门限</label>-->
            <!--<input  type="text" class="bigTalkInput" v-model="HeavyLoadParam.maxcelluser" />-->
            <!--<label class="bodyHtmlLabel">与邻区用户数超出比例</label>-->
            <!--<input  type="text" class="bigTalkInput" v-model="HeavyLoadParam.neibouruserrate" />-->
            <!--<label class="bodyHtmlLabel">上行RB利用率</label>-->
            <!--<input type="text" class="bigTalkInput"  v-model="HeavyLoadParam.ulrbmaxrate" />-->
            <!--<label class="bodyHtmlLabel">用户数开关</label>-->
            <!--<select class="bigTalkSelect" v-model="HeavyLoadParam.usercntsw" >-->
              <!--<option value="1">开</option>-->
              <!--<option value="0">关</option>-->
            <!--</select>-->
            <!--<label class="bodyHtmlLabel">RS功率开关</label>-->
            <!--<select class="bigTalkSelect" v-model="HeavyLoadParam.rspwrdeltasw">-->
              <!--<option value="1">开</option>-->
              <!--<option value="0">关</option>-->
            <!--</select>-->
            <!--<label class="bodyHtmlLabel">用户数步长</label>-->
            <!--<input  type="text" class="bigTalkInput" v-model="HeavyLoadParam.usercnt" />-->
            <!--<label class="bodyHtmlLabel">RS功率步长</label>-->
            <!--<input  type="text" class="bigTalkInput" v-model="HeavyLoadParam.rspwrdelta" />-->
            <!--<button @click="subBigTalkByCellId" type="button" class="btn btn-info" >调整</button>-->
          <!--</div>-->

        <!--</div>-->
        <div class="row">
          <div class="col-xs-6 col-sm-12 col-md-6">
            <embed id="svgId" style="width: 96%;height: 100%" src="../../static/images/u5-2F.svg" type="image/svg+xml" />
          </div>
          <div class="col-xs-6 col-md-6 col-sm-12" style="">
            <!--<ul class="nav nav-tabs" style="border-bottom:0px">-->
              <!--<li class="active">-->
                <!--<a href="#home"　 data-toggle="tab" @click="getEchartsDataByCellId(myCellId)">-->
                  <!--当前数据图表-->
                <!--</a>-->
              <!--</li>-->
              <!--<li ><a href="#ios" data-toggle="tab" @click="getHistoryBigTalkByCellId(myCellId)">历史调整记录</a></li>-->
            <!--</ul>-->
            <!--<div class="tab-content">-->
              <!--<div class="tab-pane fade  in active" id="home">-->
                <div id="myChart3" :style="{ height: '250px'}"></div>
                <div id="myChart" :style="{ height: '250px'}"></div>
                <div id="myChart2" :style="{ height: '250px'}"></div>
              <!--</div>-->
              <!--<div class="tab-pane fade " id="ios">-->
                <!--<v-table-->
                  <!--is-vertical-resize-->
                  <!--style="width:100%"-->
                  <!--is-horizontal-resize-->
                  <!--:vertical-resize-offset='300'-->
                  <!--:min-height='150'-->
                  <!--:max-height='600'-->
                  <!--:columns="columns"-->
                  <!--:table-data="historyTableData"-->
                  <!--row-hover-color="#eee"-->
                  <!--row-click-color="#edf7ff"-->
                <!--&gt;</v-table>-->
              <!--</div>-->
            <!--</div>-->
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
        historyData:[],
        myParamTime:"",
        timer:'',
        historyTableData:[],
        myCellIdList:['16','17','18'],
        options:[
          {
            name:'频点间基于用户数的快速负载均衡',
            value:0
          },
          {
            name:'基于干扰的快速负载均衡',
            value:1
          },
          {
            name:'基于用户数的快速调整',
            value:2
          }
          ],
        HeavyLoadParam:{
          type:'0',
          effecttype:'0',
          ulcellmaxinterference:'0',
          ulrbmaxrate:'0',
          dlrbmaxrate:'0',
          usercntsw:'1',
          rsrpdeltasw:'1',
          rspwrdeltasw:'1',
          usercnt:'0',
          rsrpdelta:'0',
          rspwrdelta:'0',
          maxcelluser:'0',
          neibouruserrate:'0',
          cellId:'',
          openClose:'1'
        },
        myCellId:this.$route.params.cellId,
        myShow:false,
        cellIdLists:[],
        columns: [
          {field: 'type', title: '调整策略', width: 30, titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'ulrbmaxrate', title: '上行RB利用率(%)', width: 15, titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'dlrbmaxrate', title: '下行RB利用率(%)', width: 15, titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'ulcellmaxinterference', title: '最大上行干扰(dBm)', width: 20, titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'maxcelluser', title: '最大用户数门限', width: 30, titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'neibouruserrate', title: '与邻区用户数超出比例 (%)', width: 30, titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'usercntsw', title: '用户数开关', width: 15, titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'rsrpdeltasw', title: 'RSRP门限开关', width: 15, titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'rspwrdeltasw', title: 'RS功率开关', width: 15, titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'usercnt', title: '用户数步长', width: 15, titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'rsrpdelta', title: 'RSRP门限步长', width: 15, titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'rspwrdelta', title: 'RS功率步长', width: 15, titleAlign: 'center', columnAlign: 'center',isResize:true}

        ],
        myChartsOption1:{},
        myChartsOption2:{},
        myChartsOption3:{}
      }
    },
    methods:{
      getEchartsDataByCellId(cellId){
        if(this.timer!=null){
          clearTimeout(this.timer);
        }
        let _this = this;
        _this.myChartsOption1 = '';
        _this.myChartsOption2 = '';
        _this.myChartsOption3 = '';
        axios.get('/api/getEchartsDataByCellId',{
          params:
            {'ulServiceCellId':cellId}
        }).
        then(function(response){
          let resultData = response.data;
          _this.echartsDataFormat(resultData);
        }).catch(function(err){
          console.log(err);
        });
        _this.timer = setTimeout(function()  {
          if(_this.$route.path.split("bigTalk").length>1){
             _this.refreshEchartsDataByCellId(cellId)//娃娃消失
          }
        }, 4000);
      },
      refreshEchartsDataByCellId(cellId){
        let myChart = this.$echarts.init(document.getElementById("myChart"));
        let myChart2 = this.$echarts.init(document.getElementById("myChart2"));
        let myChart3 = this.$echarts.init(document.getElementById("myChart3"));
        let option1 = this.myChartsOption1;
        let option2 = this.myChartsOption2;
        let option3 = this.myChartsOption3;
        let series1 = option1.series[0].data;
        let series4 = option3.series[0].data;
        let series2 = option2.series[0].data;
        let series3 = option2.series[1].data;
        let dataLength = option1.xAxis.data.length;
        let allTime = option1.xAxis.data;
        let dataTime = option1.xAxis.data[dataLength-1];
        let paramTime = null;
        if(dataTime==undefined){
          paramTime = null;
        }else{
          if(this.myParamTime==""){
            let nowDate = new Date();
            paramTime = nowDate.getFullYear()+"-"+parseInt(nowDate.getMonth()+1)+"-"+nowDate.getDate()+" "+dataTime;
          }else{
            let times = this.myParamTime.split("T")[1].split(".")[0];
            let timesSet = times.split(":");
            let result = parseInt(timesSet[0])+8;
            if(result>23){
              result = result-24;
            }
            paramTime = this.myParamTime.split("T")[0]+" "+result+":"+timesSet[1]+":"+timesSet[2];
          }
        }
        let _this = this;
        axios.get('/api/refreshEchartsDataByCellId',{
          params:
            {'ulServiceCellId':cellId,
            'times':paramTime}
        }).
        then(function(response){
          let resultData = response.data;
          let count = 0;
          let ucULRbRate = 0;
          let ucDLRbRate = 0;
          let ulCellInterference = 0;
          let newTimes = null;
          let resultTime = null;
          if(resultData!=null){
            count = resultData.usMaxUserNum;
            ucULRbRate = resultData.ucULRbRate;
            ucDLRbRate = resultData.ucDLRbRate;
            newTimes = resultData.timestamp;
            ulCellInterference = resultData.ulCellInterference;
            _this.myParamTime = newTimes;
            let times = newTimes.split("T")[1].split(".")[0];
            let timesSet = times.split(":");
            let result = parseInt(timesSet[0])+8;
            if(result>23){
              result = result-24;
            }
            resultTime = (result+":"+timesSet[1]+":"+timesSet[2]);
          }
          if(dataLength>29){
            allTime.shift();
            allTime.push(resultTime);
            series1.shift();
            series2.shift();
            series3.shift();
            series4.shift();
            series1.push(count);
            series2.push(ucULRbRate);
            series3.push(ucDLRbRate);
            series4.push(ulCellInterference);
          }else{
            allTime.push(resultTime);
            series1.push(count);
            series2.push(ucULRbRate);
            series3.push(ucDLRbRate);
            series4.push(ulCellInterference);
          }
          option1.series[0].data = series1;
          option2.series[0].data = series2;
          option2.series[1].data = series3;
          option3.series[0].data = series4;
          option1.xAxis.data = allTime;
          option2.xAxis.data = allTime;
          option3.xAxis.data = allTime;
          _this.myChartsOption1 = option1;
          _this.myChartsOption2 = option2;
          _this.myChartsOption3 = option3;
          myChart.setOption(option1);
          myChart2.setOption(option2)
          myChart3.setOption(option3)

        }).catch(function(err){
          console.log(err);
        });
        _this.timer = setTimeout(function()  {
          if(_this.$route.path.split("bigTalk").length>1){
            _this.refreshEchartsDataByCellId(cellId)//娃娃消失
          }
        }, 4000);
      },
      historyDataFormat(historyData){
        for (let i=0;i<historyData.length;i++){
          if(historyData[i].type==0){
            historyData[i].type = '频点间基于用户数的快速负载均衡';
            historyData[i].ulcellmaxinterference = '无';
            historyData[i].maxcelluser = '无';
            historyData[i].neibouruserrate = '无';
            historyData[i].rsrpdeltasw = '无';
            historyData[i].rspwrdeltasw = '无';
            historyData[i].rsrpdelta = '无';
            historyData[i].rspwrdelta = '无';
            if(historyData[i].usercntsw==0){
              historyData[i].usercnt = '无'
            }
          }
          if(historyData[i].type==1){
            historyData[i].type = '基于干扰的快速负载均衡';
            historyData[i].ulrbmaxrate = '无';
            historyData[i].dlrbmaxrate = '无';
            historyData[i].maxcelluser = '无';
            historyData[i].neibouruserrate = '无';
            if(historyData[i].usercntsw==0){
              historyData[i].usercnt = '无'
            }
            if(historyData[i].rsrpdeltasw==0){
              historyData[i].rsrpdelta = '无'
            }
            if(historyData[i].rspwrdeltasw==0){
              historyData[i].rspwrdelta = '无'
            }
          }
          if(historyData[i].type==2){
            historyData[i].type = '基于用户数的快速调整';
            historyData[i].rsrpdeltasw = '无';
            historyData[i].rsrpdelta = '无';
            historyData[i].ulcellmaxinterference = '无';
            historyData[i].dlrbmaxrate = '无';
            if(historyData[i].usercntsw==0){
              historyData[i].usercnt = '无'
            }
            if(historyData[i].rspwrdeltasw==0){
              historyData[i].rspwrdelta = '无'
            }
          }
          if(historyData[i].usercntsw==0){
            historyData[i].usercntsw = '关闭'
          }
          if(historyData[i].usercntsw==1){
            historyData[i].usercntsw = '开启'
          }
          if(historyData[i].rsrpdeltasw==0){
            historyData[i].rsrpdeltasw = '关闭'
          }
          if(historyData[i].rsrpdeltasw==1){
            historyData[i].rsrpdeltasw = '开启'
          }
          if(historyData[i].rspwrdeltasw==0){
            historyData[i].rspwrdeltasw = '关闭'
          }
          if(historyData[i].rspwrdeltasw==1){
            historyData[i].rspwrdeltasw = '开启'
          }
        }
        return historyData;
      },
      redSvgDocuments(cellId){
        let myDocument = document.getElementById("svgId");
        let seleteDocument = myDocument.getSVGDocument().getElementById(cellId);
        if(seleteDocument!=null){
          seleteDocument.setAttributeNS(null, "fill", "red");
          this.cellIdLists.push(cellId);
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
      subBigTalkByCellId(){
          let _this = this;
          let checked = this.checkFunction(this.HeavyLoadParam);
          if(!checked){
            this.HeavyLoadParam.cellId = this.myCellId;
            axios.get('/api/subBigTalkByCellId',{
              params:
              this.HeavyLoadParam
            }).
            then(function(response){
              let result = response.data;
              if(result=="success"){
                alert("调整成功！");
                _this.getHistoryBigTalkByCellId(_this.myCellId);
              }else {
                alert("调整失败！");
              }
            }).catch(function(err){
              console.log(err);
            });
          }
      },
      addColorOrTip(e){
        this.restSvgDocuments();
        this.cellIdLists.push(e.getAttribute("id"));
         e.setAttributeNS(null, "fill", "red");
      },
      getHistoryBigTalkByCellId(cellId){
        let _this = this;
        axios.get('/api/getHistoryBigTalkByCellId',{
          params:
            {'cellId':cellId}
        }).
        then(function(response){
            let resultData = response.data;
            _this.historyTableData = _this.historyDataFormat(resultData);
        }).catch(function(err){
          console.log(err);
        });

      },
      myDblclick(e,event){
//        alert("123");
//        let myE = e.getBoundingClientRect();
//        let myTop = myE.top;
//        let myLeft = myE.left;
//        this.myShow = true;
//        let elem=document.getElementById("showId");//获取控件
//        elem.style.position = "absolute";//设置绝对定位（或者相对定位）
//        elem.style.left = myTop+"px";//设置left数值
//        elem.style.top =  myLeft+"px";//设置top数值
        var oEvent= event;
        var oDiv=document.createElement('div');
        oDiv.style.left=oEvent.clientX+'px';  // 指定创建的DIV在文档中距离左侧的位置
        oDiv.style.top=oEvent.clientY+'px';  // 指定创建的DIV在文档中距离顶部的位置
        oDiv.style.border='1px solid #FF0000'; // 设置边框
        oDiv.style.position='absolute'; // 为新创建的DIV指定绝对定位
        oDiv.style.width='200px'; // 指定宽度
        oDiv.style.height='200px'; // 指定高度
        document.body.appendChild(oDiv);

      },
      addSvgClick(){
        let _this = this;
        let myDocument = document.getElementById("svgId");
        for (let i = 0 ; i <_this.myCellIdList.length;i++){
          let cellId = _this.myCellIdList[i];
          myDocument.getSVGDocument().getElementById(cellId).addEventListener("click",function() {
            _this.myCellId = cellId;
            _this.addColorOrTip(this);
            // _this.getHistoryBigTalkByCellId(cellId);
            _this.getEchartsDataByCellId(cellId);

          });
        }
        // let sss = "cellId13";
        // myDocument.getSVGDocument().getElementById(sss).addEventListener("click",function() {
        //   _this.addColorOrTip(this);
        //   _this.getHistoryBigTalkByCellId(sss);
        // });
        // myDocument.getSVGDocument().getElementById("cellId2").addEventListener("click",function() {
        //   _this.addColorOrTip(this);
        //   _this.getHistoryBigTalkByCellId("cellId2");
        // });
        // myDocument.getSVGDocument().getElementById("cellId1").addEventListener("click",function() {
        //   _this.addColorOrTip(this);
        //   _this.getHistoryBigTalkByCellId("cellId1");
        // });
        // myDocument.getSVGDocument().getElementById("cellId4").addEventListener("click",function() {
        //   _this.addColorOrTip(this);
        //   _this.getHistoryBigTalkByCellId("cellId4");
        // });
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
      echartsDataFormat(ehartsData){
        let maxUserData = [];
        let maxinterferenceData = [];
        let ulrbmaxrateData = [];
        let dlrbmaxrateData = [];
        let xData = [];
        let maxSeries = [];
        let maxinterference = [];
        let rbmaxrateSeries = [];
        let maxName = '用户数';
        let interfrenceName = "小区干扰"
        let ulName = '上行RB利用率';
        let dlName = '下行RB利用率';
        let legendUlData = [];
        let legendUserData = [];
        let legendInterfrenceData = [];
        legendUlData.push(ulName);
        legendUlData.push(dlName);
        legendUserData.push(maxName);
        legendInterfrenceData.push(interfrenceName);
        for (let i = 0;i<ehartsData.length;i++){
          let models = ehartsData[i];
          maxUserData.push(models.usMaxUserNum);
          maxinterferenceData.push(models.ulCellInterference)
          ulrbmaxrateData.push(models.ucULRbRate);
          dlrbmaxrateData.push(models.ucDLRbRate);
          let times = models.timestamp.split("T")[1].split(".")[0];
          let timesSet = times.split(":");
          let result = parseInt(timesSet[0])+8
          if(result>23){
            result = result-24;
          }
          xData.push(result+":"+timesSet[1]+":"+timesSet[2]);
        }
        let userJson = {
          name:maxName,
          type:'line',
          areaStyle: {
            opacity:0.3
          },
          symbol:'none',  //这句就是去掉点的
          smooth:true,  //这句就是让曲线变平滑的
          itemStyle: {
            normal: {   //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1,[{
                  offset: 0, color: '#d7f4f8' // 0% 处的颜色
                }, {
                  offset: 0.5, color: '#eefcfd' // 100% 处的颜色
                }, {
                  offset: 1, color: '#fff' // 100% 处的颜色
                }]
              ),  //背景渐变色
              lineStyle: {        // 系列级个性化折线样式
                width: 3,
                type: 'solid',
                color: "#4fd6d2"
              }
            },
            emphasis: {
              color: '#4fd6d2',
              lineStyle: {        // 系列级个性化折线样式
                width:2,
                type: 'dotted',
                color: "#4fd6d2" //折线的颜色
              }
            }
          },
          data:maxUserData
        };
        let interferenceJson = {
          name:interfrenceName,
          type:'line',
          areaStyle: {
            opacity:0.3
          },
          symbol:'none',  //这句就是去掉点的
          smooth:true,  //这句就是让曲线变平滑的
          data:maxinterferenceData
        };
        maxSeries.push(userJson);
        maxinterference.push(interferenceJson);
        let rbmaxrateJson1 = {
          name:ulName,
          type:'line',
          areaStyle: {
            opacity:0.3
          },
          symbol:'none',  //这句就是去掉点的
          smooth:true,  //这句就是让曲线变平滑的
          data:ulrbmaxrateData
        };
        let rbmaxrateJson2 = {
          name:dlName,
          type:'line',
          areaStyle: {
            opacity:0.3
          },
          symbol:'none',  //这句就是去掉点的
          smooth:true,  //这句就是让曲线变平滑的
          data:dlrbmaxrateData
        };
        rbmaxrateSeries.push(rbmaxrateJson1);
        rbmaxrateSeries.push(rbmaxrateJson2);
        this.myChartsOption1 = this.drawLine('myChart',xData,legendUserData,maxSeries,'(人)','当前用户数');
        this.myChartsOption2 = this.drawLine('myChart2',xData,legendUlData,rbmaxrateSeries,'(%)','RB利用率');
        this.myChartsOption3 = this.drawLine('myChart3',xData,legendInterfrenceData,maxinterference,'(dBm)','小区干扰');
      },
      drawLine(echartId,ehartsX,echartslegend,ehartsSeries,danwei,myTitle){

        let myChart = this.$echarts.init(document.getElementById(echartId));
        // myChart.resize();
        let options = {
          title: {
            text: myTitle,
            textStyle:{
              color:'#ffffff',
              fontSize:18
            }
          },
          toolbox: {
            show : true,
            feature : {
              saveAsImage : {show: true}
            },
            // iconStyle:{
            //   normal:{
            //     color:'white',//设置颜色
            //   }
            // }
          },
          tooltip: {
            trigger:'axis',
            axisPointer:{
              type:'cross',
              label:{
                backgroundColor:'#283b56'
              }
            }
          },
          color:['#fbcc8a','#ad5cf8'],
          legend:{
            data:echartslegend,
            textStyle:{
              color:['#fbcc8a','#ad5cf8'],
              fontSize:18
            }

          },
          xAxis: {
            type:'category',
            boundaryGap: false,
            data: ehartsX,
            axisLine:{
              onZero:true,
              lineStyle:{
                color:'#fbd01b',
                width:5
              }
            },
            axisLabel:{
              textStyle:{
                color:'#ffffff',
                fontSize:18
              }
            }
          },
          yAxis: {
            name:danwei,
            // min:0,
            nameTextStyle:{
              color:'#ffffff',
              fontSize:18
            },
            type:'value',
            scale:true,
            splitLine:{
              show:false
            },
            axisLine:{
              lineStyle:{
                color:'#fbd01b',
                width:5
              }
            },
            axisLabel:{
              textStyle:{
                color:'#ffffff',
                fontSize:18
              }
            }
          },
          series: ehartsSeries
        };
        // 绘制图表
        myChart.setOption(options);
        return options;
      },
      checkFunction(data){
        if(data.type!=null){
          if(data.type=="0"){
            if(data.ulrbmaxrate.trim()==''){
              alert("请输入上行RB利用率");
              return false;
            }
            if(data.dlrbmaxrate.trim()==''){
              alert("请输入下行RB利用率");
              return false;
            }
            if(data.usercntsw.trim()=='1'){
              if(data.usercnt.trim()==''){
                alert("请输入用户数步长");
                return false;
              }
            }
          }else if(data.type=="1"){
            if(data.ulcellmaxinterference.trim()==''){
              alert("请输入最大上行干扰");
              return false;
            }
            if(data.usercntsw.trim()=='1'){
              if(data.usercnt.trim()==''){
                alert("请输入用户数步长");
                return false;
              }
            }
            if(data.rsrpdeltasw.trim()=='1'){
              if(data.rsrpdelta.trim()==''){
                alert("请输入RSRP门限步长");
                return false;
              }

            }
            if(data.rspwrdeltasw.trim()=='1'){
              if(data.rspwrdelta.trim()==''){
                alert("请输入RS功率步长");
                return false;
              }
            }
          }else if(data.type=="2"){
            if(data.maxcelluser.trim()==''){
              alert("请输入最大用户数门限");
              return false;
            }
            if(data.neibouruserrate.trim()==''){
              alert("请输入与邻区用户数超出比例");
              return false;
            }
            if(data.ulrbmaxrate.trim()==''){
              alert("请输入上行RB利用率");
              return false;
            }
            if(data.usercntsw.trim()=='1'){
              if(data.usercnt.trim()==''){
                alert("请输入用户数步长");
                return false;
              }
            }
            if(data.rspwrdeltasw.trim()=='1'){
              if(data.rspwrdelta.trim()==''){
                alert("请输入RS功率步长");
                return false;
              }
            }
//            this.HeavyLoadParam.cellId = this.$route.params.cellId;
          }else{
            alert("调整策略类型不匹配！");
          }
        }else{
          alert("请选择调整策略！");
        }
      }
    },
    created(){
//      this.getWirelessInfos();
    },
    mounted(){
      setTimeout(() => {
        if(this.myCellId!=null){
          this.redSvgDocuments(this.myCellId);
        }else{
          this.redSvgDocuments();
        }
        this.addSvgClick();
      }, 1000)
      this.getEchartsDataByCellId(this.myCellId);
      this.getHistoryBigTalkByCellId(this.myCellId);

    },
  }

</script>

<style>
</style>
