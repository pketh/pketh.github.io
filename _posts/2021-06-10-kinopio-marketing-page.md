---
layout: post
title:  "Making a Marketing Page"
image: "/images/2021/island.jpeg"
tags: kinopio design
---

In theory, every marketing website has the same basic job “Here’s _what_ this thing is, here’s _how_ you can use it, and _why_ it can help you.”

Beyond that, I hope to vibe with your higher aspirations. “This will help you live the calm, creative life that you yearn for.”

<img src="/images/2021/island.jpeg" class="large"/>

To this end, the three weeks I spent writing, designing, and building the new [About Kinopio page](https://help.kinopio.club/about) almost broke me.

I started with words. If I can make something compelling in a .txt file, that's a good place to build from. Strangely, I think clearly describing what a product does is probably hardest for the person who made it. But all the [feedback](https://kinopio.club/ideas-for-growing-kinopio-WjASP_gR0dWatK1Avy_rJ) I've gotten from readers of the Kinopio email bulletin was super helpful in figuring out what themes and use-cases to focus on.


## How it Looks, How it Works

Much of my initial inspiration came from going down the rabbit holes of [Fonts in Use](https://fontsinuse.com). Besides finding cool typefaces, there's a lot of compelling layouts and art direction to be found in the books and posters on the site that we don't really see on the web.

My design process began by putting the goals I had for the page along with pieces of inspiration in a [mood-board space](https://kinopio.club/about-site-redesign-w-fonts-La3P2hMCw_4s6PGvuv-R_).

<p>
  <video autoplay controls loop muted playsinline class="large" width="654" height="470">
    <source src="https://kinopio-updates.us-east-1.linodeobjects.com/about-kinopio-inspiration-space.mp4">
  </video>
</p>
<figure>
  <figcaption>
    <a href="https://kinopio.club/about-kinopio-inspiration-La3P2hMCw_4s6PGvuv-R_">About Page Inspiration on Kinopio</a>
  </figcaption>
</figure>

- Aesthetically, I wanted the page to feel approachable and conventional – but also be memorable and characterful.
- The page should feel like a genuine counterpart to the app’s design.
- Exude the qualities of craftsmanship and a focus on small details that differentiates Kinopio from more corporate competitors.

For the fonts I was interested in, I tried out free trial versions on the page itself using `css @fontface`

The page headers are set in the very french [Jean Luc](http://carvalho-bernau.com/jlg/). I've had this font on my hard drive – and in the back of my mind – for 10 years, and I finally found a use for it.

![](/images/2021/jean-luc-font.png)

Contrasting this, the organic and earthy [Recoleta](http://latinotype.com/display-weights) is used for headlines.

<img src="/images/2021/recoleta-font.png" class="no-shadow"/>

From here, I poked, then hoped, then tweaked my way towards a layout in the `html` and `css` itself. I created new template spaces for each example use-case. And also recorded videos using the macOS screen recorder (`⌘-Shift-5`) which were then converted to web-friendly mp4 files with [Handbrake](https://handbrake.fr).

As is so often the case, the early ideas in my head were very far away from the end result.

<img src="/images/2021/about-site-header.png" class=""/>


## Auto-Paint

Just like with Kinopio itself, I wanted the way you interact with this page to have a little extra somethin' somethin'.

So, the page paints itself. Kind of like I'm sitting on your shoulder and I'm saying "hey check this out, and also this part is really cool".

<p>
  <video autoplay controls loop muted playsinline class="" width="1094" height="666">
    <source src="https://kinopio-updates.us-east-1.linodeobjects.com/auto-paint.mp4">
  </video>
</p>

<img src="/images/github-logo@2x.png" width="24" height="25" class="no-shadow" style="vertical-align: -30%"> To build auto-painting, I wrote some code that [records](https://github.com/kinopio-club/kinopio-help/blob/master/assets/js/magic-paint.js) the x,y position and timings of my paint strokes on the page. On page load, these recorded strokes have their positions [transformed](https://github.com/kinopio-club/kinopio-help/blob/master/assets/js/recorded-strokes.js) to be relative to specific elements on the page. When you scroll those elements into view, [auto-painting](https://github.com/kinopio-club/kinopio-help/blob/master/assets/js/auto-paint.js) happens.

Honestly, this was kind of a nightmare. I should've chosen an easier profession, like navy seal.

![](https://us-east-1.linodeobjects.com/kinopio-uploads/AJKnq_XNYHpE6K7roE978/image.jpeg)


## Putting It All Together

<p>
  <video autoplay controls loop muted playsinline class="large" width="1784" height="1080">
    <source src="https://kinopio-updates.us-east-1.linodeobjects.com/about-kinopio-page.mp4">
  </video>
</p>

Here's how [the page](https://help.kinopio.club/about) turned out. Weeks from now, after the pain is forgotten, I'll be really happy with it.
