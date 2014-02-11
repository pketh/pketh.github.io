---
layout: post
title:  "Knowing When to Walk Away"
---

<img src="/images/2014/metome-key.png" class="no-shadow" width="420" height="149">

So for the past 5 months or so I've been working on Metome, a personal diary web service. Today, I decided to throw in the towel on it.

I started on the sketches after leaving a particularly crappy job. There were things I wanted to reflect on and express that I felt I had no real place for.

The [design of the app][pketh] was guided by the belief that a good diary is an unfiltered place of raw expressiveness. I was designing a no-pressure place for intimate, imperfect content to feel personal.

The pitch for Metome, is something I was particularly happy with:

> Write for yourself and answer to no one.

A lot happened in those 5 months though. I got a new job, I made this blog, and I've been enjoying the paper [Hobonichi Planner][hobonichi] that I bought for research.

But at the heart of it, working on the code started to get depressing. It wasn't an unmaintainable spaghetti mess - actually it's [not too bad][github]. And while the last straw was having yet another [Connect][cookieparser] middleware component get deprecated without a well-documented alternative, it wasn't that either, not really.

>>>> It also wasn't that I couldn't make the math of charging a one-time fee for something that I would have to pay monthly costs (servers, etc.) for in perpetuity.

The short story is it just wasn't interesting to me anymore. I feel




Code wasn't fun anymore - but i still like coding ? so why?



That I couldn't figure out how to make the economics work was something I should've paid more attention to earlier.


# why - frustration , is an eternity - what's happened in 5 months
in the course of creating it, things like reporter launched (quantified self), i researched the economics of a web service, i've been noodling around with the paper based hobonichi planner, i made this blog, i passed on pursuing things i was more passionate about.


But at the end of the day i hit a wall with node, the ever changing landscape of whether I should use things if they were about to be deprecated , 5 versions of how to do something - all of them out of date. I didn't want to build

lots of other things I wanted to do , both personally, and in terms of design opportunities I passed over.

I like node and the middleware sinatra-style approach of express, but I don't think it was the greatest experience designing for - moving target. a designer first , I wanted to solve user problems , not server security ones. Found myself spending more time revising an already complete design , just because I began to dread working on the code.

economics didn't make sense (pricing non subscription for a service with recurring costs)
the math of having to keep a node web service running when I didn't anticipate a huge number of users. The primary market (younger people) seemed more in favor of flat fee pricing , rather than a subscription. besides this, putting myself in teh shoes of a consumer , a flat fee is really what felt right.

should you keep workign on something if you're not passionate about it anymore?

# failure/ weak?
do i consider this a failure? mixed on that

I don't even think I was that far away - just some user auth stuff, and


I'm not proud of it , but I've been part of failed projects before at previous jobs - those beasts which take too long, the motivation has stalled, they were out of scope or the scope wasn't in touch with real needs.


# sunk cost/ what i learned
re sunk cost (by the traditional defintion) - it definetely wasn't a waste of time tho. the skills, land a better job, a deeper understanding behind how servers work and backend design patterns, . the challenge in seemingly simple things like file uploading.

Diving head first into the world of servers, I learned about:

- Mongodb crud operations
- Socket.io for real time user data saving and DOM manipulation
- Node.JS (and the awesomeness of NPM)

On the design side I gained an appreciation for the challenges of:

- Designing low friction forms
- Software pricing models
- Typography on the web
- Real time, single page app (SPA) design


# next steps
what about next time -
this is the first big project I did , i did a couple really small front-end only ones. As a medium, small projects that can be done in a couple weekends, keep my enthusiasm up.

<img src="/images/github-logo@2x.png" width="24" height="25" class="no-shadow" style="vertical-align: -30%"> [Fork it on  github][github]

[github]:        https://github.com/pketh/Metome
[wiki]:          http://en.wikipedia.org/wiki/Sunk_costs
[pketh]:         http://pketh.org/Metome-Journal
[hobonoichi]:    http://www.1101.com/store/techo/2014/planner/detail_hontai/c_hpr_m.html
[cookieparser]:  http://www.senchalabs.org/connect/cookieParser.html