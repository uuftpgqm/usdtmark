(function(){"use strict";var t={4899:function(t,e,o){var a=o(144),n=o(998),i=o(6232),s=o(5550),r=o(4145),l=o(2118),d=o(9223),c=o(4324),u=o(5808),h=o(4525),f=o(60),g=o(4611),p=o(3059),m=o(9709),_=o(7953),v=function(){var t=this,e=t._self._c;return e(n.Z,{attrs:{id:"inspire"}},[e(r.Z,[e(m.Z,{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e(h.Z,[e(f.km,[e(f.V9,{staticClass:"text-h6"},[t._v(" 标记系统 ")]),e(f.oZ,[t._v(" "+t._s(t.tySysOwner)+" ")])],1)],1),e(d.Z),e(u.Z,{attrs:{dense:"",nav:""}},t._l(t.items,(function(o){return e(h.Z,{key:o.title,attrs:{link:""}},[e(g.Z,[e(c.Z,{attrs:{color:o.color}},[t._v(t._s(o.icon))])],1),e(f.km,[e(f.V9,{on:{click:function(e){return t.jmpPage(o.kk)}}},[t._v(" "+t._s(o.title))])],1)],1)})),1)],1)],1),e(i.Z,{attrs:{app:""}},[e(s.Z,{on:{click:function(e){t.drawer=!t.drawer}}}),e(_.qW,[t._v(t._s(t.tySysOwner))])],1),e(p.Z,[e(l.Z,{attrs:{fluid:""}},[e("router-view")],1)],1)],1)},y=[],Z={data:()=>({drawer:!1,items:[],tySysOwner:"标记系统",logininfo:{}}),created:async function(){let t=this.$route.params.acckey;this.tySysOwner,this.items=[{title:"地址",icon:"mdi-domain",color:"blue darken-2",kk:t}]},methods:{jmpPage:function(t){this.$router.push({name:"vTrans",params:{msg:t}})}}},k=Z,w=o(1001),b=(0,w.Z)(k,v,y,!1,null,null,null),x=b.exports,T=o(1705);a.ZP.use(T.Z);var S=new T.Z({}),I=o(8345),O=o(7359),P=o(6190),E=o(4886),A=o(4127),L=o(266),j=o(4463),H=o(1030),N=o(4061),C=o(4528),R=o(6243),U=o(8687),D=o(1713),z=o(3687),$=o(7808),B=function(){var t=this,e=t._self._c;return e(l.Z,[e("h3",{staticStyle:{"padding-bottom":"20px"}},[t._v("管理地址")]),e(L.Z,{attrs:{cols:"12"}},[e(O.Z,{directives:[{name:"show",rawName:"v-show",value:t.show_alert,expression:"show_alert"}],attrs:{color:"red lighten-2"}},[t._v(" "+t._s(t.msg_alert)+" ")])],1),e(D.Z,[e(L.Z,{attrs:{cols:"4"}},[e(U.Z,{attrs:{change:t.radChanged(),row:""},model:{value:t.option_tag,callback:function(e){t.option_tag=e},expression:"option_tag"}},[e(R.Z,{attrs:{label:"全部",value:"a"}}),e(R.Z,{attrs:{label:"已标记",value:"has_tag"}}),e(R.Z,{attrs:{label:"未标记",value:"not_tag"}})],1)],1),e(L.Z,{attrs:{cols:"3"}},[e(C.Z,{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function({on:o,attrs:a}){return[e($.Z,t._g(t._b({attrs:{label:"选择开始日期","prepend-icon":"mdi-calendar",readonly:""},model:{value:t.date_from,callback:function(e){t.date_from=e},expression:"date_from"}},"v-text-field",a,!1),o))]}}]),model:{value:t.menu2,callback:function(e){t.menu2=e},expression:"menu2"}},[e(H.Z,{attrs:{locale:"zh-cn"},on:{input:function(e){t.menu2=!1}},model:{value:t.date_from,callback:function(e){t.date_from=e},expression:"date_from"}})],1)],1),e(L.Z,{attrs:{cols:"3"}},[e(C.Z,{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function({on:o,attrs:a}){return[e($.Z,t._g(t._b({attrs:{label:"选择结束日期","prepend-icon":"mdi-calendar",readonly:""},model:{value:t.date_to,callback:function(e){t.date_to=e},expression:"date_to"}},"v-text-field",a,!1),o))]}}]),model:{value:t.menu3,callback:function(e){t.menu3=e},expression:"menu3"}},[e(H.Z,{attrs:{locale:"zh-cn"},on:{input:function(e){t.menu3=!1}},model:{value:t.date_to,callback:function(e){t.date_to=e},expression:"date_to"}})],1)],1),e(L.Z,{attrs:{cols:"1"}},[e("div",{staticStyle:{padding:"12px"}},[e(P.Z,{attrs:{"x-small":""},on:{click:function(e){t.date_from="",t.date_to=""}}},[t._v("清除日期")])],1)])],1),e(D.Z,[e(L.Z,{attrs:{cols:"12"}},[e(r.Z,[e(E.EB,[e($.Z,{attrs:{label:"查找备注","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),e("div",{staticStyle:{padding:"6px"}},[e(P.Z,{attrs:{color:"primary"},on:{click:t.setSearch}},[t._v("查 找")])],1)],1),e(N.Z,{attrs:{"max-width":"600px"},model:{value:t.dialogEditTag,callback:function(e){t.dialogEditTag=e},expression:"dialogEditTag"}},[e(r.Z,[e(E.EB,{staticClass:"text-h5"},[e("div",{staticStyle:{"font-size":"5px"}},[t._v("区块 "+t._s(t.editingHashId))]),e("div",{staticStyle:{"font-size":"5px"}},[t._v("地址 "+t._s(t.editingFromAddr))])]),e(E.h7,{staticStyle:{display:"block"}},[e(z.Z),t._l(t.vnameList,(function(o,a){return e(P.Z,{key:"kkk"+a,attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.saveItem(o)}}},[t._v(t._s(o))])})),e(z.Z)],2),e(E.h7,[e("div",{staticStyle:{"padding-right":"12px","font-size":"12px"}},[t._v("如无合适用户，可以新增")]),e("br"),e($.Z,{model:{value:t.newAddrItem,callback:function(e){t.newAddrItem=e},expression:"newAddrItem"}}),e(P.Z,{attrs:{color:"yellow darken-1",text:""},on:{click:function(e){return t.saveNew("OK")}}},[t._v("新增")]),e(P.Z,{attrs:{color:"yellow darken-1",text:""},on:{click:function(e){return t.cancelNew("OK")}}},[t._v("取消")])],1)],1)],1),e(j.Z,{attrs:{headers:t.headers,items:t.transList,options:t.options,"server-items-length":t.totalTrans,loading:t.loading,"footer-props":{itemsPerPageOptions:[5,25,50,100],"items-per-page-text":"每页展示"}},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"item.doEdit",fn:function({item:o}){return[e(A.Z,{attrs:{color:"secondary",dark:""},on:{click:function(e){return t.doEdit({item:o})}}},[t._v(" 修改 "+t._s(o.none)+" ")])]}},{key:"item.hashid",fn:function({item:e}){return[t._v(" "+t._s(t.getHashIdAbbr(e.hashid))+" ")]}},{key:"item.uname",fn:function({item:o}){return[t._v(" "+t._s(o.uname)+" "),e(c.Z,{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editTag(o)}}},[t._v(" mdi-pencil ")])]}}],null,!0)})],1)],1)],1)],1)},V=[],F=o(9669),M=o.n(F),G={name:"vTyWorkSpace",data:()=>({logininfo:{},search:"",headers:[{text:"Hash",value:"hashid"},{text:"时间",value:"atime"},{text:"转账地址",value:"fromaddr"},{text:"接收地址",value:"toaddr"},{text:"金额",value:"amount"},{text:"所属用户",value:"uname",width:"120px"}],transList:[],totalTrans:0,loading:!0,options:{itemsPerPage:50,page:1},dialogEditTag:!1,vnameList:[],newAddrItem:"",editingHashId:"",editingFromAddr:"",show_alert:!1,msg_alert:"访问key出错，请重新获取",option_tag:"not_tag",date_from:"",date_to:"",menu2:"",menu3:""}),methods:{cancelNew:function(t){console.log("dummy ",t),this.dialogEditTag=!1},saveNew:function(t){console.log("dummy ",t),this.newAddrItem.length<1?console.log("saveNew =>","内容不合法"):this.updateHashInfo(this.editingHashId,this.newAddrItem)},saveItem:function(t){console.log("uname => ",t),this.newAddrItem=t,this.updateHashInfo(this.editingHashId,this.newAddrItem)},editTag:function(t){console.log("editTag = > ",t),this.editingHashId=t.hashid,this.editingFromAddr=t.fromaddr,this.loadTags(t.fromaddr),this.dialogEditTag=!0},doEdit:function(t){console.log("doEdit",t),this.editDomain(t)},loadData:async function(){this.loading=!0;let t=this.options.page-1,e=this.options.itemsPerPage;M().defaults.baseURL="";let o="/api/list_trans?sx="+this.$route.params.acckey+"&pageid="+t+"&pagenum="+e;if(o=o+"&option_tag="+this.option_tag,this.search.length>1&&(o+="&option_search="+this.search),this.date_from.length>1){let t=this.date_from+" 00:00:00";o+="&option_datefrom="+t}if(this.date_to.length>1){let t=this.date_to+" 23:59:59";o+="&option_dateto="+t}await M().get(o).then((t=>{if(console.log("profile ",t),200==t.status&&200==t.data.code){console.log("ok");let e=t.data.res,o=this.formatRes(e);console.log("data for table: ",o),this.transList=o,this.totalTrans=t.data.count,this.loading=!1}else 401==t.data.code?(this.show_alert=!0,this.msg_alert="访问key出错，请重新获取",this.loading=!1):503==t.data.code&&(this.show_alert=!0,this.msg_alert="后台服务似乎未启动或者出错",this.loading=!1)})).catch((t=>{console.log(t),this.show_alert=!0,this.msg_alert="后台服务似乎未启动或者访问出错，请检查或重试",this.loading=!1}))},getHashIdAbbr:function(t){if(""!=t){let e=t.length;return t.substring(e-8)}return""},formatRes:function(t){let e=[];for(const o of t){let t={};t.hashid=o[0],t.atime=o[4],t.fromaddr=o[3],t.toaddr=o[1],t.amount=o[5],t.uname=o[6],e.push(t)}return e},updateHashInfo:function(t,e){console.log("update set ","hashid "+t+" uname"+e);let o={headers:{"Content-Type":"application/json"}},a={hashid:t,tag_name:e,sx:this.$route.params.acckey},n=JSON.stringify(a);M().defaults.baseURL="",M().post("/api/setTag",n,o).then((o=>{if(console.log("res==>",o),200==o.status&&200==o.data.code){console.log("/setTag with name",e),this.newAddrItem="",this.dialogEditTag=!1;for(const o of this.transList)o.hashid==t&&(o.uname=e)}})).catch((t=>{console.log("err==>",t)}))},loadTags:function(t){this.loading=!0,M().defaults.baseURL="";let e="/api/list_tags?sx="+this.$route.params.acckey+"&addr="+t;M().get(e).then((t=>{if(console.log("loadTags => ",t),200==t.status&&200==t.data.code){console.log("ok");let e=t.data.res;this.vnameList=e}else this.vnameList=[]})).catch((t=>{console.log(t)})),this.loading=!1},radChanged(){},setSearch(){console.log("search text => ",this.search),this.loading=!0,this.loadData()}},mounted:function(){},async created(){this.loadData()},watch:{options:{handler(){console.log("options",this.options),console.log("Go to page ",this.options.page),console.log("Go to page size ",this.options.itemsPerPage),this.loadData()},deep:!0},option_tag:{handler(){console.log("option_tag => ",this.option_tag),this.transList=[],this.loading=!0,this.loadData()},deep:!0},search:{handler(){},deep:!0}}},K=G,W=(0,w.Z)(K,B,V,!1,null,null,null),q=W.exports;const J=I.Z.prototype.push;I.Z.prototype.push=function(t){return J.call(this,t).catch((t=>t))};var Q=new I.Z({mode:"history",routes:[{path:"/dash/:acckey",name:"vTrans",component:q}]});a.ZP.use(I.Z),a.ZP.config.productionTip=!1,console.log("I use VUE_APP_BASEURL sx ",{NODE_ENV:"production",VUE_APP_BASEURL:"",BASE_URL:"/"}),new a.ZP({vuetify:S,router:Q,render:t=>t(x)}).$mount("#app")}},e={};function o(a){var n=e[a];if(void 0!==n)return n.exports;var i=e[a]={exports:{}};return t[a](i,i.exports,o),i.exports}o.m=t,function(){var t=[];o.O=function(e,a,n,i){if(!a){var s=1/0;for(c=0;c<t.length;c++){a=t[c][0],n=t[c][1],i=t[c][2];for(var r=!0,l=0;l<a.length;l++)(!1&i||s>=i)&&Object.keys(o.O).every((function(t){return o.O[t](a[l])}))?a.splice(l--,1):(r=!1,i<s&&(s=i));if(r){t.splice(c--,1);var d=n();void 0!==d&&(e=d)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[a,n,i]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var a in e)o.o(e,a)&&!o.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,a){var n,i,s=a[0],r=a[1],l=a[2],d=0;if(s.some((function(e){return 0!==t[e]}))){for(n in r)o.o(r,n)&&(o.m[n]=r[n]);if(l)var c=l(o)}for(e&&e(a);d<s.length;d++)i=s[d],o.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return o.O(c)},a=self["webpackChunkvuetify_app"]=self["webpackChunkvuetify_app"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=o.O(void 0,[998],(function(){return o(4899)}));a=o.O(a)})();
//# sourceMappingURL=app.eb7c74e1.js.map