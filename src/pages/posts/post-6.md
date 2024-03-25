---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'How to add Vercel website with a custom domain to Google search console'
pubDate: 2022-11-14
description: 'How to add Vercel website with a custom domain to Google search console'
author: 'Israel Chidera'
image:
    url: '/google-search-console.png'
    alt: 'google search console'
tags: "tech"
pageTitle: "How to add Vercel Website with a Custom Domain to Google Search Console"
---

Google Search Console(GSC) stands as a beacon for webmasters, offering a plethora of insights into website performance, technical SEO issues, and visibility in search results. For those who have crafted their websites on Vercel and bought custom domain names via Namecheap or any of the domain sites, integrating them with Google Search Console is a pivotal step towards enhancing search traffic and optimizing visibility. In this comprehensive guide, we'll walk you through the process of seamlessly adding your Vercel website with a custom domain to Google Search Console.


## What is Google Search Console and Why Does it Matter?
Think of GSC as your personalized command center for all things search engine optimization (SEO) related to your website. It provides a wealth of insights on how your site performs in Google search results, It helps you understand the following:

- Search Traffic: GSC tracks impressions (the number of times your site appears in search results), clicks (how many times users visit your site from search results), and average position (where your site typically ranks for relevant keywords). It comprehensively tracks how many people are finding your website through Google search.

- Technical SEO Issues: Is your website mobile-friendly? Are there any broken links or errors hindering user experience? GSC identifies technical glitches that might affect your search ranking and guides how to fix them.

- Keywords: What search terms are people using to find your website? GSC unveils the keywords that trigger your website's appearance in search results. This knowledge allows you to refine your content strategy and target the right audience.

- Site Appearance in Search Results: How is your website displayed in search results? GSC lets you preview how your website title, meta description, and rich snippets appear in search listings, allowing you to optimize these crucial elements for better click-through rates.

By harnessing the power of GSC, you can attract more visitors who are genuinely interested in what you offer by improving your website's ranking in search results, identifying and fixing technical issues that might be hindering user experience and frustrating visitors, gaining valuable insights into how Google perceives your website and adapt your SEO strategy accordingly.

Now that you understand the significance of GSC, let's dive into the process of adding your Vercel website with a custom domain to this powerful tool.

## Accessing Google Search Console
Head over to the [Google Search Console website](https://search.google.com/search-console/about) and sign in using your Google account. If you're new to GSC, create a new property for your website.
![google search console dashboard](/11.png)


## Adding Your Property
Click on "Add a property" and select "Domain" as the property type. To add a property on Google Search Console, select "+ Add property" from the dropdown menu or click on "Add a property".
![adding your property](/22.png)

You can choose between two types of properties: *URL-prefix property or Domain property*.
URL-prefix properties focus on specific URLs under a website's main domain. They are ideal for tracking a particular section or version of your website.

The domain property tracks data across your entire domain, including subdomains and both HTTP and HTTPS versions. They provide comprehensive data coverage for your entire website.


## Verifying Ownership
GSC offers several verification methods, each with its pros and cons. In this article, we'll focus on the meta tag verification method. Why? It's relatively simple and doesn't require messing around with file uploads or editing HTML code. 
![Verifying ownership](/33.png)


When prompted to select a verification method, opt for the meta tag option. GSC will provide you with a unique meta tag code snippet. Copy the meta tag code snippet provided by GSC. Then, paste it into the <head> section of your website's HTML code. Make sure to place it just before the closing </head> tag.
Once you've added the meta tag to your site's HTML, return to GSC and click the *"Verify"* button. GSC will check for the presence of the meta tag on your site and confirm ownership if it's detected successfully.
![successful upload](/44.png)

Hooray, you have added your website to Google search console.

## Conclusion
Integrating your Vercel website with a custom domain into Google Search Console is a vital step in optimizing its performance and visibility in search results. By harnessing the powerful insights offered by GSC, you can attract more relevant visitors, address technical SEO issues, refine your content strategy, and enhance your website's overall presence online. With the step-by-step guide provided, you can seamlessly add your website to GSC and embark on a journey towards SEO excellence. So, don't wait any longer – unlock the full potential of your website with Google Search Console today.
 
Happy optimizing!

