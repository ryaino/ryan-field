---
title: This Website
slug: this-website
description: The website you're viewing this and all my other projects on.
coverImage: https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80
tags: analog,angular,javascript
---

## This Website

There's no external project to link to for this one because you're already looking at it!
Over the years I've changed up my personal / portfolio site as I've experimented with technologies and gained more experience.
This iteration is intended to be the *final* iteration that I can continuously modify and expand over time.

### The Tech

Currently the core of this site is built using [Analog](https://analogjs.org/), the fullstack Angular meta-framework.
The result of this is a way for me to use my favourite frontend framework with some extra features and seamless backend
integration thanks to [Nitro](https://nitro.build/) and [Vite](https://vite.dev/).

Instead of using an existing UI library,
I've made the decision to use this as an opportunity to learn by building one from the ground up using Sass and some help from
[Open Props](https://open-props.style/).

The great thing about this stack is that it can be as simple or complex as I want to be. At the moment everything you see
is being statically built and deployed automatically to GitHub Pages on every commit. This, combined with Analog's ability to
create routes and render using markdown files, provides a simple and powerful way for me to add new content. What you're reading
right now and every other project page is each a single markdown file that is converted to html with it's own route at build time.

### Future Plans

Once I reach the point of adding more features, or migrating old projects under here that require a server and/or database,
then the plan is to move everything in a virtual machine with the help of Docker.

To help with the development of my own UI library I've incorporated Storybook. Once I've built out some components then I'll
make that documentation available for viewing.
