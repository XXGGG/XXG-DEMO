import{d as D,r as _,o as S,a as Y,b as w,w as k,t as h,u as x,p as B,e as T}from"./vue.esm-bundler.2c5743cc.js";var L=(l,s)=>{const a=l.__vccOpts||l;for(const[r,u]of s)a[r]=u;return a};const C=l=>(B("data-v-4b4dd2e6"),l=l(),T(),l),I=C(()=>w("h1",null,"\u79FB\u52A8\u8FD9\u4E2A\u5C0F\u65B9\u5757\uFF01",-1)),W=["onMousedown"],M=D({__name:"FollowMouseMove",setup(l){let s=null,a=null,r=null,u=null,c=null,i=0,d=_(0),p=_(0);const y=e=>{a=e.target.clientWidth,r=e.target.clientWidth,s=o=>{u=o.view.innerWidth,c=o.view.innerHeight;let m=o.clientX,f=o.clientY,t=m-e.layerX,n=f-e.layerY;t<0&&(t=0),t>u-a&&(t=u-a),n<0&&(n=0),n>c-r&&(n=c-r),e.target.style.left=t+"px",e.target.style.top=n+"px",d.value=t,p.value=n},window.addEventListener("mousemove",s),i=1},F=()=>{console.log("\u53D6\u6D88\u76D1\u542C"),window.removeEventListener("mousemove",s),i=0},g=()=>{i==1&&(console.log("\u53D6\u6D88\u76D1\u542C"),window.removeEventListener("mousemove",s),i=0)};window.onresize=function(){console.log("\u7A97\u53E3\u53D8\u5316\u4E86\uFF01"),g();let e=document.getElementById("box");e.style.left="calc(50% - 50px)",e.style.top="calc(50% - 50px)"};let v=null;const X=e=>{v=o=>{console.log(o.targetTouches[0].pageX),console.log(o.targetTouches[0].pageY),console.log(o);let m=o.targetTouches[0].pageX,f=o.targetTouches[0].pageY,t=m-e.layerX,n=f-e.layerY;e.target.style.left=t+"px",e.target.style.top=n+"px",d.value=t,p.value=n},window.addEventListener("touchmove",v)},E=()=>{window.removeEventListener("touchmove",v)};return(e,o)=>(S(),Y("div",{class:"area",onMouseleave:g},[I,w("div",{id:"box",class:"box",onTouchstart:X,onMousedown:k(y,["left"]),onTouchend:E,onMouseup:F},null,40,W),w("h1",null,"\uFF08 "+h(x(d))+" , "+h(x(p))+" \uFF09",1)],32))}});var b=L(M,[["__scopeId","data-v-4b4dd2e6"]]);M.__docgenInfo={exportName:"default",displayName:"FollowMouseMove",description:"",tags:{}};var z={parameters:{storySource:{source:`import FollowMouseMove from '../components/FollowMouseMove.vue';

export default {
  title: '\u9F20\u6807\u62D6\u62FD\u7269\u4F53',
  component: FollowMouseMove,
};

export const XXG_FollowMouseMove = () => ({
  components: { FollowMouseMove },
  setup() {
  },
  template: '<FollowMouseMove />',
});
XXG_FollowMouseMove.storyName = '\u9F20\u6807\u62D6\u62FD\u7269\u4F53'
`,locationsMap:{"xxg-follow-mouse-move":{startLoc:{col:35,line:8},endLoc:{col:2,line:13},startBody:{col:35,line:8},endBody:{col:2,line:13}}}}},title:"\u9F20\u6807\u62D6\u62FD\u7269\u4F53",component:b};const A=()=>({components:{FollowMouseMove:b},setup(){},template:"<FollowMouseMove />"});A.storyName="\u9F20\u6807\u62D6\u62FD\u7269\u4F53";const G=["XXG_FollowMouseMove"];export{A as XXG_FollowMouseMove,G as __namedExportsOrder,z as default};
//# sourceMappingURL=FollowMouseMove.stories.a8b577e8.js.map
