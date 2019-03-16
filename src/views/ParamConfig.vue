<template>
　　<div id="paramConfig">
      <div class="container-fluid">
        <div class="row" style="margin-top: 15px;">
          <div class="row">
            <div class="col-xs-3 col-sm-3 col-md-3">
              <label class="bodyHtmlLabel">频点间基于用户数的快速负载均衡:</label>
              <select v-model="HeavyLoadParam.type" class="bigTalkSelect">
                <option value="1">开</option>
                <option value="0">关</option>
              </select>
            </div>
            <div class="col-xs-7 col-sm-7 col-md-7"　>
              <label class="bodyHtmlLabel">上行RB利用率</label>
              <input type="text" class="bigTalkInput"  v-model="HeavyLoadParam.ulrbmaxrate" />
              <label class="bodyHtmlLabel">下行RB利用率</label>
              <input  type="text" class="bigTalkInput" v-model="HeavyLoadParam.dlrbmaxrate" />
              <!--<label class="bodyHtmlLabel">用户数开关</label>-->
              <select v-show="false" class="bigTalkSelect" v-model="HeavyLoadParam.usercntsw">
                <option value="1">开</option>
                <option value="0">关</option>
              </select>
              <label class="bodyHtmlLabel">用户数步长</label>
              <input  type="text" class="bigTalkInput" v-model="HeavyLoadParam.usercnt" />
            </div>
          </div>
          <div class="row">
            <div class="col-xs-3 col-sm-3 col-md-3">
              <label class="bodyHtmlLabel">基于干扰的快速负载均衡:</label>
              <select v-model="HeavyLoadParam.type" class="bigTalkSelect">
                <option value="1">开</option>
                <option value="0">关</option>
              </select>
            </div>
            <div class="col-xs-9 col-sm-12 col-md-9">
              <label class="bodyHtmlLabel">最大上行干扰</label>
              <input  type="text" class="bigTalkInput"  v-model="HeavyLoadParam.ulcellmaxinterference" />
              <label class="bodyHtmlLabel">用户数开关</label>
              <select  v-model="HeavyLoadParam.usercntsw" class="bigTalkSelect">
                <option value="1">开</option>
                <option value="0">关</option>
              </select>
              <label  class="bodyHtmlLabel">RSRP门限开关</label>
              <select v-model="HeavyLoadParam.rsrpdeltasw" class="bigTalkSelect">
                <option value="1">开</option>
                <option value="0">关</option>
              </select>
              <label class="bodyHtmlLabel">RS功率开关</label>
              <select  v-model="HeavyLoadParam.rspwrdeltasw" class="bigTalkSelect">
                <option value="1">开</option>
                <option value="0">关</option>
              </select>
              <label class="bodyHtmlLabel" >用户数步长</label>
              <input  type="text" class="bigTalkInput" v-model="HeavyLoadParam.usercnt" />
              <label class="bodyHtmlLabel">RSRP门限步长</label>
              <input  type="text" class="bigTalkInput" v-model="HeavyLoadParam.rsrpdelta" />
              <label class="bodyHtmlLabel">RS功率步长</label>
              <input  type="text" class="bigTalkInput" v-model="HeavyLoadParam.rspwrdelta" />
            </div>
          </div>
          <div class="row">
            <div class="col-xs-3 col-sm-3 col-md-3">
              <label class="bodyHtmlLabel">基于用户数的快速调整:</label>
              <select v-model="HeavyLoadParam.type" class="bigTalkSelect">
                <option value="1">开</option>
                <option value="0">关</option>
              </select>
            </div>
            <div  class="col-xs-9 col-sm-12 col-md-9">
              <label class="bodyHtmlLabel">总开关</label>
              <select class="bigTalkSelect" v-model="HeavyLoadParam.openClose">
                <option value="1">开</option>
                <option value="0">关</option>
              </select>
              <label class="bodyHtmlLabel">最大用户数门限</label>
              <input  type="text" class="bigTalkInput" v-model="HeavyLoadParam.maxcelluser" />
              <label class="bodyHtmlLabel">与邻区用户数超出比例</label>
              <input  type="text" class="bigTalkInput" v-model="HeavyLoadParam.neibouruserrate" />
              <label class="bodyHtmlLabel">上行RB利用率</label>
              <input type="text" class="bigTalkInput"  v-model="HeavyLoadParam.ulrbmaxrate" />
              <label class="bodyHtmlLabel">用户数开关</label>
              <select class="bigTalkSelect" v-model="HeavyLoadParam.usercntsw" >
                <option value="1">开</option>
                <option value="0">关</option>
              </select>
              <label class="bodyHtmlLabel">RS功率开关</label>
              <select class="bigTalkSelect" v-model="HeavyLoadParam.rspwrdeltasw">
                <option value="1">开</option>
                <option value="0">关</option>
              </select>
              <label class="bodyHtmlLabel">用户数步长</label>
              <input  type="text" class="bigTalkInput" v-model="HeavyLoadParam.usercnt" />
              <label class="bodyHtmlLabel">RS功率步长</label>
              <input  type="text" class="bigTalkInput" v-model="HeavyLoadParam.rspwrdelta" />
            </div>
          </div>
          <button @click="subBigTalkByCellId" type="button" class="btn btn-info" >调整</button>
        </div>
        <div class="row">
          <div class="col-xs-12 col-md-12 col-sm-12" style="padding-top: 1.5%;">
            <div class="row">
              <div class="col-xs-1 col-md-1 col-sm-2">
                <h4 style="    color: aqua;">历史调整记录</h4>
              </div>
            </div>
            <v-table
              is-vertical-resize
              style="width:100%"
              is-horizontal-resize
              :vertical-resize-offset='300'
              :min-height='150'
              :max-height='600'
              :columns="columns"
              :table-data="historyTableData"
              row-hover-color="#eee"
              row-click-color="#edf7ff"
            ></v-table>
          </div>
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
        timer:'',
        historyTableData:[],
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

        ]
      }
    },
    methods:{
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
      this.getHistoryBigTalkByCellId(this.myCellId);
    },
  }

</script>

<style>
</style>
