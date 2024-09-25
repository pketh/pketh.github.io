---
layout: post
title:  "Towards a Better Whiteboard"
image: "/images/2024/whiteboard/collab.jpg"
tags: design kinopio
---

A couple months ago, I wrote a short piece for the [Sublime zine](https://sublime.app/zine) about my vision for collaboration,

<figure>
  <img src="/images/2024/whiteboard/book-cover.webp" class="" style="margin-bottom: 0">
</figure>


> What if We Could See Each Other's Thoughts?

> When you asked me to do something, I would know why you think it matters. If I told you my plan, you would know the thinking behind it.

> Instead of debating what to do, we could discuss why we need to do it. Instead of hiding behind a powerpoint proclamation, we could share our truer selves, and our rougher thoughts, and figure it out together.

The curse of humanity is that we can't read minds, but we do need to work together. Every company I've ever worked with has struggled to connect `what` we need to do, to `why` we need to do it.

This is where whiteboarding comes in. The combination of writing and drawing anywhere you want can help us build ideas and solve problems together. No two whiteboards are the same because no two problems are ever the same.


<img src="/images/2024/whiteboard/w4.webp" class="no-shadow large">



Collaborating like this, in the spirit of openness and vulnerability, we can share our goals, assumptions and ideas, we can ask questions, make plans, have fun, and learn to trust each other.

Unless you're unlucky enough to be using an enterprise software whiteboard.

## Designing for the Journey

Here's the prettiest screenshot for Miro I could find, taken from it's marketing site, illustrating its many features in use,

<img src="/images/2024/whiteboard/miro.png" class="no-shadow " />
<figure>
  <figcaption>
    Notice the photoshop-like toolbar on the left? It contextually displays sub-options when a tool is selected. There are other popular whiteboarding apps, but they all look and work the same tbh.
  </figcaption>
</figure>

Let's say I have a cool idea you want to share with the group. Hold on, I've got some decisions to make first:

- I want to type my idea so I'll use the Text tool
- Oh wait, should I add a Sticky Note instead? What's the difference? Which pastel color should I choose in the sub-options that appear?
- Oh nooo, I clicked on the `+` button and [30+ additional tools popped up](/images/2024/whiteboard/miro-toolbar.mp4) (seriously click that link, the list is nuts). Umm, what's a Card? How is it different from a Text or Sticky Note?
- I see multiple Diagram, Flow Chart, and Mindmapping tools. So if I want to add an idea that's connected to another idea, do I need to use one of those?
- What was my idea again?

This “what if design app, but business?” kitchen-sink UI makes it possible to produce high-fidelity diagrams and flowcharts – but it also ruins the whole point of a whiteboard. (Also, at this point, why am I not just using a real design tool?)

Drawing and writing on a physical whiteboard is a mode-less experience that anyone can do. Being *at least* as easy, expressive, and fun as a $10 sheet of plastic and some markers is the bare minimum that a software whiteboard should be.

Unlike text documents and spreadsheets whose general shapes were settled pretty early on, collaborative digital whiteboards have only been around for ~15 years or so.

<figure>
  <img src="/images/2024/whiteboard/Lotus-123-3.0-MSDOS.png" class="" />
  <figcaption>
    Lotus 1-2-3, 1983~
    <a href="https://en.wikipedia.org/wiki/VisiCalc">
      (Source)
    </a>
  </figcaption>
</figure>

Despite this, every app in this space follows the same dreary UI playbook. Maybe that's the nature of enterprise apps for the fortune 500, but why should the rest of us suffer? I think we can do better.

# Wide Interfaces vs Deep Ones

As products gain features their interfaces can grow either wider or deeper to accommodate them. It's kind of like a lake,

<figure>
  <img src="/images/2024/whiteboard/lake3.svg" class="no-shadow" />
  <figcaption>
    In a wide, shallow lake, you can see all of the fish. In a deep lake, you only see the fish near the top, until you dive deeper.
  </figcaption>
</figure>

**Wide interfaces** show you every tool and control upfront to make them easy to discover and quick to access. But as the number of options increases, they become visually overwhelming, requiring designers to stuff some things into submenus.

In the right context, this is great. Wide interfaces are ideal for specialized professional tools designed to produce high-fidelity outputs like pixel-perfect mockups, millimetre-accurate architectural plans, and complex 3D models.

Pro tools take a lot of time to learn, but they're usually critical to your profession, so that's time well spent.

But the same qualities that make them powerful for professionals, also makes them prickly for cross-discipline collaboration. Complex tools elevate experts and intimidate novice users from making unique contributions, nurturing [groupthink](https://www.psychologytoday.com/us/blog/cutting-edge-leadership/202010/what-is-groupthink-and-how-can-leaders-avoid-it).

<img src="/images/2024/whiteboard/archicad.webp" class="" />
<figure>
  <figcaption>
    An old version of ArchiCAD, select the <code>wall</code> tool to draw a wall, the <code>window</code> tool to add a window, and so on. Expressive for architects, daunting to everyone else.
  </figcaption>
</figure>

---

**Deep interfaces**, on the other hand, present fewer controls upfront. More advanced features reveal themselves contextually as you add content.

Because these interfaces are easier to start using, they're better for collaboration with a wide range of people and a wide range of skill sets. Everyone feels more welcome to contribute when the barriers are low.

<p>
  <video autoplay loop muted playsinline class="no-shadow large">
    <source src="/images/2024/whiteboard/k4-2.mp4">
  </video>
</p>
<figure>
  <figcaption>
    In a text document you just click and type. In a spreadsheet you just click and type. What if in a whiteboard… you just clicked and typed? Choices like colors, voting, commenting, and checkboxes are secondary, so they're presented <i>after</i> you get your ideas down.
  </figcaption>
</figure>



Like a physical whiteboard, the outputs produced this way tend to be [lower-fidelity](https://uxdesign.cc/low-fidelity-design-is-higher-up-the-value-chain-fdf1824c6aa1) and conceptual – ideal for problem solving and consensus building.

The downside of deep design is that advanced features are inherently harder to discover. Good help docs and sharing examples of advanced use can go a long way though.

<p>
  <video autoplay loop muted playsinline class=" large">
    <source src="https://kinopio-updates.us-east-1.linodeobjects.com/select-all-to-the-right.mp4">
  </video>
</p>
<figure>
  <figcaption>
    Most people don't know that if you hover over the left or top sides of a window, you can drag to interactively select all items below or to the right. This is an extremely useful way to make room in crowded spaces – but it's a pretty unique interaction, so you probably wouldn't find it on your own.
  </figcaption>
</figure>


The other challenge is that you can't just wedge new feature buttons into a toolbar. You have to think through how features could be invoked contextually – and be okay with some features taking longer for users to unearth.

In practice, almost every app has a mix of wide and deep interface design decisions. Now that you can recognize them, you'll see these patterns everywhere. Sorry about that.

## Eternally WIP

When Kinopio was born 5 years ago, whiteboarding wasn't on my radar, so it's design comes from a totally different place.


<blockquote>
  <p>
    <img src="https://pketh.org/images/2019/kinopio-beta-logo.jpg">
    In 2019, I introduced Kinopio, why I made it, and how to use it in
    <a href="https://pketh.org/hello-kinopio.html">Hello Kinopio</a>.
    I think I got a lot right from the start.
  </p>
</blockquote>

>
>

Early on, I noticed that those who use Kinopio the most, also use it at work. It’s really motivating to see people using the tool I created to help shape the kinds of teams and companies that I’d love to work for.


Kinopio isn’t for the Fortune 500 – there’s plenty of enterprise options for them. I’m personally drawn to the people and teams who care about using great tools because they take pride in their work.

Ultimately, my goal is to create something that’s so effortless and [toy-like](https://cdixon.org/2010/01/03/the-next-big-thing-will-start-out-looking-like-a-toy) you’ll invent new reasons to sink into it with your friends and teammates.

<figure>
  <img src="/images/2024/whiteboard/relax-space.jpg" class="" />
  <figcaption>
    <a href="https://www.cosmos.so/e/1290280742">
      (Source)
    </a>
  </figcaption>
</figure>


