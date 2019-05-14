<template>
　　<div id="mapConfig">
      <div class="container-fluid">
        <div class="row" style="margin-top: 40px;">

          <form>
            <input type="text" value="" v-model="name" placeholder="请输入用户名">
            <input type="text" value="" v-model="age" placeholder="请输入年龄">
            <input type="file" @change="getFile($event)">
            <button @click="submitForm($event)">提交</button>
          </form>


            <div class="col-xs-12 col-sm-6 col-md-6">
                <div class="row">
                  <div class="col-xs-12 col-sm-6 col-md-6" style="">
                    <label class="paramLabel">场景类型</label>
                    <input type="text" class="bigTalkInput"  v-model="HeavyLoadParam.ulrbmaxrate" />
                  </div>
                  <div class="col-xs-12 col-sm-6 col-md-6" style="">
                    <label class="paramLabel">小区Id</label>
                    <!--<input type="text" class="bigTalkInput"  v-model="HeavyLoadParam.ulrbmaxrate" />-->
                    <input class="file" name="file" type="file" accept="image/png,image/svg,image/gif,image/jpeg" @change="update" />
                  </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6" >
                <div class="row">
                  <div class="col-xs-12 col-sm-6 col-md-6">
                    <label class="paramLabel">上行RB利用率</label>
                    <input type="text" class="bigTalkInput"  v-model="HeavyLoadParam.ulrbmaxrate" />
                    <label class="paramLabel">%</label>
                  </div>
                  <div class="col-xs-12 col-sm-6 col-md-6">
                    <label class="paramLabel">下行RB利用率</label>
                    <input  type="text" class="bigTalkInput" v-model="HeavyLoadParam.dlrbmaxrate" />
                    <label class="paramLabel">%</label>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-12 col-sm-6 col-md-6">
                    <label class="paramLabel">用户数开关</label>
                    <select  class="bigTalkSelect" v-model="HeavyLoadParam.usercntsw">
                      <option value="1">开</option>
                      <option value="0">关</option>
                    </select>
                  </div>
                  <div class="col-xs-12 col-sm-6 col-md-6">
                    <div v-show="HeavyLoadParam.usercntsw=='1'" class="paramLabel2">
                      <label class="paramLabel">用户数步长</label>
                      <input  type="text" class="bigTalkInput" v-model="HeavyLoadParam.usercnt" />
                    </div>
                  </div>
                </div>
              </div>
            </div>





        <button @click="subBigTalkByCellId" type="button" class="btn btn-info paramMyButton" >调整</button>

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
          ulcellmaxinterference:'-105',
          ulrbmaxrate:'50',
          ulrbmaxratek:'85',
          dlrbmaxrate:'50',
          usercntsw:'1',
          usercntswk:'1',
          usercntswg:'1',
          rsrpdeltasw:'1',
          rspwrdeltasw:'1',
          rspwrdeltaswg:'1',
          usercnt:'2',
          usercntk:'2',
          usercntg:'2',
          rsrpdelta:'2',
          rspwrdelta:'2',
          rspwrdeltag:'2',
          maxcelluser:'200',
          neibouruserrate:'5',
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
      update(e){
        let file = e.target.files[0];
        let param = new FormData(); //创建form对象
        param.append('file',file);//通过append向form对象添加数据
        console.log(param.get('file')); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
        let config = {
          headers:{'Content-Type':'multipart/form-data'}
        }; //添加请求头
        this.$http.post('http://127.0.0.1:8081/upload',param,config)
          .then(response=>{
            console.log(response.data);
          })
      },
      getFile(event) {
        this.file = event.target.files[0];
        console.log(this.file);
      },
      submitForm(event) {
        event.preventDefault();
        let formData = new FormData();
        formData.append('name', this.name);
        formData.append('age', this.age);
        formData.append('file', this.file);

        let config = {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }

        axios.post('/api/upload', formData, config).then(function (response) {
          if (response.status === 200) {
            console.log(response.data);
          }
        })
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
