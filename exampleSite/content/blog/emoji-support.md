+++
authors = ["Hugo Authors"]
title = "Emoji Support"
date = "2022-01-01"
feature = ""
featureCaption = ""
tags = [
    "markdown",
    "css",
    "html",
    "emoji"
]
categories = [
    "themes",
    "hugo"
]
series = "Theme Guides"
+++

Emoji can be enabled in a Hugo project in a number of ways.

<!--more-->

The [`emojify`](https://gohugo.io/functions/emojify/) function can be called directly in templates or [Inline Shortcodes](https://gohugo.io/templates/shortcode-templates/#inline-shortcodes).

To enable emoji globally, set `enableEmoji` to `true` in your site’s [configuration](https://gohugo.io/getting-started/configuration/) and then you can type emoji shorthand codes directly in content files; e.g.

```markdown
{?:}see_no_evil:

{?:}hear_no_evil:

{?:}speak_no_evil:
```

:see_no_evil:

:hear_no_evil:

:speak_no_evil:


The [Emoji cheat sheet](http://www.emoji-cheat-sheet.com/) is a useful reference for emoji shorthand codes.

***

**N.B.** The above steps enable Unicode Standard emoji characters and sequences in Hugo, however the rendering of these glyphs depends on the browser and the platform. To style the emoji you can either use a third party emoji font or a font stack; e.g.

{{< highlight css >}}
.emoji {
    font-family: Apple Color Emoji,Segoe UI Emoji,NotoColorEmoji,Segoe UI Symbol,Android Emoji,EmojiSymbols;
}
{{< /highlight >}}
