---
layout: post
title:  "Why Software is Slow and Shitty"
image: "/images/2020/mario64-camera.jpg"
tags: engineering biz
hackernews: "https://news.ycombinator.com/item?id=23884598"
---
<p></p>

<img src="/images/2020/mario64-camera.jpg" class="large">


Most software is annoying to use. Opening a news article to read 500 words should be instant but takes entire seconds. Try to make a quick update to a Google Doc and you're waiting even longer before you can type. Hopefully you don't have to use Jira or Photoshop.

I thought computers were supposed to be nicer than they were in the 90s.

Grizzled vets say that [the good times make us weak](https://tonsky.me/blog/good-times-weak-men/). That because we have powerful hardware, modern software is built on top of a bewildering goop of high-level languages, frameworks, and dependencies on dependencies that make even simple things sluggish.

It's a compelling argument. As craftspeople, we just need to not be lazy, get our shit together, and then we can make nice things.

ヽ(´□｀。)ﾉ

But I think self-flagellation is missing the forest for the trees.

As an industry, we've moved from putting engineering innovation and efficiency first, towards prioritizing usability and market-fit. I'm not mad at that. Computers exist to help humans do new things, they should be bicycles for the mind and all that good stuff. But there's nothing stopping software from being useful _and_ elegantly made.

I mean, except for the way most software companies are organized.

<figure>
  <img src="/images/2020/supreme-problem-solves.jpg">
  <figcaption>
    <a href="https://www.are.na/block/1975355">(Source)</a>
  </figcaption>
</figure>

Most company structures are based on the [Roman empire military](https://www.hierarchystructure.com/roman-military-hierarchy/). CEO Caesar says he wants something, and the lieutenant managers below him on the org chart break it down into smaller tasks for the soldiers to accomplish.

<img src="/images/2020/caesar-diagram.png" class="no-shadow large">
<a href="https://kinopio.club/roman-military-diagram-Q9vX2HJbM3-tJD0CaTDxM">(Rome military diagram)</a>

On a development team, programmers are the soldiers of these shitty new armies. They open their Jira issues and add whatever feature it says to add, or fix what it says to fix. If I can save time by adding another dependency, or skip a meeting by implementing a mockup exactly as designed, why should I care?

Some people care. Those people suffer:

> I now spend 1/4 of my work week fighting dependency hell (after just about each addition of a new package by any other developer on the project), another 1/4 figuring out how the "latest and greatest" tool of the week is best used to do something that would normally take me 5 minutes to do custom (god forbid, not the C-word!), and the remaining half is spent maybe doing actual work. So incredibly frustrating that I've just about had it.
<br/><br/>
I've grown to loathe and hate that which I used to adore. <a href="https://news.ycombinator.com/item?id=18027977">(Source)</a>

Building software is nothing like organizing armies in 100 BC. In 2020, we can communicate instantly, victory is ambiguous, and there's less murder. But most importantly, we're not conquesting, we're creating.

## Creation moves differently

<img src="/images/2020/mario64-penguin.jpg">

To illustrate this, let's talk about [Super Mario 64](https://www.youtube.com/watch?v=8MQO2STCbbY), the landmark 1996 game that used an unusual new technology: 3D graphics. You might think that Mario 64 was built with tickets and sprints, but, according to interviews, there was no master plan, only the principles that the game should feel good and be fun. They started with just Mario in a small room, and tuned his animations and physics until he felt nice and responsive. After that, the levels were also created as they went, with the designers, developers, and director going back and forth using sketches and prototypes.

Building like this is never a straight line. Ideas and code get left on the cutting room floor because part of innovation is questioning whether what you made [should exist](https://www.folklore.org/StoryView.py?project=Macintosh&story=MacPaint_Evolution.txt). The process is cyclical and iterative, looking something like:

<figure>
  <img src="/images/2020/cyclical creation diagram.png" class="no-shadow">
  <figcaption>
    <a href="https://kinopio.club/mechanics-focused-development-lCHFGyOJfskhGAZ5Lul5v">(Mechanics-focused development)</a>
  </figcaption>
</figure>

Good software comes from a vision, combined with conversations not commandments. In a craft-focused environment, care for efficiency, simplicity, and details really do matter. I didn't leave my last job just because I wanted to make something new. I left because I wanted to make it in a way I could be proud of.

So here's what's up, I'm working on my own right now, in a race between my diminishing savings and my typing fingers. But I'm not stressing too much. I've got a lot of work to do, but people seem to like what I'm making. Maybe one day though, it won't just be me. When that happens I'd love to build a small company/collective/*thing* that's the best place for creators to work.

> Special thanks to Michelle and [Hao](https://twitter.com/haoformayor) for helping edit this.
