---
layout: post
title:  "The Hybrid Architecture of Kinopio for iOS"
image: "https://updates.kinopio.club/ios-app-title.jpg"
tags: kinopio engineering
hackernews: https://news.ycombinator.com/item?id=37404820
---

<p>
<video class="wide" autoplay loop muted playsinline>
  <source src="https://updates.kinopio.club/ios-app-demo2.mp4">
</video>
<figure>
  <figcaption>Using Kinopio iOS running on my scratched up iPhone 12 mini</figcaption>
</figure>

</p>

A couple months ago I was in Bali, Indonesia for a wedding and had lunch with [Lucas](https://lucas.love/), the developer of [Futureland](https://futureland.tv) where I did some [contract work](https://pketh.org/redesigning-an-app.html) last year. He asked me when the Kinopio iOS app was coming so I shared my apprehension about having to spend months on app development only for it to be rejected by app store review at the last minute.

Having gone through a [similar rejection situation](https://mjtsai.com/blog/2023/02/28/pagi-rejected-from-the-app-store/) with his own app, [Pagi](https://lucas.love/projects/pagi), and having built the Futureland iOS app, he felt pretty confident that he could do Kinopio iOS. So when I got back home, we started [planning things out in a space](https://kinopio.club/-kinopio-ios-app-UXhzC0bAMBgCC_RB14LdR),

<img src="https://updates.kinopio.club/ios-app-initial-planning-space.png" class="no-shadow large">

We decided what the app should do and how it should work, with the goal of keeping scope low and maintainability high for this first version. After we'd settled all the hard questions of what we were building in the space, I summarized the conclusions into a Notion doc and we got to work.

Fortunately, because Kinopio was designed to be touch friendly from the beginning it already worked well on mobile Safari. So the plan was to adopt a [hybrid architecture](https://m.signalvnoise.com/basecamp-3-for-ios-hybrid-architecture/) where the native app would be a container for a `WKWebView` where the Kinopio website would live. 

<p>
<video class=" large" autoplay loop muted playsinline>
  <source src="https://updates.kinopio.club/ios-app-architecture2.mp4">
</video>
</p>

To enable the native app to send messages to the webview (and vice-versa) we built a bridge between the two worlds using plain old [postMessages](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage). So the Kinopio webview can say something like `postMessage.send({ name: 'updateBackgroundColor', body })` and the native app can take action and send messages back to the webview in a similar way.

This postMessage bridge allows for native-only features like haptic feedback when touching content, as well as syncing the pixels above the webview with the dynamic background color behind the webpage:

<p>
<video class="wide" autoplay loop muted playsinline>
  <source src="https://updates.kinopio.club/ios-app-header.mp4">
</video>
</p>
<figure>
  <figcaption> The background color of the app slowly cycles between different shades. This video is sped up by over 70x </figcaption>
</figure>

We also added share sheets and widgets to quickly capture new thoughts and URLs. In the spirit of simplicity, the share sheet also uses the same [kinopio.club/add](https://kinopio.club/add) page that the [browser extensions](https://help.kinopio.club/posts/extensions/) use.

![](https://updates.kinopio.club/ios-widgets.png)

Regardless of platform, part of this whole programming-as-craft thing for me is getting the most out of doing the least. Which usually means using basic technologies that are easy to understand, debug, and maintain.

Anyways, 7 annoying app store rejections later (which I'll skip talking about here for the sake of my mental health), I'm happy to be able to tell you that Kinopio iOS is now live 🎊.

I hope using it feels like an extension of your hand and mind, like it already does for me. Swipe-to-scroll and pinch-to-zoom, press and hold to paint-select and drag cards around.

[Download Kinopio iOS on the App Store](https://apps.apple.com/us/app/kinopio/id6448743101)

![](https://updates.kinopio.club/ios-app-iphone-photo.jpg)

