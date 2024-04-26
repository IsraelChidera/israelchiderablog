---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'How to integrate React into an Astro Project'
pubDate: 2024-04-26
description: 'How to integrate React components into an Astro Project'
author: 'Israel Chidera'
image:
    url: '/astroandreact.png'
    alt: 'react integration to astro'
tags: "tech"
pageTitle: "How to integrate React components into an Astro Project"
---

If you are planning to own a blog in 2024, you should try out Astro. Astro is a powerful static site generator with a knack for adaptability. What's even better is that Astro seamlessly integrates with various libraries and frameworks. This means that if you're an ardent lover of the React library and component-based architecture, it's a win-win situation. Astro's integration capabilities extend far beyond mere compatibility with React. With just a few lines of code, developers can tap into a vast ecosystem of integrations, spanning popular UI frameworks like Vue, Svelte, and Solid, alongside essential tools such as Tailwind CSS and Partytown. In this article, we will focus specifically on integrating React into an Astro project.

### Prerequisites
Before diving into the integration process, ensure that you have the following:
- Node.js and npm. You can easily install [Node.js](https://nodejs.org/en) from the official website.
- Any text editor

### Setting up the Astro Project
If you haven't already created an Astro project, you can initialize a new project using the following command or by using a [starter template](https://docs.astro.build/en/install/auto/#starter-templates)

create a new project with npm
```bash
npm create astro@latest
```

Follow the prompts to set up your project with the desired configuration. Once your Astro project is set up, navigate to the project directory to begin integrating React components.

### Integration
Astro provides an astro add command to automate the setup of official integrations. To install React integration, run the following command from your project directory:

```bash
npx astro add react
```

The above command will guide you through the installation process. In case you encounter any issues, you can choose to go through the manual installation.

If you prefer manual installation, you can follow these steps:
First, install the *@astrojs/react* package using your preferred package manager:

```bash
npm install @astrojs/react
```

While most package managers typically take care of installing related peer dependencies automatically, encountering a warning such as <u>*Cannot find package 'react'*</u> when initiating Astro suggests that manual installation of *react* and *react-dom* is necessary.

```bash
npm install react react-dom
```

Once the installation is complete, apply the React integration in your *astro.config.* file:
```js
// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
 // ...
 integrations: [react()],
});
```

### Integrating React Components in Astro
Now that the React integration is set up, you can utilize React components in your Astro pages, layouts, and components. React components can reside in the */src/components* directory or any other organizational structure you prefer. 
To use a React component, import it from its relative path in your Astro component script. Then, you can utilize the React component alongside other components, HTML elements, and JSX-like expressions in the component template. Let's demonstrate this by adding a button component to our Astro project.

```tsx
import React from 'react'

type ButtonProps = {
    children: React.ReactNode,
    className: string,
    onClick?: any,
}

const index = ({children,className, onClick, ...rest}: ButtonProps) => {
  return (
    <button onClick={onClick} className={`${className} bg-dark text-sm px-8 py-3 text-white font-semibold`} {...rest}>
      {children}
    </button>
  )
}

export default index
```

The above is a React component that renders a container with customizable children and optional props, utilizing TypeScript for type-checking.

To utilize the React component provided above in your Astro project, you can write it as follows:

```js
// about.astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
import Container from "../components/Elements/Container";
const pageTitle: string = "Israel Chidera - About";
---

<BaseLayout pageTitle={pageTitle}>
    <Container className="h-[90vh] flex items-center justify-center w-full">
        ...
    </Container>
</BaseLayout>
```

You might want to go a step further and make your React component interactive. To do this, you can utilize the client:* directives. Let us create a floating button to explain how to create interactive components in an Astro project. 

```tsx
// FloatingButton.tsx
import { useState, useEffect } from 'react';


const FloatingButton = () => {
    const [showButton, setShowButton] = useState(false);


    const handleScroll = () => {
        // Calculate the height of the first 100vh in pixels
        const first100vh = window.innerHeight * 100 / 100;


        // Check if the scroll position exceeds the first 100vh
        if (window.scrollY > first100vh) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };


    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <button
            className={`fixed bottom-[100px] md:right-5 right-4 p-4 md:p-3 shadow-sm z-30 drop-shadow-2xl rounded-full bg-white animate-bounce text-white ${showButton ? 'block' : 'hidden'}`}
            onClick={scrollToTop}
        >
            <svg className='w-8 h-8' fill='#0C111D' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" /></svg>
        </button>
    );
};

export default FloatingButton;
```

The interactivity of the floating component arises from the combination of state management, event handling, and dynamic rendering, which collectively enable the button to respond to the user's scrolling behavior and provide a means for interactive navigation
Since it’s an interactive component, to use the FloatingButton component in an Astro project, you should write the following:

```js
// floating.astro
---
import FloatingButton from "./FloatingButton";
---

<FloatingButton client:load />
```

The client:load directive indicates that the "FloatingButton" component should be rendered or loaded on the client-side, meaning it will be executed in the user's web browser rather than on the server. This enables dynamic behavior and interactivity, allowing the button to respond to user interactions without needing to reload the entire page.

### Conclusion
So, to sum it up, Astro and React make a pretty awesome team for building websites. Whether you're setting up a blog or any other site, Astro's got your back with its cool static site generation, and it plays super nice with React. Setting up is a breeze - just a few commands, and you're good to go.

You can easily drop your React components into your Astro project and watch them do their thing. 

Happy coding!

