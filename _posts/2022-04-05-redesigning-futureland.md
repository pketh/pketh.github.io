---
layout: post
title:  "Re-designing Futureland.tv, One Day a Week at a Time"
image: "/images/2022/fl-overview.jpg"
tags: design
---

[Futureland](https://futureland.tv) is a journaling platform that helps you build habits or learn new skills through daily posting and activity streaks.

<img class="large" src="/images/2022/fl-overview.jpg"/>

This is the tale of my re-design of Futureland over the last year – how I started, what I did, and what I learned.

# How I got Involved

I chanced upon FL when looking for a place to write [rough thoughts](https://futureland.tv/pirijan/pirijan-meta) and [development diaries](https://futureland.tv/pirijan/kinopio-development-diary) that I wanted to share. Creating journals and posting was straight-forward enough, and I liked it's simple aesthetic and it's tight-knit community,

<img class="large" src="/images/2022/fl-original.jpeg"/>
<figure>
  <figcaption>The original UI</figcaption>
</figure>


But while trying it out, I kept giving myself paper cuts on confusing parts of the interface,

- The [sidebar](https://futureland.tv/pirijan/entry/45713) grouped journals under 'All','Daily', and 'Shadows', but it was never explained what these meant
- On small screens, [important controls](https://futureland.tv/pirijan/entry/49579) were hidden inside a [hamburger menu](https://gerrymcgovern.com/the-hamburger-menu-and-the-zombie-apocalypse) (yuck), or removed altogether
- When opening a journal, the sidebar that listed your journals would slide away, with no obvious way to get it back

<p>
  <video autoplay loop muted playsinline>
    <source src="https://us-east-1.linodeobjects.com/kinopio-uploads/XH9jzFTKIish5N1wRMNnv/Screen-Recording-2021-02-12-at-11.10.14-AM.mp4">
  </video>
</p>
<figure>
  <figcaption>Opening a journal and completely losing navigation</figcaption>
</figure>

The cumulative result of these little paper cuts was an interface that appeared minimalist but required regular pauses in workflow to remember how to use.

I posted about these issues, in case it was helpful, with no expectation of anything more coming of it. But the founder and lead developer, [Vin](https://futureland.tv/vin) and [Lucas](https://futureland.tv/lucas) replied, and later on asked if I'd like to help make FL more usable.

My goal has always been to work on Kinopio full-time. But especially back then, the extra money would be very much welcome, to stay alive and occasionally buy nice things.

<img class="" src="https://us-east-1.linodeobjects.com/kinopio-uploads/2ZfVLm1ci6ninbyngvg2H/foodstore.jpeg" />

<figure>
  <figcaption>
    <a href="https://www.are.na/block/1975706">(source)</a></figcaption>
</figure>

# Step 1, Fixing the Floor

Making mockups is easy, communicating is hard. So the first thing to do was establish a shared foundation and vision. 

I started by asking questions to understand the thinking behind the existing design, and by collecting feedback from the community publicly in [Futureland.design](https://futureland.tv/vin/futureland-design).

Adapting Maslow's [hierarchy of needs](https://en.wikipedia.org/wiki/Maslow's_hierarchy_of_needs), I proposed a [pyramid of needs](https://futureland.tv/pirijan/entry/45672) for Futureland. With basic usability right as the foundation.

FL already had vocal power-users who'd climbed it pretty high up the pyramid by being manually 1:1 onboarded by Vin, but basic usability issues still slowed them down and were a barrier for newcomers.

> 🕊 The first way to make an interface feel intuitive is by grouping together related controls.

It made sense to do this by making the [sidebar](https://futureland.tv/pirijan/entry/47587) the 'home' of the interface with new responsibilities,

- **Primary:** Organizing and navigating journals, teaching tips
- **Secondary:** Creating journals, user profile, search, discovery

I started by proposing [little adjustments](https://futureland.tv/pirijan/entry/47622) and drawing new icons and controls for basic journal creation and navigation. By necessity, I was already updating the visual appearance of controls to fit inside the sidebar

![](/images/2022/fl-daily.png)

Now that the fundamentals were set, this was a good time to step back and shape an aesthetic unique to FL.

# A New Look with Functional Colors

We used Kinopio to create a [Mood Board space](https://kinopio.club/-futureland-moodboard-fbJXhE9nYFtB-rDv1Z-pK). 

I started with Vin's original inspirations which I described as `sleek, graphic, sterile, minimalist` 

<img class="large" src="/images/2022/moodboard-1.png" />

We then added new images and commented on what we liked about them,

<img class="" src="/images/2022/moodboard-2.png" />

<img class="" src="/images/2022/moodboard-3.png" />

<img class="" src="/images/2022/moodboard-4.png" />


One of the themes that resonated were bright spot colors,

<img class="large" src="/images/2022/moodboard-5.png" />

<figure>
  <figcaption>The phrase ‘colourful abilities’ was also interesting to me</figcaption>
</figure>

This gave me the idea for tying color to function. Users wouldn't need this to explicitly explained – they would naturally form associations between like colored controls which would help them parse and learn the interface.

| Function Color | Related To | Example |
|:--|:--|:--|
| <span class="badge fl-badge fl-activity-streak">Green</span> | Activity Streaks | <img class="fl-table-image" src="/images/2022/activity-streaks.png"> |
| <span class="badge fl-badge fl-journal-metadata">Blue</span> | Journal Info | <img class="fl-table-image" src="/images/2022/journal-metadata2.png"> |
| <span class="badge fl-badge fl-sharing">Pink</span> | Sharing | <img class="fl-table-image" src="/images/2022/sharing2.png"> |
| <span class="badge fl-badge fl-new-post">Purple</span> | Writing a New Post | <img class="fl-table-image" src="/images/2022/new-post2.png"> |
| <span class="badge fl-badge fl-post-metadata">Orange</span> | Post Info | <img class="fl-table-image" src="/images/2022/post-metadata.png"> |
| <span class="badge fl-badge fl-scheduling">Yellow</span> | Scheduling | <img class="fl-table-image" src="/images/2022/schedule2.png"> |

I used this system to design self-documenting components that were easy to develop against, and allowed the rest of the team to build new and consistent UI without needing me. Broadly speaking, these include,

| Component | Purpose | Example |
|:--|:--|:--|
| Segmented-Button | Filter results by the selected option | <video class="fl-table-image" autoplay loop muted playsinline><source src="/images/2022/segmented-button.mp4"></video> |
| Dialog | Presents item info or editing controls, inherits function color | <img class="fl-table-image" src="/images/2022/dialog.png"> |
| Dialog Inputs | Short text entry in dialogs |  <video class="fl-table-image" autoplay loop muted playsinline><source src="/images/2022/input.mp4"></video> |


## Some Stuff I Did

I was only contracting 1-2 days a week. To make the most of that time, Vin would summarize the community, product, and business problems or aspirations of the week, and I'd tackle these in public in the [Futureland.design](https://futureland.tv/vin/futureland-design) journal.

We managed to improve almost every part of FL – here are some highlights,


## Organizing Journals, Onboarding, and Grouping

On FL, journals are separated by posting frequency. Journals you post to regularly are `Today` journals, and everything else is `Not Today`. `Today` journals are listed first and show activity streak counts to encourage frequent updates.

The `Today, Not Today` concept is a little hard to explain though so dismiss-able inline tips are meant to gently guide new users towards that use, without being dogmatic about it. 

<p>
  <video autoplay loop muted playsinline>
    <source src="/images/2022/sidebar-tips2.mp4">
  </video>
</p>

Additionally, a welcome journal was added for new users with more in-depth explanations,

<img class="no-shadow" style="max-width: 200px;" src="/images/2022/welcome-journal4.png" />

Once people started creating dozens of journals, they wanted more ways to organize them so we added custom groups

<p>
  <video autoplay loop muted playsinline>
    <source src="/images/2022/groups.mp4">
  </video>
</p>


## Streak History and Scheduling

Posting everyday to a journal increments an activity streak count that is publicly shared. 

<img class="" src="/images/2022/profile-streaks.png" />

As people grew ever-higher streak counts, they got more anxious about losing them. Requests started coming in for ways to conditionally forgive missing a streak. In response, others raised concerns about diluting the meaning of a streak. 

Public streaks – which therefore have social value – are potentially toxic. But we were softened the preciousness and anxiety associated with streaks through:

1. [Streak History](https://futureland.tv/pirijan/entry/102459), so if you lose a streak you'll still have a record of it that is publicly visible <br/><br/><img class="" src="images/2022/streak-history2.png" />

2. [Scheduled Journals](https://futureland.tv/pirijan/entry/140255), that let you customize streak frequency. This flexibility makes growing streaks easier, reducing their rarity and public value <br/><br/><img class="" src="/images/2022/schedule-journal2.png" />


## Posting

Posting to your journals is the most important interaction on FL. Most posts on FL are short breezy updates, but occasionally someone will publish a couple paragraphs. You're also able to publish private posts in a public journal.

<p>
  <video autoplay loop muted playsinline class="">
    <source src="/images/2022/new-post-privacy.mp4">
  </video>
</p>

Building features out as responsive components allows this same interface and code to be reused in other contexts, like quick-posting from in the sidebar,

<img class="" src="/images/2022/new-post-dialog.png" />


## Interactions 'Assume Success' and Complete Immediately

Sometimes _feeling_ fast, is more important than actually being fast. This is especially the case when publishing a new post or comment. 

When publishing content on FL, you had to wait until the server successfully responded before you were allowed to do something else. Whether consciously or not, these sorts of penalties for interaction naturally discourage future interactions.

The work here was describing how to eliminate these delays using a principle I like to call `assume success`,

<img class="large no-shadow" src="/images/2022/embrace-success-space4.png" />

In the rare case that the server responds with an error, FL asynchronously notifies you of the issue and lets you handle it in your own time

<img class="" src="/images/2022/error-notification.png" />

I'm particularly happy with how this turned out IRL, Lucas did a great job implementing this.

## The Web App is the Best App

The sum of all these changes and others means that every feature of Futureland is now completely usable on Android and iOS. Having less platform specific code to maintain helps a small team do more with less – hopefully for years to come.

<p>
  <video autoplay loop muted playsinline class="">
    <source src="images/2022/fl-mobile-scroll.mp4">
  </video>
</p>

[Futureland.tv →](https://futureland.tv)