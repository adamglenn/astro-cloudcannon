---
title: About 2
description: My About Page
layout: ../../layouts/PageLayout.astro
heroComponent:
  header:
    text: About Me
    style: display-3 wvu-shout wvu-bar
  subhead: My new Subhead goes here.
  content: My cool content.
  image:
    src: /images/greenbrier-valley-carousel.jpeg
    alt: Kids floating on innertubes
  button:
    text: Click Here
    style: btn-primary btn-lg
    href: /my-href
content_blocks:
  - _bookshop_name: sample
    text: Hello World!
    color: '#034ad8'
    image:
      image_url: /image.png
      image_alt: My alternate text
  - _bookshop_name: Hero/hero
    header:
      text: About Me
      style: display-3 wvu-shout wvu-bar
    subhead: Subhead goes here.
    content: My cool content.
    image:
      src: /images/greenbrier-valley-carousel.jpeg
      alt: Kids floating on innertubes
    button:
      text: Click Here
      style: btn-primary btn-lg
      href: /my-href
---
