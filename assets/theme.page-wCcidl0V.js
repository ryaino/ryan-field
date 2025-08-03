import{c as d,R as p,d as u,D as m,a as f,e as g,f as h,g as v}from"./forms-BL-NgSsV.js";import{al as C,an as x,ap as e,as as n,ar as t,aq as a,au as _}from"./index-CY9tyVd5.js";const r=class r{constructor(s){this.fb=s,this.form=this.fb.group({"surface-1":"","surface-2":"","surface-3":"","surface-4":"",brand:"","text-1":"","text-2":""}),this.form.valueChanges.subscribe(o=>{o&&Object.entries(o).forEach(([i,l])=>{document.documentElement.style.setProperty(`--${i}`,l)})})}};r.ɵfac=function(o){return new(o||r)(C(d))},r.ɵcmp=x({type:r,selectors:[["app-theme"]],decls:47,vars:1,consts:[[3,"formGroup"],[1,"text-center"],["href","https://codepen.io/argyleink/pen/XWaYyWe"],[1,"content"],[1,"surface-samples"],[1,"surface-1","rad-shadow"],["formControlName","surface-1","type","color"],[1,"surface-2","rad-shadow"],["formControlName","surface-2","type","color"],[1,"surface-3","rad-shadow"],["formControlName","surface-3","type","color"],[1,"surface-4","rad-shadow"],["formControlName","surface-4","type","color"],[1,"text-samples"],[1,"text-brand"],[1,"swatch","brand","rad-shadow"],["formControlName","brand","type","color"],[1,"text-1"],[1,"swatch","text-1","rad-shadow"],["formControlName","text-1","type","color"],[1,"text-2"],[1,"swatch","text-2","rad-shadow"],["formControlName","text-2","type","color"]],template:function(o,i){o&1&&(e(0,"form",0)(1,"h3"),n(2,"Theme Customizer"),t(),e(3,"p",1),n(4," The General layout of this page and the approach I used for theming the site was taken from "),e(5,"a",2),n(6,"this"),t(),n(7," Open Props demo. Click on a surface or text colour you want to change and you'll see your selection applied across the entire site. "),t(),e(8,"p",1),n(9," Unfortunately I don't own any Apple devices to test on so I apologize if something doesn't work for you. "),t(),e(10,"div",3)(11,"section")(12,"div",4)(13,"label",5),n(14,"1 "),a(15,"input",6),t(),e(16,"label",7),n(17,"2 "),a(18,"input",8),t(),e(19,"label",9),n(20,"3 "),a(21,"input",10),t(),e(22,"label",11),n(23,"4 "),a(24,"input",12),t()()(),e(25,"section")(26,"div",13)(27,"h1",14)(28,"label"),a(29,"span",15),n(30," Brand "),a(31,"input",16),t()(),e(32,"h1",17)(33,"label"),a(34,"span",18),n(35," Text Color 1 "),a(36,"input",19),t()(),e(37,"h1",20)(38,"label"),a(39,"span",21),n(40," Text Color 2 "),a(41,"input",22),t()(),a(42,"br"),e(43,"p",17),n(44,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "),t(),e(45,"p",20),n(46,"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "),t()()()()()),o&2&&_("formGroup",i.form)},dependencies:[p,u,m,f,g,h,v],styles:[`p[_ngcontent-%COMP%] {
  font-size: var(--font-size-2);
}

input[_ngcontent-%COMP%] {
  display: none;
}

*[_ngcontent-%COMP%] {
  box-sizing: border-box;
  margin: 0;
}

html[_ngcontent-%COMP%] {
  block-size: 100%;
  background-color: var(--surface-1);
  color: var(--text-1);
  accent-color: var(--brand);
}

form[_ngcontent-%COMP%] {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: var(--size-9);
}

.content[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: var(--size-9);
}
.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  max-inline-size: var(--size-content-1);
  font-size: var(--font-size-4);
  line-height: var(--font-lineheight-3);
}

section[_ngcontent-%COMP%] {
  display: grid;
  gap: var(--size-6);
}

header[_ngcontent-%COMP%] {
  display: inline-grid;
  gap: var(--size-3);
}

form[_ngcontent-%COMP%] {
  display: flex;
  gap: var(--size-5);
}
form[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
}

.surface-samples[_ngcontent-%COMP%] {
  display: grid;
  --size: var(--size-content-1);
  grid-template-columns: var(--size) var(--size);
  grid-auto-rows: var(--size);
  gap: var(--size-5);
}
@media (width <= 480px) {
  .surface-samples[_ngcontent-%COMP%] {
    --size: 40vw;
  }
}
.surface-samples[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
  border-radius: var(--radius-3);
  display: grid;
  place-content: center;
  font-size: var(--font-size-8);
}

.text-samples[_ngcontent-%COMP%] {
  display: grid;
  gap: var(--size-4);
}
.text-samples[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%] {
  font-size: var(--font-size-6);
  display: inline-flex;
  align-items: center;
  gap: var(--size-3);
}

.brand[_ngcontent-%COMP%] {
  color: var(--brand);
  background-color: var(--brand);
}

.swatch[_ngcontent-%COMP%] {
  display: inline-block;
  flex-shrink: 0;
  inline-size: var(--size-8);
  block-size: var(--size-8);
  border-radius: var(--radius-round);
}
.swatch.text-1[_ngcontent-%COMP%] {
  background-color: var(--text-1);
}
.swatch.text-2[_ngcontent-%COMP%] {
  background-color: var(--text-2);
}`]});let c=r;export{c as default};
