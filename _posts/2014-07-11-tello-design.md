---
layout: post
title:  "Tello: Quick Entry for Trello"
---

If you haven't used it before, [Trello][trello] is a web-based tool to organize the things from life to project collaboration. We use it at work to track sprint backlogs, I use it at home as a project planner and todo list. It's pretty sweet, except for one thing...

You've got a brilliant idea for where to go on your next vacation. You've been choosing between destinations and planning your itinerary with your friend on a shared Trello board. Normally, you'd have to go to `trello.com`, open your vacation board, find the right list, click to add an item, and then type it out.

I started working on **Tello App** so that all you'd need to do is hit a keyboard shortcut, type [“Mykonos, Greece”][wiki-mykonos], and get back to your life. Small victories my friend.

<a href="/images/2014/tello-draft.svg">
<iframe class="large postsvg" width="633" height="290" src="/images/2014/tello-draft.svg"></iframe>
</a>

The design's still pretty early (I'd love your [feedback][twitter]), but I've already started scaffolding out the app. Native development is new to me though and Tello has a little bit of everything – communicating with a server API, parsing JSON, token security, saving data to coredata, and drawing some views.

I'm enjoying Swift, but not so much Cocoa. So far, this stack of seemingly simple things is being made complex by edge cases and inexperience. But I guess that's how it always is.

<img class="no-shadow" src="/images/2014/tello-icon-draft.png" width="20" height="15">

[trello]:http://www.trello.com
[things]:http://culturedcode.com/things/
[omnifocus]:https://www.omnigroup.com/omnifocus
[wiki-mykonos]:http://en.wikipedia.org/wiki/Mykonos
[twitter]:https://twitter.com/pketh
