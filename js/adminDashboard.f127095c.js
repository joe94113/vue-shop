"use strict";(self["webpackChunke_commerce"]=self["webpackChunke_commerce"]||[]).push([[708],{3797:function(a,t,s){s.r(t),s.d(t,{default:function(){return L}});var o=s(3396);const e={class:"container-fluid mt-3 position-relative"};function n(a,t,s,n,r,c){const i=(0,o.up)("Navbar"),l=(0,o.up)("ToastMessages"),u=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(i),(0,o._)("div",e,[(0,o.Wm)(l),(0,o.Wm)(u)])],64)}var r=s(5820),c=s(1753),i=s(9242);const l={class:"navbar navbar-expand-lg navbar-light bg-light"},u={class:"container-fluid"},d=(0,o.Uk)("管理後臺"),v=(0,o._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,o._)("span",{class:"navbar-toggler-icon"})],-1),h={class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},p={class:"navbar-nav"},g=(0,o.Uk)("產品"),b=(0,o.Uk)("訂單"),k=(0,o.Uk)("優惠券");function m(a,t,s,e,n,r){const c=(0,o.up)("loading"),m=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(c,{active:n.isLoading,"onUpdate:active":t[0]||(t[0]=a=>n.isLoading=a),"can-cancel":!0},null,8,["active"]),(0,o._)("nav",l,[(0,o._)("div",u,[(0,o.Wm)(m,{to:"/dashboard/products",class:"nav-link"},{default:(0,o.w5)((()=>[d])),_:1}),v,(0,o._)("div",h,[(0,o._)("div",p,[(0,o.Wm)(m,{to:"/dashboard/products",class:"nav-link"},{default:(0,o.w5)((()=>[g])),_:1}),(0,o.Wm)(m,{to:"/dashboard/orders",class:"nav-link"},{default:(0,o.w5)((()=>[b])),_:1}),(0,o.Wm)(m,{to:"/dashboard/coupons",class:"nav-link"},{default:(0,o.w5)((()=>[k])),_:1}),(0,o._)("a",{href:"#",onClick:t[1]||(t[1]=(0,i.iM)(((...a)=>r.logout&&r.logout(...a)),["prevent"])),class:"nav-link"},"登出")])])])])],64)}var f={data(){return{isLoading:!1}},methods:{logout(){const a="https://vue3-course-api.hexschool.io/logout";this.isLoading=!0,this.$http.post(a,this.user).then((({data:a})=>{this.isLoading=!1,a.success&&(console.log(a),this.$router.push("/login"))})).catch((a=>{console.log(a)}))}}},_=s(89);const w=(0,_.Z)(f,[["render",m]]);var $=w,W={components:{Navbar:$,ToastMessages:c.Z},provide(){return{emitter:r.Z}},created(){const a=document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=`${a}`;const t="https://vue3-course-api.hexschool.io/api/user/check";this.$http.post(t,this.user).then((({data:a})=>{a.success||this.$router.push("/login")})).catch((a=>{console.log(a)}))}};const x=(0,_.Z)(W,[["render",n]]);var L=x}}]);
//# sourceMappingURL=adminDashboard.f127095c.js.map