import{F as p,V as b,R as C,N as y,ɵ as k,C as M,S as x,a as O,b as P}from"./forms-BYP2sEbJ.js";import{N as w,p as z}from"./ng-icons-core-CmnddvFa.js";import{m as N,a as F}from"./ng-icons-material-icons-round-B75HSSmE.js";import{ai as R,aj as T,ak as S,n as V,al as u,am as L,w as j,an as A,ao as I,a1 as E,ap as e,aq as m,ar as n,as as t,at as d,au as s,av as c,aw as h,ax as $,ay as _,az as v}from"./index-Bj53Mx67.js";const f=(r,a)=>a.display;function q(r,a){if(r&1&&(e(0,"a",7),t(1),n()),r&2){const o=a.$implicit;c("routerLink",_(o.route)),s(),v(o.display)}}function D(r,a){if(r&1&&(e(0,"a",7),t(1),n()),r&2){const o=a.$implicit;c("routerLink",_(o.route)),s(),v(o.display)}}const l=class l{constructor(a,o){this.document=a,this.router=o,this.theme=new p("catpuccin-mocha",b.requiredTrue),this.checkbox=new p(!1),this.checkboxValue=R(this.checkbox.valueChanges),this.menuClass=T(()=>this.checkboxValue()?"open":"closed"),this.stateChange=S(()=>{this.checkboxValue()?this.document.body.style.overflow="hidden":this.document.body.style.overflow="auto"}),this.navLinks=[{display:"Home",route:"/"},{display:"Projects",route:"/projects"},{display:"Theme",route:"/theme"},{display:"Needles",route:"/needles"}],this.theme.valueChanges.subscribe(i=>{a.documentElement.setAttribute("color-scheme",i)}),o.events.subscribe(i=>{i instanceof V&&this.checkbox.setValue(!1)})}};l.ɵfac=function(o){return new(o||l)(u(L),u(j))},l.ɵcmp=A({type:l,selectors:[["app-navbar"]],hostAttrs:[1,"rad-shadow"],features:[I([],[z({matMenuRound:F,matCloseRound:N})])],decls:43,vars:5,consts:[[1,"flex","jc-space-between","align-items-center","width-100"],[1,"flex","gap-2","align-items-center"],["id","check","type","checkbox",3,"formControl"],["for","check",1,"burger"],["name","matMenuRound"],[1,"text-1","weight-6","font-size-5","font-title"],[1,"links"],[3,"routerLink"],[1,"select","flex","align-items-center","gap-2","height-100"],["for","theme",1,"weight-6"],["name","themes",1,"weight-6",3,"formControl"],["value","blue-ice"],["value","strawberry"],["value","grape"],["value","lime"],["value","catpuccin-mocha"],[1,"nav-mobile"],["for","check",1,"close"],["name","matCloseRound",1,"font-size-5"],[1,"themes","flex","align-items-center","gap-2"]],template:function(o,i){o&1&&(e(0,"nav",0)(1,"span",1),m(2,"input",2),e(3,"label",3),m(4,"ng-icon",4),n(),e(5,"div",5),t(6,"Ryan Field"),n()(),e(7,"span",6),d(8,q,2,3,"a",7,f),n(),e(10,"span",8)(11,"label",9),t(12,"Theme: "),n(),e(13,"select",10)(14,"option",11),t(15,"blue-ice"),n(),e(16,"option",12),t(17,"strawberry"),n(),e(18,"option",13),t(19,"grape"),n(),e(20,"option",14),t(21,"lime"),n(),e(22,"option",15),t(23,"catpuccin-mocha"),n()()()(),e(24,"div",16)(25,"label",17),m(26,"ng-icon",18),n(),d(27,D,2,3,"a",7,f),e(29,"span",19)(30,"label",9),t(31,"Theme: "),n(),e(32,"select",10)(33,"option",11),t(34,"blue-ice"),n(),e(35,"option",12),t(36,"strawberry"),n(),e(37,"option",13),t(38,"grape"),n(),e(39,"option",14),t(40,"lime"),n(),e(41,"option",15),t(42,"catpuccin-mocha"),n()()()()),o&2&&(s(2),c("formControl",i.checkbox),s(6),h(i.navLinks),s(5),c("formControl",i.theme),s(11),$(i.menuClass()),s(3),h(i.navLinks),s(5),c("formControl",i.theme))},dependencies:[C,y,k,M,x,O,P,w,E],styles:[`[_nghost-%COMP%] {
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
}`]});let g=l;export{g as NavbarComponent};
