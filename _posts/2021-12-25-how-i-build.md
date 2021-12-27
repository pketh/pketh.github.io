---
layout: post
title:  "How I Build"
image: "/images/2021/sensory-experiences.png"
tags: design engineering
---

My idea of a vacation might be weird to some. Sure, I like sunshine, I like beaches – but more than all that, I like making stuff with computers. 

So I spent my last trip to the west coast scratching my own itches, writing the little dream features and requests that have been floating around in my head for months. 

I didn't want the stress of shipping anything while on vacation, so after I got back I released one of those features per day. I called it "The Week of Sensory Experiments" because of this cool art,

<img src="/images/2021/sensory-experiences.png" class="large"/>

That week included [card resizing](https://twitter.com/KinopioClub/status/1470416583713599493), an updated [image picker](https://twitter.com/KinopioClub/status/1470793814499598344), space [embeds](https://twitter.com/KinopioClub/status/1471157556076756999), improved [card overlaps](https://twitter.com/KinopioClub/status/1471487579094671361), and my personal favorite, [multi-connect](https://twitter.com/KinopioClub/status/1471854615436185609),

<p>
  <video autoplay loop muted playsinline class="">
    <source src="https://kinopio-updates.us-east-1.linodeobjects.com/multi-connect-small.mp4">
  </video>
</p>
<figure>
  <figcaption>
	  Multi-Connect in action
  </figcaption>
</figure>

People seemed to really like the busy week, I should do this more often…

# Deciding What to Make

My biggest source of ideas is people's problems or requests on the [forums](http://club.kinopio.club), on [discord](https://discord.gg/h2sR45Nby8), or IRL. These take the form of either:

1. `“I need X”`, which is straight-forward and just a matter of priority
2. `”I want to do Y”`, which doesn't make sense initially, but finding out the _why_ behind the request leads to something new
3. `”I wish I could do Z”`, sometimes I wish I could do Z too, but I need to swirl the idea around in the back of my brain for a couple months before I figure out how to build it in a way that's performant and works with the Kinopio interface

<p>
  <video autoplay loop muted playsinline class="">
    <source src="/images/2021/dbz-ocean.mp4">
  </video>
</p>

Equally important are my own dreams – Kinopio is nowhere near complete in my eyes. Maybe it won't ever be. 

So I continually ask myself:

1. `”How can spaces be more expressive?”`, more personal, and more fun to use. My goal is for the tool to feel like an extension of your mind
2. `”How can the tool be more usable?”`, the more reasons people have to use Kinopio, the more reasons they have to share and invite others to their spaces

I benefit from these in my own spaces. Especially in [Life Tasks](https://kinopio.club/-life-tasks-Y1X79OS5gRjU5x7buJfhB), where I figure out what I'm doing next, and jot down errands and random ideas and observations,

<p>
	<div class="kinopio-embed" style="height: 420px; width: 100%;">
	  <iframe src="https://kinopio.club/embed/?spaceId=Y1X79OS5gRjU5x7buJfhB&zoom=100" style="height: 100%; width: 100%; border: 0; border-radius: 5px;">
	  </iframe>
	</div>
</p>
<figure>
  <figcaption>
	  This is a live embed of my Life Tasks space, I have no idea what this'll look like when you read this. It'll probably be messy like the inside of my head though.
  </figcaption>
</figure>

# Designing, Coding, Sometimes in That Order

In 2014, [I wrote]( /dual-wielding.html) about my belief that design and engineering are best when tigthly woven together. That's truer now than ever.

If I’m feeling confident, I’ll jump right into my text editor and write something like this to create a new controls,

```js
.button-wrap
  button(@click="toggleIsVisible")
    span Say Hello
  dialog.narrow(:open="isVisible")
    p yolo friends 🛶
```
<p>
	<figure>
	  <figcaption>
		  Vue/Pug component
	  </figcaption>
	</figure>
</p>

<p>
  <video autoplay loop muted playsinline class="no-shadow">
    <source src="/images/2021/button-dialog-example.mp4">
  </video>
</p>
<figure>
  <figcaption>
	  Our new controls IRL
  </figcaption>
</figure>

From here, more functionality is added and the code is tweaked until the feature looks and feels right to me. Whether it's something simple like this, or prototyping a new interaction like multi-connect, there's no substitute for designing with real code.

In rare cases when I have ideas or plans that I'm less confident about, it's time to break out the paper, pens, and markers,

<p class="images-wrap">
  <video autoplay loop muted playsinline class="no-shadow">
		<source src="/images/2021/notebook.mp4">
  </video>
	<img src="/images/2021/sketch2.jpeg" class="no-shadow">
</p>

<figure>
  <figcaption>
		The best thing I did last year was decide to only use one notebook for all my Kinopio sketches
	</figcaption>
</figure>



Because the Kinopio interface elements and aesthetic are full-grown, I almost never use traditional design software anymore.

# Ship It to the World

<img src="/images/2021/palms.jpeg">

I keep the review and release process simple – commits are linted, PRs are code-reviewed, branch merges auto-deploy to production. 

While coding, I create a list of interactions to manually QA test afterwards. If the change is risky or risqué, I'll release sneak-peek videos for feedback, and ask beta testers to try it out in a staging environment beforehand.

# Marketing

Everything I know about marketing I learned by osmosis in previous jobs. Most software marketing messages are variations on a theme,

> “We exist! We can help! We're really popular! Trust us!”

<img src="/images/2021/tomatoes.png" class="no-shadow"/>
<figure>
  <figcaption>
		So many voices… how to stand out?
	</figcaption>
</figure>

After a new feature is shipped, I post and [tweet](https://twitter.com/kinopioclub) about it. With practice, weaving marketing into design and development is starting to feel like a natural part of the cycle. 

There's no shortage of articles with silver bullets like how to double your audience with one cool trick™. But once you strip away the artifice and wipe off the sludge, marketing is just communication – and the best communication informs, inspires, and entertains.

In the case of Kinopio, I hope to convey,

1. `Function`, how Kinopio helps you make sense of information in a more engaging way
2. `Beauty`, create expressive and interesting spaces that you'll want to share
3. `Aspiration`, using Kinopio helps you turn your problems into solutions, and your ideas into actions

It's a long road to travel. Like the Oregon Trail, but instead of losing people to dysentery, new friends are jumping on the caravan everyday.

<img src="/images/2021/oregon-trail-2.png" class="">
