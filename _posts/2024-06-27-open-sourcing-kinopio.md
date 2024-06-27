---
layout: post
title:  "Open Sourcing Kinopio"
image: "/images/2024/oss/disk2.webp"
tags: kinopio engineering
---

On the eve of it's 5th anniversary, I've decided to open source the code for the `kinopio-client` app. That means you can run Kinopio on your own computer, make changes, and share improvements.

<img src="/images/github-logo@2x.png" width="24" height="25" class="no-shadow" style="vertical-align: -30%"> [kinopio-client on github](https://github.com/kinopio-club/kinopio-client)

`kinopio-client` is the app that's downloaded and run in your browser when you go to [https://kinopio.club](https://kinopio.club). It can save data locally, and to the `kinopio-server`.

<p>
  <video autoplay loop muted playsinline class="no-shadow large">
    <source src="/images/2024/oss/architecture-diagram4.mp4">
  </video>
</p>


Because the app weighs only ~220kb, in an alternate dimension where we didn’t have the Internet but had html, I’d ship kinopio to you on a single floppy disk. It wouldn’t even need to be high-density.

<figure>
  <img src="/images/2024/oss/disk2.webp" class="">
  <figcaption><a href="https://www.are.na/block/667646">(Source)</a></figcaption>
</figure>

To be honest, opening up 5 years of private code does feel a bit intimate, like inviting someone over. I've cleaned the dishes and swept up, but … don't look in that closest.

That said, compared to other commercial codebases, you might find it refreshingly straightforward. It's just a node.js app and here's the entire install process:

```bash
git clone https://github.com/pketh/kinopio-client.git
cd kinopio-client
npm install
npm install -g @vue/cli
npm install -g hostile
hostile set localhost kinopio.local
```

Then create an `.env.local` file containing `VITE_PROD_SERVER=true`.

And to run it:

```bash
npm run serve
https://kinopio.local:8080
```

## Why Open Source a Commercial app?

I've long been thinking about how to share the amount of work that goes into Kinopio. The more you know how something is made, the more you appreciate it – even more so when it's a quality product built to last a lifetime.

But at the same time, making software isn't like carving [fountain pens](https://www.youtube.com/watch?v=1F12qUyIACM) or [acoustic guitars](https://www.youtube.com/watch?v=UijpPTEuJgY). As much as I would like to sometimes, I don't toil in meditative isolation until I'm ready to deliver the perfect timeless [objet d'art](https://en.wikipedia.org/wiki/Objet_d%27art).

<figure>
  <img src="/images/2024/oss/sculptor.jpg" class="">
  <figcaption>Not my life <a href="https://www.cosmos.so/e/441491231">(Source)</a></figcaption>
</figure>

By contrast, delivering software is more like delivering a gooey crying baby. It's alive. Squirming, growing, and changing because the technologies it relies on do too. Physical materials rarely change, but web browsers, operating systems, and servers sure do.

The big benefit of open source for me is that it's another way to share the work that goes into Kinopio. One more piece of the puzzle, in between diagnosing bug reports, discussing feature requests, and sharing updates on social media.

Some kind souls might [contribute changes](https://github.com/kinopio-club/kinopio-client/blob/main/CONTRIBUTING.md). But because Kinopio is such a complex interface-based app, I have no idea yet how often that'll happen.

## Risks?

Sharing the code for paid software carries some potential risks worth considering,

1. A counterfeiter could theoretically use the code to make a clone product. Commercial derivatives are prohibited by the [license](https://github.com/kinopio-club/kinopio-client/blob/main/LICENSE.md), but even if they ignore that, the forger would still have to reverse engineer their own kinopio-server. It'd be way easier to use an off-the-shelf infinite canvas library or tldraw instead.

2. Code contributions are appreciated, but having too many PRs to review can be very stressful. On paper, Kinopio is a one person operation, but I'm not really alone because I've got a community of users I trust that moderate discussions and answer questions when I'm not able to. As always, I'll be relying on their help and generosity.

## What Happens Next?

If you are interested in contributing, please by sure to read the [contributor docs](https://github.com/kinopio-club/kinopio-client/blob/main/CONTRIBUTING.md) first. And just like in the discord and forums, there's only one rule:

> We're all friends here, so let's be cool, constructive, and always treat each other with respect.

<figure>
  <img src="/images/2024/oss/together.jpg" class="">
  <figcaption><a href="https://www.cosmos.so/e/1524015678">(Source)</a></figcaption>
</figure>

Compared to a library or CLI tool, where new features and more options don't really complicate basic usage, what the ‘correct’ thing to do for a GUI application is far fuzzier and subjective.

I'm looking forward to seeing what kind of activity takes place in the repo. Will I spend more time reviewing and less time coding? Maybe I'll stream some live coding sessions?

With loving scrutiny,

– Pirijan, Kinopio Creator