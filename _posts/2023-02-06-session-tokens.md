---
layout: post
title:  "Securing Sign Ups, Without Being Annoying"
image: "/images/2023/olympia-poster.jpeg"
tags: engineering
---

Normally I don't write much about server and security issues. I'm certainly no expert. But if I can prevent the birth of even a single [captcha](https://axesslab.com/captchas-suck/), then I'll sleep well tonight.

Every website you can sign up for eventually will need to ask themselves the question,

> how do you prevent a malicious person from running a script 100s of times a second that acts like a sign up form submission to spam or DDOS your service?

<img class="large" src="/images/2023/olympia-poster.jpeg"/>
<figure>
  <figcaption>
    <a href="https://www.are.na/block/20182716">(source)</a></figcaption>
</figure>

At the very minimum your server should be rate limiting requests from the same IP address. But because IPs can be faked, additional protection is needed.

The different solutions to this puzzle each strike a different balance between security and convenience:

- `Captchas`: use these if you hate your users
- `Sign-in with Facebook/Google/etc.`: causes [support issues](https://www.are.na/block/5503653), ties critical infrastructure to untrustworthy megacorps
- `User must verify their email before account is created`: not too bad, but having to open email is noticeable friction – especially if you have other unread messages yearning for your attention

I was looking more user-friendly alternatives to these systems when I came across the idea of `temporary tokens` on the [W3C wiki](https://www.w3.org/WAI/GL/wiki/Captcha_Alternatives_and_thoughts),

> Assign a temporary token to the users at the start of their sessions. The token will be associated with the submitted form. When the session is terminated, the token expires.

Color me intrigued.

# Putting Yourself In a Hacker's Shoes

As intimidating as the term is, cybersecurity can be a fun mental exercise. While I build server routes, controllers, etc. a little voice in the back of mind asks “If I knew these api endpoints, how could I exploit them?”

So let's take a step back to the original scenario to create some assumptions:

- To make 100s of accounts a second, you'll most likely be running a script from the command line.
- There's a relationship between benefit and effort. The less moral or financial incentive there is to break a service, the less effort you want to spend customizing your script.

# Validating Sign Up with Session Tokens

Based on our assumption, a weak point of scripted sign ups is that the script isn't running on the page itself. So instead of proving humanity (i.e. solve this puzzle), we really only need to prove presence (i.e. were you here? did you sign up on this website?).

<img class="small" src="/images/2023/keys.jpeg"/>

Here's how we can do that using temporary tokens:

- When you load Kinopio and open the sign up form, a randomly generated session token is created by the client and saved to the server database.
- When you submit the sign up form, the session token is included and the server first checks to see if that session token exists. If it does, then the token is removed from the database, and the sign up process continues. If it doesn't, than the server responds with an error instead.
- Periodically, old unused tokens are purged from the database

This is definitely more towards the convenience end of the security spectrum, but no single solution here is perfect and the advantage of session tokens is that they can stack nicely on top of other measures down the line if needed.

