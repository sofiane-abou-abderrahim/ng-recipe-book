"use strict";(self.webpackChunkng_universal=self.webpackChunkng_universal||[]).push([[320],{3320:(T,u,s)=>{s.r(u),s.d(u,{ShoppingListModule:()=>M});var a=s(1740),r=s(433),d=s(3584),t=s(4650),h=s(9102),g=s(2997),c=s(6895),f=s(9985);const b=["f"];function v(e,p){if(1&e){const n=t.EpF();t.TgZ(0,"button",13),t.NdJ("click",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.onDelete())}),t._uU(1,"Delete"),t.qZA()}}let C=(()=>{class e{constructor(n){this.store=n,this.editMode=!1}ngOnInit(){this.subscription=this.store.select("shoppingList").subscribe(n=>{n.editedIngredientIndex>-1?(this.editMode=!0,this.editedItem=n.editedIngredient,this.slForm.setValue({name:this.editedItem.name,amount:this.editedItem.amount})):this.editMode=!1})}onSubmit(n){const o=n.value,i=new f.o(o.name,o.amount);this.store.dispatch(this.editMode?new d.D6(i):new d.eh(i)),this.editMode=!1,n.reset()}onClear(){this.slForm.reset(),this.editMode=!1,this.store.dispatch(new d.b)}onDelete(){this.store.dispatch(new d.cB),this.onClear()}ngOnDestroy(){this.subscription.unsubscribe(),this.store.dispatch(new d.b)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(g.yh))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-shopping-edit"]],viewQuery:function(n,o){if(1&n&&t.Gf(b,5),2&n){let i;t.iGM(i=t.CRH())&&(o.slForm=i.first)}},decls:20,vars:3,consts:[[1,"row"],[1,"col-xs-12"],[3,"ngSubmit"],["f","ngForm"],[1,"col-sm-5","form-group"],["for","name"],["type","text","id","name","name","name","ngModel","","required","",1,"form-control"],[1,"col-sm-2","form-group"],["for","amount"],["type","number","id","amount","name","amount","ngModel","","required","","pattern","^[1-9]+[0-9]*$",1,"form-control"],["type","submit",1,"btn","btn-success",3,"disabled"],["class","btn btn-danger","type","button",3,"click",4,"ngIf"],["type","button",1,"btn","btn-primary",3,"click"],["type","button",1,"btn","btn-danger",3,"click"]],template:function(n,o){if(1&n){const i=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"form",2,3),t.NdJ("ngSubmit",function(){t.CHM(i);const m=t.MAs(3);return t.KtG(o.onSubmit(m))}),t.TgZ(4,"div",0)(5,"div",4)(6,"label",5),t._uU(7,"Name"),t.qZA(),t._UZ(8,"input",6),t.qZA(),t.TgZ(9,"div",7)(10,"label",8),t._uU(11,"Amount"),t.qZA(),t._UZ(12,"input",9),t.qZA()(),t.TgZ(13,"div",0)(14,"div",1)(15,"button",10),t._uU(16),t.qZA(),t.YNc(17,v,2,0,"button",11),t.TgZ(18,"button",12),t.NdJ("click",function(){return o.onClear()}),t._uU(19,"Clear"),t.qZA()()()()()()}if(2&n){const i=t.MAs(3);t.xp6(15),t.Q6J("disabled",!i.valid),t.xp6(1),t.Oqu(o.editMode?"Update":"Add"),t.xp6(1),t.Q6J("ngIf",o.editMode)}},dependencies:[r._Y,r.Fj,r.wV,r.JJ,r.JL,r.Q7,r.c5,r.On,r.F,c.O5]}),e})();function S(e,p){if(1&e){const n=t.EpF();t.TgZ(0,"a",4),t.NdJ("click",function(){const l=t.CHM(n).index,m=t.oxw();return t.KtG(m.onEditItem(l))}),t._uU(1),t.qZA()}if(2&e){const n=p.$implicit;t.xp6(1),t.AsE(" ",n.name," (",n.amount,") ")}}let Z=(()=>{class e{constructor(n,o){this.loggingService=n,this.store=o}ngOnInit(){this.ingredients=this.store.select("shoppingList"),this.loggingService.printLog("Hello from ShoppingListComponent ngOnInit!")}onEditItem(n){this.store.dispatch(new d.cd(n))}ngOnDestroy(){}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(h.e),t.Y36(g.yh))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-shopping-list"]],decls:7,vars:3,consts:[[1,"row"],[1,"col-xs-10"],[1,"list-group"],["class","list-group-item","style","cursor: pointer",3,"click",4,"ngFor","ngForOf"],[1,"list-group-item",2,"cursor","pointer",3,"click"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"app-shopping-edit")(3,"hr"),t.TgZ(4,"ul",2),t.YNc(5,S,2,2,"a",3),t.ALo(6,"async"),t.qZA()()()),2&n&&(t.xp6(5),t.Q6J("ngForOf",t.lcZ(6,1,o.ingredients).ingredients))},dependencies:[c.sg,C,c.Ov]}),e})();var y=s(4466);let M=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[r.u5,a.Bz.forChild([{path:"",component:Z}]),y.m]}),e})()}}]);