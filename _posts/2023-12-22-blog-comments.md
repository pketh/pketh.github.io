---
layout: post
title:  "Why and How I Added Comments to My Blog"
image: "/images/2023/we-grow-together.webp"
tags: life engineering
hackernews: https://news.ycombinator.com/item?id=38746309
---

My earliest blog was pretty emo – totally what you'd expect from a teen of the 2000s. But what made it fun for me was the comments. New internet friends from around the world would comment on my posts and I'd comment on theirs. Before we knew it, we were a little community.

<img src="/images/2023/we-grow-together.webp" class="">
<figure>
  <figcaption>
    <a href="https://www.behance.net/gallery/167741843/Mushroom-Compadres">(source)</a>
  </figcaption>
</figure>

But for all the good times, comments come with the responsibility of guarding against spam and toxicity. In other words, it's a job. But building our own communities is a job worth having in a world that's noisier and spammier than ever.

On one side of the web, we have social media sites with engagement (i.e. outrage) driven feeds that keep us coming back. On the other, smaller sites and apps that are oases of calm in the storm – but which rarely give us a reason to return.

The good news is that it's a lot easier to make an oasis engaging than it is to chill out at a nightmare mall. So maybe we can have it all?

## How to Build a Comments System

Whoa wait, this might not be something you want to build yourself. I originally thought it'd take 2 days, but it took 2 weeks. Not just because I'm bad at estimates, but because my view of commenting was way too simple.

<p>
  <video autoplay loop muted playsinline class="">
    <source src="/images/2023/diagram1.mp4">
  </video>
</p>

There was a time when this is how all early comment systems worked during those short-lived early days of trust and harmony on the web. But these days we need to also consider spam and toxicity.

Designing secure systems is easy. But designing slightly less secure systems that people actually want to use is way harder because you'll have to choose the right tradeoffs for your specific goals.

As for my goals:

- `Easy to use`: as close to a classic commenting flow as possible; no sign up required
- `Robust and timeless`: This blog predates and will probably outlive most companies and their current authentication systems, so there is no "sign in with Google/Facebook/Github/X"
- `A reason to come back`: commenters can opt-in subscribe to email notifications of future comments on that post
- `Reward trustworthy commenters`: repeat commenters and those with kinopio accounts will get little badges
- `Enjoyable details`: commenter info (name, website, etc.) is saved so you don't have to retype it next time. In-progress comments are backed-up as you type so if your browser crashes you won't lose any work.
- `Spam resistant`: first time comments need to be approved, and all new comments are reviewed. More details on how moderation works below.

So here's what the commenting system looks like now,

<p>
  <video autoplay loop muted playsinline class="large">
    <source src="/images/2023/diagram2.mp4">
  </video>
</p>
<figure>
  <figcaption>
    Scope … increased
  </figcaption>
</figure>

⏰ And lastly, every 2 hours the server checks to see if there are any new comments. If so, an email is sent to the subscribed commenters on that post.

If you're looking for an easy alternative, I hear [commento](https://commento.io) is pretty good. The reason I didn't use it is because it's sign in model didn't fit with my goals. But also because it's been years since I've been able to code just for fun – so I guess this was like a holiday gift to myself.

I hope this inspires you to add comments to your own blog. I had to leave out a lot of details to keep this readable so if you have any questions… leave a comment! ＿φ( °-°)/