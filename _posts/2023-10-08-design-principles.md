---
layout: post
title:  "Design Principles to Build With"
image: "https://updates.kinopio.club/house.jpeg"
tags: kinopio design
---


> This post is adapted from a talk I did at the [Design Matters](https://designmatters.io) conference in Copenhagen.


I've been working on Kinopio for over 4 years now. It's felt more like raising a house by piling up little bricks and wood planks, just a little bit each day. But this house is never finished. 

<img src="https://updates.kinopio.club/house.jpeg" class="large">

Something I learned from my time at [Glitch](http://pketh.org/the-first-four-years-of-glitch.html), was that before you get too deep into the process of building, you should write out a short list of product design principles.

The more unique and definitive your values are, the more useful they'll be as a decision making tool later on. 

These are some of the principles that I use to design (and redesign) Kinopio:


    1. Embrace smallness
    2. Build for fidget-ability
    3. Embrace plain text
    4. A single interface for mobile and desktop
    5. Refine by pruning

<h2>
  Principle #1
  <br>
  <br>
  Embrace Smallness by Embracing Code as a Living Design System
</h2>

Being bootstrapped means that resources are tight. But that's it's own kind of blessing. When you feel constrained, you're naturally drawn to simple and basic tools and processes. 

When planning out a new feature, instead of using design software to draw and arrange buttons, inputs, and dialog windows into detailed mockups, I skip all that and jump right into real code with `<button>`, `<input>`, and `<dialog>` elements.

Here's the HTML part of a dialog window component (using [pug](https://pugjs.org/api/getting-started.html)):

    <template lang="pug">
    dialog.narrow.dialog-name(v-if="visible" :open="visible")
      section
        p blank dialog, please duplicate
      section
        button(@click="incrementBy")
          span Count is: {{ state.count }}
        p Current theme is: {{ themeName }}
    </template>
<figure>
  <figcaption>
    <a href="https://gist.github.com/pketh/67eea8d518f263f81b5d08f5c8e16fdc">(View full file)</a>
  </figcaption>
</figure>

Which produces:

<p>
<video class="no-shadow" width="235" autoplay loop muted playsinline>
  <source src="https://updates.kinopio.club/blank-dialog-demo2.mp4">
</video>
</p>

In the spirit of keeping things simple, the UI is described mostly using regular HTML tags and the layout basically designs itself.

The way that works architecturally, is there's a global parent file (`App.vue` in my case because I use vue.js) which  contains global styles that all the other child components inherit from. 

<p>
<video class="no-shadow" autoplay loop muted playsinline>
  <source src="https://updates.kinopio.club/diagram-demo2.mp4">
</video>
</p>

---

Relatedly, it's pretty satisfying to make things that are efficient, small, and fast. Maybe it's the craft-like part of engineering.

Embracing smallness also means being diligent about only adding small third-party dependencies and utility libs that do one simple thing like date manipulation or generating random colors. 

Partly because of this, Kinopio only weighs ~220kb with libs and assets. So in an alternate dimension where we didn’t have the Internet, but still had HTML, I’d ship kinopio to you on a single 3.5mm floppy disk (and it wouldn’t even need to be a high-density one)

<p>
<video class="" autoplay loop muted playsinline>
  <source src="https://updates.kinopio.club/floppy-disk-anime.mp4">
</video>
</p>


<h2>
  Principle #2
  <br>
  <br>
  Building for Fidget-Ability, hmmm
</h2>

The first time I really thought about fidgeting was in the early 2000s when I learned that the faceted curves on this Japanese cell phone were explicitly designed for you to run your fingers over when you weren't using it.

<img src="https://updates.kinopio.club/ntt-cellphone.jpg" class="">
<figure>
  <figcaption>
    <a href="https://naotofukasawa.com/projects/401/">(W11K - Naoto Fukasawa Design)</a>
  </figcaption>
</figure>


Software Design is usually focused on capturing user inputs and showing outputs. But most of the time we spend using software tools, we're actually in between those two actively engaged states. 

This is what I call the “hmmm” state. 

As in, “hmmm, what should I write next?” Or, “hmmm, I’m highlighting this text while reading it to help me focus”, Or “hmmm, I'm swiping back and forth on my phone homescreens while I figure out what I want to do”,

This in-between time is a great time for fidgeting. 

<p>
<video class="large" autoplay loop muted playsinline>
  <source src="https://updates.kinopio.club/sticky-cards-3.mp4">
</video>
</p>

One way that Kinopio designs for fidget-ability is having cards ‘stick’ to your cursor when you hover over them. Once you get too far away, they bounce back.

There's a handful of little details that make this fun without getting in your way. 

- sticking only starts after your mouse has rested on a card for ~200ms to prevent things feeling _too_ sticky. 
- Cards stop sticking when you're near a clickable button on a card, like a tag, a link, or a todo checkbox, so you can still be precise when it matters.
 
This also happens to be an example of a feature that couldn't be conceived through mockups, and required a lot of fine-tuning with real code to make work well and feel good.

<h2>
  Principle #3
  <br>
  <br>
  Embrace Plain Text
</h2>

Text – even markdown – is not just for nerds and programmers. Text and full URLs are atomic units of computing: it's copy-able, paste-able, and the most flexible way to share. 

Embracing plain text also helps you turn regular people into power users because they can build on top of the skills (like `ctrl-c`, `ctrl-v`) they already have.

In Kinopio, almost everything in a card is just text that supports basic `**`markdown`**`, and a couple other custom syntaxes like `[[` for tags, or a file or website URL. 

<p>
<video class="large" autoplay loop muted playsinline>
  <source src="https://updates.kinopio.club/card-details-text2.mp4">
</video>
</p>

When the card name changes, a hyper-fast custom parser (i.e. a crap ton of regexes) splits the text into html segments based on whether that text is plain text or a special content type like bolded text, tags, an image URL, or any other kind of URL. and uses those segments to render the front of the card.

This parser and segment system is some of the most complex code in the app – but I like that the effect feels effortless to everyone else.

<h2>
  Principle #4
  <br>
  <br>
  A Single Interface for Mobile and Desktop
</h2>

One of my pet peeves is the premise that if you're viewing something on your phone that must mean you need a ‘clean’ minimal experience. 

| Platform | Supported |
| -------- | ------- |
| Desktop  | Everything |
| Mobile | ☹ Read only, or a quick entry UI only |

Screw minimal – I want to do real work wherever I want. This is how it should be:

| Platform | Supported |
| -------- | ------- |
| Desktop  | Everything |
| Mobile | Everything |

Building an interface that works everywhere requires considerations that you need to bake in from day one this principle means that you can't rely on hover to reveal controls. You need tappable alternatives to keyboard driven commands. And, of course, there's way less room to fit things into – especially when the onscreen keyboard is up.

> [Related: The Hybrid Architecture of Kinopio for iOS](/kinopio-ios.html)

<h2>
  Principle #5
  <br>
  <br>
  Refine by Pruning
</h2>

Another habit I picked up at Glitch was to upload old mockups and screenshots [somewhere](https://www.are.na/kinopio/kinopio-design) that I can reference later. 


<p>
<video class="" autoplay loop muted playsinline>
  <source src="https://updates.kinopio.club/imagecard-v1.mp4">
</video>
</p>

When I go back in time to something like this original version of the card editing view, I'm reminded of the basicness of it. 

Back then cards had fewer options: you could only remove the card, or add a decorative frame. Although I much prefer the flexibility of cards today, it's undeniable that there was much less to figure out back then.

Inspired by this, I habitually re-evaluate whether features are still needed and used often enough to justify their existence. 

Here are just two big features I've removed over the years:

## Removed: Minimap [2 Weeks of Work]

> Hold shift down or click the button in the bottom right to toggle on the minimap. Drag the window around to adjust your view, or tap anywhere to jump.

<p>
<video class="" autoplay loop muted playsinline>
  <source src="https://updates.kinopio.club/minimap.mp4">
</video>
</p>

Unfortunately, no one really used the minimap because it was out of sight and mostly out of mind. I considered placing a persistent minimap in the corner but doing so compromised the feeling of a sense of place within a space (and it wouldn't fit on a mobile screen anyways). After adding space zoom out I removed minimaps because they were now redundant.

## Removed: Save Twitter/X Threads [3 Weeks of Work]

> Import Twitter threads into your spaces from a tweet card. Or create new thread spaces by replying to on Twitter with `@kinopioClub save`

There are whole entire products built around saving Twitter/X threads, and people had requested it, so I was confident this would be a win. 

But after all that [work](https://kinopio.club/-building-twitter-thread-support-ehi0hHEx8ALEg1TtybCeX), tweets were being saved only once or twice a day. So after Twitter/X became increasingly hostile to developers, it was an easy choice to delete all Twitter/X-specific features from Kinopio.

---

Both of these features demo-ed really well and got a lot of likes on social media. But in the real world, all they did was take up valuable UI space, and their code would inevitably become a maintenance burden.

🔪 The most satisfying and direct way to handle complexity is to excise it like a tumor. But removing things has it's own problems and needs it's own special considerations and process…

## Removing a Feature Is a Community Effort

The problem with removing things of course is that every feature has at least one person that relies on it. So it's impossible to just remove something without someone feeling bad.

Compounding the problem, the longer things stay the same, the more people get attached to them working the same way. So the older and more advanced a tool gets, the harder change naturally becomes.

This makes pruning hard work – but it's also an opportunity to build and strengthen the community around a tool.

<img src='https://updates.kinopio.club/cat-puter.jpg'>

1. Share what you're thinking of removing and why. The people most passionate about your product want to be as close to decisions as possible. I'd post this in [Discord](https://discord.gg/h2sR45Nby8) and on the [Forum](https://club.kinopio.club/).

2. Listen to what everyone has to say. See where the feature fits in their workflows and whether there's an alternative way they could accomplish what they want to do.

3. Be prepared to be wrong and change your mind if you overlooked something.

The hard part of being a designer or a coder isn't design or code – it's convincing people, and understanding and responding to their concerns and criticism.

Good principles exist to make you feel pain before your users do. They should guide and constrain you into thinking creatively about how to handle complexity.

> Special thanks to Aneesha and Xhfloz for helping edit this.
