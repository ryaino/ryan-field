import{an as m,ap as n,as as r,ar as s,at as d,au as l,aw as p,aq as g,av as h,aN as _,aO as f}from"./index-Bj53Mx67.js";function u(i,e){if(i&1&&(n(0,"div",4),g(1,"img",5),s()),i&2){const a=e.$implicit;l(),h("src",a,f)}}const t=class t{constructor(){this.baseUrl="/ryan-field/",this.totalImages=6,this.images=[];for(let e=1;e<=this.totalImages;e++)this.images.push(`${this.baseUrl}assets/needles/needles-${e}.jpg`)}};t.ɵfac=function(a){return new(a||t)},t.ɵcmp=m({type:t,selectors:[["app-needles"]],decls:8,vars:0,consts:[[1,"centered-column","gap-4"],[1,"bold"],[1,"text-center"],[1,"gallery"],[1,"image-container"],["alt","",1,"rounded-3","rad-shadow",3,"src"]],template:function(a,c){a&1&&(n(0,"header",0)(1,"h2",1),r(2,"Needles"),s(),n(3,"p",2),r(4," Needles is my cat and companion. She follows me everywhere around the house and always demands to sit on my lap whether I'm at my desk working or relaxing on the couch. This page is just a place for me to share some of my favourite pictures of her. "),s()(),n(5,"section",3),d(6,u,2,1,"div",4,_),s()),a&2&&(l(6),p(c.images))},styles:[`.image-container[_ngcontent-%COMP%] {
  height: var(--size-fluid-9);
  flex-grow: 1;
}
.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  max-height: 100%;
  min-width: 100%;
  object-fit: cover;
  vertical-align: bottom;
}

.gallery[_ngcontent-%COMP%] {
  margin-top: var(--size-fluid-4);
  display: flex;
  flex-wrap: wrap;
  gap: var(--size-2);
}`]});let o=t;export{o as default};
