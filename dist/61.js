/*! NutUI v1.2.8 Mon Jun 25 2018 17:18:29 GMT+0800 (CST) */
webpackJsonpnutui([61],{1069:function(t,e,n){(t.exports=n(1)()).push([t.i,".input-telnum .nut-telinput-box ::-webkit-input-placeholder{color:green}.input-telnum .nut-telinput-box :-ms-input-placeholder,.input-telnum .nut-telinput-box ::-ms-input-placeholder{color:green}.input-telnum .nut-telinput-box ::placeholder{color:green}",""])},1158:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nut-demoheader",{attrs:{name:t.$route.name}}),t._v(" "),n("h5",[t._v("示例")]),t._v(" "),n("p",[t._v("默认用法")]),t._v(" "),n("nut-telinput"),t._v(" "),n("p",[t._v("自定义输入框宽高、带有清除按钮")]),t._v(" "),n("nut-telinput",{attrs:{telWidth:"50%",telHeight:"1",clearPic:!0}}),t._v(" "),n("p",[t._v("增加回调函数，且提示信息位置在输入框下面")]),t._v(" "),n("nut-telinput",{staticClass:"input-telnum",attrs:{gapone:3,gapsec:7,telWidth:"4",telHeight:"1",clearPic:!0,tipsInfo:"请输入正确的电话号码",placeText:"请输入自定义文案",tipsPosition:"bottom"},on:{"pass-test":t.passTest,clear:t.clear,"error-tel":t.errorTel}})],1)},staticRenderFns:[]}},1274:function(t,e,n){var o=n(1069);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(3)("35964a14",o,!0,{})},851:function(t,e,n){var o=n(2)(n(948),n(1158),function(t){n(1274)},null,null);t.exports=o.exports},948:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,l=n(20);(o=l)&&o.__esModule;e.default={data:function(){return{}},methods:{clear:function(){console.log("点击了清除按钮")},passTest:function(t){console.log(t)},errorTel:function(t){console.log("error"+t)}}}}});