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

As a big fan of music and owning physical media, it's only natural that I would collect copies of my favourite albums. Unfortunately actually finding what I'm looking for can sometimes be a bit of a challenge. Searching across multiple websites is time-consuming enough, but when there are multiple possible variations of an album to look for the search possibilities balloon in size.

My solution to this was to create a web page where I could select an album I want to search for and then see all the possible options across multiple websites in a single place. This was just something meant for personal use, so I didn't go crazy with proper design or anything. There's 3 websites that I implemented search for: 
[Real Groovy](https://realgroovy.co.nz/), [Markbecks](https://www.marbecks.co.nz/) and [Just For The Record](https://www.justfortherecord.co.nz/).

### The Tech

Before being able to actually scrape the aforementioned websites, you first have to figure out what it is you actually want to search for. There could be dozens of different versions of a single album and each website could have their own way to represent / categorize each of those versions. The solution to this is to use the [Discogs](https://www.discogs.com/) api to find the "master" of the album you're looking for which will then provide the scraper with all the different versions to look for. 

Since I was the only person intending to use this, the first version of this was actually just a REST API made in Java. Java was all I had experience with at the time and I liked the idea of not having to build a UI as I could just use any http client like Postman. You can find the repository for that version [here](https://github.com/ryaino/NZ-Record-Store-Search-Aggregator).

Working with Java for a web scraper was pretty annoying and I wanted to improve my skills with Javascript so that's what I used for the latest version. NestJs was used for the backend, since it was very close in syntax to what I was used to in Java. I then hosted this myself on my home server using Docker and exposed it to the internet with Ngrok.

The frontend is made with Angular and I used this as an opportunity to play around with some 3d / raised affects without worrying about things looking amazing. I used Firebase free hosting for this part of the app.  

### Future Plans

I'd like to get this hosted again eventually, or at least the frontend portion with a cleaned up UI. Since this was just for personal use I also never implemented any real error logging or handling, so that will also be something to add. I've recently been playing around with html parsing that doesn't involve a headless Chromium browser so perhaps a re-write of the backend is on the table. This has the potential of also doing everything in-browser and eliminating the need for a backend altogether! 
