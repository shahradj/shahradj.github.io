(function(t){function e(e){for(var a,r,c=e[0],s=e[1],l=e[2],d=0,f=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,c=1;c<n.length;c++){var s=n[c];0!==i[s]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},i={app:0},o=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0c51":function(t,e,n){},"1f94":function(t,e,n){},"2b23":function(t,e,n){"use strict";var a=n("2ccd"),i=n.n(a);i.a},"2ccd":function(t,e,n){},"30fa":function(t,e,n){"use strict";var a=n("9eec"),i=n.n(a);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e623"),n("e379"),n("5dc8"),n("37e1");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.$store.state.loading?n("VProgressLinear",{attrs:{indeterminate:""}}):n("VApp",[n("VAppBar",{staticClass:"app-bar",attrs:{height:"auto"}},[n("v-toolbar-title",{staticClass:"headline d-none d-md-flex"},[t._v(" Multitrack Player ")]),n("Controls")],1),n("v-content",[n("router-view")],1)],1)],1)},o=[],r=(n("d3b7"),n("3ca3"),n("ddb0"),n("96cf"),n("c964")),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("VRow",{attrs:{justify:"end",align:"center"}},[t.controlEditMode?n("VBtn",{attrs:{small:""},on:{click:function(e){return t.$store.dispatch("toggleControlEditMode")}}},[t._v("Done mapping")]):t._e(),n("VBtn",{attrs:{icon:"",title:t.getControlMappingName("playPause"),color:t.getControlMappingColor("playPause")},on:{click:function(e){return t.mapControlOrDispatchAction("playPause")}}},[n("VIcon",[t._v(t._s(t.playPauseIcon))])],1),n("VBtn",{attrs:{icon:"",title:t.getControlMappingName("stop"),color:t.getControlMappingColor("stop")},on:{click:function(e){return t.mapControlOrDispatchAction("stop")}}},[n("VIcon",[t._v(t._s(t.mdiStop))])],1),n("VBtn",{attrs:{icon:"",outlined:t.$store.state.clickActive,title:t.getControlMappingName("clickActive"),color:t.getControlMappingColor("clickActive")},on:{click:function(e){return t.mapControlOrDispatchAction("clickActive","toggleClickActive")}}},[n("VIcon",[t._v(t._s(t.mdiMetronome))])],1),n("TextField",{staticClass:"small-input",model:{value:t.clickBpm,callback:function(e){t.clickBpm=e},expression:"clickBpm"}}),n("TextField",{staticClass:"small-input",model:{value:t.clickTimeSignature,callback:function(e){t.clickTimeSignature=e},expression:"clickTimeSignature"}}),n("Clock",{staticClass:"mr-4",attrs:{values:t.timeValues,icon:t.mdiClockOutline},on:{input:t.setTime}}),n("Clock",{attrs:{values:t.beatsValues,icon:t.mdiMusicNote},on:{input:t.setBeats}}),n("VBtn",{attrs:{text:"",icon:""},on:{click:function(e){return t.$store.dispatch("toggleSettingsDialog")}}},[n("VIcon",[t._v(t._s(t.mdiWrench))])],1),n("VBtn",{attrs:{text:"",icon:""},on:{click:function(e){return t.$store.dispatch("toggleAboutDialog")}}},[n("VIcon",[t._v(t._s(t.mdiInformation))])],1)],1)},s=[],l=(n("99af"),n("a9e3"),n("ac1f"),n("1276"),n("d0af")),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"text-center clock-container"},[n("VIcon",[t._v(t._s(t.icon))]),t._l(t.values,(function(e,a){return[n("TextField",{key:"value"+a,staticClass:"value",attrs:{value:e},on:{input:function(e){return t.set(e,a)}}}),a<t.values.length-1?n("div",{key:"spacer"+a,staticClass:"spacer"},[t._v(" : ")]):t._e()]}))],2)},d=[],f=n("d0ff"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("VTextField",{ref:"textField",staticClass:"input-thin",attrs:{"single-line":"","hide-details":""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.set(e)}},model:{value:t.localValue,callback:function(e){t.localValue=e},expression:"localValue"}})},m=[],v={props:["value"],data:function(){return{localValue:this.value}},watch:{value:function(t){document.activeElement!==this.$refs.textField.$refs.input&&(this.localValue=t)}},methods:{set:function(){this.$emit("input",this.localValue),this.$refs.textField.blur()}}},g=v,h=(n("2b23"),n("2877")),k=n("6544"),b=n.n(k),y=n("8654"),C=Object(h["a"])(g,p,m,!1,null,null,null),V=C.exports;b()(C,{VTextField:y["a"]});var S={components:{TextField:V},props:{values:Array,icon:String},methods:{set:function(t,e){var n=Object(f["a"])(this.values);n[e]=Number(t),this.$emit("input",{values:n,index:e})}}},x=S,T=(n("b386"),n("132d")),P=Object(h["a"])(x,u,d,!1,null,"6bec7694",null),w=P.exports;b()(P,{VIcon:T["a"]});var $=n("94ed"),M=new AudioContext,E=new StereoPannerNode(M,{pan:0}),_=M.createGain(),A=null,O=null,B=0;function D(){return j.apply(this,arguments)}function j(){return j=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,n,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("./click.wav");case 2:return e=t.sent,t.next=5,e.arrayBuffer();case 5:return n=t.sent,t.next=8,fetch("./click-accent.wav");case 8:return a=t.sent,t.next=11,a.arrayBuffer();case 11:return i=t.sent,t.abrupt("return",new Promise((function(t){M.decodeAudioData(n,(function(e){A=e,M.decodeAudioData(i,(function(e){O=e,t()}))}))})));case 13:case"end":return t.stop()}}),t)}))),j.apply(this,arguments)}function N(t){var e=t.state.clickTimeSignature,n=e.beats,a=e.unit;if(n&&a){var i=F(t.state);if(t.state.playPosition/B>i){var o=M.createBufferSource();o.connect(_).connect(E).connect(M.destination),B%n===0?(o.buffer=O,o.start()):(o.buffer=A,o.start()),B++}}}function G(t){E.pan.value=t}function I(t){B=t}function R(t){_.gain.value=t}function F(t){return 60/(t.clickBpm*(t.clickTimeSignature.unit/4))}function L(t){var e=Math.floor(t.playPosition/F(t));return[Math.floor(e/t.clickTimeSignature.beats),e%t.clickTimeSignature.beats+1]}var W={components:{Clock:w,TextField:V},data:function(){return{mdiStop:$["e"],mdiMetronome:$["c"],mdiWrench:$["f"],mdiInformation:$["b"],mdiMusicNote:$["d"],mdiClockOutline:$["a"]}},computed:{playPauseIcon:function(){return{playing:"mdi-pause",paused:"mdi-play",stopped:"mdi-play"}[this.$store.state.playState]},clickBpm:{get:function(){return this.$store.state.clickBpm},set:function(t){this.$store.dispatch("setClickBpm",t)}},clickTimeSignature:{get:function(){var t=this.$store.state.clickTimeSignature,e=t.beats,n=t.unit;return"".concat(e,"/").concat(n)},set:function(t){var e=t.split("/"),n=Object(l["a"])(e,2),a=n[0],i=n[1];this.$store.dispatch("setClickTimeSignature",{beats:Number(a)||"",unit:Number(i)||""})}},timeValues:function(){var t=this.$store.state.playPosition;return[Math.floor(t/60),Math.floor(t%60),Math.floor(t%1*10)]},beatsValues:function(){return this.$store.getters.playBeatsPosition},controlEditMode:function(){return this.$store.state.controlEditMode}},methods:{mapControlOrDispatchAction:function(t,e){if(!this.controlEditMode)return this.$store.dispatch(e||t);this.$store.dispatch("setControlEditSelected",t)},getControlMappingName:function(t){if(this.controlEditMode){var e=this.$store.getters.getControlMapping(t);if(e){var n={" ":"Space"}[e.value]||e.value,a={key:"Keyboard",note:"Note",controlChange:"Control change"}[e.type];return"".concat(a,": ").concat(n)}return""}},getControlMappingColor:function(t){if(this.controlEditMode){var e=this.$store.getters.getControlMapping(t);return e?"yellow":void 0}},setTime:function(t){var e=t.values,n=t.index,a=Object(l["a"])(e,3),i=a[0],o=a[1],r=a[2];0===n?(o=0,r=0):1===n&&(r=0);var c=60*i+o+r/10;this.$store.dispatch("playAt",c)},setBeats:function(t){var e=t.values,n=t.index,a=Object(l["a"])(e,2),i=a[0],o=a[1];0===n&&(o=1);var r=F(this.$store.state),c=i*r*4+(o-1)*r;this.$store.dispatch("playAt",c)}}},K=W,J=(n("f04e"),n("8336")),q=n("0fd9b"),z=Object(h["a"])(K,c,s,!1,null,"40d3a9b6",null),H=z.exports;b()(z,{VBtn:J["a"],VIcon:T["a"],VRow:q["a"]});var Q=n("c62b"),U=n.n(Q);function X(){return new Promise((function(t,e){U.a.enable((function(n){n?e(n):t()}))}))}function Y(){return U.a.inputs}function Z(t){return U.a.getInputByName(t)}function tt(t,e){var n=Z(t);n.removeListener(),n.addListener("noteon","all",(function(t){e.dispatch(e.rootState.controlEditMode?"setControlEdit":"triggerControlAction",{type:"note",value:t.note.number})})),n.addListener("controlchange","all",(function(t){127===t.value&&e.dispatch(e.rootState.controlEditMode?"setControlEdit":"triggerControlAction",{type:"controlChange",value:t.controller.number})}))}function et(t){document.addEventListener("keyup",(function(e){t.dispatch(t.state.controlEditMode?"setControlEdit":"triggerControlAction",{type:"key",value:e.key})}))}var nt={components:{Controls:H},mounted:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([X(),D()]);case 2:return e.next=4,t.$store.dispatch("initSettings");case 4:et(t.$store),t.$store.commit("setLoading",!1);case 6:case"end":return e.stop()}}),e)})))()},watch:{"$store.state.controlEditMode":function(t){this.$vuetify.theme.dark=!!t}}},at=nt,it=(n("71ea"),n("7496")),ot=n("40dc"),rt=n("a75b"),ct=n("8e36"),st=n("2a7f"),lt=Object(h["a"])(at,i,o,!1,null,"51739c13",null),ut=lt.exports;b()(lt,{VApp:it["a"],VAppBar:ot["a"],VContent:rt["a"],VProgressLinear:ct["a"],VToolbarTitle:st["a"]});var dt=n("8c4f"),ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("VContainer",[n("SettingsDialog"),n("AboutDialog"),n("SongManager")],1)},pt=[],mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Dropdown",{attrs:{options:t.options,disabled:!1,name:"zipcode",maxItem:10,placeholder:"Please select a song"},on:{selected:t.validateSelection}}),n("VFileInput",{attrs:{label:"Tracks",value:t.files,multiple:"",placeholder:"Add audio files",accept:"audio/*"},on:{change:t.addTracks}}),t._l(t.$store.state.tracks,(function(t,e){return n("Track",{key:t.id,attrs:{track:t,number:e+1}})}))],2)},vt=[],gt=(n("4160"),n("baa5"),n("b0c0"),n("159b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("VCard",{staticClass:"mb-4"},[n("VCardText",[n("VRow",{attrs:{"no-gutters":""}},[n("VCol",{staticClass:"pr-4",attrs:{cols:"12",sm:"3"}},[n("VTextField",{model:{value:t.track.name,callback:function(e){t.$set(t.track,"name",e)},expression:"track.name"}}),n("VRow",{attrs:{dense:"",justify:"space-between"}},[n("VBtn",{attrs:{outlined:!t.track.active,color:t.activeColor},on:{click:t.toggleActive}},[t._v(t._s(t.number))]),n("VBtn",{attrs:{outlined:!t.solo,color:"primary"},on:{click:t.toggleSolo}},[t._v("Solo")]),n("VBtn",{attrs:{icon:""},on:{click:t.remove}},[n("VIcon",[t._v("mdi-delete")])],1)],1),n("VSlider",{staticClass:"mt-4",attrs:{"hide-details":"",min:"0",max:"1.5",step:"0.01"},model:{value:t.gain,callback:function(e){t.gain=e},expression:"gain"}})],1),n("VCol",{staticClass:"container text-center",attrs:{cols:"12",sm:"9"}},[t.track.ready?t._e():n("VProgressCircular",{staticClass:"progress",attrs:{indeterminate:""}}),n("div",{ref:"waveformContainer"})],1)],1)],1)],1)}),ht=[],kt=n("f3f3"),bt=n("276c"),yt=n("e954"),Ct=n("8896"),Vt=n.n(Ct),St=function(){function t(e){var n=e.audioContext,a=e.stereoPannerNode,i=e.name;Object(bt["a"])(this,t),this.name=i,this.audioContext=n,this.stereoPannerNode=a,this.ready=!1,this.gainNode=n.createGain(),this.gainValue=1,this.active=!0,this.playing=!1}return Object(yt["a"])(t,[{key:"init",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var n,a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t){return a.audioContext.decodeAudioData(e,t)}));case 2:n=t.sent,this.audioBuffer=n,this.initAudioSource(),this.ready=!0;case 6:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"initAudioSource",value:function(){this.audioSource=this.audioContext.createBufferSource(),this.audioSource.buffer=this.audioBuffer,this.audioSource.connect(this.gainNode).connect(this.stereoPannerNode).connect(this.audioContext.destination)}},{key:"play",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.playing&&this.audioSource.stop(t),this.initAudioSource(),this.audioSource.start(t,e),this.playing=!0}},{key:"pause",value:function(t){this.audioSource.stop(t),this.playing=!1}},{key:"stop",value:function(t){this.audioSource.stop(t),this.playing=!1}},{key:"setWaveformPlayheadTime",value:function(t){this.waveSurfer.seekTo(t/this.audioBuffer.duration)}},{key:"initWaveform",value:function(t){this.waveSurfer=Vt.a.create(Object(kt["a"])({interact:!1},t)),this.waveSurfer.loadDecodedBuffer(this.audioBuffer)}},{key:"isSoloOrActive",value:function(t){return t===this||null===t&&this.active}},{key:"setGain",value:function(t,e){this.gainNode.gain.value=this.isSoloOrActive(e)?t+this.gainValue-1:0}},{key:"eventLoop",value:function(t){this.waveSurfer&&this.setWaveformPlayheadTime(t)}}]),t}(),xt={props:{number:Number,track:St},mounted:function(){},computed:{gain:{get:function(){return this.track.gainValue},set:function(t){return this.$store.dispatch("setTrackGainValue",{track:this.track,value:t})}},solo:function(){return this.$store.state.soloTrack===this.track},activeColor:function(){var t=this.$store.state.soloTrack;return t===this.track||null===t?"primary":"accent"}},watch:{"track.ready":function(){this.track.initWaveform({container:this.$refs.waveformContainer,height:150,cursorColor:"rgba(0, 0, 0, 0.4)",waveColor:"#999",progressColor:"rgba(0, 0, 0, 0.4)"})},active:function(t){this.track.setGainValue(t?this.gain:0)}},methods:{remove:function(){this.$store.dispatch("removeTrack",this.track)},toggleActive:function(){this.$store.dispatch("setTrackActive",{track:this.track,value:!this.track.active})},toggleSolo:function(){this.$store.dispatch("setSoloTrack",this.solo?null:this.track)}}},Tt=xt,Pt=(n("30fa"),n("b0af")),wt=n("99d9"),$t=n("62ad"),Mt=n("490a"),Et=n("ba0d"),_t=Object(h["a"])(Tt,gt,ht,!1,null,"405e03f2",null),At=_t.exports;b()(_t,{VBtn:J["a"],VCard:Pt["a"],VCardText:wt["b"],VCol:$t["a"],VIcon:T["a"],VProgressCircular:Mt["a"],VRow:q["a"],VSlider:Et["a"],VTextField:y["a"]});var Ot=n("ae2e"),Bt=n.n(Ot),Dt=[],jt=["this song","thath song","test song"],Nt=1;jt.forEach((function(t){Dt.push({id:Nt,name:t}),Nt++}));var Gt={components:{Dropdown:Bt.a,Track:At},data:function(){return{files:[],options:Dt}},methods:{addTracks:function(t){var e=this;t.length&&(t.forEach((function(t){var n=t.name.substring(0,t.name.lastIndexOf(".")),a=new FileReader;a.readAsArrayBuffer(t),a.addEventListener("load",(function(){e.$store.dispatch("addTrack",{name:n,arrayBuffer:a.result})}))})),this.files=[])},validateSelection:function(t){t&&console.log(t.target)}}},It=Gt,Rt=n("23a7"),Ft=Object(h["a"])(It,mt,vt,!1,null,null,null),Lt=Ft.exports;b()(Ft,{VFileInput:Rt["a"]});var Wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("VDialog",{attrs:{"max-width":"400"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("VCard",[n("VCardTitle",[t._v("Settings")]),n("VCardText",[n("VForm",[n("VSelect",{attrs:{items:t.outputs,label:"Track output"},model:{value:t.trackPanning,callback:function(e){t.trackPanning=e},expression:"trackPanning"}}),n("VSelect",{attrs:{items:t.outputs,label:"Click output"},model:{value:t.clickPanning,callback:function(e){t.clickPanning=e},expression:"clickPanning"}}),n("VSlider",{attrs:{label:"Track volume","hide-details":"",min:"0",max:"2",step:"0.01"},model:{value:t.trackGain,callback:function(e){t.trackGain=e},expression:"trackGain"}}),n("VSlider",{attrs:{label:"Click volume",min:"0",max:"2",step:"0.01"},model:{value:t.clickGain,callback:function(e){t.clickGain=e},expression:"clickGain"}}),n("VSelect",{attrs:{items:t.midiDevices,label:"MIDI Control Device"},model:{value:t.midiDevice,callback:function(e){t.midiDevice=e},expression:"midiDevice"}}),n("VLabel",[t._v("Edit MIDI and key mapping")]),n("VRow",{staticClass:"mt-2 ml-1"},[n("VBtn",{staticClass:"mr-4",attrs:{small:"",outlined:""},on:{click:function(e){return t.$store.dispatch("toggleControlEditMode")}}},[t._v("MIDI")]),n("VBtn",{attrs:{small:"",outlined:""},on:{click:function(e){return t.$store.dispatch("toggleControlEditMode")}}},[t._v("Key")])],1)],1)],1),n("VCardActions",[n("VSpacer"),n("VBtn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.dialog=!1}}},[t._v("OK")])],1)],1)],1)},Kt=[],Jt=(n("d81d"),{data:function(){return{outputs:[{text:"1/2 (Stereo)",value:0},{text:"1 (Mono)",value:-1},{text:"2 (Mono)",value:1}],midiDevices:Y().map((function(t){return t.name}))}},computed:{dialog:{get:function(){return"settings"===this.$store.state.dialog},set:function(){return this.$store.dispatch("toggleSettingsDialog")}},trackPanning:{get:function(){return this.$store.state.settings.trackPanning},set:function(t){return this.$store.dispatch("setTrackPanning",t)}},clickPanning:{get:function(){return this.$store.state.settings.clickPanning},set:function(t){return this.$store.dispatch("setClickPanning",t)}},clickGain:{get:function(){return this.$store.state.settings.clickGainValue},set:function(t){this.$store.dispatch("setClickGainValue",t)}},trackGain:{get:function(){return this.$store.state.settings.trackGainValue},set:function(t){this.$store.dispatch("setMasterTrackGainValue",t)}},midiDevice:{get:function(){return this.$store.state.settings.midiDeviceName},set:function(t){this.$store.dispatch("setMidiDeviceName",t)}}}}),qt=Jt,zt=n("169a"),Ht=n("4bd4"),Qt=n("24c9"),Ut=n("b974"),Xt=n("2fa4"),Yt=Object(h["a"])(qt,Wt,Kt,!1,null,null,null),Zt=Yt.exports;b()(Yt,{VBtn:J["a"],VCard:Pt["a"],VCardActions:wt["a"],VCardText:wt["b"],VCardTitle:wt["c"],VDialog:zt["a"],VForm:Ht["a"],VLabel:Qt["a"],VRow:q["a"],VSelect:Ut["a"],VSlider:Et["a"],VSpacer:Xt["a"]});var te=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("VDialog",{attrs:{"max-width":"400"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("VCard",[n("VCardTitle",[t._v("About")]),n("VCardText",{staticClass:"text-center"},[n("p",[t._v("Multi track player")]),n("p",[t._v("Version "+t._s(t.version))])])],1)],1)},ee=[],ne={data:function(){return{version:"1.0.0"}},computed:{dialog:{get:function(){return"about"===this.$store.state.dialog},set:function(){return this.$store.dispatch("toggleAboutDialog")}}}},ae=ne,ie=Object(h["a"])(ae,te,ee,!1,null,null,null),oe=ie.exports;b()(ie,{VCard:Pt["a"],VCardText:wt["b"],VCardTitle:wt["c"],VDialog:zt["a"]});var re={components:{SongManager:Lt,SettingsDialog:Zt,AboutDialog:oe},name:"home",data:function(){return{publicPath:"/"}}},ce=re,se=n("a523"),le=Object(h["a"])(ce,ft,pt,!1,null,null,null),ue=le.exports;b()(le,{VContainer:se["a"]}),a["a"].use(dt["a"]);var de=new dt["a"]({routes:[{path:"/",name:"home",component:ue}]}),fe=(n("7db0"),n("c975"),n("a434"),n("4795"),n("2f62")),pe=(n("4fad"),new AudioContext),me=new StereoPannerNode(pe,{pan:0});function ve(t,e,n){t.setGain(e.trackGainValue,n.soloTrack)}function ge(t){var e=t.name,n=t.arrayBuffer,a=new St({name:e,audioContext:pe,stereoPannerNode:me});return a.init(n),a}function he(t,e){t.forEach((function(t){return t.play(pe.currentTime,e)}))}var ke=n("3f4f"),be="default",ye=Object(ke["a"])("multitrack-player",1,{upgrade:function(t){t.createObjectStore(be)}});function Ce(t,e){return Ve.apply(this,arguments)}function Ve(){return Ve=Object(r["a"])(regeneratorRuntime.mark((function t(e,n){var a,i=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=i.length>2&&void 0!==i[2]?i[2]:be,t.next=3,ye;case 3:return t.abrupt("return",t.sent.put(a,n,e));case 4:case"end":return t.stop()}}),t)}))),Ve.apply(this,arguments)}function Se(t){return xe.apply(this,arguments)}function xe(){return xe=Object(r["a"])(regeneratorRuntime.mark((function t(e){var n,a=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:be,t.next=3,ye;case 3:return t.abrupt("return",t.sent.get(n,e));case 4:case"end":return t.stop()}}),t)}))),xe.apply(this,arguments)}var Te={state:{trackPanning:0,clickPanning:0,midiDeviceName:null,clickGainValue:1,trackGainValue:1,controlEditMap:{}},getters:{getControlMapping:function(t){return function(e){return t.controlEditMap[e]}}},mutations:{setTrackPanning:function(t,e){t.trackPanning=e},setClickPanning:function(t,e){t.clickPanning=e},setMidiDeviceName:function(t,e){t.midiDeviceName=e},setControlEdit:function(t,e){var n=e.key,a=e.value;t.controlEditMap[n]=a},setMasterTrackGainValue:function(t,e){t.trackGainValue=e},setClickGainValue:function(t,e){t.clickGainValue=e}},actions:{setMasterTrackGainValue:function(t,e){var n=t.commit,a=t.rootState,i=t.state;n("setMasterTrackGainValue",e),a.tracks.forEach((function(t){return ve(t,i,a)})),Pe()},setTrackPanning:function(t,e){var n=t.commit;n("setTrackPanning",e),me.pan.value=e,Pe()},setClickPanning:function(t,e){var n=t.commit;n("setClickPanning",e),G(e),Pe()},setMidiDeviceName:function(t,e){var n=t.commit,a=t.rootState,i=t.dispatch;n("setMidiDeviceName",e),tt(e,{rootState:a,dispatch:i}),Pe()},setControlEdit:function(t,e){var n=t.commit,a=t.rootState,i=e.type,o=e.value;n("setControlEdit",{key:a.controlEditSelected,value:{type:i,value:o}}),Pe()},setClickGainValue:function(t,e){var n=t.commit;n("setClickGainValue",e),R(e),Pe()},triggerControlAction:function(t,e){var n=t.state,a=t.dispatch;Object.entries(n.controlEditMap).find((function(t){var n=Object(l["a"])(t,2),i=n[0],o=n[1];o.type===e.type&&o.value===e.value&&a(i)}))},initSettings:function(t){return Object(r["a"])(regeneratorRuntime.mark((function e(){var n,a,i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.state,a=t.dispatch,i=t.rootState,e.next=3,Se("settings");case 3:o=e.sent,Object.assign(n,o),n.midiDeviceName&&tt(n.midiDeviceName,{rootState:i,dispatch:a});case 6:case"end":return e.stop()}}),e)})))()}}};function Pe(){Ce("settings",Te.state)}var we=Te;a["a"].use(fe["a"]);var $e=pe.currentTime,Me=0,Ee=new fe["a"].Store({modules:{settings:we},state:{playState:"stopped",playPosition:0,tracks:[],clickActive:!1,clickBpm:102,soloTrack:null,dialog:null,loading:!0,clickTimeSignature:{beats:4,unit:4},controlEditMode:null,controlEditSelected:null},getters:{getTrack:function(t){return function(e){return t.tracks.find((function(t){return t===e}))}},playBeatsPosition:function(t){return L(t)}},mutations:{setPlayState:function(t,e){t.playState=e},addTrack:function(t,e){t.tracks.push(e)},removeTrack:function(t,e){t.tracks.splice(t.tracks.indexOf(e),1)},setClickActive:function(t,e){t.clickActive=e},setPlayPosition:function(t,e){t.playPosition=e},setTrackActive:function(t,e){var n=e.track,a=e.value;n.active=a},setSoloTrack:function(t,e){t.soloTrack=e},setDialog:function(t,e){t.dialog=e},setClickBpm:function(t,e){t.clickBpm=e},setLoading:function(t,e){t.loading=e},setClickTimeSignature:function(t,e){t.clickTimeSignature=e},setControlEditMode:function(t,e){t.controlEditMode=e},setControlEditSelected:function(t,e){t.controlEditSelected=e}},actions:{playPause:function(t){var e=t.state,n=t.commit,a={stopped:"playing",paused:"playing",playing:"paused"},i=a[e.playState];n("setPlayState",i),"suspended"===pe.state&&pe.resume(),"playing"===i?($e=pe.currentTime,Me=0,he(e.tracks,e.playPosition)):e.tracks.forEach((function(t){return t.pause()}))},playAt:function(t,e){var n=t.state,a=t.dispatch;a("setPlayPosition",e),I(Math.floor(e/F(n))),he(n.tracks,n.playPosition)},stop:function(t){var e=t.commit,n=t.state;"playing"===n.playState&&n.tracks.forEach((function(t){return t.stop()})),e("setPlayState","stopped"),e("setPlayPosition",0),I(0),n.tracks.forEach((function(t){return t.eventLoop(Ee.state.playPosition)}))},addTrack:function(t,e){var n=t.commit,a=e.name,i=e.arrayBuffer;n("addTrack",ge({name:a,arrayBuffer:i}))},removeTrack:function(t,e){var n=t.commit;n("removeTrack",e)},toggleClickActive:function(t){var e=t.commit,n=t.state;e("setClickActive",!n.clickActive)},setTrackGainValue:function(t,e){var n=t.state,a=e.track,i=e.value;a.gainValue=i,ve(a,n.settings,n)},setTrackActive:function(t,e){var n=t.commit,a=t.state,i=e.track,o=e.value;n("setTrackActive",{track:i,value:o}),ve(i,a.settings,a)},setSoloTrack:function(t,e){var n=t.commit,a=t.state;n("setSoloTrack",e),a.tracks.forEach((function(t){return ve(t,a.settings,a)}))},toggleSettingsDialog:function(t){var e=t.commit,n=t.state;e("setDialog","settings"===n.dialog?null:"settings")},toggleAboutDialog:function(t){var e=t.commit,n=t.state;e("setDialog","about"===n.dialog?null:"about")},setClickBpm:function(t,e){var n=t.commit;n("setClickBpm",e)},setClickTimeSignature:function(t,e){var n=t.commit;n("setClickTimeSignature",e)},toggleControlEditMode:function(t){var e=t.commit,n=t.state;e("setControlEditMode",!n.controlEditMode),e("setDialog",null)},setControlEditSelected:function(t,e){var n=t.commit;n("setControlEditSelected",e)},setPlayPosition:function(t,e){var n=t.commit;n("setPlayPosition",e)}}}),_e=.01;function Ae(){Ee.commit("setPlayPosition",Ee.state.playPosition+_e),Ee.state.tracks.forEach((function(t){return t.eventLoop(Ee.state.playPosition)}))}setInterval((function(){if("playing"===Ee.state.playState){var t=pe.currentTime-$e;t/Me>_e&&(Ae(),Me++),N(Ee)}}),1);var Oe=Ee,Be=n("9483");Object(Be["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var De=n("f309");a["a"].use(De["a"]);var je=new De["a"]({icons:{iconfont:"mdiSvg"}});a["a"].config.productionTip=!1,new a["a"]({router:de,store:Oe,vuetify:je,render:function(t){return t(ut)}}).$mount("#app")},"6ddc":function(t,e,n){},"71ea":function(t,e,n){"use strict";var a=n("6ddc"),i=n.n(a);i.a},"9eec":function(t,e,n){},b386:function(t,e,n){"use strict";var a=n("0c51"),i=n.n(a);i.a},f04e:function(t,e,n){"use strict";var a=n("1f94"),i=n.n(a);i.a}});