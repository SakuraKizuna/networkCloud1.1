(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-91e1939e"],{"1e75":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{attrs:{id:"main"}})])}],s={name:"index",data:function(){return{timeList:"",endList:"",allData:0}},created:function(){var t=this;this.$nextTick((function(){t.drawLine(),t.drawLine1()}))},mounted:function(){this.timeList=this.$route.query.timeList,this.nameList=this.$route.query.nameList,this.calcAllData()},methods:{calcAllData:function(){for(var t=0;t<this.timeList.length;t++)this.allData+=parseInt(this.timeList[t]);console.log(this.allData)},drawLine:function(){var t=this.$echarts.init(document.getElementById("main")),e={title:{text:"签到时间",textStyle:{},subtextStyle:{},padding:[10,0,100,100]},legend:{type:"plain",top:"1%",selected:{"销量":!0},textStyle:{},tooltip:{show:!0,color:"red"},data:[{name:"签到时长",textStyle:{}},{name:"平均时长",textStyle:{color:"#3575c1"}}]},tooltip:{show:!0,trigger:"item",axisPointer:{type:"shadow",axis:"auto"},padding:5,textStyle:{}},grid:{show:!1,top:80,containLabel:!1,tooltip:{show:!0,trigger:"item",textStyle:{}}},xAxis:{show:!0,position:"bottom",offset:0,type:"category",name:"姓名",nameLocation:"end",nameTextStyle:{padding:[5,0,0,-5]},nameGap:15,axisLine:{show:!0,symbol:["none","arrow"],symbolSize:[8,8],symbolOffset:[0,7],lineStyle:{width:1,type:"solid"}},axisTick:{show:!0,inside:!0,lengt:3,lineStyle:{width:1,type:"solid"}},axisLabel:{show:!0,inside:!1,rotate:0,margin:5},splitLine:{show:!1,lineStyle:{}},splitArea:{show:!1},data:this.nameList},yAxis:{show:!0,position:"left",offset:0,type:"value",name:"签到时长（/小时）",nameLocation:"end",nameTextStyle:{padding:[5,0,0,5]},nameGap:15,axisLine:{show:!0,symbol:["none","arrow"],symbolSize:[8,8],symbolOffset:[0,7],lineStyle:{width:1,type:"solid"}},axisTick:{show:!0,inside:!0,lengt:3,lineStyle:{width:1,type:"solid"}},axisLabel:{show:!0,inside:!1,rotate:0,margin:8},splitLine:{show:!0,lineStyle:{width:1,type:"dashed"}},splitArea:{show:!1}},series:[{name:"签到时长",type:"bar",legendHoverLink:!0,label:{show:!0,position:"top",rotate:0,color:"black"},itemStyle:{},data:this.timeList},{name:"平均时长",type:"line",legendHoverLink:!0,itemStyle:{color:"#3575c1"},label:{show:!0},markLine:{symbol:"none",lineStyle:{normal:{type:"solid",color:"#3575c1",width:14,fontSize:15},label:{show:!0,position:"left"}},data:[{yAxis:this.allData/this.timeList.length,name:"平均时长"}]}}]};t.setOption(e),window.addEventListener("resize",(function(){t.resize()}))}}},o=s,l=(i("a2f1"),i("2877")),r=Object(l["a"])(o,n,a,!1,null,"b0c9274c",null);e["default"]=r.exports},a2f1:function(t,e,i){"use strict";i("fa50")},fa50:function(t,e,i){}}]);