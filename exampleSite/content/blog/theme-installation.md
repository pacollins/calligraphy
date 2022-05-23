+++
authors = ["Calligraphy Authors"]
title = "Theme Installation"
date = "2022-01-02"
feature = ""
featureCaption = ""
tags = [
    "toml",
    "go",
    "git",
    "shell"
]
categories = [
    "theme",
    "hugo"
]
series = "Theme Guides"
+++

This article explains how to install the theme and provides example files.

<!--more-->

## Getting Started

There are two different methods to install the theme depending on how you plan on using it.

### 1. Clone Repository

> I want to use this theme and might want to contribute to it.

Navigate to the root directory of your site and do the following:

```shell
git clone https://github.com/pacollins/calligraphy.git themes/calligraphy
```

### 2. Submodule

> I want to use this theme, but I have no plans to contribute or make a pull request.

Navigate to the root directory of your site and do the following:

```shell
git submodule add https://github.com/pacollins/calligraphy.git themes/calligraphy
git submodule update --init --recursive
```

You should now be able to navigate to `themes/calligraphy` and see all of the theme files.

To update your site to the current version of the theme, navigate to the root directory and do the following:

```shell
git submodule update --remote --merge
```

## Modifying

If you need to customize any aspect of the theme for personal use, simply create a duplicate file at the root directory. *Note:* You do not need to edit the theme files to customize theme. Refer to the Hugo documentation related [lookup order](https://gohugo.io/templates/lookup-order/).

For example, if you wanted to change the template for the header (`<my-project>/themes/layouts/partials/site/header.html`) you would create a new file at `<my-project>/layouts/partials/site/header.html` and base it off of the theme file. Hugo will then use your file instead of the theme file. This is the proper way to adjust files for personal use so that you do not make your site incompatible with future versions of the theme.

## `exampleSite`

Within the `calligraphy` folder, you will find another folder called `exampleSite` This folder is what is used to build the [demo](https://hugo-calligraphy.netlify.app/) and should provide you with an example of how to structure your site files.

## Hugo's Built-In Server

To see a live version of your site locally, use the following command:

```shell
hugo server
```

Hugo will build your site and host a server locally. You can view this live at
[localhost:1313](http://localhost:1313).

## Sample `config.toml`

```toml
baseURL = "https://hugo-calligraphy.netlify.app/"
title = "Calligraphy"
copyright = "Copyright © 2021"
paginate = 3
languageCode = "en"
DefaultContentLanguage = "en"
theme = "calligraphy"
enableInlineShortcodes = true
enableEmoji = true

[params]
  tagline = "Elegant Writing"
  cdn = false

[params.meta]
  baseOGImage = "img/screenshot.jpg"
  faviconComplete = true
  faviconSVG = true
  faviconVersion = ""
  faviconMSColor = "#00aba9"
  faviconiOSColor = "#00aba9"

[[menu.main]]
  identifier = "about"
  name = "About"
  url = "/about/"
  weight = 10

[[menu.main]]
  identifier = "authors"
  name = "Authors"
  url = "/authors/"
  weight = 15

[[menu.main]]
  identifier = "series"
  name = "Series"
  url = "/series/"
  weight = 20

[[menu.main]]
  identifier = "tags"
  name = "Tags"
  url = "/tags/"
  weight = 25

[[menu.main]]
  identifier = "contact"
  name = "Contact"
  url = "/contact/"
  weight = 30

################################################################################
######       The block below has additional configuration settings.        #####
######         Users can edit, but for most it won't be necessary.         #####
################################################################################

[taxonomies]
  author = "authors"
  series = "series"
  category = "categories"
  tag = "tags"

[markup.goldmark.renderer]
  unsafe = true

[markup.goldmark.parser.attribute]
  block = true

[module.hugoVersion]
  extended = true
  min = "0.89.0"

[privacy.twitter]
  enableDNT = true

[privacy.vimeo]
  enableDNT = true

[privacy.youtube]
  privacyEnhanced = true

```

## Sample `default.md`

```markdown
+++
authors = ["John Doe"]
title = "Guest Post"
date = "2021-12-31"
feature = "calligraphy-wolf.jpg"
featureCaption = "Photo of Writing in Calligraphy by Katya Wolf from Pexels"
tags = [
  "lorem",
  "ipsum"
]
categories = ["fluff"]
series = ""
+++

Lorem est tota propiore conpellat pectoribus de
pectora summo. Redit teque digerit hominumque toris verebor lumina non cervice
subde tollit usus habet Arctonque, furores quas nec ferunt. Quoque montibus nunc
caluere tempus inhospita parcite confusaque translucet patri vestro qui optatis
lumine cognoscere flos nubis! Fronde ipsamque patulos Dryopen deorum.

1. Exierant elisi ambit vivere dedere
2. Duce pollice
3. Eris modo
4. Spargitque ferrea quos palude

Rursus nulli murmur; hastile inridet ut ab gravi sententia! Nomine potitus
silentia flumen, sustinet placuit petis in dilapsa erat sunt. Atria
tractus malis.

1. Comas hunc haec pietate fetum procerum dixit
2. Post torum vates letum Tiresia
3. Flumen querellas
4. Arcanaque montibus omnes
5. Quidem et

# Vagus elidunt

<svg class="canon" xmlns="http://www.w3.org/2000/svg" overflow="visible" viewBox="0 0 496 373" height="373" width="496"><g fill="none"><path stroke="#000" stroke-width=".75" d="M.599 372.348L495.263 1.206M.312.633l494.95 370.853M.312 372.633L247.643.92M248.502.92l246.76 370.566M330.828 123.869V1.134M330.396 1.134L165.104 124.515"></path><path stroke="#ED1C24" stroke-width=".75" d="M275.73 41.616h166.224v249.05H275.73zM54.478 41.616h166.225v249.052H54.478z"></path><path stroke="#000" stroke-width=".75" d="M.479.375h495v372h-495zM247.979.875v372"></path><ellipse cx="498.729" cy="177.625" rx=".75" ry="1.25"></ellipse><ellipse cx="247.229" cy="377.375" rx=".75" ry="1.25"></ellipse></g></svg>

[The Van de Graaf Canon](https://en.wikipedia.org/wiki/Canons_of_page_construction#Van_de_Graaf_canon)

## Mane refeci capiebant unda mulcebat

Victa caducifer, malo vulnere contra
dicere aurato, ludit regale, voca! Retorsit colit est profanae esse virescere
furit nec; iaculi matertera et visa est, viribus. Divesque creatis, tecta novat collumque vulnus est, parvas. **Faces illo pepulere** tempus adest. Tendit flamma, ab opes virum sustinet, sidus sequendo urbis.

Iubar proles corpore raptos vero auctor imperium; sed et huic: manus caeli
Lelegas tu lux. Verbis obstitit intus oblectamina fixis linguisque ausus sperare
Echionides cornuaque tenent clausit possit. Omnia putatur. Praeteritae refert
ausus; ferebant e primus lora nutat, vici quae mea ipse. Et iter nil spectatae
vulnus haerentia iuste et exercebat, sui et.

Eurytus Hector, materna ipsumque ut Politen, nec, nate, ignari, vernum cohaesit sequitur. Vel **mitis temploque** vocatus, inque alis, *oculos nomen* non silvis corpore coniunx ne displicet illa. Crescunt non unus, vidit visa quantum inmiti flumina mortis facto sic: undique a alios vincula sunt iactata abdita! Suspenderat ego fuit tendit: luna, ante urbem
Propoetides **parte**.
```

## Sample `authors.md`

```markdown
+++
title = "Calligraphy Authors"
photo = "calligraphy-authors.jpg"
assignment = "Editor in Chief"
+++

A theme for beautiful content creation.

Calligraphy is a theme by [Patrick A Collins](https://pacollins.com/) for [Hugo](https://gohugo.io/) static site generator. Inspired by its namesake, the theme aims to
provide a simple canvas that is elegant and ensures high readability for all
visitors.
```

## Sample `series.md`

```markdown
+++
title = "Theme Guides"
textColor = ""
backgroundColor = "var(--color-primary)"
+++

A series of guides to help demonstrate the capabilities of the theme.
```
