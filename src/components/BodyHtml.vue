<template>
　　<div id="bodyHtml">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xs-2 col-sm-2 col-md-2">
            <label class="bodyHtmlLabel">用户数</label>
            <input type="text" class="bodyHtmlInput" value="22"/>
          </div>
          <div class="col-xs-2 col-sm-2 col-md-2">
            <label class="bodyHtmlLabel">小区干扰</label>
            <input type="text" class="bodyHtmlInput" value="22"/>
          </div>
          <div class="col-xs-3 col-sm-3 col-md-3">
            <label class="bodyHtmlLabel">ULPRB利用率</label>
            <input  type="text" class="bodyHtmlInput" value="22"/>
          </div>
          <div class="col-xs-3 col-sm-3 col-md-3">
            <label class="bodyHtmlLabel">DLPRB利用率</label>
            <input  type="text" class="bodyHtmlInput"value="22"/>
          </div>
          <div class="col-xs-1 col-sm-1 col-md-1">
            <button>过滤</button>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-6 col-sm-6 col-md-6">
            <v-table
              is-vertical-resize
              style="width:100%"
              is-horizontal-resize
              :vertical-resize-offset='5'
              :min-height='200'
              :columns="columns"
              :table-data="tableData"
              row-hover-color="#eee"
              row-click-color="#edf7ff"
            ></v-table>
          </div>
          <div class="col-xs-5 col-md-5 col-sm-5">
            <div class="table-responsive">
              <table  id="tableId"class="table table-hover">
                <thead>
                  <tr>
                    <th>小区名</th>
                    <th>用户数</th>
                    <th>小区干扰</th>
                    <th>ULPRB利用率</th>
                    <th>DLPRB利用率</th>
                  </tr>
                </thead>
                <tbody>
                    <tr>
                      <td>1</td>
                      <td>12</td>
                      <td>-112dbm</td>
                      <td>50%</td>
                      <td>61%</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>12</td>
                      <td>-112dbm</td>
                      <td>50%</td>
                      <td>61%</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>12</td>
                      <td>-112dbm</td>
                      <td>50%</td>
                      <td>61%</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>12</td>
                      <td>-112dbm</td>
                      <td>50%</td>
                      <td>61%</td>
                    </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="col-xs-1 col-md-1 col-sm-1">
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12">
                <label class="bodyHtmlLabelR">痛点指示告警</label>
              </div>
            </div>
            <div class="row topR">
              <div class="col-xs-12 col-sm-12 col-md-12">
                <label class="bodyHtmlLabelR">大话务保障</label>
              </div>
            </div>
            <div class="row topR">
              <div class="col-xs-12 col-sm-12 col-md-12">
                <label class="bodyHtmlLabelR">AI参数优化</label>
              </div>
            </div>
            <div class="row topR">
              <div class="col-xs-12 col-sm-12 col-md-12">
                <label class="bodyHtmlLabelR">智能分析系统</label>
              </div>
            </div>
          </div>
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
          {"name":"赵伟1","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼"},
          {"name":"李伟1","tel":"182*****1538","hobby":"钢琴、书法、唱歌","address":"上海市奉贤区南桥镇立新路12号2楼"},
          {"name":"孙伟1","tel":"161*****0097","hobby":"钢琴、书法、唱歌","address":"上海市崇明县城桥镇八一路739号"},
          {"name":"周伟1","tel":"197*****1123","hobby":"钢琴、书法、唱歌","address":"上海市青浦区青浦镇章浜路24号"},
          {"name":"吴伟1","tel":"183*****6678","hobby":"钢琴、书法、唱歌","address":"上海市松江区乐都西路867-871号"},
          {"name":"赵伟2","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼"},
          {"name":"李伟2","tel":"182*****1538","hobby":"钢琴、书法、唱歌","address":"上海市奉贤区南桥镇立新路12号2楼"},
          {"name":"孙伟2","tel":"161*****0097","hobby":"钢琴、书法、唱歌","address":"上海市崇明县城桥镇八一路739号"},
          {"name":"周伟2","tel":"197*****1123","hobby":"钢琴、书法、唱歌","address":"上海市青浦区青浦镇章浜路24号"},
          {"name":"吴伟2","tel":"183*****6678","hobby":"钢琴、书法、唱歌","address":"上海市松江区乐都西路867-871号"},
          {"name":"赵伟3","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼"},
          {"name":"李伟3","tel":"182*****1538","hobby":"钢琴、书法、唱歌","address":"上海市奉贤区南桥镇立新路12号2楼"},
          {"name":"孙伟3","tel":"161*****0097","hobby":"钢琴、书法、唱歌","address":"上海市崇明县城桥镇八一路739号"},
          {"name":"周伟3","tel":"197*****1123","hobby":"钢琴、书法、唱歌","address":"上海市青浦区青浦镇章浜路24号"},
          {"name":"吴伟3","tel":"183*****6678","hobby":"钢琴、书法、唱歌","address":"上海市松江区乐都西路867-871号"},
          {"name":"赵伟4","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼"},
          {"name":"李伟4","tel":"182*****1538","hobby":"钢琴、书法、唱歌","address":"上海市奉贤区南桥镇立新路12号2楼"},
          {"name":"孙伟4","tel":"161*****0097","hobby":"钢琴、书法、唱歌","address":"上海市崇明县城桥镇八一路739号"},
          {"name":"周伟4","tel":"197*****1123","hobby":"钢琴、书法、唱歌","address":"上海市青浦区青浦镇章浜路24号"},
          {"name":"吴伟4","tel":"183*****6678","hobby":"钢琴、书法、唱歌","address":"上海市松江区乐都西路867-871号"},
          {"name":"赵伟5","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼"},
          {"name":"李伟5","tel":"182*****1538","hobby":"钢琴、书法、唱歌","address":"上海市奉贤区南桥镇立新路12号2楼"},
          {"name":"孙伟5","tel":"161*****0097","hobby":"钢琴、书法、唱歌","address":"上海市崇明县城桥镇八一路739号"},
          {"name":"周伟5","tel":"197*****1123","hobby":"钢琴、书法、唱歌","address":"上海市青浦区青浦镇章浜路24号"},
          {"name":"吴伟5","tel":"183*****6678","hobby":"钢琴、书法、唱歌","address":"上海市松江区乐都西路867-871号"}
        ],
        columns: [
          {field: 'name', title: '姓名', width: 80, titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'tel', title: '手机号码', width: 150, titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'hobby', title: '爱好', width: 150, titleAlign: 'center', columnAlign: 'center',isResize:true},
          {field: 'address', title: '地址', width: 280, titleAlign: 'center', columnAlign: 'left',isResize:true}
        ]
      }
    }
//    mounted(){
//      this.timeFormate();
//    }
  }
</script>

<style>
</style>
