---
layout: post
title:  "How Kinopio is Made"
image: "/images/2020/porco-rosso-engine.jpg"
tags: kinopio engineering
hackernews: "https://news.ycombinator.com/item?id=25082650"
---

You've probably heard, or lived, a story that goes like this…

> I'm tired of [technology](/why-software-is-slow-and-shitty.html). I'm leaving to do something _real_ like sculpt clay, work wood, herd sheep, and grow vegetables.

But making software that runs fast, efficiently, and reliably is it's own kind of  craft, tangible in its own way. But, to do any kind of craft you have to understand the materials of your medium, how they bend, and how to work together.

Making an aircraft engine requires an understanding of the tolerances and capabilities of different metals, airflow and combustion. Not that I know anything about all that – our engine is made of state, localStorage, API, and websockets.

<img src="/images/2020/porco-rosso-engine.jpg" class="large">
<figure>
  <figcaption>
    Porco Rosso
  </figcaption>
</figure>


# But First, the Two Kinopio Apps

- `kinopio-client` is a Vue.js app that weighs 150 KB. When you go to [https://kinopio.club](https://kinopio.club), it's downloaded and run in your browser. This is the only part of Kinopio you use if you don't have an account.
- `kinopio-server` is a Node.js app that runs on a server out in the world. If you're signed in, it saves your data to a database so that you can share, collaborate, and access your spaces on other devices.

<img src="/images/2020/architecture.png" class="large no-shadow">
<figure>
  <figcaption>
<a href="https://kinopio.club/kinopio-architecture-and-costs-JOGXFJ0FEMpS3crbh6U9k">Kinopio Architecture and Costs</a> shows the complete system
  </figcaption>
</figure>


# Kinopio Engineering Principles

<img src="/images/2020/desktop-computer.gif" class="no-shadow desktop-computer-icon">

- Speed first, perfect later. You shouldn't need to wait for server requests to complete before editing your spaces. Because [fast software is the best software](https://craigmod.com/essays/fast_software/).
- Favor easy maintenance. To help you sleep at night choose open technologies that are widely supported and well documented.
- Building a foundation for decades. This mindset encourages me to write small, simple code that is easy to re-read in the future. If I'm adding a third-party library to Kinopio, that's now a commitment over years so I'm motivated to really know what I'm adding – and maybe write it myself instead if that's the smaller and faster option.


# The Four Elemental Web Technologies

## State

**State** is your current space and user data, which informs the display of elements on the page. E.g. my `user.name = 'Pirijan'` and my `user.color = 'cyan'`. Kinopio uses Vue.js/Vuex to bind data to elements on the page. So when you change your `user.color`, everything that references that user's color updates.

<p>
	<video autoplay controls loop muted playsinline class="" width="420" height="232">
		<source src="/images/2020/edit-user-state.mp4">
	</video>
</p>
<figure>
  <figcaption>
Data-binding makes apps feel alive and organic
  </figcaption>
</figure>

State is not persistent though, unless it's saved somewhere it'll be lost the next time you refresh.

## LocalStorage

> Update: I later switched from `LocalStorage` to `IndexedDB` to improve performance and storage size. That said, I'm still using IndexedDB as a key-value storage system, via [idb-keyval](https://github.com/jakearchibald/idb-keyval).

**LocalStorage** is 2-5 MBs of key-value data that every website gets to save on your device. Unlike cookies, localStorage data can only be accessed by the URL that created it which means it's secure and can't be used for user tracking and other shady shit.

Here's a secret, by stringifying JSON objects you can save any kind of data structure to it. LocalStorage is fragile though, you can accidentally wipe it out by clearing your browser cache.

## API and Database

The Kinopio **API** is used to `GET` and `POST`(save) data to the database so that you can edit your spaces on other devices. Getting data from servers is much slower than getting data from your localStorage, because of the round-trip and because every request needs to be privacy authorized.

<img src="/images/2020/api-docs.png" class="">
<figure>
  <figcaption>
<a href="https://help.kinopio.club/api">Kinopio API Docs</a> are  also public so that developers can make custom integrations and tools
  </figcaption>
</figure>

## Websockets

**Websockets** create that magical collaboration feeling by enabling a real-time stream of messages to be sent and received by a client, e.g. `Pirijan moved cardId ABC123 to position {x: 100, y: 200}`. These messages are relayed by the server to collaborators whose space state is updated. e.g. updating the position of the card.

Websocket connections must be actively kept alive with a 'heartbeat' exchange. If you go afk for a while, like to make a coffee or something, reconnecting to the stream takes a couple seconds.


# Putting it All Together

<img src="/images/2020/assembly.png" class="large no-shadow">
<figure>
  <figcaption>
<a href="https://www.are.na/block/3753956">(Source)</a>
  </figcaption>
</figure>

| **Technology** 	| **Speed** 	| **Persistent** 	| **Uses Server** |
| State 		| Instant 	| No 			| No |
| LocalStorage 		| Instant 	| Yes 			| No |
| API and Database 	| Slow 		| Yes 			| Yes |
| Websockets 		| Fast, slow to connect | No 		| Yes |

When you load Kinopio for the first time, your state is created and saved to localStorage so it can be restored. When you update your state by editing cards or connections, localStorage is also updated. Once you sign up, updates also save to the API.

Once you start using Kinopio on other devices, the localStorage on your phone might be ahead of the one on your computer.

To be fast, Kinopio first restores state from possibly outdated localStorage. Once the latest server data is downloaded, the state is re-restored.



While the space is downloading from the server, edits you make are saved and then applied on top of the server copy.

<img src="/images/2020/loading-space.png" class="no-shadow">
<figure>
  <figcaption>
  Edits you make to your space while the server data is downloading are recorded and applied to it
  </figcaption>
</figure>

Websockets only stream relayed updates to connected collaborators and spectators. You might be wondering, why don't you just update the database with websockets instead of relatively slow API requests?

The problem with saving data with websockets is that they're *too* fast. Authenticating that many messages per second and writing them to disk would be really inefficient. E.g. If you're moving a card from position `x: 20` to `x: 420`, Kinopio will use websockets to broadcast many updates during the move: `moving card x to 21`, `moving card x to 24`, `moving card x to 28`… potentially hundreds of messages. Or you could send a single API request after you've moved the card, `PATCH card.x = 420`.

<img src="/images/2020/cappuccino.png" class="no-shadow">

Building fast, easy to maintain software that'll hopefully last for decades means understanding and using the right technology for the right job. It's its own kind of craft, in its own kind of way.
