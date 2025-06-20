import{F as l,R as d,D as p,a as g,b as m}from"./forms-CK1NLabP.js";import{an as u,ap as n,as as e,ar as t,aq as o,at as v,au as f}from"./index-DAtKG_lG.js";const a=class a{constructor(){this.color=new l,this.color.valueChanges.subscribe(r=>{document.documentElement.style.setProperty("--brand",r)})}};a.ɵfac=function(s){return new(s||a)},a.ɵcmp=u({type:a,selectors:[["app-theme"]],decls:28,vars:1,consts:[[1,"surface-samples"],[1,"surface-1","rad-shadow"],[1,"surface-2","rad-shadow"],[1,"surface-3","rad-shadow"],[1,"surface-4","rad-shadow"],[1,"text-samples"],[1,"text-1"],[1,"swatch","brand","rad-shadow"],[1,"swatch","text-1","rad-shadow"],[1,"text-2"],[1,"swatch","text-2","rad-shadow"],["type","color","id","body","name","body",3,"formControl"]],template:function(s,c){s&1&&(n(0,"main")(1,"section")(2,"div",0)(3,"div",1),e(4,"1"),t(),n(5,"div",2),e(6,"2"),t(),n(7,"div",3),e(8,"3"),t(),n(9,"div",4),e(10,"4"),t()()(),n(11,"section")(12,"div",5)(13,"h1",6),o(14,"span",7),e(15," Brand "),t(),n(16,"h1",6),o(17,"span",8),e(18," Text Color 1 "),t(),n(19,"h1",9),o(20,"span",10),e(21," Text Color 2 "),t(),o(22,"br"),n(23,"p",6),e(24,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "),t(),n(25,"p",9),e(26,"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "),t()()()(),o(27,"input",11)),s&2&&(v(27),f("formControl",c.color))},dependencies:[d,p,g,m],styles:[`*[_ngcontent-%COMP%] {
  box-sizing: border-box;
  margin: 0;
}

html[_ngcontent-%COMP%] {
  block-size: 100%;
  background-color: var(--surface-1);
  color: var(--text-1);
  accent-color: var(--brand);
}

body[_ngcontent-%COMP%] {
  min-block-size: 100%;
  font-family: system-ui, sans-serif;
  padding: var(--size-6);
  display: grid;
  place-content: center;
  gap: var(--size-6);
}

main[_ngcontent-%COMP%] {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: var(--size-10);
}

section[_ngcontent-%COMP%] {
  display: grid;
  gap: var(--size-6);
}

p[_ngcontent-%COMP%] {
  max-inline-size: var(--size-content-1);
  font-size: var(--font-size-4);
  line-height: var(--font-lineheight-3);
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
  gap: var(--size-2);
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
}`]});let i=a;export{i as default};
