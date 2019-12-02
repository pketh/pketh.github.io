---
layout: post
title:  "The First Four Years of HyperWeb/HyperDev/Gomix/Glitch"
---

DanielX and I originally pitched Glitch in 2015 after a CreekWeek aimed at figuring out what FogCreek should make after Fogbugz, Trello, and Stack Overflow.

The original prototype was based on a client-only text editor that stored and published project files on Github Pages. DanielX developed it to build client apps which acted as small iframes that communicated with each other over postMessage to make a larger app, kinda hypercard-y. You can still try it out at [http://strd6.github.io/editor/](http://strd6.github.io/editor/)

<img src="/images/2019/Screen_Shot_2019-04-26_at_2-838d701d-66bf-43b0-bc2b-21b042cf3f31.54.11_PM.png" class="no-shadow large"/>

[Our pitch presentation and mockups](https://docs.google.com/presentation/d/1Lb8gWBLx9sIcf8BhmPDuX4CJvQ17XEMPmgBWMGH1L2k/edit#slide=id.p) sold the company on how the editor could be expanded into a professional tool for collaborative "web development without the trash parts".

<img src="/images/2019/editor_4_-_collab_editing-36ab420e-22fc-44b8-88f8-7980962a087f.png" class=""/>

`^ original design concept, looking p gross`

Before we started building for real reals, Joel and MHP had us walk write up a list of [Product Principles](https://docs.google.com/document/d/1ZZmlzf-AEjPE28ubJDfoFzLUYWG88KMGTKE_3PwIQp8/edit#) that would help define what we thought Glitch should be and what it shouldn't. Basically:

<pre class="pre-paragraph">
We're in Beta until we are
- The easiest, fastest way to go from code to URL
- Enjoyable to use
- A Fluid Shared experience
- Aggressively Lazy (does less to mean more)
- Safe and Reliable
</pre>

It might be hard to imagine now, but it was a very controversial project. Internally, a couple people thought it would flop because

- It was too simple for 'real' devs, and too advanced for 'regular' people
- They saw the UI of Glitch as just window dressing, that behind the pretty face we weren't doing anything noteworthy and that it was "trivially copyable"
- What's the core value prop? Couldn't I just use my more powerful local text-editor and deploy my apps myself?

<details>
    <summary>
        <img class="icon icon-small no-shadow" src="/images/2019/default-avatar3.svg"/>I still sometimes refer back to Joel's response on that long email thread (expand to read)</summary>
    <pre class="pre-paragraph">
Every time you make something a little bit easier to do, the number of people who do it explodes.

The way to make things easier to do is to make them simpler, with fewer options.

We've seen this with the evolution from Content Management Systems to blogging to Facebook and Twitter where you "blog" one sentence at a time to Tumblr and Pinterest where you "blog" by clicking one button. Each evolution resulted in 10x audiences for a much, much simpler feature. 2000 people used Vignette, 10,000,000 people used Blogger and 1,000,000,000 people use Facebook.

We also saw this the evolution from Windows/Mac desktop metaphors to iPhone. There appeared to be a great loss of functionality in the jump from Desktop to iPhones, (you can only show one thing on the screen at once, and you lost the ability to control your own files), but the usage exploded because it was so much easier for normal people. And eventually, developers figured out how to give you the features you really need in a simpler interface.

Make things 10% easier and you make the number of people who can do them double. Do that a few times and you can build a mass audience.

We've done this for "blogging" and self-expression, we've done this for computers in general, what's left?

As it turns out, we happen to work in a domain full of nerdy people who friggin' LOVE TO MAKE THINGS COMPLICATED. Maybe we're nerds so we don't notice.

And in that domain, the domain of programming, things are getting much much worse, not easier.
Example: From RCS - cvs - svn - Hg - git, every version control system added a new twist that made it harder to understand than the previous generation. Developers love to add features (like the git index) that give you more flexibility in theory but make everything harder to understand.
When faced with any technical tradeoff, developers' only design skill is to add a command line switch.

So now everybody in the world has to learn BOTH ferkakta ways of doing something which should have just been a simple one step process.

Everything I've looked at in the domain of programming has gotten stupidly more complicated every year when it should be getting simpler, because there doesn't appear to be a single programmer who doesn't love to make command line switches and complicated options. FFS, have you seen C++ lately? I couldn't understand it all in 1996, and I have a huge brain. Now I could not imagine anyone who is smart enough to understand the language and all its features well enough to use it without accidentally causing a nuclear war.

There was only one incident in the history of programming where a programming environment was built that stripped away unnecessary options WITHOUT removing any of the basic expressive flexibility of programming, and that was the original Visual Basic 1.0.

(Maybe Java 1.0, but that didn't last long).

The point about VB 1.0 is that you could build any Windows application. You weren't limited to stupid or ugly Windows applications. You could build REAL Windows applications, and you could do it with, say, three lines of BASIC code instead of 47 lines of C code.

And the REAL PROGRAMMERS (TM) laughed because it was BASIC and therefore "beneath their dignity" but at its peak Visual Basic was 2/3rds of all compilers sold. (people used to buy compilers) and 90% of the people who had occasion to program computers said that they would be willing to use BASIC.

Where does [Glitch] come in? There are, it turns out, a lot of stupid crufty complications in programming today that are unnecessary and obsolete, and if you get rid of all those complications and options you can make a much, much simpler programming environment WITHOUT removing any flexibility in what you can create.

For example, git is WAY too powerful. Probably 75% of developers are working alone and all they need is a way to go back when they make mistakes. This feature can be provided COMPLETELY AUTOMATICALLY with no user interface. So 75% of developers just need time machine for their code and they're happier than they would be with git.

If you give people the ability to work on the same code with a friend at another computer, Google Docs style, where you can both edit any document, you cover 10% more of the developers.

If you give them a simple way to make very basic feature branches, well now you're up to 95% of all developers needs being met with a user interface that is MILLIONS of times easier to use than git.

Most developers don't need make files or ant or build tools. They just want everything built always. If they have written tests, they want all tests to run all the time. So why even give them a button to run tests? Run everything always and don't deploy until all tests pass. When all tests pass, deploy automatically. That's all. Now all I have to know as a programmer is that if my tests pass, the code is on the server.

So this is the idea of [Glitch]. Get rid of all the nonsense around programming which doesn't matter. Focus first on the 90% of people who would be programming if it wasn't so unnecessarily tedious. Hide all that baloney about branches and deployments and editors and how you get your code to a URL and hide every detail about hosting except where you hook up your amazon/paypal/appleID to pay for it.

This is NOT squarespace. Squarespace is a GUI website builder. GUI tools always limit what you can do, because they don't map perfectly to HTML and CSS. They're clunky and never really win in the marketplace. We're giving you a real programming language (JavaScript, HTML, CSS) and we'll let you turn on things like node and angular. Our goal is not to reinvent programming languages because a lot of people have tried that and it doesn't always go so well. Our goal is just to eliminate the yak-shaving nonsense it takes to get code you just wrote to run.

How do we make money? Just like github. It's free for open source, paid for closed source.

For the first couple of years, Github and Atlassian ignore it, because it's too simple. It's like a toy joke and they don't even understand what it is.

On year three, they start to think "hm we need a [Glitch] competitor", so they start to design GitHub Jira Lite which is awful and nobody uses.

On year five, they realize that they have been completely outflanked. Yes, the y-combinator kids doing startups and the Tesla engineers writing code for self-driving cars are still using PROFESSIONAL tools. But everybody else is using [Glitch] because it's just really simple.

Joel
</pre>
</details>


# The Editor

After that, the grind gets mad blurry. Every week I gave demos to the company, and every week they crashed almost immediately.

<img class="large" src="/images/2019/glitch-no-assets.png"/>

The visual design of Glitch evolved piece by piece over time, as we sorted out our principles, we also sorted out our [influences and what we were trying to say aesthetically](http://pketh.org/glitch-look-and-feels.html). As I added new interface elements, I'd tweak or rewrite the older parts to fit. It was a lot of trial and error, and tweaking, and feeling.

## Some Experiments and Snapshots,

Back then the files were seperated by back/front-end based on some folder name logic. The idea was that the editor mirrored the traditional seperation of concerns between back-end and front-end devs. Instead of just all files, it'd present things in the context of who it mattered to or what headspace you were in.

<img src="/images/2019/Screen_Shot_2015-09-02_at_2-bd4968f6-fce1-42db-a7c2-29a24a98fb05.07.34_PM.png"/>

----

The original 'About' pop-over

<img src="/images/2019/Screen_Shot_2015-11-02_at_11-4595e4f9-aca7-4082-8299-9fd94fd6fce8.57.53_AM.png"/>

----

An idea I for improving the socialness of the editor, when a new user joins a project a random greeting will appear next to them for a few seconds. The user can also customize their greeting if they want.

<img src="/images/2019/Screen_Shot_2016-01-28_at_3-33a4a830-51d3-466e-b67b-2ac85993ab6f.04.38_PM.png"/>

----

The original 'new-project' pop-over. We kept it simple because we didn't want people going off in to a rabbit hole to research what framework or starting point was best.

<img src="/images/2019/Screen_Shot_2017-12-13_at_4-5f6f9aed-6c43-440c-b9bc-7e61f8e8704b.37.12_PM.png"/>


# Community

Once it started to actually work, we started getting a couple cool apps built internally and by others. To show them off I built the [first version](https://original-community-site.glitch.me) of the community site, a simple static site which you can still access at [https://original-community-site.glitch.me](https://original-community-site.glitch.me/)

<a href="https://original-community-site.glitch.me"><img class="no-shadow large" src="/images/2019/Screen_Shot_2019-04-26_at_2-7318540c-25c1-4b1b-b71e-cd280d463a5f.51.45_PM.png"/></a>

Later, I added curated categories to the [second version](https://community-site-v2.glitch.me/) , and the design slowly started to evolve

<a href="https://community-site-v2.glitch.me/"><img class="no-shadow" src="/images/2019/Screen_Shot_2019-04-26_at_2-2d606909-5422-49f8-b1fd-bad162989909.52.26_PM.png"/></a>

The [third version](https://lavender-fir.glitch.me/) I built is still the core of the current design. It added data models, user pages and other dynamic stuff. This was also the first time I worked with an [outside illustrator](http://goodboygraphics.tumblr.com) on something, and it turned out rad.

<a href="https://lavender-fir.glitch.me/"><img class="no-shadow" src="/images/2019/Screen_Shot_2019-04-26_at_2-8f7cba89-6a34-4684-82e2-716e1985cf81.52.50_PM.png"/></a>

It included the copy I'm most proud of writing

<img class="" src="/images/2019/Screen-Shot-2019-05-09.png" alt="You might know us for making Trello, FogBugz, and co-creating Stack Overflow. We're a friendly, self-funded company that's been helping people make stuff for over 18 years." />

# Meeting Anil

In the early days, FogCreek didn't have a CEO. Instead it had a council of elders (really) who kept trying to 'manage' our small team of 2-3. It came off more like meddling by people who felt we needed 'adult' supervision so we mostly ignored them, checked-in-with Joel occasionally, and kept doing our own thing.

A year before he started, Anil popped by the office to see Glitch firsthand. I had no idea that he was planning to be CEO, but I was hyped to discuss it as a fan of his series on [The Web We Lost](https://anildash.com/2012/12/13/the_web_we_lost/). Here are [my notes from that meeting](https://docs.google.com/document/d/1AmMeTDN5EKgRpWX0yoIUToXjMcQLFsXRxvC53Dlyquo/edit#heading=h.ykg6r2dy4bdk). I'm still trash at stuff like messaging so hearing his thoughts on how he'd present it to the world was real inspiring. (At the time, it was assumed we'd eventually do the whole big TechCrunch conference presentation like Trello did).

That might also have been where I settled on using the word 'Remix' instead of more technical alternatives.

After Anil joined we went from HyperDev → Gomix → Glitch (the name we'd originally wanted). And from hummingbird to fish. With the launch of Glitch, we also put the community first – both technically, [glitch.com](http://glitch.com) now loaded the community site instead of the editor, and culturally as an internal priority with it's own team.

<p>
    <img class="no-shadow icon" src="/images/2019/bird-7ae6a312-a2f2-4701-a80c-040432d0fa54.svg"/>
    <img class="no-shadow icon" src="/images/2019/logo-day-d499621e-9a2a-4520-8734-ece8099f0976.svg"/>
    <img class="no-shadow icon" src="/images/2019/logo-night-5a0b9272-b336-42fa-a1fe-661707b2a747.svg"/>
</p>

# Other Stuff

The original [/about page](https://original-about-page.glitch.me/). we explained things more dork-ily back then

<img class="large no-shadow" src="/images/2019/Screen_Shot_2019-04-26_at_3-2e7f7efe-94db-4319-8411-aba31a938529.05.43_PM.png"/>

The original illustration kit I drew for marketing

<img class="large" src="/images/2019/Screen_Shot_2018-01-24_at_10-feee235a-1370-439d-877f-cf1d0ef4d9ba.17.56_PM.png" title="glitch-design/illustration-kit.sketch"/>

There's way more things I could talk about but this is already crazy long.

<p>
  <video autoplay loop muted playsinline class="large">
    <source src="/images/2019/hw-success.mp4">
  </video>
</p>

# Resources

- All of the [screenshots I took as I worked](https://www.are.na/pirijan-k/glitch-design-pirijan).
- [Hyperweb Pitch Deck](https://docs.google.com/presentation/d/1Lb8gWBLx9sIcf8BhmPDuX4CJvQ17XEMPmgBWMGH1L2k/edit#slide=id.p)
- [OG product values](https://docs.google.com/document/d/1ZZmlzf-AEjPE28ubJDfoFzLUYWG88KMGTKE_3PwIQp8/edit)
- [OG design principles](https://docs.google.com/document/d/1TkJoU-Ynmequph2bcqbfhEXmoeOEyUXuqvJxd1BoHBQ/edit#heading=h.1r6nsuavv0qc)
- [Design principles v2](https://docs.google.com/document/d/1-1Tq716SfDtltlKuwGrv3bhVbgcPGdD_dwGBXHbzTmk/edit#)
- [Current principles at designing.glitch.me](http://designing.glitch.me)
