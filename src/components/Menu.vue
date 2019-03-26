<template>
　　<div id="menuId" style="    margin-top: -60px;">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 ">
          <img src="../../static/images/title.png"/>
        </div>
      </div>
      <div class="row"style="margin-left: 1.3%;">
        <div class="col-xs-3 col-sm-3 col-md-3 timeClass">
          {{nowTime}}
        </div>
      </div>
      <!--<div class="row">-->
        <!--<div class="col-xs-12 col-sm-12 col-md-12" style="    text-align: right;margin-top: -55px;">-->
          <!--<router-link class="routerClass" to="/paramConfig" style="font-size: 18px;color: #6DFDFD;border: 1px solid #6DFDFD;border-radius: 2px;">参数配置</router-link>-->
        <!--</div>-->
      <!--</div>-->
      <div class="row" style="    margin-top: 15px;">
        <router-link class="routerClass" to="/warn">痛点指标告警 |</router-link>
        <router-link class="routerClass" to="/bigTalk/16">大话务保障 |</router-link>
        <router-link class="routerClass" to="/paramConfig">AI参数优化 |</router-link>
        <router-link class="routerClass myRouter" to="/view3">智能分析系统 |</router-link>
        <router-link class="routerClass myRouter" to="/view3">集中分析 |</router-link>
        <router-link class="routerClass myRouter" to="/view3">集中参数 |</router-link>
        <router-link class="routerClass myRouter" to="/view3">集中投诉 |</router-link>
        <router-link class="routerClass myRouter" to="/view3">空分管控 |</router-link>
        <router-link class="routerClass myRouter" to="/view3">实时监控 |</router-link>
        <router-link class="routerClass myRouter" to="/view3">专项分析 |</router-link>
        <router-link class="routerClass myRouter" to="/view3">通用警务 |</router-link>
        <router-link class="routerClass myRouter" to="/view3">功能管理统计 |</router-link>
        <router-link class="routerClass myRouter" to="/view3">系统管理</router-link>
        <router-view/>
      </div>

    </div>
      <!--<div class="timeClass">{{nowTime}}</div>　　　　-->
    <!--  <div class="menu">
        <ul class="menubar">
          <li class="menu-value" ><a href="">产品</a></li>
          <li class="" ><a href="/view1">工具与镜像</a></li>
          <li class="" ><a href="">客户与伙伴</a></li>
          <li class="" ><a href="">帮助与支持</a></li>
          <li class="" ><a href="">论坛与博客</a></li>
        </ul>
      </div>-->
      <!--<div class="routerParent">-->
        <!--<router-link class="routerClass" to="/view3">集中分析 |</router-link>-->
        <!--<router-link class="routerClass" to="/view3">集中参数 |</router-link>-->
        <!--<router-link class="routerClass" to="/view3">集中投诉 |</router-link>-->
        <!--<router-link class="routerClass" to="/view3">空分管控 |</router-link>-->
        <!--<router-link class="routerClass" to="/view3">实时监控 |</router-link>-->
        <!--<router-link class="routerClass" to="/view3">专项分析 |</router-link>-->
        <!--<router-link class="routerClass" to="/view3">通用警务 |</router-link>-->
        <!--<router-link class="routerClass" to="/view3">功能管理统计 |</router-link>-->
        <!--<router-link class="routerClass" to="/view3">系统管理 |</router-link>-->
        <!--<router-view/>-->
      <!--</div>-->
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
        nowTime:new Date(),
        myCellIdList:'133636880',
        myTimes:'',
        myTimes2:''
      }
    },
    methods: {
      // 获取当前时间函数
      timeFormate(timeStamp) {
        let year = new Date(timeStamp).getFullYear();
        let month =new Date(timeStamp).getMonth() + 1 < 10? "0" + (new Date(timeStamp).getMonth() + 1): new Date(timeStamp).getMonth() + 1;
        let date =new Date(timeStamp).getDate() < 10? "0" + new Date(timeStamp).getDate(): new Date(timeStamp).getDate();
        let hh =new Date(timeStamp).getHours() < 10? "0" + new Date(timeStamp).getHours(): new Date(timeStamp).getHours();
        let mm =new Date(timeStamp).getMinutes() < 10? "0" + new Date(timeStamp).getMinutes(): new Date(timeStamp).getMinutes();
        let ss =new Date(timeStamp).getSeconds() < 10? "0" + new Date(timeStamp).getSeconds(): new Date(timeStamp).getSeconds();
        let day = new Date(timeStamp).getDay() < 7? "0" + new Date(timeStamp).getDay(): new Date(timeStamp).getDay();
        this.nowTime = year + "年" + month + "月" + date +"日"+" "+hh+":"+mm+":"+ss+' '+"星期" + "日一二三四五六".charAt(day);
      },
      // 定时器函数
      nowTimes(){
        this.timeFormate(new Date());
        setTimeout(this.nowTimes,1000);
      },
      getHistoryBySva(){
        let _this = this;
        axios.get('/api/getHistoryBySva').
        then(function(response){
//          let resultData = response.data;
//          console.log(resultData);
//          console.log("sva sub record:"+resultData);
        }).catch(function(err){
          console.log(err);
        });
//        _this.subHperf();
      },
      subHperf(){
        let _this = this;
        axios.get('/api/subHperf').
        then(function(response){
          let resultData = response.data;
          console.log("sva sub:"+resultData);
        }).catch(function(err){
          console.log(err);
        });
      },
      getData(){
        if(this.myTimes!=null){
          clearTimeout(this.myTimes);
        }
        let _this = this;
        axios.get('/api/getData').
        then(function(response){
          let resultData = response.data;
          console.log("getData:"+resultData)
          if(resultData==false){
            _this.subHperf();
          }
//          _this.getHistoryBySva();
        }).catch(function(err){
          console.log(err);
        });
        _this.myTimes = setTimeout(function()  {
          _this.getData();
        }, 5000);
      },
      reflushHistory(){
        if(this.myTimes2!=null){
          clearTimeout(this.myTimes2);
        }
        this.getHistoryBySva();
        let _this = this;
        _this.myTimes2 = setTimeout(function()  {
          _this.reflushHistory();
        }, 30000);
      }
    },
    //创建完成时调用
    created() {
      this.nowTimes();
    },
   mounted(){
     this.getHistoryBySva();
     this.subHperf();
     setTimeout(() => {
       this.getData();
       this.reflushHistory();
     }, 10000)
   }
  }
</script>

<style>
</style>
