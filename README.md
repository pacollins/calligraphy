<div align="center">
  <h1>Calligraphy</h1>
  <h3>
    <a href="https://hugo-calligraphy.netlify.app/" target="_blank">Demo</a> | <a href="https://github.com/pacollins/calligraphy" target="_blank">Source</a>
  </h3>
</div>

[![Netlify Status](https://api.netlify.com/api/v1/badges/5c90e92b-fcd6-4e87-bc3b-2636685a93cd/deploy-status)](https://app.netlify.com/sites/hugo-calligraphy/deploys)

> Calligraphy is a theme for Hugo static site generator focused on the beauty of it's content.

![Screenshot of Calligraphy Theme](https://raw.githubusercontent.com/pacollins/calligraphy/main/images/screenshot.png)

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

## About the Author

Calligraphy is a theme created by [Patrick A Collins](https://pacollins.com/)
for [Hugo](https://gohugo.io/). Inspired by its namesake, the theme aims to
provide a simple canvas that is elegant and ensures high readability for all
visitors.

Please also refer to the [project contributors list](https://github.com/pacollins/hugo-future-imperfect-slim/graphs/contributors) for everyone that has directly contributed to this theme.

## License

This theme is released under the [MIT License](https://github.com/pacollins/calligraphy/blob/master/LICENSE). Please read the license for more information.

## Special Thanks

- [normalize.css](https://github.com/necolas/normalize.css/)
- [tocbot](https://github.com/tscanlin/tocbot)
- [Playfair Display Font](https://fonts.google.com/specimen/Playfair+Display)
- [Source Sans Pro Font](https://fonts.google.com/specimen/Source+Sans+Pro)
