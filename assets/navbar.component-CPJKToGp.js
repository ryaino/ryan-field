import{F as m,V as d,R as u,N as f,ɵ as p,C as v,S as b,a as C,b as _}from"./forms-CK1NLabP.js";import{N as M,p as k,m as x,a as O}from"./ng-icons-material-icons-round-C--Ni5w1.js";import{ai as P,aj as y,ak as w,n as z,al as h,am as R,w as S,an as V,ao as j,a1 as F,ap as e,aq as l,ar as n,as as t,at as r,au as c,av as N}from"./index-DAtKG_lG.js";const s=class s{constructor(i,a){this.document=i,this.router=a,this.theme=new m("blue-ice",d.requiredTrue),this.checkbox=new m(!1),this.checkboxValue=P(this.checkbox.valueChanges),this.menuClass=y(()=>this.checkboxValue()?"open":"closed"),this.stateChange=w(()=>{this.checkboxValue()?this.document.body.style.overflow="hidden":this.document.body.style.overflow="auto"}),this.theme.valueChanges.subscribe(o=>{i.documentElement.setAttribute("color-scheme",o)}),a.events.subscribe(o=>{o instanceof z&&this.checkbox.setValue(!1)})}};s.ɵfac=function(a){return new(a||s)(h(R),h(S))},s.ɵcmp=V({type:s,selectors:[["app-navbar"]],hostAttrs:[1,"rad-shadow"],features:[j([],[k({matMenuRound:O,matCloseRound:x})])],decls:47,vars:5,consts:[[1,"flex","jc-space-between","align-items-center","width-100"],[1,"flex","gap-2","align-items-center"],["id","check","type","checkbox",3,"formControl"],["for","check",1,"burger"],["name","matMenuRound"],[1,"text-1","weight-6","font-size-5","font-title"],[1,"links"],["routerLink","/"],["routerLink","/projects"],["routerLink","/theme"],[1,"select","flex","align-items-center","gap-2","height-100"],["for","theme",1,"weight-6"],["name","themes",1,"weight-6",3,"formControl"],["value","blue-ice"],["value","strawberry"],["value","grape"],["value","lime"],[1,"nav-mobile"],["for","check",1,"close"],["name","matCloseRound",1,"font-size-5"],[1,"themes","flex","align-items-center","gap-2"]],template:function(a,o){a&1&&(e(0,"nav",0)(1,"span",1),l(2,"input",2),e(3,"label",3),l(4,"ng-icon",4),n(),e(5,"div",5),t(6,"Ryan Field"),n()(),e(7,"span",6)(8,"a",7),t(9,"Home"),n(),e(10,"a",8),t(11,"Projects"),n(),e(12,"a",9),t(13,"Theme"),n()(),e(14,"span",10)(15,"label",11),t(16,"Theme: "),n(),e(17,"select",12)(18,"option",13),t(19,"blue-ice"),n(),e(20,"option",14),t(21,"strawberry"),n(),e(22,"option",15),t(23,"grape"),n(),e(24,"option",16),t(25,"lime"),n()()()(),e(26,"div",17)(27,"label",18),l(28,"ng-icon",19),n(),e(29,"a",7),t(30,"Home"),n(),e(31,"a",8),t(32,"Projects"),n(),e(33,"a",9),t(34,"Theme"),n(),e(35,"span",20)(36,"label",11),t(37,"Theme: "),n(),e(38,"select",12)(39,"option",13),t(40,"blue-ice"),n(),e(41,"option",14),t(42,"strawberry"),n(),e(43,"option",15),t(44,"grape"),n(),e(45,"option",16),t(46,"lime"),n()()()()),a&2&&(r(2),c("formControl",o.checkbox),r(15),c("formControl",o.theme),r(9),N(o.menuClass()),r(12),c("formControl",o.theme))},dependencies:[u,f,p,v,b,C,_,M,F],styles:[`[_nghost-%COMP%] {
  background: var(--surface-4);
  border-radius: 0 0 var(--radius-conditional-3) var(--radius-conditional-3);
  height: var(--size-8);
  display: flex;
  align-items: center;
  margin-bottom: var(--size-fluid-5);
  padding: var(--size-3);
  width: 100%;
}

select[_ngcontent-%COMP%] {
  height: 80%;
}

#check[_ngcontent-%COMP%] {
  display: none;
}

.burger[_ngcontent-%COMP%] {
  display: none;
}

label[_ngcontent-%COMP%] {
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
  height: 1em;
  max-height: max-content;
  line-height: 1em;
}

.links[_ngcontent-%COMP%] {
  display: flex;
  flex-grow: 1;
  justify-content: center;
  gap: var(--size-4);
}
.links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
  color: var(--text-1);
  text-decoration: none;
  font-size: var(--font-size-3);
  font-family: var(--font-title), serif;
}

.nav-mobile[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  background: var(--surface-4);
  z-index: 1;
  width: 100%;
  height: 100%;
  gap: var(--size-3);
  font-size: var(--font-size-5);
}
.nav-mobile.closed[_ngcontent-%COMP%] {
  left: -100%;
  transition: all 0.5s;
}
.nav-mobile.open[_ngcontent-%COMP%] {
  left: 0;
  transition: all 0.5s;
}
.nav-mobile[_ngcontent-%COMP%]   .themes[_ngcontent-%COMP%] {
  padding-left: var(--size-3);
}
.nav-mobile[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {
  height: auto;
  font-size: var(--font-size-3);
  padding-block: unset;
}

.nav-mobile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
  color: var(--text-1);
  padding-left: var(--size-3);
  text-decoration: none;
  font-size: var(--font-size-3);
  font-family: var(--font-title), serif;
}
.nav-mobile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {
  background: var(--surface-3);
}

.close[_ngcontent-%COMP%] {
  padding: var(--size-3);
}

@media only screen and (max-width: 720px) {
  .burger[_ngcontent-%COMP%] {
    display: block;
  }
  .links[_ngcontent-%COMP%], 
   .select[_ngcontent-%COMP%] {
    display: none;
  }
}`]});let g=s;export{g as NavbarComponent};
