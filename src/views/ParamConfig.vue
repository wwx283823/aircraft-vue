<template>
　　<div id="paramConfig">
      <div class="container-fluid">
        <div class="row" style="margin-top: 40px;    margin-right: 9%;">
            <div class="col-xs-12 col-sm-12 col-md-12 paramDiv">
              <div class="col-xs-6 col-sm-6 col-md-6" style="text-align: right">
                <label class="paramLabel">频点间基于用户数的快速负载均衡:</label>
                <select v-model="HeavyLoadParam.type3" class="bigTalkSelect">
                  <option value="1">开</option>
                  <option value="0">关</option>
                </select>

                <label class="paramLabel">用户数开关</label>
                <select  class="bigTalkSelect" v-model="HeavyLoadParam.usercntsw">
                  <option value="1">开</option>
                  <option value="0">关</option>
                </select>
              </div>
              <div class="col-xs-6 col-sm-6 col-md-6" style="text-align: left;">
                <label class="paramLabel">上行RB利用率(%)</label>
                <input type="text" class="bigTalkInput"  v-model="HeavyLoadParam.ulrbmaxrate" />
                <label class="paramLabel">下行RB利用率(%)</label>
                <input  type="text" class="bigTalkInput" v-model="HeavyLoadParam.dlrbmaxrate" />
                <div v-show="HeavyLoadParam.usercntsw=='1'" class="paramLabel2">
                  <label class="paramLabel">用户数步长</label>
                  <input  type="text" class="bigTalkInput" v-model="HeavyLoadParam.usercnt" />
                </div>

              </div>
            </div>

            <!--<div class="col-xs-12 col-sm-12 col-md-12 paramButton">-->
              <!--<button @click="subBigTalkByCellId" type="button" class="btn btn-info paramMyButton" >调整</button>-->
            <!--</div>-->
        </div>
        <div class="row" style="margin-right: 9%;    margin-top: 60px;">
          <div class="col-xs-12 col-sm-12 col-md-12 paramDiv" >
            <div class="col-xs-6 col-sm-6 col-md-6" style="text-align: right">
              <label class="paramLabel">基于用户数的快速调整:</label>
              <select v-model="HeavyLoadParam.type2" class="bigTalkSelect">
                <option value="1">开</option>
                <option value="0">关</option>
              </select>

              <label class="paramLabel">用户数开关</label>
              <select  class="bigTalkSelect" v-model="HeavyLoadParam.usercntswk">
                <option value="1">开</option>
                <option value="0">关</option>
              </select>

              <label class="paramLabel">RS功率开关</label>
              <select class="bigTalkSelect" v-model="HeavyLoadParam.rspwrdeltasw">
                <option value="1">开</option>
                <option value="0">关</option>
              </select>
            </div>
            <div class="col-xs-6 col-sm-6 col-md-6" style="text-align: left;">
              <div class="col-xs-12 col-sm-12 col-md-12">
                <label class="paramLabel">上行RB利用率(%)</label>
                <input type="text" class="bigTalkInput"  v-model="HeavyLoadParam.ulrbmaxratek" />
                <label class="paramLabel">最大用户数门限</label>
                <input  type="text" class="bigTalkInput" v-model="HeavyLoadParam.maxcelluser" />
                <label class="paramLabel">与邻区用户数超出比例(%)</label>
                <input  type="text" class="bigTalkInput" v-model="HeavyLoadParam.neibouruserrate" />
              </div>


              <div class="col-xs-3 col-sm-3 col-md-3">
                <div v-show="HeavyLoadParam.usercntswk=='1'" class="paramLabel2">
                  <label class="paramLabel">用户数步长</label>
                  <input  type="text" class="bigTalkInput" v-model="HeavyLoadParam.usercntk" />
                </div>
              </div>
              <div class="col-xs-3 col-sm-3 col-md-3">
                <div v-show="HeavyLoadParam.rspwrdeltasw=='1'" class="paramLabel2" style="text-align: left">
                  <label class="paramLabel">RS功率步长</label>
                  <input  type="text" class="bigTalkInput" v-model="HeavyLoadParam.rspwrdelta" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row" style="margin-right: 9%;    margin-top: 60px;">
          <div class="col-xs-12 col-sm-12 col-md-12 paramDiv" >
            <div class="col-xs-6 col-sm-6 col-md-6" style="text-align: right;">
              <label class="paramLabel">基于干扰的快速负载均衡:</label>
              <select v-model="HeavyLoadParam.type1" class="bigTalkSelect">
                <option value="1">开</option>
                <option value="0">关</option>
              </select>

              <label class="paramLabel">用户数开关</label>
              <select  class="bigTalkSelect" v-model="HeavyLoadParam.usercntswg">
                <option value="1">开</option>
                <option value="0">关</option>
              </select>

              <label  class="paramLabel">RSRP高门限开关</label>
              <select v-model="HeavyLoadParam.rsrpdeltasw" class="bigTalkSelect">
                <option value="1">开</option>
                <option value="0">关</option>
              </select>

              <label class="paramLabel">RS功率开关</label>
              <select class="bigTalkSelect" v-model="HeavyLoadParam.rspwrdeltaswg">
                <option value="1">开</option>
                <option value="0">关</option>
              </select>
            </div>
            <div class="col-xs-6 col-sm-6 col-md-6" style="text-align: left;">
              <div class="col-xs-12 col-sm-12 col-md-12">
                <label class="paramLabel">最大上行干扰(dBm)</label>
                <input  type="text" class="bigTalkInput"  v-model="HeavyLoadParam.ulcellmaxinterference" />
              </div>

              <div class="col-xs-3 col-sm-3 col-md-3">
                <div v-show="HeavyLoadParam.usercntswg=='1'" class="paramLabel2">
                  <label class="paramLabel">用户数步长</label>
                  <input  type="text" class="bigTalkInput" v-model="HeavyLoadParam.usercntg" />
                </div>
              </div>
              <div class="col-xs-4 col-sm-4 col-md-4">
                <div v-show="HeavyLoadParam.rsrpdeltasw=='1'" class="paramLabel2" style="text-align: left">
                  <label class="paramLabel">RSRP高限步长</label>
                  <input  type="text" class="bigTalkInput" v-model="HeavyLoadParam.rsrpdelta" />
                </div>
              </div>
              <div class="col-xs-3 col-sm-3 col-md-3">
                <div v-show="HeavyLoadParam.rspwrdeltaswg=='1'" class="paramLabel2" style="text-align: left">
                  <label class="paramLabel">RS功率步长</label>
                  <input  type="text" class="bigTalkInput" v-model="HeavyLoadParam.rspwrdeltag" />
                </div>
              </div>

            </div>
          </div>
        </div>


        <button @click="subBigTalkByCellId" type="button" class="btn btn-info paramMyButton" >调整</button>

        <!--<div class="row">-->
          <!--<div class="col-xs-12 col-md-12 col-sm-12" style="padding-top: 1.5%;">-->
            <!--<div class="row">-->
              <!--<div class="col-xs-1 col-md-1 col-sm-2">-->
                <!--<h4 style="    color: aqua;">历史调整记录</h4>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="row">-->
              <!--<div class="col-xs-12 col-md-12 col-sm-12 historyDiv" >-->
                <!--<v-table-->
                  <!--is-vertical-resize-->
                  <!--style="width:100%;background-color: transparent;color: rgb(191, 119, 33);border: none;argin-bottom: 25px; margin-top: 25px;"-->
                  <!--is-horizontal-resize-->
                  <!--:vertical-resize-offset='100'-->
                  <!--:min-height='150'-->
                  <!--:max-height='600'-->
                  <!--:columns="columns"-->
                  <!--:table-data="historyTableData"-->
                  <!--:column-cell-class-name="columnCellClass2"-->
                  <!--row-hover-color="#eee"-->
                  <!--row-click-color="#edf7ff"-->
                <!--&gt;</v-table>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
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
        tableData: [
          {"name":"赵伟","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼"},
          {"name":"李伟","tel":"182*****1538","hobby":"钢琴、书法、唱歌","address":"上海市奉贤区南桥镇立新路12号2楼"},
          {"name":"孙伟","tel":"161*****0097","hobby":"钢琴、书法、唱歌","address":"上海市崇明县城桥镇八一路739号"},
          {"name":"周伟","tel":"197*****1123","hobby":"钢琴、书法、唱歌","address":"上海市青浦区青浦镇章浜路24号"},
          {"name":"吴伟","tel":"183*****6678","hobby":"钢琴、书法、唱歌","address":"上海市松江区乐都西路867-871号"}
        ],
        columnsData: [
          {field: 'name', title:'姓名', width: 80, titleAlign: 'center',columnAlign:'center',titleCellClassName:'title-cell-class-name-test',isResize:true},
          {field: 'tel', title: '手机号码', width: 150, titleAlign: 'center',columnAlign:'center',titleCellClassName:'title-cell-class-name-test',isResize:true},
          {field: 'hobby', title: '爱好', width: 150, titleAlign: 'center',columnAlign:'center',titleCellClassName:'title-cell-class-name-test',isResize:true},
          {field: 'address', title: '地址', width: 280, titleAlign: 'center',columnAlign:'left',titleCellClassName:'title-cell-class-name-test',isResize:true}
        ],
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
          _id:'',
          type:'0',
          type1:'0',
          type2:'0',
          type3:'0',
          effecttype:'0',
          ulcellmaxinterference:'0',
          ulrbmaxrate:'0',
          ulrbmaxratek:'0',
          dlrbmaxrate:'0',
          usercntsw:'1',
          usercntswk:'1',
          usercntswg:'1',
          rsrpdeltasw:'1',
          rspwrdeltasw:'1',
          rspwrdeltaswg:'1',
          usercnt:'0',
          usercntk:'0',
          usercntg:'0',
          rsrpdelta:'0',
          rspwrdelta:'0',
          rspwrdeltag:'0',
          maxcelluser:'0',
          neibouruserrate:'0',
          cellId:'',
          openClose:'1'
        },
        myCellId:this.$route.params.cellId,
        myShow:false,
        cellIdLists:[],
        columns: [
          {field: 'type', title: '调整策略', width: 30, titleAlign: 'center',titleCellClassName:'title-cell-class-name-test', columnAlign: 'center',isResize:true},
          {field: 'timeStamp', title: '上行RB利用率(%)', width: 15,titleCellClassName:'title-cell-class-name-test', titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'ulSvcCellId', title: '下行RB利用率(%)', width: 15,titleCellClassName:'title-cell-class-name-test', titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'ulDstCellId', title: '最大上行干扰(dBm)',titleCellClassName:'title-cell-class-name-test', width: 20, titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'usKickUserCnt', title: '最大用户数门限', width: 30,titleCellClassName:'title-cell-class-name-test', titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'adjustType', title: '与邻区用户数超出比例 (%)',titleCellClassName:'title-cell-class-name-test', width: 30, titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'rspwrDelta', title: '用户数开关', width: 15,titleCellClassName:'title-cell-class-name-test', titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'rsrpDelta', title: 'RSRP门限开关', width: 15,titleCellClassName:'title-cell-class-name-test', titleAlign: 'center', columnAlign: 'center',isResize:true}

        ]
      }
    },
    methods:{
      getParam(){
        let _this = this;
        axios.get('/api/getParam').
        then(function(response){
          let resultData = response.data;
          if(resultData.length>0){
            _this.HeavyLoadParam = resultData[0];
          }
        }).catch(function(err){
          console.log(err);
        });
      },
      columnCellClass2(rowIndex,columnName,rowData){

          return 'column-cell-class-name-test';

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
      subBigTalkByCellId(){
          let _this = this;
          // let checked = this.checkFunction(this.HeavyLoadParam);
            // this.HeavyLoadParam.cellId = this.myCellId;
            axios.get('/api/newSubBigTalkByCellId',{
              params:
              this.HeavyLoadParam
            }).
            then(function(response){
              let resultData = response.data;
              let alertStr = "";
              if(resultData["result"]=="success"){
                alertStr = "频点间基于用户数的快速负载均衡调整成功!";
              }else if(resultData["result"]=="failed"){
                alertStr = ("频点间基于用户数的快速负载均衡调整失败！");
              }
              if(resultData["result1"]=="success"){
                alertStr = alertStr +"基于干扰的快速负载均衡调整成功!";
              }else if(resultData["result1"]=="failed"){
                alertStr = alertStr+"基于干扰的快速负载均衡调整失败！";
              }
              if(resultData["result2"]=="success"){
                alertStr = alertStr +"基于用户数的快速调整调整成功!";
              }else if(resultData["result2"]=="failed"){
                alertStr = alertStr+"基于用户数的快速调整调整失败！";
              }
              if(alertStr==""){
                alert("参数没修改，没发起调整！");
              }else{
                alert(alertStr);
              }
              _this.getHistoryBigTalkByCellId(_this.myCellId);
            }).catch(function(err){
              console.log(err);
            });
      },
      getNewHistory(){
        let _this = this;
        axios.get('/api/getNewHistory'
        //   ,{
        //   params:
        //     {'cellId':"cellId2"}
        // }
        ).
        then(function(response){
            let resultData = response.data;
            _this.historyTableData = resultData;
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
      this.getNewHistory();
      this.getParam();
    },
  }

</script>

<style>
</style>
