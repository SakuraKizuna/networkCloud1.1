(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a4a71e8"],{"607a":function(e,t,a){},bee4:function(e,t,a){"use strict";a("607a")},feb6:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"top"},[a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px",inline:""}},[a("el-button",{staticStyle:{"margin-bottom":"20px"},attrs:{type:"primary"},on:{click:e.add}},[e._v("添加管理员")])],1)],1),a("div",{staticClass:"base-table"},[a("el-table",{attrs:{data:e.tableData,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{align:"center",label:"序号",width:"95"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.$index)+" ")]}}])}),a("el-table-column",{attrs:{align:"center",label:"姓名",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.username)+" ")]}}])}),a("el-table-column",{attrs:{align:"center",label:"密码"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.password)+" ")]}}])}),a("el-table-column",{attrs:{align:"center",label:"级别"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.level)+" ")]}}])}),a("el-table-column",{attrs:{align:"center",label:"所属"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.belong)+" ")]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center",width:"200px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){return e.delAdmin(t.row)}}},[e._v("删除")])]}}])})],1)],1),a("el-dialog",{attrs:{title:"请输入要添加得管理员信息",visible:e.centerDialogVisible,width:"30%",center:""},on:{"update:visible":function(t){e.centerDialogVisible=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"账号"}},[a("el-input",{attrs:{placeholder:"请输入账号"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),a("el-form-item",{attrs:{label:"密码"}},[a("el-input",{attrs:{placeholder:"请输入密码"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),a("el-form-item",{attrs:{label:"年级"}},[a("el-input",{attrs:{placeholder:"请输入年级"},model:{value:e.form.level,callback:function(t){e.$set(e.form,"level",t)},expression:"form.level"}})],1),a("el-form-item",{attrs:{label:"所属"}},[a("el-input",{attrs:{placeholder:"请输入所属"},model:{value:e.form.belong,callback:function(t){e.$set(e.form,"belong",t)},expression:"form.belong"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.centerDialogVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("确 定")])],1)],1),a("el-dialog",{attrs:{title:"请输入要补签的的范围",visible:e.centerDialogVisibles,width:"30%",center:""},on:{"update:visible":function(t){e.centerDialogVisibles=t}}},[a("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd HH:mm:ss",type:"datetimerange","range-separator":"To","start-placeholder":"Start date","end-placeholder":"End date"},model:{value:e.value3,callback:function(t){e.value3=t},expression:"value3"}}),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.centerDialogVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.patchSignSubmit}},[e._v("确 定")])],1)],1)],1)},n=[],o=(a("d81d"),a("bc3a")),s=a.n(o),i={data:function(){return{totalNum:0,pageNum:1,token:JSON.parse(sessionStorage.getItem("adminInfo")).data.token||"",nameList:"",timeList:"",curCheckName:"",startTime:"",endTime:"",centerDialogVisible:!1,centerDialogVisibles:!1,currentPage1:5,currentPage2:5,currentPage3:5,currentPage4:4,tableData:[],form:{username:"",password:"",level:"",belong:""},list:null,value1:"",value2:"",value3:"",info:"",multipleSelection:"",schoolNums:[]}},created:function(){this.getAdminData()},mounted:function(){},methods:{delAdmin:function(e){var t=this;console.log(e),s()({url:"/dev/delete_administrator",method:"post",data:{username:e.username}}).then((function(e){console.log(e),"200"==e.data.status?(t.$message.success(e.data.msg),t.getAdminData()):t.$message.warning(e.data.msg)}))},handleSelectionChange:function(e){var t=this;e.map((function(e){t.schoolNums.push(e.schoolNumber)}))},submit:function(){var e=this;console.log(this.form),s()({url:"/dev/add_administrator",method:"post",data:this.form}).then((function(t){console.log(t),(t.data="200")?(e.getAdminData(),e.$message.success("添加成功"),e.form={},e.centerDialogVisible=!1):e.$message.warning(t.msg)}))},add:function(){this.centerDialogVisible=!0},getAdminData:function(){var e=this;s()({url:"/dev/show_administrators",method:"post",data:{token:this.token}}).then((function(t){console.log(t),e.tableData=t.data.data}))},getStudentSign:function(){},handleCurrentChange:function(e){this.pageNum=e,this.getStudentWarnData()}}},r=i,c=(a("bee4"),a("2877")),u=Object(c["a"])(r,l,n,!1,null,null,null);t["default"]=u.exports}}]);