(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[45],{"3a0d":function(e,t,n){"use strict";var a=n("8a18"),s=n.n(a);s.a},"5a9c":function(e,t,n){"use strict";n.r(t);var render=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-center text-center"},[e.$store.state.currentwallet.config.keys?e.$route.params.txObject?n("Sign",{staticStyle:{height:"100vh"},attrs:{payloadId:e.$route.params.payloadId,tx:e.$route.params.txObject}}):e.qr?n("div",[n("div",{staticClass:"flex flex-center text-center full-width q-pt-lg"},[n("img",{staticClass:" verto-logo",attrs:{src:"statics/icons/icon-256x256.png",width:"60",alt:"logo"}})]),n("div",{staticClass:"flex flex-center text-center q-pt-lg",staticStyle:{width:"100px",margin:"0 auto"},domProps:{innerHTML:e._s(e.qr)}}),e.loggedIn?n("div",{staticClass:"standard-content--body full-width q-pb-lg flex flex-center"},[n("div",{staticClass:"standard-content--body__form row"},[n("q-list",{staticClass:"text-left offset-md-4 col-md-4",attrs:{flat:""}},[n("q-select",{staticClass:"select-input q-pt-md",attrs:{dark:"true"===e.$store.state.settings.lightMode,light:"false"===e.$store.state.settings.lightMode,separator:"",rounded:"",dense:"",outlined:"",options:e.chainsData},on:{input:e.setDefaultChoice},scopedSlots:e._u([{key:"option",fn:function(t){return[n("q-item",e._g(e._b({staticClass:"custom-menu"},"q-item",t.itemProps,!1),t.itemEvents),[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{staticClass:"option--avatar",attrs:{name:"img:"+t.opt.icon}})],1),n("q-item-section",{attrs:{dark:""}},[n("q-item-label",{staticClass:"ellipsis",domProps:{innerHTML:e._s(t.opt.label)}})],1)],1)]}},{key:"selected",fn:function(){return[e.currentChain?n("q-item",[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{size:"md",name:"img:"+e.currentChain.icon}})],1),n("q-item-section",[n("q-item-label",{staticClass:"ellipsis",domProps:{innerHTML:e._s(e.currentChain.label)}})],1)],1):n("q-item")]},proxy:!0}],null,!1,3468791874),model:{value:e.currentChain,callback:function(t){e.currentChain=t},expression:"currentChain"}}),!e.connected&&e.accounts&&e.accounts.length?n("q-item-label",{staticClass:"text-bold text-h6 text-center",attrs:{header:""}},[e._v("Choose account")]):e._e(),e._l(e.accounts,(function(t,a){return n("q-item",{directives:[{name:"show",rawName:"v-show",value:!e.connected,expression:"!connected"},{name:"ripple",rawName:"v-ripple"}],key:a,staticClass:"bg-white rounded-borders shadow-1",attrs:{tag:"label"}},[n("q-item-section",{attrs:{side:"",top:""}},[n("q-radio",{attrs:{val:t},model:{value:e.accountValue,callback:function(t){e.accountValue=t},expression:"accountValue"}})],1),n("q-item-section",[n("q-item-label",{staticClass:"text-bold"},[e._v(e._s(t.name))]),n("q-item-label",{attrs:{caption:""}},[e._v("\n                "+e._s(e.getKeyFormat(t.key,16))+"\n              ")])],1)],1)})),e.accounts&&e.accounts.length?n("div",{staticClass:"q-mt-md"},[e.connected?e._e():n("q-btn",{staticClass:"full-width",attrs:{size:"lg",loading:e.spinnerVisible&&this.shouldConnect,label:"Connect",color:"deep-purple-12"},on:{click:function(t){e.shouldConnect=!0,e.connectWallet()}}}),e.connected?n("div",{staticClass:"text-center flex flex-center"},[n("div",{staticClass:"text-h6 text-bold"},[e._v("You are connected")])]):n("q-btn",{staticClass:"full-width q-mt-md",attrs:{size:"lg",loading:e.spinnerVisible&&!this.shouldConnect,label:"Reject",color:"deep-purple-12",outline:""},on:{click:function(t){e.shouldConnect=!1,e.connectWallet()}}})],1):e._e(),e.accounts&&e.accounts.length?e._e():n("div",{staticClass:"q-pt-md text-h6"},[n("span",{staticClass:" text-bold"},[e._v("No account found")]),n("br"),e._v("for the "+e._s(e.currentChain.label)+" chain ")])],2)],1)]):e._e()]):e._e():n("Landing",{attrs:{noRedirect:!0}})],1)},a=[],s=(n("6762"),n("2fdb"),n("967e")),r=n.n(s),c=(n("7514"),n("96cf"),n("fa84")),i=n.n(c),o=(n("ac6a"),n("cadf"),n("06db"),n("4db1")),l=n.n(o),u=n("5c8e"),d=n("04c6"),h=n("1483"),p=n("233a"),f=n("8fee"),m=n("0a51"),g=n("91e9b"),v=n("c7d9"),C=n("2b0e"),w=n("f7ec"),b=n("ce8a");C["default"].component("video-bg",w["a"]);var x={name:"Login",components:{Landing:h["default"],Sign:b["a"]},computed:{accounts:function accounts(){var e=this;return l()(this.$store.state.currentwallet.config.keys).filter((function(t){return t&&e.currentChain&&(t.type===e.currentChain.chain||e.currentChain.isEvm&&"eth"===t.type)}))}},data:function data(){return{chainsData:[],currentChain:null,hasConfig:!1,accountValue:null,qr:null,loggedIn:!0,spinnerVisible:!1,connected:!1,passHasError:!1,password:"",isPwd:!0,deleteConfigFail:!1,deleteConfig:!1,version:{},restoreFromWords:!1,showSubmit:!1}},watch:{"$store.state.currentwallet.config.keys":function $storeStateCurrentwalletConfigKeys(){this.setDefaultChoice()}},mounted:function mounted(){var e=this;return i()(r.a.mark((function _callee(){return r.a.wrap((function _callee$(t){while(1)switch(t.prev=t.next){case 0:e.$route.params.svgData&&(e.qr=JSON.parse(decodeURIComponent(escape(e.$route.params.svgData))).qr),e.chainsData=f["a"].getVertoChains(),e.currentChain=e.chainsData.find((function(e){return"eth"===e.chain})),e.setDefaultChoice();case 4:case"end":return t.stop()}}),_callee)})))()},created:function created(){p["a"].removeExpiredData(),this.$store.dispatch("tokens/getTokenList"),this.$store.dispatch("settings/getSettings");var e=["volentix-vtx"];this.$store.dispatch("tokens/getTokenMarketData",e),this.$store.dispatch("tokens/getEvmsTokensData"),document.querySelector("#preloader").style.display="none"},methods:{interact:function interact(){},setDefaultChoice:function setDefaultChoice(){this.$store.state.currentwallet.config.keys&&(this.accounts.length?this.accountValue=this.accounts[0]:this.accountValue=null)},connectWallet:function connectWallet(){var e=this;return i()(r.a.mark((function _callee3(){var t,a,s;return r.a.wrap((function _callee3$(c){while(1)switch(c.prev=c.next){case 0:return e.spinnerVisible=!0,t=new u["a"],a=n("bc05"),c.next=5,a.svgAsDataUri(document.querySelector(".walletconnect-qrcode__image"));case 5:s=c.sent,t.decodeFromImage(s).then(function(){var t=i()(r.a.mark((function _callee2(t){return r.a.wrap((function _callee2$(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.connect(t.data);case 2:case"end":return n.stop()}}),_callee2)})));return function(e){return t.apply(this,arguments)}}());case 7:case"end":return c.stop()}}),_callee3)})))()},connect:function connect(e){var t=this;return i()(r.a.mark((function _callee4(){return r.a.wrap((function _callee4$(n){while(1)switch(n.prev=n.next){case 0:t.$q.bex.send("connector.listener",{uri:e,chain:t.currentChain.chain,chainId:t.currentChain.chainId,provider:t.currentChain.provider,domain:t.$route.params.domain,accept:t.shouldConnect,accounts:[t.accountValue.key]}).then((function(e){localStorage.removeItem("walletconnect"),setTimeout((function(){t.shouldConnect?t.connected=!0:window.close(),t.spinnerVisible=!1}),t.shouldConnect?3e3:0)})).catch((function(){t.spinnerVisible=!1}));case 1:case"end":return n.stop()}}),_callee4)})))()},pageStyle:function pageStyle(){return{minWidth:"400px",minHeight:"700px"}},checkPassword:function checkPassword(){this.password.length>1?this.showSubmit=!0:this.showSubmit=!1},startRestoreConfig:function startRestoreConfig(){var e=this;return i()(r.a.mark((function _callee5(){return r.a.wrap((function _callee5$(t){while(1)switch(t.prev=t.next){case 0:e.$router.push({name:"import-restore",params:{returnto:"settings"}});case 1:case"end":return t.stop()}}),_callee5)})))()},login:function login(){var e=this;return i()(r.a.mark((function _callee6(){var t;return r.a.wrap((function _callee6$(n){while(1)switch(n.prev=n.next){case 0:if(e.passHasError=!1,e.password){n.next=4;break}return e.passHasError=!0,n.abrupt("return");case 4:return e.spinnerVisible=!0,n.next=7,d["a"].login(e.password);case 7:t=n.sent,t.success?(e.$store.commit("settings/temporary",e.password),e.$route.params.nextUrl&&e.$route.params.nextUrl.includes("dashboard")&&Object(m["a"])(),setTimeout((function(){e.$store.dispatch("investment/getMarketDataVsUSD"),e.$router.push({path:"/verto/dashboard"})}),100)):("no_default_key"===t.message?e.$router.push({path:"vertomanager"}):e.passHasError=!0,e.spinnerVisible=!1);case 9:case"end":return n.stop()}}),_callee6)})))()},destroyData:function destroyData(){var e=this;return i()(r.a.mark((function _callee7(){return r.a.wrap((function _callee7$(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d["a"].destroyConfig();case 3:e.hasConfig=!1,e.deleteConfig=!1,e.$q.notify({color:"positive",message:"Config successfully deleted"}),e.$router.push({name:"create-password"}),t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](0),e.deleteConfigFail=!0,e.deleteConfig=!1;case 13:case"end":return t.stop()}}),_callee7,null,[[0,9]])})))()},triggerCustomRegisteredType1:function triggerCustomRegisteredType1(){}},mixins:[g["a"],v["a"]]},_=x,q=(n("3a0d"),n("2877")),k=Object(q["a"])(_,render,a,!1,null,"024519e2",null);t["default"]=k.exports},"8a18":function(e,t,n){}}]);