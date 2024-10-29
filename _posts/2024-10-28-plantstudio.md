---
layout: post
title:  "Digging Into PlantStudio, a Bit Late"
image: "/images/2024/plantstudio/screenMainWindow.gif"
tags: design
hackernews:
---

This aesthetic screenshot of an old windows app has been in my [inspiration space](https://pketh.org/decade-of-inspiration.html) for ~5 years. Until recently, I assumed that it was just a nostalgia bait concept.

<img src="/images/2024/plantstudio/screenMainWindow.gif" class="">

The calm, serene life associated with gardening pairs suspiciously well with rose-tinted wistfulness for a simpler time in computing. I'm happy to be wrong though, because software doesn't get more real than [PlantStudio](https://www.kurtz-fernhout.com/PlantStudio/).

Written by Kurtz-Fernhout Software, PlantStudio is a surprisingly deep botany simulator for creating and arranging 3D models of [herbaceous](https://www.kurtz-fernhout.com/PlantStudio/help/plantstudioWhat_is_a_herbaceous_plant.html) plants based on how real plants grow, change, fruit, and flower, over their life cycles.


## How to Install

Because the last release of the app was in 2002, and it was for Windows 95/98/2000/NT4, we’ve got a little bit of work to do to get it running on macOS:

<img src="/images/2024/plantstudio/sample-flowers.webp" class="no-shadow" width="150">

1. [Download `PlantStudio210.zip`](https://www.kurtz-fernhout.com/download_new.html) and unzip it
2. [Download Whisky](https://getwhisky.app/) to run windows code in a container called a `bottle`
3. In Whisky, click `+` button to create a new bottle (I set it to Windows 10)
4. Click `Open C: Drive` and copy the `PlantStudio210` folder into `Program Files`
5. Click `Run` and open `Program Files/PlantStudio210/PlantStudio.exe`

PlantStudio lives again 🌱🌺


## Let’s Grow Some 3D Plants

After you read or skip the tutorial docs, you’re be greeted with an empty window, which is kind of like the 'garden' that your plants will live in. One way to jump in is to `File → Open` some sample files.

The interface is full of unlabelled and unfamiliar icons, but the hover tooltips in PlantStudio are the most verbose I’ve ever seen – which helps a lot.

<figure>
  <img src="/images/2024/plantstudio/tutorial-tooltip-cropped.webp" class="">
  <figcaption>
    Rotate mode tooltip
  </figcaption>
</figure>

To fill the garden with our own herbs, shrubs, and flowers, use `Plant → Create New…` which opens the thorough 10-step `Plant Wizard`, and teaches us some biology terms along the way.

<p>
  <video loop muted playsinline autoplay controls class="large">
    <source src="/images/2024/plantstudio/plant-wizard.mp4">
  </video>
</p>
<figure>
  <figcaption>
    Going through the Plant Wizard…
  </figcaption>
</figure>

Each option button has a detailed little illustration that makes the impacts of technical concepts, like ‘inflorescence’, easy to understand.

<img src="/images/2024/plantstudio/button-illustrations.webp" class="">

I also love the wizard progress icons in the footer. Because the colors match the button illustrations, it’s easy to jump from editing stems and leaves (green icons), to editing flower related options (purple icons). The start and stop traffic lights for the intro and confirmation steps serve as cute bookends.

<p>
  <video loop muted playsinline autoplay class="">
    <source src="/images/2024/plantstudio/wizard-footer.mp4">
  </video>
</p>

> Designers can use color to conceptually link related interfaces together. I did this when I [redesigned Futureland](https://pketh.org/redesigning-an-app.html) a couple years ago.

One thing I kept wishing for while creating plants was the ability to see a live preview while I was selecting options. Maybe they didn’t think of that, or maybe the performance impacts would’ve been too much for the minimum required 100MHz CPU of the day.

## Cultivating a Garden

As you create plants, they’ll appear in the garden area, where you can arrange them by scaling, rotating, editing, posing, and even changing their age.

<p>
  <video loop muted playsinline autoplay class="">
    <source src="/images/2024/plantstudio/edit-plant.mp4">
  </video>
</p>

It took awhile, but by repeatedly creating plants in the wizard and arranging each one, even I could make something pleasant enough:

<img src="/images/2024/plantstudio/my-garden.webp" class="no-shadow large">


I could’ve probably saved some time by selecting one or multiple plants to `Plant → Breed` to create offspring. The `Breeder` lets you define how similar the children are from their parents, and adjust the amount of mutation (random chance changes).

<img src="/images/2024/plantstudio/breeder2.webp" class="">



## Export Options

You can be creative with your plants models by exporting `jpg`, `3ds`, or `obj` files into other art apps. The [official Gallery](https://www.kurtz-fernhout.com/PlantStudio/gallery.htm) has a couple y2k-era masterpieces that were composed with whimsical 3D tools like [Bryce](https://theinnerframe.org/2015/02/14/bryce-3d-an-epitaph/), and then polished in 2D art tools like Paintshop Pro and Photoshop.


<figure>
  <img src="/images/2024/plantstudio/fairy_flowers.jpg" class="">
  <figcaption>
    Artist's note: "I created this picture with Metacreations Poser3, Bryce3 and Photoshop5. I used Photoshop5 to give the violet leaves some texture, and refined the shape of the leaves and petals..."
    <a href="https://www.kurtz-fernhout.com/PlantStudio/gallery_fairyflowers.htm">(source)</a>
  </figcaption>
</figure>

The process for making these images is strikingly similar to what landscape architects do today. Much like how software designers use mockups, architects use 3D renderings to convince clients, to market their work, and as a starting point for working with contractors.

<img src="/images/2024/plantstudio/plantkind.webp" class="large">
<figure>
  <figcaption>
    <a href="https://plantkind.earth">(source, Plantkind)</a>
  </figcaption>
</figure>


> Also, plants look really cool inside [Kinopio spaces](https://kinopio.club/-inspiration--PvOMf-lSAIAC9INOu8_Ex). Maybe I’ll figure out some kind of ‘integration’ in the future…<br/><br/>
> ![](/images/2024/plantstudio/in-kinopio-space.webp)

## So Why Am I Only Finding Out About Plantstudio Now?

The husband and wife duo [Paul Fernhout](http://pdfernhout.net/) and [Cynthia Kurtz](http://www.cfkurtz.com/) were the authors behind Kurtz-Fernhout Software. Unsurprisingly, both have degrees in Biology and Ecology.

Their [original goal](https://www.kurtz-fernhout.com/historyandfuture.htm) was to build a gardening simulator to “help people understand how to garden in a more sustainable way in their own backyards”. The simulation was based the EPIC (Erosion/Productivity Impact Calculator) agricultural model by the USDA Agricultural Research Service.

>  We worked as a team on most design phases of the project. Paul did most of the low-level coding, the general architecture, the undo/redo system, the file system, the graphical display, and the 3D turtle engine. Cynthia did most of the translation of the EPIC model, the flowering/fruiting submodel, the plant drawing algorithm, the various window designs, and the artwork, music, and documentation.

PlantStudio was originally built to draw plants for the gardening simulator, but they “found that everyone tended to like the plant designer so much they wanted to play with it instead of with the garden simulator”, so released it separately.

Not entirely dissimilar to the story behind [SimCity](https://arstechnica.com/gaming/2015/10/from-simcity-to-well-simcity-the-history-of-city-building-games/),

> While developing his first commercial game […], Will Wright noticed that designing city maps for the player to fly over in a helicopter was more fun than actually [playing the game]. He began expanding his world-building tools as an experiment. He applied various urban planning and computer modelling theories, implementing whatever ideas he'd been reading.

<img src="/images/2024/plantstudio/simcity-windows-lgr.webp" class="large">
<figure>
  <figcaption>
    Sticking to the theme, SimCity for Windows
    <a href="https://www.youtube.com/watch?v=TrScy1icWjI">(source)</a>
  </figcaption>
</figure>


Unfortunately, PlantStudio was [discontinued](https://www.kurtz-fernhout.com/press.htm) in 2002,

> What happened to our old software and the plans for it? We spent years working for other people to pay off money (with interest) we borrowed to finish it and free it.

I empathize with their story because the world is rarely kind to [organic](/organic-software.html) niche creative consumer software. I'm sure the market at the time was a lot more developer friendly overall, but businesses need to always be reaching new people to sell more licenses.

In an alternate universe, maybe PlantStudio could have survived by evolving into a game in the vein of SimCity and SimEarth, e.g. 'SimGarden'.


## Incidental Beauty

There’s something appealing about objects and interfaces built for purpose, like race cars and professional-use espresso machines. In cases like these, beauty feels like a byproduct of an object built to do it’s job well – and there’s something appealingly genuine about that.

<figure>
  <img src="/images/2024/plantstudio/26marzocco.webp" class="">
  <figcaption>
    Back when I worked at <a href="https://www.joelonsoftware.com/2010/01/26/why-testers">Fog Creek Software</a> there was a $10k Marzocco professional espresso machine in the break room that we were trained on as part of our onboarding. I don’t even like espresso, but I do miss using it sometimes.
  </figcaption>
</figure>


I’d describe PlantStudio the same way. It doesn’t look or work like a modern app, but anyone can figure it out because it’s interface elements are delightfully chunky, unfussy, and well documented by illustrations, inline text, and tooltips.

It's definetely not for everyone, but the best things rarely are. Creating those gardens gave me a new perspective – and some new ideas – for my own design work.

It took a while, but I’m glad I found PlantStudio.

<img src="/images/2024/plantstudio/sample-flowers2.webp" class="no-shadow">

> Special thanks to Ethan from [Plantkind](https://plantkind.earth/) for giving me a bit of insight into his landscape architecture practice for this post.