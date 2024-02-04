---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Deploying your react app to Netlify in seconds'
pubDate: 2022-07-01
description: 'Deploying your react app to Netlify in seconds'
author: 'Israel Chidera'
image:
    url: '/netlify.png'
    alt: 'deploy react app to netlify'
tags: "tech"
pageTitle: "Deploying your react app to Netlify in seconds"
---

As a budding developer, you might be faced with these situations.

- You need to host a website quickly for an interview.
- You need to have a live preview of your site, even if it is incomplete. That is, to have a link to your work.
- The need to deploy your site without pushing codes to GitHub.

Netlify deployment via drag and drop has to be the fastest way to deploy your front-end application in seconds.

LET’S GO 

### Installing your React app with create-react-app
React is a component-based JavaScript library used for building interactive user interfaces. To create a React project with create-react-app, run:

```jsx
npx create-react-app my-app
cd my-app
npm start
```

or 

```jsx
yarn create react-app my-app
cd my-app
yarn start
```

### Getting your build folder
npm/yarn run build creates a build directory with a production build of your app

```jsx
npm run build
```

or

```jsx
yarn run build
```

### Logging Into your Netlify Account
You can log in with your GitHub, GitLab, Bitbucket, or email.

![logging in to Netlify](/netlify1.png)


### Add a New Site.
Click on "add a new site" and choose the option of deploying manually. Drag your build folder into the circle.

![adding a new site](/netlify2.png)

Your site has been deployed successfully.

![adding a new site](/netlify3.png)

[optional] Netlify gives you a random name as the domain name. You can change the domain name for accessibility and readability.

THANKS FOR READING