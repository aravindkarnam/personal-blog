---
title: "Recipe-GPT | Leveraging GPT tech to craft better User experience in SAAS products"
date: "2024-01-16T00:00:00.121Z"
description: "Transform user experiences by offering better defaults, minimising user input by leveraging GPT tech. Take your customers to their value moment faster and prevent onboarding churn."
---
Ever since ChatGPT took the internet by storm last year, every techie and their grandmother set out to build grand generative AI products, but
end up building wrapper on top of wrapper of same open AI models. I took to exploring this seemingly new tech with a bit of skepticism too, given the sheer volume of tech influencers throwing around jargons. However after cutting through the initial fluff and going through some courses, I found that this tech has lot of genuine value to offer to good old B2B SAAS products.

Consider this. A coder can go to chatGPT and ask for code to build a "Sign up/sign in" form, mention specific languages, databases and frameworks. Voila! GPT spits out a starter code snippet. Most of the times this snippet works! but it is not very mature, needs a lot of fine tuning before making it ready to ship. However it's a lot more useful than starting from scratch. It saves several hours of writing boiler plate code to perform a seemingly daunting task. Once they get the basic functionality to work, they can now incrementally build more complex stuff like SSO login using the same chat.

Same thing applies in B2B SAAS also. You can transform your user's experience by giving a better place to start in most mundane workflows, there by giving more free time to your user to go build and scale their buisness. You'll be amazed at how many seemingly non-trivial problems are trivialised for your users by sprinkling a little bit of that GPT dust. 

Here's a case study from my own work. Follow along!

### First a little Context
[Urbanpiper](https://urbanpiper.com), the company where I'm currently working at, makes a suite of products for managaging a restaurant businesses. At the core of every restaurant business is it's kitchen inventory. Raw material stocks must be tracked properly to ensure there's minimum wastage, sufficient availability of stocks to meet the demand and overall profitablity of the restaurant. 

An Inventory management software works very simply. Say a supplier sends a rice bag of 25 Kgs to your warehouse/godown, workers enter that data (name, quantity, prices) in the software. When the raw materials are consumed in the kitchen to make food items, say chicken biryani - software automatically decrements equivalent stocks. Similarly when you throw away spoilt materails, staff should decrement your stocks as wastage. That's it! Business owners get nice reports on cost of goods sold, item-wise profitability, wastage by staff and if there's any theft in the stores. 

Inventory management software is usually bundled as an add-on along with core products like point of sale, accounting, online order management etc and sold as a suite of products.

### Here's the problem
In early 2022, we were targetting Small and medium business(SMB) with our point of sale product, but pretty much giving away all the add-on modules in the suite for free. While core modules like Point of sale and online orders were being heavily adopted, there was little to no adoption in the inventory management software. It's not like SMBs don't need this product, in-fact they need it the most because raw materail prices are very fluctuating and inflationary effects felt strongly by small operations (as opposed to enterprises). 

Upon investigating this further by speaking to our customers and onboarding staff, I discovered that the lack of adoption was not due to discoverability or missing user education. It's because inventory software is the hardest to setup in our whole suite. Especially the part that's called the "Recipes" which tie the raw materails to the items on the menu.

--Work in Progress--
