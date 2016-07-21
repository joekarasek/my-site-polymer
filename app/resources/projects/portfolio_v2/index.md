---
title: Portfolio v2
layout: project
startDate: 2016-02-15
endDate: 2016-05-20
teaser: A professional portfolio built using Jekyll, a ruby based static website generator.
permalink: PortfolioV2
live: http://www.zeppidy.com/
repo:
tags:
  - Javascript
  - Jekyll
  - Markdown
  - YAML
  - Liquid
  - Node.js
  - Gulp
  - SASS
---
This version of my web development portfolio was completed as a personal side project during my time as a student at Epicodus. I wanted to explore a framework that we were not learning in school and was attracted to Jekyll's simplicity, as well as the fact that it was used and recommended by Github Pages.

Jekyll works by using content stored in markdown files with YAML front-matter to generate a static website through a series of nested templates. The templating engine is Liquid, which is very similar to other templating engines likes Twig and Handlebars.

Originally, I used Jekyll to handle all the build processes. However, as I customized the project (for example, by adding SASS), I replaced many of these processes with custom built Gulp tasks, including scripts to build and deploy updates to the site and its content. I also decided to host the site through Digital Ocean so I could use a custom domain name.
