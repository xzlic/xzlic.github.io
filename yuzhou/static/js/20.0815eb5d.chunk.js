webpackJsonp([20],{878:function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(16),l=(n.n(o),n(17)),u=n.n(l),s=n(11),c=(n.n(s),n(12)),p=n.n(c),v=n(0),f=n.n(v),d=n(2),m=n(10),y=n(292),h=(n.n(y),n(70)),w=n(1),b=n(23),k=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),N=function(e){function t(e){i(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isFetching:!1},n}return r(t,e),k(t,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"componentDidUpdate",value:function(e,t,n){this.props.isFromNativeApp&&!e.isNativeAppReady&&this.props.isNativeAppReady&&this.sendMessageToNative(w.i.SHOW_SHARE,{isShowShare:!0,url:window.location.href})}},{key:"loadData",value:function(){var e=this;n.e(25).then(n.bind(null,908)).then(function(t){var n=t.overviewList,i=n[e.props.match.params.index];e.setState({item:i,isFetching:!1}),e.updateNativeTitle(i.title)})}},{key:"render",value:function(){var e=this,t=this.state.item;return f.a.createElement("div",{className:this.props.isFromNativeApp?"isFromNativeApp":null},this.props.isFromNativeApp?null:f.a.createElement(p.a,{mode:"dark",className:"navBar",leftContent:f.a.createElement(b.a,{ref:function(t){e.LeftContentView=t?t.getWrappedInstance():e.scrollView},goBackAction:function(){},history:this.props.history}),onLeftClick:function(){e.LeftContentView.goHome()}},t?t.title:""),f.a.createElement(m.a,{style:{backgroundColor:"#efeff4"}},this.state.isFetching?f.a.createElement(u.a,{toast:!0,text:"Loading..."}):f.a.createElement("div",{className:"overviewDetail"},this.renderViews(t?t.details:null))))}},{key:"renderViews",value:function(e){var t=this;return e&&0!==e.length?e.map(function(e,n){return"image"===e.type?t.renderImageView(e.value,n):"author"===e.type?t.renderAuthorView(e.value,n):"title"===e.type?t.renderTitleView(e.value,n):"subTitle"===e.type?t.renderSubTitleView(e.value,n):"content"===e.type?t.renderContentView(e.value,n):null}):null}},{key:"renderImageView",value:function(e,t){return f.a.createElement("img",{src:e,alt:"",key:t,className:"overviewDetailImage"})}},{key:"renderAuthorView",value:function(e,t){return f.a.createElement("div",{className:"overviewDetailAuthor",key:t},e)}},{key:"renderTitleView",value:function(e,t){return f.a.createElement("div",{className:"overviewDetailTitle",key:t},e)}},{key:"renderSubTitleView",value:function(e,t){return f.a.createElement("div",{className:"overviewDetailSubTitle",key:t},e)}},{key:"renderContentView",value:function(e,t){if(e)return"string"===typeof e?f.a.createElement("div",{className:"overviewDetailContent",key:t},e):e.map(function(e,n){return f.a.createElement("div",{className:"overviewDetailContent",key:t+n},e)})}}]),t}(h.a),g=function(e,t){return{isFromNativeApp:e.native.isFromNativeApp,isNativeAppReady:e.native.isNativeAppReady}};N=Object(d.b)(g)(N),t.default=N}});
//# sourceMappingURL=20.0815eb5d.chunk.js.map