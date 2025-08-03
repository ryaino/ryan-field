import{an as f,ap as n,as as r,ar as a,bv as y,a1 as v,ax as m,at as l,ay as _,bw as w,au as x,bx as b,aA as j,az as g,aq as k}from"./index-CY9tyVd5.js";const o=class o{};o.ɵfac=function(t){return new(t||o)},o.ɵcmp=f({type:o,selectors:[["app-projects-header"]],decls:10,vars:0,consts:[[1,"centered-column","gap-4"],[1,"bold"],[1,"text-center"],["href","https://github.com/ryaino"]],template:function(t,p){t&1&&(n(0,"header",0)(1,"h2",1),r(2,"Projects"),a(),n(3,"p",2),r(4," Here's a list of some of my projects that I want to show off. There's a pretty wide range of things to expect here such as older repositories, currently live production sites, or even small demos hosted here. In any case you'll be able to find detailed explanations of everything, including languages, frameworks and techniques used, alongside any extra thoughts or key takeaways from myself. "),a(),n(5,"p",2),r(6," This is still a work in progress as I'm currently still in the process of doing a writeup for all of the projects I want to add here. For the most complete overview of my work then the best place to look will be my "),n(7,"a",3),r(8,"Github"),a(),r(9,". "),a()())},encapsulation:2});let d=o;const C=s=>["/projects",s],z=(s,e)=>e.slug;function M(s,e){if(s&1&&(n(0,"span"),r(1),a()),s&2){const t=e.$implicit;l(),g(t)}}function T(s,e){if(s&1&&(n(0,"li",0)(1,"h4"),r(2),a(),n(3,"p"),r(4),a(),n(5,"div",1),m(6,M,2,1,"span",null,w),a()()),s&2){const t=e.$implicit;x("routerLink",b(3,C,t.slug)),l(2),j(" ",t.attributes.title," "),l(2),g(t.attributes.description),l(2),_(t.attributes.tags)}}const i=class i{constructor(){this.posts=y(e=>e.filename.includes("/src/content/projects/"))}navigateTo(){throw new Error("Method not implemented.")}};i.ɵfac=function(t){return new(t||i)},i.ɵcmp=f({type:i,selectors:[["app-projects-list"]],decls:3,vars:0,consts:[[1,"project-list-item","rad-shadow",3,"routerLink"],[1,"tags"]],template:function(t,p){t&1&&(n(0,"ul"),m(1,T,8,5,"li",0,z),a()),t&2&&(l(),_(p.posts))},dependencies:[v],styles:[`ul[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  gap: var(--size-3);
  justify-content: space-evenly;
  padding-inline-start: 0;
}

.project-list-item[_ngcontent-%COMP%] {
  background: var(--surface-2);
  border-radius: var(--radius-conditional-3);
  padding: var(--size-3);
  transition: all 0.5s;
  width: 100%;
}
.project-list-item[_ngcontent-%COMP%]:hover {
  box-shadow: none;
}
.project-list-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin-bottom: var(--size-3);
}

.tags[_ngcontent-%COMP%] {
  display: flex;
  gap: var(--size-2);
  flex-wrap: wrap;
  text-transform: capitalize;
}
.tags[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {
  padding-left: var(--size-2);
  padding-right: var(--size-2);
  background: var(--surface-4);
  font-size: var(--font-size-2);
  border-radius: var(--radius-2);
  color: var(--text-1);
  font-family: var(--font-title);
}

@media (width >= 712px) {
  .project-list-item[_ngcontent-%COMP%] {
    width: var(--size-fluid-10);
  }
}`]});let u=i;const c=class c{};c.ɵfac=function(t){return new(t||c)},c.ɵcmp=f({type:c,selectors:[["app-projects"]],decls:4,vars:0,template:function(t,p){t&1&&k(0,"app-projects-header")(1,"hr")(2,"app-projects-list")(3,"hr")},dependencies:[d,u],encapsulation:2});let h=c;export{h as default};
