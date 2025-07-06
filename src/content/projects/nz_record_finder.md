---
title: NZ Record Finder
slug: nz-record-finder
description: A webscraper that searches for vinyl records across multiple stores and aggregates the results.
repository: https://github.com/ryaino/nz-record-finder
link: 
tags:
    - Nest
    - angular
    - javascript
    - project
---

As a big fan of music and owning physical media, it's only natural that I would collect copies of my favourite albums. Unfortunately actuallly finding what I'm looking for can sometimes be a bit of a challenge. Searching across multiple websites is time consuming enough, but when there are multiple possible variations of an album to look for the search possibilities balloon in size.

My solution to this was to create a web page where I could select an album I want to search for and then see all of the possible options across multiple websites in a single place. This was just something meant for personal use so I didn't go crazy with proper design or anything. There's 3 websites that I implemented search for: 
[Real Groovy](https://realgroovy.co.nz/), [Markbecks](https://www.marbecks.co.nz/) and [Just For The Record](https://www.justfortherecord.co.nz/).

### The Tech

Since I was the only person intending to use this, the first version of this was actually just a REST API made in Java. Java was all I had experience with at the time and I liked the idea of not having to build a UI as I could just use any http client like Postman. You can find the repository for that version [here](https://github.com/ryaino/NZ-Record-Store-Search-Aggregator).

Working with Java for a webscraper was pretty annoying and I wanted to improve my skills with Javascript so that's what I used for the latest version. NestJs was used for the backend, since it was very close in syntax to what I was used to in Java. I then hosted this myself on my home server using Docker and exposed it to the internet with Ngrok.

The frontend is made with Angular and I used this as an opportunity to play around with some 3d / raised affects without worrying about things looking amazing. I used Firebase free hosting for this part of the app.  

### Future Plans


