webpackJsonp([6],{ap38:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var _card=__webpack_require__("hRRF"),_card2=_interopRequireDefault(_card),_list=__webpack_require__("peDk"),_list2=_interopRequireDefault(_list),_row=__webpack_require__("FV1P"),_row2=_interopRequireDefault(_row),_col=__webpack_require__("QoDT"),_col2=_interopRequireDefault(_col),_getPrototypeOf=__webpack_require__("Zx67"),_getPrototypeOf2=_interopRequireDefault(_getPrototypeOf),_classCallCheck2=__webpack_require__("Zrlr"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__("wxAW"),_createClass3=_interopRequireDefault(_createClass2),_possibleConstructorReturn2=__webpack_require__("zwoO"),_possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2),_inherits2=__webpack_require__("Pf15"),_inherits3=_interopRequireDefault(_inherits2),_icon=__webpack_require__("FC3+"),_icon2=_interopRequireDefault(_icon);__webpack_require__("1mFw"),__webpack_require__("Uk40"),__webpack_require__("3OJ+"),__webpack_require__("Wcwq"),__webpack_require__("CEb2");var _react=__webpack_require__("GiK3"),_react2=_interopRequireDefault(_react),_propTypes=__webpack_require__("KSGD"),_propTypes2=_interopRequireDefault(_propTypes);__webpack_require__("yMAi");var _history=__webpack_require__("9HTR"),_history2=_interopRequireDefault(_history),enterModule;function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}enterModule=__webpack_require__("rGbO").enterModule,enterModule&&enterModule(module);var IconText=function(e){var t=e.type,r=e.text;return _react2.default.createElement("span",null,_react2.default.createElement(_icon2.default,{type:t,style:{marginRight:8}}),r)},Home=function(_Component){function Home(e){return(0,_classCallCheck3.default)(this,Home),(0,_possibleConstructorReturn3.default)(this,(Home.__proto__||(0,_getPrototypeOf2.default)(Home)).call(this,e))}return(0,_inherits3.default)(Home,_Component),(0,_createClass3.default)(Home,[{key:"handleClick",value:function(e,t,r,a){this.props.handleClick&&this.props.handleClick(e,t,r)}},{key:"componentWillMount",value:function(){document.querySelector(".customer-jumbotron").classList.add("d-none")}},{key:"componentWillUnmount",value:function(){document.querySelector(".customer-jumbotron").classList.remove("d-none")}},{key:"render",value:function(){var e=this;return _react2.default.createElement("div",{id:"hero-page"},_react2.default.createElement(_row2.default,{id:"hero"},_react2.default.createElement(_col2.default,null,_react2.default.createElement("div",{className:"layer-bg layer","data-depth":"0.10","data-type":"parallax"}),_react2.default.createElement("div",{className:"layer-1 layer","data-depth":"0.20","data-type":"parallax"}),_react2.default.createElement("div",{className:"layer-2 layer","data-depth":"0.50","data-type":"parallax"}),_react2.default.createElement("div",{className:"layer-3 layer","data-depth":"0.80","data-type":"parallax"}),_react2.default.createElement("div",{className:"layer-overlay layer","data-depth":"0.85","data-type":"parallax"}),_react2.default.createElement("div",{className:"layer-4 layer","data-depth":"1.00","data-type":"parallax"}))),_react2.default.createElement(_row2.default,{id:"hero-mobile"}),_react2.default.createElement("div",{id:"content"},_react2.default.createElement(_row2.default,{className:"container-fluid"},_react2.default.createElement(_col2.default,{lg:{span:16},md:24},_react2.default.createElement(_list2.default,{itemLayout:"vertical",size:"large",split:!0,pagination:{onChange:function(e){console.log(e)},pageSize:6},dataSource:this.props.issueList,renderItem:function(t){return _react2.default.createElement(_list2.default.Item,{key:t.title,actions:[_react2.default.createElement(IconText,{type:"calendar",text:t.created_at.substring(0,10)})]},_react2.default.createElement(_list2.default.Item.Meta,{title:_react2.default.createElement("a",{className:"text",onClick:e.handleClick.bind(e,t.git_sha,t.number,t.title)},t.title)}),t.body)}})),_react2.default.createElement(_col2.default,{lg:{span:7,offset:1},md:24},_react2.default.createElement("h2",{style:{textAlign:"center"}},"精选板块"),_react2.default.createElement(_list2.default,{grid:{gutter:{md:48,lg:0},lg:1,md:2},dataSource:this.props.rareList,renderItem:function(e){return _react2.default.createElement(_list2.default.Item,null,_react2.default.createElement(_card2.default,{hoverable:!0,style:{backgroundImage:"url("+e.backgroundURI+")"}},e.body))}})))))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Home}(_react.Component);Home.propTypes={issueList:_propTypes2.default.array,rareList:_propTypes2.default.array,handleClick:_propTypes2.default.func},Home.defaultProps={issueList:[],rareList:[]};var _default=Home,reactHotLoader,leaveModule;exports.default=_default,reactHotLoader=__webpack_require__("rGbO").default,leaveModule=__webpack_require__("rGbO").leaveModule,reactHotLoader&&(reactHotLoader.register(IconText,"IconText","/Users/caoqiang/Desktop/workspace/photonalpha.github.io/Portal/src/components/Home/Home.js"),reactHotLoader.register(Home,"Home","/Users/caoqiang/Desktop/workspace/photonalpha.github.io/Portal/src/components/Home/Home.js"),reactHotLoader.register(_default,"default","/Users/caoqiang/Desktop/workspace/photonalpha.github.io/Portal/src/components/Home/Home.js"),leaveModule(module))}).call(exports,__webpack_require__("3IRH")(module))},u3uZ:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0}),exports.HomeContainer=void 0;var _extends2=__webpack_require__("Dd8w"),_extends3=_interopRequireDefault(_extends2),_getPrototypeOf=__webpack_require__("Zx67"),_getPrototypeOf2=_interopRequireDefault(_getPrototypeOf),_classCallCheck2=__webpack_require__("Zrlr"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__("wxAW"),_createClass3=_interopRequireDefault(_createClass2),_possibleConstructorReturn2=__webpack_require__("zwoO"),_possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2),_inherits2=__webpack_require__("Pf15"),_inherits3=_interopRequireDefault(_inherits2),_react=__webpack_require__("GiK3"),_react2=_interopRequireDefault(_react),_propTypes=__webpack_require__("KSGD"),_propTypes2=_interopRequireDefault(_propTypes),_reactRedux=__webpack_require__("RH2O"),_Home=__webpack_require__("ap38"),_Home2=_interopRequireDefault(_Home),_history=__webpack_require__("9HTR"),_history2=_interopRequireDefault(_history),_Utils=__webpack_require__("RRrP"),_Utils2=_interopRequireDefault(_Utils),_Loading=__webpack_require__("WtOT"),_Loading2=_interopRequireDefault(_Loading),_issues=__webpack_require__("cvkg"),_blogs=__webpack_require__("meaO"),enterModule;function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}enterModule=__webpack_require__("rGbO").enterModule,enterModule&&enterModule(module);var HomeContainer=exports.HomeContainer=function(_Component){function HomeContainer(e){(0,_classCallCheck3.default)(this,HomeContainer);var t=(0,_possibleConstructorReturn3.default)(this,(HomeContainer.__proto__||(0,_getPrototypeOf2.default)(HomeContainer)).call(this,e));return t.state={isLoading:!1,message:{},errorMsg:""},t}return(0,_inherits3.default)(HomeContainer,_Component),(0,_createClass3.default)(HomeContainer,[{key:"componentWillMount",value:function(){var e=this;this.props.getRepositoryTree().then(function(){e.props.getBlogIssues()})}},{key:"handleClick",value:function(e,t,r,a){console.log("handleClick",e,t,r);var o={pathname:"/reveal",state:{git_url:e,number:t,issue_title:r}};_history2.default.push(o)}},{key:"render",value:function(){var e=this.props.issueStore,t=e.message,r=e.isLoading,a=e.errorMsg,o={blog:this.props.blogStore.message},_=[];Array.isArray(o.blog.tree)&&(_=o.blog.tree.filter(function(e){return"blob"===e.type}).map(function(e){return{blogPath:e.path,sha:e.sha}}));var l=[],i=[];return Array.isArray(t)&&(l=t.map(function(e){var t=[],r=_.find(function(t){return t.blogPath.indexOf(e.title)>-1});e.labels&&e.labels.length>0&&(t=e.labels.map(function(e){return e.name}));var a={git_sha:r?r.sha:"",number:e.number,comments_url:e.comments_url,created_at:e.created_at,labels:t,title:e.title,body:e.body};return t.indexOf("rare")>-1&&i.push((0,_extends3.default)({},a,{backgroundURI:(0,_Utils2.default)(323,200,25)})),a})),_react2.default.createElement("div",null,r?_react2.default.createElement(_Loading2.default,null):a||_react2.default.createElement(_Home2.default,{handleClick:this.handleClick.bind(this),issueList:l,rareList:i}))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),HomeContainer}(_react.Component);HomeContainer.propTypes={getBlogIssues:_propTypes2.default.func,blogStore:_propTypes2.default.object};var mapStateToProps=function(e){return{issueStore:e.issueStore,blogStore:e.blogStore}},mapDispatchToProps={getBlogIssues:_issues.getBlogIssues,getRepositoryTree:_blogs.getRepositoryTree},_default=(0,_reactRedux.connect)(mapStateToProps,mapDispatchToProps)(HomeContainer),reactHotLoader,leaveModule;exports.default=_default,reactHotLoader=__webpack_require__("rGbO").default,leaveModule=__webpack_require__("rGbO").leaveModule,reactHotLoader&&(reactHotLoader.register(HomeContainer,"HomeContainer","/Users/caoqiang/Desktop/workspace/photonalpha.github.io/Portal/src/containers/Home/Home.js"),reactHotLoader.register(mapStateToProps,"mapStateToProps","/Users/caoqiang/Desktop/workspace/photonalpha.github.io/Portal/src/containers/Home/Home.js"),reactHotLoader.register(mapDispatchToProps,"mapDispatchToProps","/Users/caoqiang/Desktop/workspace/photonalpha.github.io/Portal/src/containers/Home/Home.js"),reactHotLoader.register(_default,"default","/Users/caoqiang/Desktop/workspace/photonalpha.github.io/Portal/src/containers/Home/Home.js"),leaveModule(module))}).call(exports,__webpack_require__("3IRH")(module))},yMAi:function(e,t){}});