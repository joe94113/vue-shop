"use strict";(self["webpackChunke_commerce"]=self["webpackChunke_commerce"]||[]).push([[935],{9648:function(t,e,r){r.r(e),r.d(e,{default:function(){return O}});var l=r(3396),s=r(9242),d=r(7139);const n={class:"my-5 row justify-content-center"},o={class:"table align-middle"},a=(0,l._)("thead",null,[(0,l._)("th",null,"品名"),(0,l._)("th",null,"數量"),(0,l._)("th",null,"單價")],-1),u={class:"text-end"},i=(0,l._)("td",{colspan:"2",class:"text-end"},"總計",-1),c={class:"text-end"},_={class:"table"},h=(0,l._)("th",{width:"100"},"Email",-1),p=(0,l._)("th",null,"姓名",-1),w=(0,l._)("th",null,"收件人電話",-1),g=(0,l._)("th",null,"收件人地址",-1),m=(0,l._)("th",null,"付款狀態",-1),y={key:0},b={key:1,class:"text-success"},f={key:0,class:"text-end"},v=(0,l._)("button",{class:"btn btn-danger"},"確認付款去",-1),k=[v];function z(t,e,r,v,z,x){const D=(0,l.up)("Loading");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(D,{active:z.isLoading},null,8,["active"]),(0,l._)("div",n,[(0,l._)("form",{class:"col-md-6",onSubmit:e[0]||(e[0]=(0,s.iM)(((...t)=>x.payOrder&&x.payOrder(...t)),["prevent"]))},[(0,l._)("table",o,[a,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(z.order.products,(t=>((0,l.wg)(),(0,l.iD)("tr",{key:t.id},[(0,l._)("td",null,(0,d.zw)(t.product.title),1),(0,l._)("td",null,(0,d.zw)(t.qty)+"/"+(0,d.zw)(t.product.unit),1),(0,l._)("td",u,(0,d.zw)(t.final_total),1)])))),128))]),(0,l._)("tfoot",null,[(0,l._)("tr",null,[i,(0,l._)("td",c,(0,d.zw)(z.order.total),1)])])]),(0,l._)("table",_,[(0,l._)("tbody",null,[(0,l._)("tr",null,[h,(0,l._)("td",null,(0,d.zw)(z.order.user.email),1)]),(0,l._)("tr",null,[p,(0,l._)("td",null,(0,d.zw)(z.order.user.name),1)]),(0,l._)("tr",null,[w,(0,l._)("td",null,(0,d.zw)(z.order.user.tel),1)]),(0,l._)("tr",null,[g,(0,l._)("td",null,(0,d.zw)(z.order.user.address),1)]),(0,l._)("tr",null,[m,(0,l._)("td",null,[z.order.is_paid?((0,l.wg)(),(0,l.iD)("span",b,"付款完成")):((0,l.wg)(),(0,l.iD)("span",y,"尚未付款"))])])])]),!1===z.order.is_paid?((0,l.wg)(),(0,l.iD)("div",f,k)):(0,l.kq)("",!0)],32)])],64)}var x={data(){return{order:{user:{}},orderId:"",isLoading:!1}},methods:{getOrder(){const t=`https://vue3-course-api.hexschool.io/api/joe94113/order/${this.orderId}`;this.$http.get(t).then((t=>{t.data.success&&(this.order=t.data.order,console.log(this.order))}))},payOrder(){const t=`https://vue3-course-api.hexschool.io/api/joe94113/pay/${this.orderId}`;this.$http.post(t).then((t=>{console.log(t),t.data.success&&this.getOrder()}))}},created(){this.orderId=this.$route.params.orderId,console.log(this.orderId),this.getOrder()}},D=r(89);const I=(0,D.Z)(x,[["render",z]]);var O=I}}]);
//# sourceMappingURL=userCheckout.d3a16fa5.js.map