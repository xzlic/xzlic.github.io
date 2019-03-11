webpackJsonp([0],{893:function(e,t,n){"use strict";function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(39),c=(n.n(o),n(40)),u=n.n(c),l=n(163),p=(n.n(l),n(164)),m=n.n(p),d=n(85),f=(n.n(d),n(167)),y=n.n(f),h=n(16),E=(n.n(h),n(17)),N=n.n(E),g=n(11),T=(n.n(g),n(12)),v=n.n(T),C=n(18),b=(n.n(C),n(19)),S=n.n(b),I=n(0),_=n.n(I),J=n(2),O=n(10),R=n(15),k=n(54),D=(n(21),n(8)),M=n(1),Y=n(956),x=n(906),U=n(115),L=(n.n(U),function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}()),j=function(e){function t(e){r(this,t);var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onChangeName=n.onChangeName.bind(n),n.state={date:new Date,selectArray:[],isLoading:!1,day:1,planName:""},n}return i(t,e),L(t,[{key:"componentDidMount",value:function(){this.props.dataList||this.props.dispatch(Object(Y.a)()),this.props.mdTypes||this.props.dispatch(Object(Y.b)())}},{key:"render",value:function(){var e=this;return _.a.createElement("div",{className:"createJourneyBg"},_.a.createElement(v.a,{mode:"dark",className:"navBar",icon:_.a.createElement(S.a,{type:"left"}),onLeftClick:function(){var t=e.props.dispatch;e.props.history.goBack(),t(Object(Y.c)())}},"\u521b\u5efa\u884c\u7a0b"),_.a.createElement(O.a,{ref:function(t){e.scrollView=t?t.getWrappedInstance():e.scrollView}},this.renderPage(),this.props.isFetching||this.state.isLoading?_.a.createElement(N.a,{toast:!0,text:"Loading..."}):null))}},{key:"renderPage",value:function(){if(this.props.dataList){var e=n(957);return _.a.createElement("div",{className:"createJourneyBox",style:{backgroundImage:"url("+e+")"}},this.renderCreate(),this.renderTheme(),this.renderNotMiss(),this.renderCommit())}}},{key:"renderCreate",value:function(){var e=this,t=n(907),a=n(958);return _.a.createElement("div",{className:"createJourneyCreate"},_.a.createElement("div",{className:"createJourneyCreateTit",style:{backgroundImage:"url("+t+")"}},"01. \u521b\u5efa\u884c\u7a0b"),_.a.createElement("div",{className:"createJourneyCreateIcon",style:{backgroundImage:"url("+a+")"}}),_.a.createElement("dl",null,_.a.createElement("dt",null,"\u884c\u7a0b\u540d\u79f0\uff1a"),_.a.createElement("dd",null,_.a.createElement("input",{type:"text",className:"createJourneyCreateName",placeholder:"\u7ed9\u884c\u7a0b\u8d77\u4e2a\u54cd\u4eae\u7684\u540d\u5b57",value:this.state.planName,onChange:this.onChangeName}))),_.a.createElement("dl",null,_.a.createElement("dt",null,_.a.createElement("span",null,"*"),"\u65c5\u884c\u5929\u6570\uff1a"),_.a.createElement("dd",null,_.a.createElement("div",{className:"createJourneyCreateNumBox"},_.a.createElement("div",{className:"createJourneyCreateNumBoxMinus",onClick:function(){return e.reduceDay()}},"-"),_.a.createElement("span",{className:"createJourneyCreateNumBoxNumber"},this.state.day),_.a.createElement("div",{className:"createJourneyCreateNumBoxPlus",onClick:function(){return e.addDay()}},"+")))),_.a.createElement("dl",null,_.a.createElement("dt",null,"\u51fa\u53d1\u65f6\u95f4\uff1a"),_.a.createElement("dd",null,_.a.createElement("div",{className:"createJourneyCreatePicker"},_.a.createElement(m.a,{mode:"datetime",title:"\u9009\u62e9\u65e5\u671f",extra:"Optional",minDate:new Date,value:this.state.date,onChange:function(t){return e.setState({date:t})}},_.a.createElement(y.a.Item,{arrow:"horizontal"}))))))}},{key:"renderTheme",value:function(){var e=this;if(!this.props.mdTypes||this.props.mdTypes.length<=0)return null;var t=n(907);return _.a.createElement("div",{className:"createJourneyTheme"},_.a.createElement("div",{className:"createJourneyThemeTit",style:{backgroundImage:"url("+t+")"}},"02. \u884c\u7a0b\u4e3b\u9898"),_.a.createElement("div",{className:"createJourneyThemeSelect"},this.props.mdTypes.map(function(t,n){return e.renderTypesChildView(t,n)})))}},{key:"renderTypesChildView",value:function(e,t){var r=this,s="",i="";return"JQ"===e.Type?(s=n(959),i=n(960)):"CT"===e.Type?(s=n(961),i=n(962)):"SQ"===e.Type?(s=n(963),i=n(964)):"YL"===e.Type&&(s=n(965),i=n(966)),_.a.createElement("div",{key:t,className:"createJourneyThemeMDTypesView",onClick:function(){var n=[].concat(a(r.props.mdTypes));n[t].isSelect=!e.isSelect,r.props.dispatch(Object(Y.d)(n))}},e.isSelect?_.a.createElement("img",{src:i,alt:"",className:"createJourneyThemeSelectItemBtn"}):_.a.createElement("img",{src:s,alt:"",className:"createJourneyThemeSelectItemBtn"}),_.a.createElement("span",{className:"createJourneyThemeSelectItemTitle"},e.Name))}},{key:"renderNotMiss",value:function(){var e=this,t=n(907),a=n(967),r=n(968);return _.a.createElement("div",{className:"createJourneyNotMiss"},_.a.createElement("div",{className:"createJourneyNotMissTit",style:{backgroundImage:"url("+t+")"}},"03. \u4e0d\u5bb9\u9519\u8fc7"),_.a.createElement("ul",{className:"createJourneyNotMissSelect"},this.props.dataList.map(function(t,n){return _.a.createElement("div",{key:n},_.a.createElement("div",{className:"createJourneyNotMissSelectTitle"},t.Name),t.TJtype.map(function(t,n){return _.a.createElement("li",{className:"createJourneyNotMissSelectItem",key:n},_.a.createElement("div",{className:"createJourneyNotMissSelectItemBox",onClick:function(){return e.changeSelect(t.Type,t.Code,t.Name)}},e.ifSelect(t.Code)?_.a.createElement("img",{src:r,alt:"",className:"createJourneyNotMissSelectItemCheck"}):_.a.createElement("img",{src:a,alt:"",className:"createJourneyNotMissSelectItemCheck"}),_.a.createElement("span",{className:"createJourneyNotMissSelectItemName"},t.Name)))}))})))}},{key:"renderCommit",value:function(){var e=this;return _.a.createElement("div",{className:"createJourneyCommit"},_.a.createElement("div",{className:"createJourneyCommitBtn",onClick:function(){return e.commit()}},"\u4e00\u952e\u5b9a\u5236"))}},{key:"ifSelect",value:function(e){for(var t=this.state.selectArray,n=0;n<t.length;n++)if(t[n].code===e)return!0;return!1}},{key:"changeSelect",value:function(e,t,n){var r=[].concat(a(this.state.selectArray));if(0===r.length){var s={type:e,code:t,cnName:n};r.push(s)}else for(var i=0;i<r.length;i++){if(r[i].code===t){r.splice(i,1);break}if(i===r.length-1){r.push({type:e,code:t,cnName:n});break}}this.setState({selectArray:r})}},{key:"reduceDay",value:function(){1!==this.state.day&&this.setState({day:this.state.day-1})}},{key:"addDay",value:function(){if(this.state.day===this.props.systemInfo.journeyMaxDayCount)return void u.a.alert("\u63d0\u793a","\u884c\u7a0b\u5929\u6570\u6700\u591a\u53ef\u9009"+this.props.systemInfo.journeyMaxDayCount+"\u5929!",[{text:"OK",style:"default",onPress:function(){}}]);this.setState({day:this.state.day+1})}},{key:"commit",value:function(){var e=this,t={},n=this.state.planName&&this.state.planName.length>0?this.state.planName:this.props.userInfo.Nickname+"\u7684\u884c\u7a0b\u8ba1\u5212",a={};a.dates=this.state.day,a.yxj="1",a.cometime=this.state.date.formatDate("YYYY-MM-DD HH:mm:ss"),a.sjap="0",a.xfjb="0",a.area="1";var r=this.props.systemInfo&&this.isLocationValid(this.props.systemInfo)&&this.isInDistrictMap(this.props.systemInfo)?{Latitude:this.props.systemInfo.latitude,Longitude:this.props.systemInfo.longitude,Address:this.props.systemInfo.address}:{Latitude:"0",Longitude:"0",Address:""},s={};s=this.CheckOption();for(var i={},o=0;o<this.props.mdTypes.length;o++){var c=this.props.mdTypes[o];if(c.isSelect&&c.Code){var l=c.Code;i[l.split("_")[0]]=l}}t.AP=a,t.Origin=r,t.MD=i,""!==s.toString()&&(t.TJ=s),t.userId=this.props.userInfo.ID,t.planName=n;var p={jsonParm:JSON.stringify({StrJson:t,cometime:this.state.date.formatDate("YYYY-MM-DD HH:mm:ss"),planName:n,userId:this.props.userInfo.ID})};this.setState({isLoading:!0}),D.a.postToPortal(M.q.JOURNEY.TourPlanSmartAndSave,p,null,!0).then(function(e){return e.json()}).then(function(t){e.setState({isLoading:!1}),t&&t.status&&0===parseInt(t.status,10)&&t.results&&t.results.length>0?u.a.alert("\u63d0\u793a","\u53d1\u5e03\u6210\u529f",[{text:"OK",style:"default",onPress:function(){return e.showDetail(t.results[0].PlanMainID)}}]):u.a.alert("\u63d0\u793a","\u53d1\u5e03\u5931\u8d25",[{text:"OK",style:"default"}])})}},{key:"showDetail",value:function(e){this.props.dispatch(Object(x.a)(!0)),this.props.history.push("/journey/detail/"+e)}},{key:"CheckOption",value:function(){for(var e={},t=[],n=[],a=[],r=[],s=this.state.selectArray,i=0;i<s.length;i++)"JQ"===s[i].type?t.push({Code:s[i].code,Name:s[i].cnName}):"YL"===s[i].type?n.push({Code:s[i].code,Name:s[i].cnName}):"CT"===s[i].type?a.push({Code:s[i].code,Name:s[i].cnName}):"SQ"===s[i].type&&r.push({Code:s[i].code,Name:s[i].cnName});return n.length>0&&(e.YL=n),t.length>0&&(e.JQ=t),a.length>0&&(e.CT=a),t.length>0&&(e.SQ=r),e}},{key:"onChangeName",value:function(e){this.setState({planName:e.target.value})}},{key:"isLocationValid",value:function(e){return e.latitude&&e.longitude&&e.latitude>0&&e.longitude>0}},{key:"isInDistrictMap",value:function(e){return!!(e.address&&e.address.length>0)&&e.address.indexOf(k.a.instance.appCityName)>=0}}]),t}(I.PureComponent),A=function(e,t){return Object.assign({userInfo:R.a.getUserInfo(e),systemInfo:e.system},e.journey.createScreen)};j=Object(J.b)(A)(j),t.default=j},906:function(e,t,n){"use strict";function a(e){return function(t,n){return t(o()),l(e).then(function(e){t(c(e?e.results:[]))}).catch(function(e){t(u(e))})}}function r(e){return function(t,n){return t(p()),f(e).then(function(e){t(d(e?e.results:[]))}).catch(function(e){t(m(e))})}}function s(){return{type:h.b.JOURNEY.INDEX.GO_BACK}}function i(e){return{type:h.b.JOURNEY.INDEX.SET_SCROLL_OFFSET,scrollViewOffset:e}}function o(){return{type:h.b.JOURNEY.INDEX.GET_MINE_LIST_REQUEST}}function c(e){return{type:h.b.JOURNEY.INDEX.GET_MINE_LIST_SUCCESS,dataList:e}}function u(e){return{type:h.b.JOURNEY.INDEX.GET_MINE_LIST_FAILURE,message:e}}function l(e){var t={pageIndex:1,pageSize:4,userID:e};return E.a.getFromPortal(h.q.JOURNEY.GetTourPlanInfo,t).then(function(e){return e.json()})}function p(){return{type:h.b.JOURNEY.INDEX.GET_RECOMMEND_LIST_REQUEST}}function m(e){return{type:h.b.JOURNEY.INDEX.GET_RECOMMEND_LIST_FAILURE,message:e}}function d(e){return{type:h.b.JOURNEY.INDEX.GET_RECOMMEND_LIST_SUCCESS,dataList:e}}function f(e){var t={pageIndex:1,pageSize:1e4};return E.a.getFromPortal(h.q.JOURNEY.GetRecommendTourForHome,t).then(function(e){return e.json()})}function y(e){return{type:h.b.JOURNEY.INDEX.SET_LIST_REFRESH,isRefresh:e}}t.b=a,t.c=r,t.d=s,t.e=i,t.a=y;var h=n(1),E=n(8)},907:function(e,t,n){e.exports=n.p+"static/media/bg_step_tit.46abd6e3.png"},956:function(e,t,n){"use strict";function a(){return function(e,t){return e(c()),o().then(function(t){for(var n=0;n<t.results.length;n++){var a=t.results[n];"CT"===a.Type?a.Name="\u5c3d\u4eab\u7f8e\u98df":"JQ"===a.Type?a.Name="\u6e38\u5c71\u73a9\u6c34":"SQ"===a.Type?a.Name="\u8d2d\u7269\u8840\u62fc":"YL"===a.Type&&(a.Name="\u4f11\u95f2\u5a31\u4e50")}e(u(t.results))}).catch(function(t){e(l(t))})}}function r(){return function(e,t){return e(m()),p().then(function(t){e(d(t.results))}).catch(function(t){e(f(t))})}}function s(e){return{type:y.b.JOURNEY.CREATE.UPDATE_MDTYPES,mdTypes:e}}function i(){return{type:y.b.JOURNEY.CREATE.GO_BACK}}function o(){return h.a.getFromPortal(y.q.JOURNEY.GetTjTypes).then(function(e){return e.json()})}function c(){return{type:y.b.JOURNEY.CREATE.GET_CREATE_REQUEST}}function u(e){return{type:y.b.JOURNEY.CREATE.GET_CREATE_SUCCESS,resp:e}}function l(e){return{type:y.b.JOURNEY.CREATE.GET_CREATE_FAILURE,message:e}}function p(){return h.a.getFromPortal(y.q.JOURNEY.GetMDTypesIncKid).then(function(e){return e.json()})}function m(){return{type:y.b.JOURNEY.CREATE.GET_MDTYPES_REQUEST}}function d(e){return{type:y.b.JOURNEY.CREATE.GET_MDTYPES_SUCCESS,resp:e}}function f(e){return{type:y.b.JOURNEY.CREATE.GET_MDTYPES_FAILURE,message:e}}t.a=a,t.b=r,t.d=s,t.c=i;var y=n(1),h=n(8)},957:function(e,t,n){e.exports=n.p+"static/media/bg_step.34e32e43.jpg"},958:function(e,t,n){e.exports=n.p+"static/media/bg_step_top.5c4eaf5e.png"},959:function(e,t,n){e.exports=n.p+"static/media/btn_scenic.cc8e35e2.png"},960:function(e,t,n){e.exports=n.p+"static/media/btn_scenic_active.57cb3705.png"},961:function(e,t,n){e.exports=n.p+"static/media/btn_food@2x.f41092ab.png"},962:function(e,t,n){e.exports=n.p+"static/media/btn_food_active@2x.492cd1d4.png"},963:function(e,t,n){e.exports=n.p+"static/media/btn_shopping@2x.702d41cb.png"},964:function(e,t,n){e.exports=n.p+"static/media/btn_shopping_active@2x.257a3630.png"},965:function(e,t,n){e.exports=n.p+"static/media/btn_entertainment.eee51a3a.png"},966:function(e,t,n){e.exports=n.p+"static/media/btn_entertainment_active.d51d6777.png"},967:function(e,t,n){e.exports=n.p+"static/media/newjd.3c8269a6.png"},968:function(e,t,n){e.exports=n.p+"static/media/newsjd.1fa86c00.png"}});
//# sourceMappingURL=0.128c79bd.chunk.js.map