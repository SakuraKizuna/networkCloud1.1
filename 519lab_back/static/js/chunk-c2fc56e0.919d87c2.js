(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c2fc56e0"],{ad8f:function(t,e,a){"use strict";a.d(e,"a",(function(){return l}));var n=a("b775");function l(t){return Object(n["a"])({url:"/vue-admin-template/table/list",method:"get",params:t})}},b3ca:function(t,e,a){"use strict";a("d65e")},d65e:function(t,e,a){},f30a:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"top"},[a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px",inline:""}},[a("el-form-item",{staticClass:"ml-3",attrs:{label:"审核人"}},[a("el-input",{attrs:{placeholder:"审核人"},model:{value:t.form.input,callback:function(e){t.$set(t.form,"input",e)},expression:"form.input"}})],1),a("el-form-item",{staticClass:"ml-3",attrs:{label:"活动范围"}},[a("el-select",{attrs:{placeholder:"请选择活动范围"},model:{value:t.form.value,callback:function(e){t.$set(t.form,"value",e)},expression:"form.value"}},[a("el-option",{attrs:{label:"区域一",value:"x"}}),a("el-option",{attrs:{label:"区域二",value:"a"}})],1)],1),a("el-form-item",[a("el-button",{staticClass:"ml-2",attrs:{type:"primary"}},[t._v("查询")])],1)],1)],1),a("div",{staticClass:"base-table"},[a("el-table",{attrs:{data:t.tableData,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"序号",width:"95"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.$index)+" ")]}}])}),a("el-table-column",{attrs:{align:"center",label:"姓名",width:"95"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.name)+" ")]}}])}),a("el-table-column",{attrs:{align:"center",label:"性别"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.sex)+" ")]}}])}),a("el-table-column",{attrs:{align:"center",label:"学号"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.schoolNumber)+" ")]}}])}),a("el-table-column",{attrs:{label:"专业",prop:"date"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.major)+" ")]}}])}),a("el-table-column",{attrs:{label:"邮箱",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.email)+" ")]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"white",size:"mini"},on:{click:function(a){return t.operate(e.row,"repass")}}},[t._v("重置密码")]),a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){return t.operate(e.row,"delete")}}},[t._v("删除")])]}}])})],1),a("el-pagination",{staticClass:"pagination",attrs:{background:"","current-page":t.pageNum,"page-size":10,layout:"total,prev, pager, next",total:t.totalNum},on:{"current-change":t.handleCurrentChange}})],1),a("el-dialog",{attrs:{title:"学员申请",visible:t.centerDialogVisible,width:"30%",center:""},on:{"update:visible":function(e){t.centerDialogVisible=e}}},[a("span",[t._v("需要注意的是内容是默认不居中的")]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.centerDialogVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.centerDialogVisible=!1}}},[t._v("确 定")])],1)])],1)},l=[],o=a("bc3a"),i=a.n(o),r=(a("ad8f"),{data:function(){return{pageNum:1,totalNum:0,centerDialogVisible:!1,active:0,data:[{id:0,title:"xx"},{id:1,title:"qq"},{id:2,title:"cc"},{id:3,title:"aa"}],currentPage1:5,currentPage2:5,currentPage3:5,currentPage4:4,tableData:[],form:{value:"",input:""},list:null,pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-6048e5),t.$emit("pick",[a,e])}},{text:"最近一个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-2592e6),t.$emit("pick",[a,e])}},{text:"最近三个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-7776e6),t.$emit("pick",[a,e])}}]},value1:[new Date(2e3,10,10,10,10),new Date(2e3,10,11,10,10)],value2:""}},created:function(){this.getStudentList()},methods:{operate:function(t,e){var a=this;i()({url:"/dev/remake_pass_delete",method:"post",data:{activity:e,schoolNumber:t.schoolNumber}}).then((function(t){a.$message.success(t.data.msg),a.getStudentList(),console.log(t)}))},getStudentList:function(){var t=this,e=JSON.parse(sessionStorage.getItem("adminInfo")).data||"",a=e.token;console.log(a),i()({url:"/dev/query_student",method:"post",data:{token:a,pageNum:this.pageNum}}).then((function(e){t.tableData=e.data.data,t.totalNum=e.data.total,console.log(e),"202"==e.data.status&&(t.$message.warning(e.data.msg),sessionStorage.clear(),setTimeout((function(){t.$router.push("/login")}),3e3))}))},change:function(t,e){this.active=e},handleSizeChange:function(t){console.log("每页 ".concat(t," 条"))},handleCurrentChange:function(t){this.pageNum=t,this.getStudentList()}}}),s=r,u=(a("b3ca"),a("2877")),c=Object(u["a"])(s,n,l,!1,null,null,null);e["default"]=c.exports}}]);