---
home: true
heroImage: ./hero-image.jpg
heroText: Your name
tagline: your tags
actionText: To the blog →
actionLink: /articles/
features:
- title: Blog
  details: I write on a lot of topics.
- title: Author
  details: about my book
footer: some footer
---


This is not a normal page but the landing page of your blog

## Install

You should have the `vue-cli` installed:

```
yarn global add vuepress # OR npm install -g vuepress
```

Then install all dependencies

```
npm install
```

## Build

To build your static site:

```
vuepress build
```

This will create something deployable at `./vuepress/dist`

## Developing

```
vuepress dev
```

This will server your site at `http://localhost:8080`

## Adding blog articles

To add articles, create them under `/pages` directory. Ensure all articles follow the frontmatter YAML of `/pages/article.md`

## Assets

place any images under `.vuepress/public` or refer to them where they are relative to the page they are used in `./image.jpg`