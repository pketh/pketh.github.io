---
layout: post
title:  "My Plans for Kinopio"
---

Over the last couple months, it's been super encouraging to hear from teachers, programmers, designers, and students about how they use Kinopio to map out and make sense of their ideas, feelings, and plans.

<figure>
  <img src="/images/2019/kinopio-cat.png" class="no-shadow">
  <figcaption>Probably a cat</figcaption>
</figure>

Right now I'm working on features to make it easier to share and collaborate with other people on those spaces. But I'm taking a little break to answer some  questions that really deserve public answers.

## How Will Kinopio Make Money?

My plan is to eventually require people to pay $4/month to create more than 100 or so cards. I want the pricing to feel simple, straightforward, and obvious. 

## What About User Data and Privacy?

I haven't written a legalese privacy policy yet. But either way, here's the commonsense human version. 

- Kinopio won't show you ads of any kind. 
- No cookies are used for anything. `LocalStorage` is used to save your info. Unlike cookies, other websites cannot access `localStorage`.
- To share spaces and collaborate, your user data and spaces will be hosted on AWS (via Heroku). Besides this necessity, your data will not be shared with any third party.
- The only analytics I use are from [Netlify](https://www.netlify.com/products/analytics/). Which does not allow me to uniquely identify anyone.
- Children, and anyone else, will always be able to use Kinopio anonymously and collaborate with others on public spaces.
- You can permanently [remove all](https://www.are.na/block/4788320) of your data anytime.

## What Happens to My Data if Kinopio Dies?

We don't live in a deterministic world. I could do everything right and still run out of money without being able to turn Kinopio into a healthy, sustainable business. If that happens, you won't lose any data and Kinopio will still be usable. 

Kinopio consists of two codebases, the `client` app that runs when you hit [kinopio.club](https://kinopio.club) and the `server` app which will enable sharing and collaboration. The client app is like a cockroach, it's tiny, free to host, and doesn't depend on a connection to the server app. So if I can't afford to run the kinopio server anymore, I can just switch it off and you can continue to use Kinopio as you do now – with all your data intact.

Besides all that, there's already a bunch of ways to export your data. Either as entire spaces, or just the specific cards you care about.

## So When Are You Going to Get a Real Job?

chill mom

🌱