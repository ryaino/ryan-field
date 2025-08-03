const e=`---
title: This Website
slug: this-website
description: The website that you're on right now. An all in one place for me to talk about myself and show off my work.
repository: https://github.com/ryaino/ryan-field
link: https://ryaino.github.io/ryan-field/
tags:
    - analog
    - angular
    - javascript
    - project
---

<p>There&#39;s no external project to link to for this one because you&#39;re already looking at it!
Over the years I&#39;ve changed up my personal / portfolio site as I&#39;ve experimented with technologies and gained more experience.
This iteration is intended to be the <em>final</em> iteration that I can continuously modify and expand over time.</p><h3 id="the-tech-1">The Tech</h3>
<p>Currently the core of this site is built using <a href="https://analogjs.org/">Analog</a>, the fullstack Angular meta-framework.
The result of this is a way for me to use my favourite frontend framework with some extra features and seamless backend
integration thanks to <a href="https://nitro.build/">Nitro</a> and <a href="https://vite.dev/">Vite</a>.</p><p>Instead of using an existing UI library,
I&#39;ve made the decision to use this as an opportunity to learn by building one from the ground up using Sass and some help from
<a href="https://open-props.style/">Open Props</a>.</p><p>The great thing about this stack is that it can be as simple or complex as I want to be. At the moment everything you see
is being statically built and deployed automatically to GitHub Pages on every commit. This, combined with Analog&#39;s ability to
create routes and render using markdown files, provides a simple and powerful way for me to add new content. What you&#39;re reading
right now and every other project page is each a single markdown file that is converted to html with its own route at build time.</p><h3 id="future-plans-1">Future Plans</h3>
<p>Once I reach the point of adding more features, or migrating old projects under here that require a server and/or database,
then the plan is to host everything in a virtual machine with the help of Docker.</p><p>To help with the development of my own UI library I&#39;ve incorporated Storybook. Once I&#39;ve built out some components then I&#39;ll
make that documentation available for viewing.</p>`;export{e as default};
