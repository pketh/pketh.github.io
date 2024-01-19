---
layout: post
title:  "The Building Blocks of Offline Support"
image: "/images/2024/offline/ss1.png"
tags: engineering
---


The latest release of Kinopio lets you work offline while in a subway, plane, or uncharted rainforest. When you come back online, your changes will be synced back up. And because the app no longer needs to wait for a network before loading, it starts up a lot faster too.

<p>
  <video autoplay loop muted playsinline class="">
    <source src="/images/2024/offline/offline2.mp4">
  </video>
</p>
<figure>
  <figcaption>
    🛫 Editing the Kinopio roadmap in airplane mode
  </figcaption>
</figure>

Full offline support was the byproduct of building for speed and immediacy. From a multi-storage loading process, to a queue system to save grouped changes, and a UI status system to inform and reassure users – many separate systems come together to enable an experience that responds fast and works everywhere.

<blockquote>
  <p>
    <img src="http://pketh.org/images/2020/porco-rosso-engine.jpg">
    If you're curious, the overall architecture of Kinopio is described in
    <a href="http://pketh.org/how-kinopio-is-made.html">How Kinopio is Made</a>
  </p>
</blockquote>

# Multi-Storage Loading for Speed and Truth

While running Kinopio, if you peek inside the `Storage` tab in your web inspector, you'll see that each of your spaces is locally cached under a `space-ID` key with a stringified JSON value containing cards and other attributes that gets updated as you work.

This local-first approach is what enables new users to immediately start using the app without an account – because the best way to learn how to use Kinopio is by using Kinopio.

The `kinopio-server` enables editing your spaces on other devices, sharing public spaces, and real-time collaboration. In scenarios like these, the remote data on the server acts as the source of truth. But reading/writing remote data from servers is much slower than cached local data.

When loading a space, we can use both local and remote data together to get the best of both worlds, local speed and remote truth. The process goes something like this:

<p>
  <video autoplay loop muted playsinline class="no-shadow">
    <source src="/images/2024/offline/d1.mp4">
  </video>
</p>

A helpful side-effect of this loading system is that when you're offline, you'll still be able to open your cached local spaces.

# Grouped Updates Through an Operations Queue

In most apps there's a 1:1 relationship between user actions and server routes. In a social media app when I write something and hit the `Post` button, my post is then saved to a server so that others can read it.

But in the case of Kinopio, items like cards and boxes which need to show updates in real-time as you interact with them, this means a new update on each keystroke when you type in them, and on each rendering frame while being dragged. But of course you can also paint-select multiple cards and move them around together, so potentially that's >100s of updates a second.

<p>
  <video autoplay loop muted playsinline class="">
    <source src="/images/2024/offline/box-select-collaborative.mp4">
  </video>
</p>
<figure>
  <figcaption>
    The x, y, width, height of the selection box is being broadcasted to collaborators in real-time
  </figcaption>
</figure>

If I was sending server requests for each update, even regular use would bang against the rate limit that exists to prevent the server from crashing.

Instead, all updates flow through centralized update methods which update: the local cache, app state, real-time broadcast stream, undo/redo history, and adds the update to the API operations queue so that multiple updates can be grouped together and sent to the server in a single request.

<p>
  <video autoplay loop muted playsinline class="large no-shadow">
    <source src="/images/2024/offline/d2.mp4">
  </video>
</p>

Especially worth noting is that operations currently in the queue are saved in localStorage, so if they fail the queue can be resumed later when connectivity improves.

# Bringing It All Together with a UI Status System

Once you have systems that are local-first and resilient to connectivity issues, the actual loading the app offline part almost writes itself.

For offline loading, the [vita-PWA](https://vite-pwa-org.netlify.app) build plugin generates a PWA manifest and service worker that instructs the browser to cache the app and its asset files locally. And when new releases are shipped, the browser updates its cache to the new version.

The last thing needed is to do is inform the user that Kinopio works offline and reassure them that their changes will be sync-ed up once they're back online.

<img src="/images/2024/offline/ss1.png" class="">
<figure>
  <figcaption>
    Offline status button and dialog
  </figcaption>
</figure>

While offline, it might surprise users to learn that certain features aren't available offline because they depend on the server, like global search. Those features display a little clickable `offline` info badge. Other features are more obviously not usable offline, like social or discovery feeds, which can just be hidden.


<img src="/images/2024/offline/ss2.png" class="">
<figure>
  <figcaption>
    Clicking the badge opens the Offline dialog
  </figcaption>
</figure>

Essentially, I went through every dialog and button and decided whether I could either make it work offline, show an `offline` badge, or whether to hide it entirely.

# Offline Is the New Luxury?

While using Kinopio offline to test features and write this post, I realized that working this way is a really nice way to concentrate even on my desktop computer.

I've never heard a productivity influencer say "hey just go offline sometimes", but the offline web is here, it's speedy, it's the original focus mode.

<img src="/images/2024/offline/frog.webp" class="">
<figure>
  <figcaption>
    <a href="https://www.are.na/block/10001580">(source)</a>
  </figcaption>
</figure>
