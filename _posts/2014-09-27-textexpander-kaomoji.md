---
layout: post
title:  "TextExpander all the Kaomoji"
---

As trivial as it sounds, one of my favorite secret things in OS X is the quick emoji picker. In any text editor, <span alt="command+control+space">`⌘⌃space`</span> will bring it up.

<img src="/images/2014/editor-emoji.png" width="378" height="296">

What makes it nicer than the iOS version, is that you can simply type to filter. It's so convenient, you'll be slinging email like a teen girl in no time! 🌺

But what about the humble [kaomoji][kaomoji-post]? On iOS, the only custom keyboard I really want is the upcoming [Kaomoji Keyboard][kaomoji-keyboard], but there's no equivalent on the mac.

## ＼(°o°；）

Thankfully there's [TextExpander][textexpander]. 

Instead of doing something productive, I created TextExpander snippets that allow me to insert kaomoji without having to copy paste them from [elsewhere][kmcat]. So typing `kmhappy` or `kmconfuse` in any editor brings up a fill-in popup menu with matching kaomoji to choose from.

Here's the snippets:

<div class="textexpander-kaomoji small-code">
{% highlight erb %}
kmhappy:
%fillpopup:default=( ´ ▽ ` )ﾉ:＼（＾ ＾）／ :ヽ(*⌒∇⌒*)ﾉ:(ノ*゜▽゜*) :ヽ(^。^)丿 :(◑‿◐):ლ(╹◡╹ლ):(ღ˘⌣˘ღ) ♫･*-.｡. .｡.-*･:(∩▂∩):ʘ‿ʘ%

kmaction:
%fillpopup:default=(╯°□°）╯︵ ┻━┻ :┬──┬◡ﾉ(° -°ﾉ) :(*・_・)ノ⌒*:八(＾□＾*):Ｏ( ｀_´)乂(｀_´ )Ｏ:ヽ(^o^)ρ┳┻┳°σ(^o^)/ :(／_^)／ 　　　●　＼(^_＼) :＝( ^o^)ノ ．．．…___ｏ:(☞ﾟ∀ﾟ)☞%

kmsorry:
%fillpopup:m(._.)m:（ﾉ´д｀）:default=(シ_ _)シ :＜(。_。)＞ :m(￢0￢)m%

kmhello:
%fillpopup:ヾ(＾∇＾):default=(^o^)/:☆ﾐ(o*･ω･)ﾉ:ヾ(＠⌒ー⌒＠)ノ:＼(°o°；）:ヽ(๏∀๏ )ﾉ%

kmsurprise:
%fillpopup:∑(O_O；):((((；゜Д゜))):default=(」゜ロ゜)」:(ﾉﾟ0ﾟ)ﾉ~:w(°ｏ°)w:L(・o・)」%

kmwork:
%fillpopup:default=___ψ(‥ ):φ(◎◎ヘ):＿φ( °-°)/:＿φ(°-°=) :＿〆(。。) %

kmconfuse:
%fillpopup:ヽ(゜Q。)ノ？:(◎_◎;):default=( ・◇・)？:٩(͡๏̯͡๏)۶:(⊙_◎)%

kmlike:
%fillpopup:（〃・・〃）:(o⌒．⌒o) :(｡♥‿♥｡):(´ ▽｀).。ｏ♡%

{% endhighlight %}
</div>

It's obviously not ideal, but it'll do the job when you're in the zone and just gotta have the perfect kaomoji. Because that's a thing that happens.

## ＿φ( °-°)/

[kaomoji-post]:/2014/01/28/kaomojis.md.html
[kaomoji-keyboard]:http://getkaomoji.com
[textexpander]:http://smilesoftware.com/TextExpander/index.html
[kmcat]:http://kaomojicat.com












