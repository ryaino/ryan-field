const e=`---
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

<p>As a big fan of music and owning physical media, it&#39;s only natural that I would collect copies of my favourite albums. Unfortunately actually finding what I&#39;m looking for can sometimes be a bit of a challenge. Searching across multiple websites is time-consuming enough, but when there are multiple possible variations of an album to look for the search possibilities balloon in size.</p><p>My solution to this was to create a web page where I could select an album I want to search for and then see all the possible options across multiple websites in a single place. This was just something meant for personal use, so I didn&#39;t go crazy with proper design or anything. There&#39;s 3 websites that I implemented search for: 
<a href="https://realgroovy.co.nz/">Real Groovy</a>, <a href="https://www.marbecks.co.nz/">Markbecks</a> and <a href="https://www.justfortherecord.co.nz/">Just For The Record</a>.</p><h3 id="the-tech">The Tech</h3>
<p>Before being able to actually scrape the aforementioned websites, you first have to figure out what it is you actually want to search for. There could be dozens of different versions of a single album and each website could have their own way to represent / categorize each of those versions. The best way to find all of these is to use the <a href="https://www.discogs.com/">Discogs</a> api to find the &quot;master&quot; of the album you&#39;re looking for which will then provide the scraper with all the different versions to look for. </p><p>Since I was the only person intending to use this, the first version of this was actually just a REST API made in Java. Java was all I had experience with at the time and I liked the idea of not having to build a UI as I could just use any http client like Postman. You can find the repository for that version <a href="https://github.com/ryaino/NZ-Record-Store-Search-Aggregator">here</a>.</p><p>Working with Java for a web scraper was pretty annoying and I wanted to improve my skills with Javascript so that&#39;s what I used for the latest version. NestJs was used for the backend, since it was very close in syntax to what I was used to in Java. I then hosted this myself on my home server using Docker and exposed it to the internet with Ngrok.</p><p>The frontend is made with Angular and I used this as an opportunity to play around with some 3d / raised affects without worrying about things looking amazing. I used Firebase free hosting for this part of the app.  </p><h3 id="future-plans">Future Plans</h3>
<p>I&#39;d like to get this hosted again eventually, or at least the frontend portion with a cleaned up UI. Since this was just for personal use I also never implemented any real error logging or handling, so that will also be something to add. I&#39;ve recently been playing around with html parsing that doesn&#39;t involve a headless Chromium browser so perhaps a re-write of the backend is on the table. This has the potential of also doing everything in-browser and eliminating the need for a backend altogether! </p>`;export{e as default};
