---
date: 2021-10-17T18:00:00Z
path: /gtm-contrast-ratio
title: Push Contrast Ratio to GTM
tags:
- UX
- GTM
- Contrast Ratio
english: true
writer: Berkay Demirbas
avatar: "../images/raufsamestone.jpg"
cardImageURL: https://res.cloudinary.com/raufsamestone/image/upload/v1634476293/blog-contents/contrast-ratio/ny2lcxrexzjsqzwpwhad.png
---

For **UX** and **Accessibility (a11y)** purpose, between background and foreground text(s), which is the [Color Contrast](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast), should be great enough to ensure legibility. 

In this case, we'll use the [Web AIM](https://webaim.org/resources/contrastchecker/)'s contrast checker API for measure programmatically user's browser text-foreground contrast ratio, and push to **Google Tag Manager** through `dataLayer` 

Before starting, we should create variable for colors with `Window.getComputedStyle()`

More information about [Window.getComputedStyle()](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle)

List the elements on your website whose Color Contrast values you want to measure for [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/).

<deckgo-highlight-code>  
<code slot="code">  
var bodyColor = getComputedStyle(document.querySelector("body")).color;
var textColor = getComputedStyle(document.querySelector("h1")).color;
</code>  
</deckgo-highlight-code>

This should be return like this:

<deckgo-highlight-code>  
<code slot="code">  
rgb(0, 0, 0) 
rgb(52, 247, 100) 
</code>  
</deckgo-highlight-code>

And then we should convert this **RGB** values to **HEX** color. 

<deckgo-highlight-code>  
<code slot="code">  
var bodyColorToHex = bodyColor
      .slice(4, -1)
      .split(",")
      .map((x) => (+x).toString(16).padStart(2, 0))
      .join("");
</code>  
</deckgo-highlight-code>

This time, we can use the **Web AIM** API as dynamically.

<deckgo-highlight-code>  
<code slot="code">  
  fetch(
      `https://webaim.org/resources/contrastchecker/?fcolor=${fColor}&bcolor=${bColor}&api`
    )
      .then((response) => response.json())
</code>  
</deckgo-highlight-code>



And finally, we can push the all JSON resonses to GTM through `dataLayer`

<deckgo-highlight-code>  
<code slot="code">  

    .then((data) => {
        console.log(data), (window.dataLayer = window.dataLayer || []);
        window.dataLayer.push({
          ratio: data.ratio,
          AA: data.AA,
          AALarge: data.AALarge,
          AAA: data.AAA,
          AAALarge: data.AAALarge
        });
      });
</code>  
</deckgo-highlight-code>

Be sure the current `dataLayer` object is return for responsed contrast values: 

<div style='width:60%; margin: auto'>

![Contrast Ratio Data Layer Object](https://res.cloudinary.com/raufsamestone/image/upload/v1634475023/blog-contents/contrast-ratio/tn6taqidzsbl3zegr86p.png)

</div>

Your last script should be look like this 👇

<deckgo-highlight-code>  
<code slot="code">  

    var bodyColor = getComputedStyle(document.querySelector("body")).color;
    var textColor = getComputedStyle(document.querySelector("h1")).color;

    var bodyColorToHex = bodyColor
      .slice(4, -1)
      .split(",")
      .map((x) => (+x).toString(16).padStart(2, 0))
      .join("");
    var textColorToHex = textColor
      .slice(4, -1)
      .split(",")
      .map((x) => (+x).toString(16).padStart(2, 0))
      .join("");

    var fColor = bodyColorToHex;
    var bColor = textColorToHex;
    fetch(
      `https://webaim.org/resources/contrastchecker/?fcolor=${fColor}&bcolor=${bColor}&api`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data), (window.dataLayer = window.dataLayer || []);
        window.dataLayer.push({
          ratio: data.ratio,
          AA: data.AA,
          AALarge: data.AALarge,
          AAA: data.AAA,
          AAALarge: data.AAALarge
        });
        console.log(dataLayer);
      });

</code>  
</deckgo-highlight-code>


I highly recommended for this article to understanding how calculated color and contrast ratio for **WCAG** criteria.

🔗 https://webaim.org/articles/contrast/
