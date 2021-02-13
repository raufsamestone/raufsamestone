---
date: 2021-02-12T21:00:00Z
path: /netlify-form-dynamic-titles
title: 'Creating Dynamic Form Titles for Netlify Form'
description: 'This simple solution is mostly using Netlify Forms for different event post based serialize sign-up forms in React.'
tags:
  - forms
  - netlify
  - react
writer: Berkay Demirbas
avatar: '../images/raufsamestone.jpg'
cardImageURL: 'https://res.cloudinary.com/raufsamestone/image/upload/v1613206523/blog-contents/dynamic-netlify-forms/w0km9fz87vrgidt9h014.jpg'
english: true
---

This simple solution is mostly using [**Netlify Forms** ](https://www.netlify.com/products/forms/) for different event post based serialize sign-up forms in **React**.

Like this:

![Dynamic Netlify Form Titles](https://res.cloudinary.com/raufsamestone/image/upload/f_auto/v1613200185/blog-contents/dynamic-netlify-forms/jmqvuejv4xhj6j5syxk9.webp)

Firstly you have to create a form-name with `form.getAttribute('name')` for **fetching.**

<deckgo-highlight-code>  
<code slot="code">

fetch('/', {
method: 'POST',
headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
body: encode({
'form-name': form.getAttribute('name'),
...state,
}),
})

</code>  
</deckgo-highlight-code>  


Add the form name as your title props to your form's `name` attribute like `{eventDate}`.

<deckgo-highlight-code>  
<code slot="code"> 

``<form name={`${eventDate} Event Signup Form`} method="POST">``
 
</code>  
</deckgo-highlight-code>

And add your Form component to your generated markdown files place. 

So, you can use your any event post's frontmatter field as your form title 🎉.

<deckgo-highlight-code>  
<code slot="code">

`<FormComponent eventDate={post.frontmatter.eventDate}/>`

</code>
</deckgo-highlight-code>
