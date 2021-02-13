---
date: "2020-03-26"
path: '/highlight-your-code-in-gatsby'
title: "Highlight your code in Gatsby"
tags: ["Syntax", "Gatsby", "Jamstack", "Prismjs", "Deckdeckgo", "Stenciljs"]
writer: Berkay Demirbas
avatar: ../images/raufsamestone.jpg
english: true
---
## Different the basic and highlighted

Here is the basic HTML code block;

`yarn upgrade-interactive` 

Here is the **Highlighted** style on Carbon;

 <deckgo-highlight-code>
    <code slot="code">
yarn upgrade-interactive
    </code>
</deckgo-highlight-code>      

or Ubuntu
 <deckgo-highlight-code terminal='ubuntu' >
    <code slot="code">
yarn upgrade-interactive
    </code>
    <span slot="user">berkay@ubuntu:~</span>
</deckgo-highlight-code>         
   
## Plugin

With your **markdown** resolver used in Gatsby, you must integrate the plug-in.

For this we will need the plugin `gatsby-remark-highlight code`.

Plıugin details on GitHub:
https://github.com/deckgo/gatsby-remark-highlight-code


## Install

 <deckgo-highlight-code >
    <code slot="code">
yarn add gatsby-transformer-remark gatsby-remark-highlight-code @deckdeckgo/highlight-code
    </code>
</deckgo-highlight-code>         


## Configure

 <deckgo-highlight-code language='javascript'>
    <code slot="code">
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-highlight-code`,
          options: {
            terminal: 'ubuntu'
          }
        },
      ],
    },
  },
]
    </code>
</deckgo-highlight-code>         


## Usage

Add the following in the blog post template or main layout.js.


 <deckgo-highlight-code>
    <code slot="code">
async componentDidMount() {
    try {
        const deckdeckgoHighlightCodeLoader = require("@deckdeckgo/highlight-code/dist/loader")
        await deckdeckgoHighlightCodeLoader.defineCustomElements(window);
    } catch (err) {
        console.error(err);
    }
}
    </code>
</deckgo-highlight-code>    
     
And then wrap your code blocks, on your Markdown file.