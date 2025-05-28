---
layout: post
title:  "Saying Bye to Glitch"
slug: 'bye-glitch'
tags: glitch
image: "/images/2025/bye-glitch/darkmode.gif"
---

Here lies Glitch, a place on the web you could go to write up a website or a node.js server that would be hosted and updated as you type. 🥀 RIP 2015 – 2025.

<p>
  <video autoplay loop muted playsinline class="large">
    <source src="/images/2025/bye-glitch/darkmode.mp4">
  </video>
</p>
<figure>
  <figcaption>
    The Glitch editor in action. Built on top of ACE, and later Codemirror.
  </figcaption>
</figure>


I co-created Glitch at Fog Creek Software. I laid out the original product vision for web development with real code that was as easy as editing a Google Doc, designed and built the editor, started the community site, and of course drew the logo and many of the illustrations.

Now seems like the time to look back on just what a unique experience my 6~ years of working at Fog Creek Software and Glitch were, the many mistakes I and others made, and, of course, what I learned and took forward with me after

<figure>
  <img src="/images/2025/bye-glitch/logo-bw2.webp" class="no-shadow" alt="black and white logo">
  <figcaption>
    While iterating on the logo, I knew I finally had something when the silhouette was unique and recognizable.
  </figcaption>
</figure>

## Working at Fog Creek Software

Fog Creek Software is best known (by those over 40~) for being founded by [Joel Spolsky](https://www.joelonsoftware.com/) to be the best [place](https://www.joelonsoftware.com/2008/12/29/the-new-fog-creek-office/) for software developers to work, and for being the company that created Trello and StackOverflow.

In 2014, I was recruited by Fog Creek because, despite being a huge fan of Joel's blog and their bug tracker, [Fogbugz](https://en.wikipedia.org/wiki/FogBugz), was frustrating to use at work. So, for fun and spite, I did some concept art for how the app might work if it was designed for programmers first and managers second, and posted it to dribbble (another thing only remembered by the 40+). A senior manager saw it and a couple weeks later I was staying at the Ritz in Manhattan to meet the team.

<figure>
  <img src="/images/2025/bye-glitch/dribbble1.webp" class="" alt="fogbugz for mac concept window">
  <img src="/images/2025/bye-glitch/dribbble2.webp" class="" alt="fogbugz for mac concept quick entry panel">
  <figcaption>
    Definitely not what FogBugz looked like. I did these like 20~ years ago, so they're a bit cringe to me.
  </figcaption>
</figure>

I was hired as a `member of technical staff`. We all were I think. I worked on Fogbugz a little bit with some of the smartest programmers I've ever met; and because we shared the office with Trello, some of the the coolest programmers I've ever met too.

But I was primarily hired to help come up with the next big new successful product for the company, which eventually became Glitch.

<blockquote>
  <p>
    <img src="https://pketh.org/images/2019/Screen_Shot_2016-01-28_at_3-33a4a830-51d3-466e-b67b-2ac85993ab6f.04.38_PM.png" width="" class="">
    <br/>
    In 2019, I wrote about how Glitch started and
    <a href="https://pketh.org/the-first-four-years-of-glitch.html">how it evolved over it's first four years</a>.
    It was designed to be beautiful and functional, in it's own unique way.

  </p>
</blockquote>


## Promising Early Days

I always thought of Glitch as web development without the <br/>`$ git how-do-I-stage-and-commit-updates-again?`, and the <br/>`$ heroku push-how-come-this-only-works-on-my-own-computer-wtf` tango 💃. Of course, these are both powerful and necessary tools for experienced programmers and large projects, but what if these were optional instead of required?

The real innovation of Glitch was in it's belief in a new "middle-market" of developers that wanted the creative power and copy-paste-ability that you only get with real coding – but with the ease-of-use of the normal consumer software they were used to.

> Why does creating a new web app have to be harder than creating a new google doc? To the user, they're both just boxes you type into.

When Glitch launched it was really well received, with write-ups in The Verge, TechCrunch, and the other big publications of the day.

People used Glitch in schools, to build games and apps to share with their friends, and even to learn new skills in jail. According to the Fog Creek veterans who were working at Trello and SO, the electricity in the air was just like when those products launched.

Some experienced programmers critiqued the editor for being too simple for serious work. This was really encouraging because at the time we wanted to follow in the footsteps of Ruby on Rails: initially used by hobbyists for fun → dismissed as a toy by serious coders → right up until it becomes the status quo enterprise choice.

We had the toy-like, easy-to-use, and approachable first part down. But to walk the rest, we discussed and wrote specs so that one day you could do things like:
- Safely work on collaborative projects in your own branch.
- Backup and control deploys by syncing projects with Github repos.
- Edit how you want by syncing projects to your local text editor or filesystem.

Alas, these were not to be. Nothing was ever directly said, but after leadership cemented it’s focus on learning and hobbyists, there was never the time or the resources to seriously iterate on the hard parts of that vision.

<p>
  <video autoplay loop muted playsinline class="large">
    <source src="/images/2025/bye-glitch/find-replace.mp4">
  </video>
</p>
<figure>
  <figcaption>
    Find and Replace was one of the last features that I did. Looking at this now, the density of search results could’ve been tightened up, but v1 releases were all I had time for. For better and for worse, I’ve gotten really used to designing and building UI really quickly and iteratively.
  </figcaption>
</figure>

## Easy and Friendly Are the Trees, Not the Forest

Coincidentally, this was right around the time Glitch received $30m in VC funding. My understanding is that the pitch was basically "Youtube but for web apps". The new vision was that web apps were going to be a new kind of entertainment medium that would be virally shared. And just like Youtube, there are way more watchers than creators, so discovery and community features would be the new core of the experience.

Despite my protests, the size of the team was doubled every year. The new employees were fans of the new vision and more excited about Glitch as a learning and beginner platform. There were now two frontend teams: the `Community` team which was a team of 10-20. And the `Editor` team – which was just me.

The editor had a lot of technical debt that made it intimidating to work on, but it was frustrating that new development projects were almost always easier greenfield tasks like redesigning the 404 page, or adding the ability to save apps to lists – there didn't seem to be much interest from leadership in improving the developer experience. (After I left there was a full rewrite of the editor, but I found it … not good).

Middle-market product positioning is hard. You need power users creating inspiring projects and recommending it, so the tooling can’t be half assed. You need to be able to engage new users with a fun experience and create social or collaborative loops that keep them coming back. This balance takes a clear vision, a lot of time – and a lot of luck – to nail.

I do believe that Glitch could have benefited from VC funding _after_ we found that balance – but taking that much money before even having paid customers still feels like a mistake.

<p>
  <video autoplay loop muted playsinline class="">
    <source src="/images/2025/bye-glitch/loading.mp4">
  </video>
</p>
<figure>
  <figcaption>
    Look familiar? The project loading screen was the predecessor of <a href="https://kinopio.club">Kinopio’s</a> paint select.
  </figcaption>
</figure>

## Learning from Failure

If you're really deep in the Fog Creek lore, you might also know that the company had a long history of releasing products that were ahead of their time, but not positioned quite right, or stewarded in the wrong direction:

| Released | Product | Description | Released Before |
|:--|:--|:--|:--|
| 2000 | Fogbugz | Bug Tracker | Jira, 2008 |
| 2001 | CityDesk | Website CMS | Wordpress, 2003 |
| 2005 | Copilot | Screen-sharing and KVM | Zoom, 2013 |
| 2010 | Kiln | Git hosting | Github, 2008 |

I put the release year first to emphasize how pioneering most of these were. It's hard to know what to build when you're early.

I still believe there’s a market for easy and fun web development and hosting, but a product like this needs power-users and enthusiasts willing to pay for it. To build any kind of prosumer software, you do have to be an optimist and believe that enough of the world still cares about quality and craft.

<figure>
  <img src="/images/2025/bye-glitch/delete-team.webp" class="no-shadow" alt="delete team UI">
  <figcaption>
    I’ve always loved the little illustrations that <a href="https://x.com/GraphixArtiste">Walter</a> did, which were sprinkled throughout the app.
  </figcaption>
</figure>


Ultimately I’ve learned a lot more from my failures, of which there are many, than my successes. I learned that I value clear and unambiguous communication above flowery narratives that change on a whim. And what I find admirable in a leader is someone who can simply say what they'll do, and do what they say. And if it turns out they can't, that’s okay because they’ll tell you why.

It’s been 6 years since I worked on Glitch and I don’t really have any strong feelings about it anymore. I just feel really grateful to everyone who created something cool with it over the years.


> Special thanks to Aneesha for helping edit this