webpackJsonp([5],{892:function(e,t,a){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function n(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=a(39),s=(a.n(o),a(40)),l=a.n(s),p=a(16),u=(a.n(p),a(17)),c=a.n(u),d=a(11),h=(a.n(d),a(12)),m=a.n(h),f=a(18),y=(a.n(f),a(19)),g=a.n(y),I=a(28),v=(a.n(I),a(29)),j=a.n(v),T=a(0),D=a.n(T),w=a(2),E=a(10),N=a(15),b=a(1),k=a(14),P=a.n(k),L=a(8),C=a(296),V=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),M=function(e){function t(e){r(this,t);var a=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.journeyTrafficMapTapped=a.journeyTrafficMapTapped.bind(a),a.journeyEditTapped=a.journeyEditTapped.bind(a),a.journeyAddTapped=a.journeyAddTapped.bind(a),a.journeyMapLineTapped=a.journeyMapLineTapped.bind(a),a.doJourneyAdd=a.doJourneyAdd.bind(a),a.goBack=a.goBack.bind(a),a.editTitle=a.editTitle.bind(a),a}return n(t,e),V(t,[{key:"componentDidMount",value:function(){this.props.headerInfo||this.props.dispatch(Object(C.b)(this.props.match.params.journeyId)),this.restoreScrollViewPosition()}},{key:"componentWillUnmount",value:function(){this.map=void 0}},{key:"componentDidUpdate",value:function(e,t,a){this.props.groupList&&!e.groupList?this.searchStarted||this.searchDriveRoute(this.props.groupList,0,0):this.props.baiduMapInited&&!e.baiduMapInited&&(this.searchStarted||this.searchDriveRoute(this.props.groupList||e.groupList,0,0)),this.props.targetJourneyId&&!e.targetJourneyId&&(j.a.success("\u590d\u5236\u6210\u529f!"),this.searchStarted=!1,this.props.history.replace("/journey/detail/"+this.props.targetJourneyId)),this.props.match.params.journeyId!==e.match.params.journeyId&&this.props.dispatch(Object(C.b)(this.props.match.params.journeyId))}},{key:"render",value:function(){var e=this;return D.a.createElement("div",null,D.a.createElement(m.a,{mode:"dark",className:"navBar",icon:D.a.createElement(g.a,{type:"left"}),onLeftClick:this.goBack,rightContent:D.a.createElement("div",{style:{display:"flex",alignItems:"center",height:"100%"}},this.props.isMine?D.a.createElement("div",{className:"journeyDetailRightContentButton",onClick:function(){return e.journeyEditTapped()}},D.a.createElement("img",{className:"journeyDetailRightContentImage",src:a(951),alt:""})):D.a.createElement("div",{className:"journeyDetailRightContentButton",onClick:function(){return e.journeyAddTapped()}},D.a.createElement("img",{className:"journeyDetailRightContentImage",src:a(287),alt:""})),D.a.createElement("div",{className:"journeyDetailRightContentButton",onClick:function(){return e.journeyMapLineTapped()}},D.a.createElement("img",{className:"journeyDetailRightContentImage",src:a(952),alt:""})))},"\u884c\u7a0b\u8be6\u60c5"),D.a.createElement(E.a,{ref:function(t){e.scrollView=t?t.getWrappedInstance():e.scrollView}},D.a.createElement("div",{className:"journeyDetailHeaderBg"},this.renderHeaderViews()),this.renderGroupViews(),this.props.isFetching?D.a.createElement(c.a,{toast:!0,text:"Loading..."}):null,D.a.createElement("div",{id:"journey_detail_map",style:{display:"none"}})))}},{key:"renderHeaderViews",value:function(){var e=this;return this.props.headerInfo?D.a.createElement("div",{className:"journeyDetailHeader"},D.a.createElement("img",{className:"journeyDetailHeaderImage",src:this.props.headerInfo&&this.props.headerInfo.headImg?this.props.headerInfo.headImg:this.props.userImagePath,alt:""}),D.a.createElement("div",{className:"journeyDetailHeaderTextDiv"},D.a.createElement("div",{className:"journeyDetailHeaderText2"},this.props.headerInfo.TourName),D.a.createElement("img",{className:"journeyEditTitleImage",onClick:function(){return e.editTitle()},src:a(953),alt:""})),D.a.createElement("div",{className:"journeyDetailHeaderText"},"\u7f16\u53f7: ",this.props.headerInfo.CreateDate.replace(/-/g,"").replace(/:/g,"").replace(" ","")),D.a.createElement("div",{className:"journeyDetailHeaderText"},"\u884c\u7a0b\u5929\u6570\uff1a",this.props.groupList.length,"\u5929"),D.a.createElement("div",{className:"journeyDetailHeaderText"},"\u51fa\u53d1\u65f6\u95f4\uff1a",this.props.headerInfo.BeginDate.split("T")[0])):null}},{key:"renderGroupViews",value:function(){var e=this;return this.props.groupList&&0!==this.props.groupList.length?this.props.groupList.map(function(t,a){return e.renderGroupView(t,a)}):null}},{key:"renderGroupView",value:function(e,t){var a=this,r=new Date(this.props.headerInfo.BeginDate.replace(" ","T")).addDays(t).formatDate("YYYY-MM-DD");return D.a.createElement("div",{key:t},this.renderGroupHeaderView(r,t),e.map(function(e,r){return a.renderItemView(e,t,r)}))}},{key:"renderGroupHeaderView",value:function(e,t){return D.a.createElement("div",{className:"journeyDetailGroupHeader"},D.a.createElement("div",{className:"journeyDetailGroupHeaderRow"},D.a.createElement("img",{className:"journeyDetailGroupHeaderIcon",src:a(954),alt:""}),D.a.createElement("div",{className:"journeyDetailGroupHeaderText"},"\u7b2c",t+1,"\u5929(",e,")")))}},{key:"renderItemView",value:function(e,t,r){var i=this,n=this.getItemIcon(e);return D.a.createElement("div",{key:r},D.a.createElement("div",{className:"journeyDetailItemRow",onClick:function(){i.showItemDetail(e)}},D.a.createElement("img",{className:"journeyDetailItemIcon",src:n,alt:""}),D.a.createElement("div",{className:"journeyDetailItemRightRow"},D.a.createElement("div",{className:"journeyDetailItemRightTopRow"},D.a.createElement("div",{className:"journeyDetailItemTitleRow"},D.a.createElement("div",{className:"journeyDetailItemTitle"},e.Name),D.a.createElement("div",{className:"journeyDetailItemPlayTime"},this.getItemPlayTime(e))),D.a.createElement("div",{style:{flex:1}}),D.a.createElement("div",{className:"journeyDetailItemPrice"},D.a.createElement("div",{className:"journeyDetailItemPriceValue"},this.getPriceValue(e)),D.a.createElement("div",{className:"journeyDetailItemPriceUnit"},this.getPriceUnit(e))),D.a.createElement("img",{className:"journeyIndexHeaderArrow",src:a(55),alt:""})),D.a.createElement("div",{className:"journeyDetailItemPlayTime"},"\u5730\u5740\uff1a",e.Address),e.Telephone&&e.Telephone.length>0?D.a.createElement("div",{className:"journeyDetailItemPlayTime"},"\u7535\u8bdd\uff1a",e.Telephone):null,D.a.createElement("div",{className:"journeyDetailItemImage",style:{backgroundImage:"url("+e.GetImage.SmallImageFrontUrl+")"}}))),this.renderTrafficInfoView(t,r))}},{key:"renderTrafficInfoView",value:function(e,t){var r=this,i=this.props.trafficInfos[e+"_"+t];return i&&0!==i.length?D.a.createElement("div",{className:"journeyDetailTrafficRow",onClick:function(){return r.journeyTrafficMapTapped(e,t)}},D.a.createElement("div",{className:"journeyDetailTrafficInfo"},D.a.createElement("img",{className:"journeyDetailTrafficInfoIcon",src:a(955),alt:""}),D.a.createElement("div",{className:"journeyDetailTrafficInfoText"},i))):null}},{key:"showItemDetail",value:function(e){var t=this.getItemType(e);this.cacheScrollOffset(),t===b.h.You?this.props.history.push("/scenic/detail/"+e.Code):t===b.h.Zhu?this.props.history.push("/hotel/detail/"+e.Code):t===b.h.CanTing?this.props.history.push("/restaurant/detail/"+e.Code):t===b.h.Yu?this.props.history.push("/fun/detail/"+e.Code):t===b.h.Gou&&this.props.history.push("/shopping/detail/"+e.Code)}},{key:"getItemPlayTime",value:function(e){var t=this.getItemType(e);return t===b.h.You?e.PlayTime?"\u5efa\u8bae\u6e38\u73a9"+e.PlayTime+"\u5c0f\u65f6":"":t===b.h.Zhu?e.PlayTime?"\u65f6\u95f4\uff1a"+e.PlayTime:"":"\u8425\u4e1a\u65f6\u95f4\uff1a"+(e.BusinesTime&&e.BusinesTime.length>0?e.BusinesTime:"\u5168\u5929")}},{key:"getItemIcon",value:function(e){var t=this.getItemType(e);return a(t===b.h.You?297:t===b.h.Zhu?298:t===b.h.CanTing?299:t===b.h.Yu?301:300)}},{key:"getPriceValue",value:function(e){var t=this.getItemType(e);return null===e.Price||0===parseFloat(e.Price)?"\u514d\u8d39":t===b.h.Gou?"":"\uffe5"+e.Price}},{key:"getPriceUnit",value:function(e){var t=this.getItemType(e);return null===e.Price||0===parseFloat(e.Price)?"":t===b.h.Gou?"":t===b.h.Zhu?"\u8d77":"/\u4eba"}},{key:"getItemType",value:function(e){return"JQ"===e.PType?b.h.You:"JD"===e.PType?b.h.Zhu:"CT"===e.PType?b.h.CanTing:"TL"===e.PType||"YL"===e.PType?b.h.Yu:b.h.Gou}},{key:"cacheScrollOffset",value:function(){var e=P.a.findDOMNode(this.scrollView).scrollTop;this.props.dispatch(Object(C.e)(this.props.match.params.journeyId,e))}},{key:"restoreScrollViewPosition",value:function(){this.scrollView&&(isNaN(this.props.scrollViewOffset)?this.scrollView.scrollToY(0):this.scrollView.scrollToY(this.props.scrollViewOffset))}},{key:"searchDriveRoute",value:function(e,t,a){var r=this;if(window.BMap&&e&&0!==e.length&&!(t>=e.length)){this.searchStarted=!0,this.map=this.map?this.map:new window.BMap.Map("journey_detail_map");var i=t,n=a+1;n>=e[t].length-1&&(i+=1,n=0);var o=e[t][a],s=e[t][a+1];if(!this.isValidAddressItem(o)||!this.isValidAddressItem(s))return void this.searchDriveRoute(e,i,n);var l={onSearchComplete:function(o){if(p.getStatus()===window.BMAP_STATUS_SUCCESS){var s=o.getPlan(0),l="\u9a7e\u8f66 "+s.getDuration(!0)+", "+s.getDistance(!0),u=Object.assign({},r.props.trafficInfos);u[t+"_"+a]=l,r.props.dispatch(Object(C.f)(r.props.match.params.journeyId,u)),r.searchDriveRoute(e,i,n)}}},p=new window.BMap.DrivingRoute(this.map,l);p.search(new window.BMap.Point(o.Longitude,o.Latitude),new window.BMap.Point(s.Longitude,s.Latitude))}}},{key:"isValidAddressItem",value:function(e){return e&&e.Longitude&&e.Latitude&&(e.Longitude+"").length>0&&(e.Latitude+"").length>0&&!isNaN(e.Longitude)&&!isNaN(e.Latitude)}},{key:"journeyTrafficMapTapped",value:function(e,t){var a=this.props.groupList[e][t],r=this.props.groupList[e][t+1];if(this.isValidAddressItem(a)&&this.isValidAddressItem(r))return this.cacheScrollOffset(),void this.props.history.push("/map/mapNav/"+this.props.match.params.journeyId+"/"+a.Latitude+"/"+a.Longitude+"?fromLat="+r.Latitude+"&fromLng="+r.Longitude)}},{key:"journeyAddTapped",value:function(){l.a.alert("\u884c\u7a0b\u590d\u5236","\u662f\u5426\u590d\u5236\u5230\u6211\u7684\u884c\u7a0b?",[{text:"\u53d6\u6d88",style:"default"},{text:"OK",onPress:this.doJourneyAdd}])}},{key:"editTitle",value:function(){var e=this;l.a.prompt("\u4fee\u6539\u884c\u7a0b\u540d\u79f0","\u7ed9\u4f60\u7684\u884c\u7a0b\u8d77\u4e2a\u54cd\u4eae\u7684\u540d\u5b57",[{text:"\u53d6\u6d88"},{text:"\u786e\u8ba4",onPress:function(t){return e.onChangeName(e.props.headerInfo.PlanMainID,t)}}],"plain-text",this.props.headerInfo.TourName)}},{key:"onChangeName",value:function(e,t){var a=this,r={planMainID:e,title:t};L.a.postToPortal(b.q.JOURNEY.UpdateTourTitle,r,null,!0).then(function(e){return e.json()}).then(function(e){e&&a.props.dispatch(Object(C.b)(a.props.match.params.journeyId))})}},{key:"doJourneyAdd",value:function(){this.props.dispatch(Object(C.a)(this.props.match.params.journeyId))}},{key:"journeyEditTapped",value:function(){this.cacheScrollOffset(),this.props.history.push({pathname:"/journey/edit",state:{code:this.props.match.params.journeyId,groupList:this.props.groupList,headerInfo:this.props.headerInfo}})}},{key:"journeyMapLineTapped",value:function(){this.cacheScrollOffset(),this.props.history.push({pathname:"/journey/mapLine",state:{code:this.props.match.params.journeyId,groupList:this.props.groupList}})}},{key:"goBack",value:function(){var e=this.props.match.params.journeyId,t=this.props.dispatch;this.props.history.goBack(),t(Object(C.d)(e))}}]),t}(T.PureComponent),O=function(e,t){var r=e.journey.detailScreen[t.match.params.journeyId],i=N.a.getUserInfo(e),n=Object.assign({},r,{baiduMapInited:e.system.baiduMapInited,userImagePath:a(911),userInfo:i});return r&&r.headerInfo&&(n.isMine=r.headerInfo.UserID===i.ID,n.userImagePath=n.isMine?i.UserAvatar:r.headerInfo.headImg?r.headerInfo.headImg:a(911)),n};M=Object(w.b)(O)(M),t.default=M},911:function(e,t,a){e.exports=a.p+"static/media/portrait-whiteblack.fba26053.jpg"},951:function(e,t,a){e.exports=a.p+"static/media/plan-detail-edit-white@2x.dfd223f6.png"},952:function(e,t,a){e.exports=a.p+"static/media/plan-detail-map-white@2x.b2c77e80.png"},953:function(e,t,a){e.exports=a.p+"static/media/modifyInfo@2x.121083cf.png"},954:function(e,t,a){e.exports=a.p+"static/media/plan-detail-day@2x.f1ad1a5e.png"},955:function(e,t,a){e.exports=a.p+"static/media/icon_plan_bus.0ea92f29.png"}});
//# sourceMappingURL=5.fb635d13.chunk.js.map