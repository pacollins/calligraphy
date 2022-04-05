+++
authors = ["Calligraphy Authors", "Hugo Authors"]
title = "Style Guide"
date = "2022-01-03"
feature = "inkwell-roma.jpg"
featureCaption = "Photo of an Inkwell by Angela Roma from Pexels"
tags = [
    "markdown",
    "css",
    "html",
    "styles"
]
categories = [
    "theme",
    "syntax"
]
series = "Theme Guides"
+++

This article showcases what Markdown syntax can be utilized in Hugo content files, as well as what the output will look like with the Calligraphy theme.

<!--more-->

## Headings

Use `#` to notate which heading level to use.

```markdown
# H1
## H2
### H3
#### H4
##### H5
```

# H1 {.js-toc-ignore}
## H2 {.js-toc-ignore}
### H3 {.js-toc-ignore}
#### H4 {.js-toc-ignore}
##### H5 {.js-toc-ignore}

## Horizontal Rule

Use either `---`, `***`, or `___` to notate a horizontal rule.

```markdown
Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum,
voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma
dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as
cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin
porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur?

---

Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit
ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda
veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost,
temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.
```

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum,
voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma
dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as
cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin
porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur?

---

Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit
ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda
veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost,
temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

## Text-Level Semantics

The main text-level semantic elements have Markdown notation (see below), and traditional HTML tags can be utilized for the rest.

```markdown
This is **strong** text.

This is [**strong**](#text-level-semantics) text as a link.

This is *emphasized* text.

This is [*emphasized*](#text-level-semantics) text as a link.

This is `code` text.

This is [`code`](#text-level-semantics) text as a link.

This is [link](#text-level-semantics) text.

This is <mark>marked</mark> text.

This is <small>small</small> text.

This is <del>deleted</del> text.

This is <ins>inserted</ins> text.

This is <sub>sub</sub>script text.

This is <sup>super</sup>script text.

This is <abbr title="abbreviated">abbr</abbr> text.

This is a key bind. <kbd>ALT</kbd>+<kbd>F4</kbd>
```

This is **strong** text.

This is [**strong**](#text-level-semantics) text as a link.

This is *emphasized* text.

This is [*emphasized*](#text-level-semantics) text as a link.

This is `code` text.

This is [`code`](#text-level-semantics) text as a link.

This is [link](#text-level-semantics) text.

This is <mark>marked</mark> text.

This is <small>small</small> text.

This is <del>deleted</del> text.

This is <ins>inserted</ins> text.

This is <sub>sub</sub>script text.

This is <sup>super</sup>script text.

This is <abbr title="abbreviated">abbr</abbr> text.

This is a key bind. <kbd>ALT</kbd>+<kbd>F4</kbd>

## Lists

### Ordered

Use numbers followed by `.` or `)` to notate an ordered list. Ordered lists can start at any number, which allows them to continue even when separated.

*Special Note:* Even if you have a mistake in your numbering, your list will continue to count up by 1 each time.

```markdown
1. First item
2. Second item
3. Third item

Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur?

4. Fourth item on continued list
4. Fifth Item with incorrect numbering
4. Sixth Item with incorrect numbering
```

1. First item
2. Second item
3. Third item

Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur?

4. Fourth item on continued list
4. Fifth Item with incorrect numbering
4. Sixth Item with incorrect numbering

### Unordered

Use either `-` or `*` to notate an unordered list.

```markdown
- List item with a hyphen
- Another item with a hyphen

* List item with an asterisk
* Another item with an asterisk
* and another item with an asterisk
```

- List item with a hyphen
- Another item with a hyphen

* List item with an asterisk
* Another item with an asterisk
* and another item with an asterisk

### Multilevel

Use four spaces to notate the hierarchy and create a multilevel list. List types can be mixed.

```markdown
1. Goal 1
    * Task 1
    * Task 2
    * Task 3
2. Goal 2
    * Task 1
    * Task 2
        * Subtask 1
```

1. Goal 1
    * Task 1
    * Task 2
    * Task 3
2. Goal 2
    * Task 1
    * Task 2
        * Subtask 1

### Definition

Place the term on its own line, and then use `:` on the next line followed by the definition to create a definition list.

```markdown
Single Term
: This is the definition of the term.

---

First Term
: This is the definition of the first term.

Second Term
: This is one definition of the second term.
: This is another definition of the second term.
```

Single Term
: This is the definition of the term.

---

First Term
: This is the definition of the first term.

Second Term
: This is one definition of the second term.
: This is another definition of the second term.


## Blockquote

Use `>` to notate a blockquote. Add additional `>` to new lines preserve line breaks and continue the blockquote. Add the `cite` tag to add attribution to the quote.

```markdown
>To all who come to this happy place; welcome. Disneyland is your land. Here age
relives fond memories of the past… and here youth may savor the challenge and
promise of the future. Disneyland is dedicated to the ideals, the dreams and the
hard facts that have created America… with the hope that it will be a source of
joy and inspiration to all the world.

> Why worry?
>
> If you’ve done the very best you can, worrying won’t make it any
better.
<cite>Walt Disney</cite>
```

>To all who come to this happy place; welcome. Disneyland is your land. Here age
relives fond memories of the past… and here youth may savor the challenge and
promise of the future. Disneyland is dedicated to the ideals, the dreams and the
hard facts that have created America… with the hope that it will be a source of
joy and inspiration to all the world.

> Why worry?
>
> If you’ve done the very best you can, worrying won’t make it any
better.
<cite>Walt Disney</cite>

## Details Disclosure

Use the `details` and `summary` tags to hide content within a dropdown box.

```markdown
<details>
	<summary>[Spoilers] Movie Synopsis</summary>
  Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit
  ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda
  veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost,
  temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.
</details>
```

<details>
	<summary>[Spoilers] Movie Synopsis</summary>
  Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit
  ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda
  veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost,
  temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.
</details>

## Preformatted

### Text

Use four spaces before each line to create a preformatted text block.

```markdown
    as short

    Broken!
      dreams
      are made for
      streets.

        A surprise . . .
         shared
        with your friends!
                          Lost,
        probably
         Dark!
    First, your own.

                                      — Stan Burriss
```

    as short

    Broken!
      dreams
      are made for
      streets.

        A surprise . . .
         shared
        with your friends!
                          Lost,
        probably
         Dark!
    First, your own.

                                      — Stan Burriss

### Code

Use <code>```</code> on either side of code block to notate it. Add the language directly after the first set to enable syntax highlighting

````markdown
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
```
````

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
```

## Table

Tables in Markdown can take a while to get used to. It is recommended to find a Markdown table generator online and use it until you get the hang of the more complex notation.

```markdown
| Bill       | January | February | March | April |  May |
|------------|:-------:|:--------:|:-----:|:-----:|:----:|
| Eletricity |     $92 |      $88 |   $97 |  $102 | $108 |
| Water      |     $60 |      $88 |   $73 |   $70 |  $74 |
| Groceries  |    $250 |     $284 |  $228 |  $334 | $305 |
```

| Bill       | January | February | March | April |  May |
|------------|:-------:|:--------:|:-----:|:-----:|:----:|
| Eletricity |     $92 |      $88 |   $97 |  $102 | $108 |
| Water      |     $60 |      $88 |   $73 |   $70 |  $74 |
| Groceries  |    $250 |     $284 |  $228 |  $334 | $305 |
{tabindex="0"}

### Variable Width

Tables that overflow the content container will maintain their formatting and provide a scrollbar for navigation.

```markdown
|    Bill    | January | February | March | April |  May | June | July | August | September | October | November | December |
|------------|--------:|---------:|------:|------:|-----:|-----:|-----:|-------:|----------:|--------:|---------:|---------:|
| Eletricity |     $92 |      $88 |   $97 |  $102 | $108 | $112 | $140 | $135   | $124      | $110    | $108     | $98      |
|    Water   |     $60 |      $88 |   $73 |   $70 |  $74 | $76  | $72  | $80    | $85       | $76     | $68      | $72      |
|  Groceries |    $250 |     $284 |  $228 |  $334 | $305 | $320 | $280 | $287   | $400      | $178    | $182     | $284     |
```

|    Bill    | January | February | March | April |  May | June | July | August | September | October | November | December |
|------------|--------:|---------:|------:|------:|-----:|-----:|-----:|-------:|----------:|--------:|---------:|---------:|
| Eletricity |     $92 |      $88 |   $97 |  $102 | $108 | $112 | $140 | $135   | $124      | $110    | $108     | $98      |
|    Water   |     $60 |      $88 |   $73 |   $70 |  $74 | $76  | $72  | $80    | $85       | $76     | $68      | $72      |
|  Groceries |    $250 |     $284 |  $228 |  $334 | $305 | $320 | $280 | $287   | $400      | $178    | $182     | $284     |
{tabindex="0"}

### Fixed Width

For tables that are better served by fitting the width of the container and wrapping text, add `{.white-space-normal}` after the Markdown notation. This is possible because the theme has [custom attribute support](https://gohugo.io/getting-started/configuration-markup#goldmark) enable.

*Special Note:* The Markdown table notation doesn't have to look pretty to work.

```markdown
| You Say... | You Could Say... | Why? |
|---|---|---|
| Good job! | I can really see your effort in revision. | Praising effort and process encourages writers to keep trying. (Dweck) |
| You're a good writer! | Those drafts paid off in sentence variety and imagery. | Encouraging growth instead of fixed mindset makes for happier people in charge of their progress. (Dweck) |
| You don't know how to use semicolons. | You haven't mastered semicolons **yet**. | The power of **yet** suggests growth and mastery. (Dweck and Pink) |
{.white-space-normal}
```

| You Say... | You Could Say... | Why? |
|---|---|---|
| Good job! | I can really see your effort in revision. | Praising effort and process encourages writers to keep trying. (Dweck) |
| You're a good writer! | Those drafts paid off in sentence variety and imagery. | Encouraging growth instead of fixed mindset makes for happier people in charge of their progress. (Dweck) |
| You don't know how to use semicolons. | You haven't mastered semicolons **yet**. | The power of **yet** suggests growth and mastery. (Dweck and Pink) |
{.white-space-normal}

## Media Elements

### Image

Wrap the caption/alternative text in `![` and `]`, followed by the path in `(` and `)`. Files can hosted remotely or locally. For locally hosted images, the theme takes advantage of [page bundles](https://gohugo.io/content-management/page-bundles/) to process each image to reduce its file size and fit the container. The resulting thumbnail provides a link back to the full resolution image.

```markdown
![Photo of an Inkwell by Angela Roma from Pexels](inkwell-roma.jpg)
```

![Photo of an Inkwell by Angela Roma from Pexels](inkwell-roma.jpg)

### Audio

The Calligraphy theme has extended the Markdown notation for images to also allow for the processing of `.mp3` and `.wav` file types.

```markdown
![Jazz Music by Benjamin Tissot](allthat-tissot.mp3)
```

![Jazz Music by Benjamin Tissot](allthat-tissot.mp3)

### Video

The Calligraphy theme has extended the Markdown notation for images to also allow for the processing of `.mp4` and `.webm` file types.

```markdown
![Video of someone writing in calligraphy by Vlada Karpovich from Pexels](writing-karpovich.mp4)
```

![Video of someone writing in calligraphy by Vlada Karpovich from Pexels](writing-karpovich.mp4)

## Form Elements

Use traditional HTML tags to create form elements. Form elements and their labels can either be stacked by adding `class="stacked"` or on the same line by adding `class="inline"` to the wrapping `label` tag.

### Text Box

```markdown
<label class="stacked">
  Text Box
  <input type="text">
</label>
<label class="inline">
  Text Box (Disabled)
  <input type="text" disabled>
</label>
```

<label class="stacked">
  Text Box
  <input type="text">
</label>
<label class="inline">
  Text Box (Disabled)
  <input type="text" disabled>
</label>

### Select Box

```markdown
<label class="stacked">
  Select Box
  <select>
    <option>Option 1</option>
    <option>Option 2</option>
    <option disabled>Option (Disabled)</option>
  </select>
</label>
<label class="inline">
  Select Box (Disabled)
  <select disabled>
    <option>Disabled</option>
  </select>
</label>
```

<label class="stacked">
  Select Box
  <select>
    <option>Option 1</option>
    <option>Option 2</option>
    <option disabled>Option (Disabled)</option>
  </select>
</label>
<label class="inline">
  Select Box (Disabled)
  <select disabled>
    <option>Disabled</option>
  </select>
</label>

### Text Area

```markdown
<label class="stacked">
  Text Area
  <textarea></textarea>
</label>
<label class="inline">
  Text Area (Disabled)
  <textarea disabled></textarea>
</label>
```

<label class="stacked">
  Text Area
  <textarea></textarea>
</label>
<label class="inline">
  Text Area (Disabled)
  <textarea disabled></textarea>
</label>

### Radio Buttons

```markdown
<label class="inline">
  <input type="radio" name="options">
  Radio Button 1
</label>
<label class="inline">
  <input type="radio" name="options">
  Radio Button 2
</label>
<label class="inline">
  <input type="radio" name="options" disabled>
  Radio Button 3 (Disabled)
</label>
```

<label class="inline">
  <input type="radio" name="options">
  Radio Button 1
</label>
<label class="inline">
  <input type="radio" name="options">
  Radio Button 2
</label>
<label class="inline">
  <input type="radio" name="options" disabled>
  Radio Button 3 (Disabled)
</label>

### Check Boxes

```markdown
<label class="inline">
  <input type="checkbox">
  Check Box 1
</label>
<label class="inline">
  <input type="checkbox">
  Check Box 2
</label>
<label class="inline">
  <input type="checkbox" disabled>
  Check Box 3 (Disabled)
</label>
```

<label class="inline">
  <input type="checkbox">
  Check Box 1
</label>
<label class="inline">
  <input type="checkbox">
  Check Box 2
</label>
<label class="inline">
  <input type="checkbox" disabled>
  Check Box 3 (Disabled)
</label>

### Buttons

<button>Button</button>
<button disabled>Button (Disabled)</button>
