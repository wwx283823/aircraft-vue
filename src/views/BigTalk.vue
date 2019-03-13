<template>
　　<div id="bodyHtml">
      <div class="container-fluid">
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
            <embed id="svgId" style="width: 100%;height: 100%" src="../../static/images/3F.svg" type="image/svg+xml" />
          </div>
          <div class="col-xs-6 col-md-6 col-sm-12" style="padding-top: 1.5%;">
            <h5>小区历史调整记录</h5>
            <v-table
              is-vertical-resize
              style="width:100%"
              is-horizontal-resize
              :vertical-resize-offset='300'
              :min-height='150'
              :max-height='400'
              :columns="columns"
              :table-data="myTableData"
              row-hover-color="#eee"
              row-click-color="#edf7ff"
            ></v-table>
            <div id="myChart" :style="{ height: '300px'}"></div>
          </div>
          <div id="showId" >hello world
          asdadasdasdad
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
        myCellId:this.$route.params.cellId,
        myParam:{
          userCnt:10,
          cellInterference:-101,
          ucULRbRate:56,
          ucDLRbRate:45
        },
        myShow:false,
        cellIdLists:[],
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
            seleteDocument.setAttributeNS(null, "fill", "#FEEEFF");
          }
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
      addColorOrTip(e){
          if(e.getAttribute("fill")=="red"){
//            alert(e.getAttribute("id"));
            this
          }else{
            this.restSvgDocuments();
            this.cellIdLists.push(e.getAttribute("id"));
             e.setAttributeNS(null, "fill", "red");
          }
      },
      myDblclick(e){
//        alert("123");
//        let myE = e.getBoundingClientRect();
//        let myTop = myE.top;
//        let myLeft = myE.left;
//        this.myShow = true;
//        let elem=document.getElementById("showId");//获取控件
//        elem.style.position = "absolute";//设置绝对定位（或者相对定位）
//        elem.style.left = myTop+"px";//设置left数值
//        elem.style.top =  myLeft+"px";//设置top数值
        var oEvent=event;
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
        let sss = "cellId13";
        myDocument.getSVGDocument().getElementById(sss).addEventListener("click",function() {
          _this.addColorOrTip(this);
        });
        myDocument.getSVGDocument().getElementById("cellId2").addEventListener("click",function() {
          _this.addColorOrTip(this);
        });
        myDocument.getSVGDocument().getElementById("cellId1").addEventListener("click",function() {
          _this.addColorOrTip(this);
        });
        myDocument.getSVGDocument().getElementById("cellId4").addEventListener("click",function() {
          _this.addColorOrTip(this);
        });
        myDocument.getSVGDocument().getElementById("cellId4").addEventListener("dblclick",function() {
          _this.myDblclick(this);
        });
        myDocument.getSVGDocument().getElementById("cellId13").addEventListener("dblclick",function() {
          _this.myDblclick(this);
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
      drawLine(){
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
          title: { text: '在Vue中使用echarts' },
          tooltip: {},
          xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        });
      }
    },

    created(){
      this.getWirelessInfos();
    },
    mounted(){
      setTimeout(() => {
        if(this.myCellId!=null){
          this.redSvgDocuments(this.myCellId);
        }else{
          this.redSvgDocuments("2");
        }
        this.addSvgClick();
      }, 1000)
      this.drawLine();

    },
  }

</script>

<style>
</style>
