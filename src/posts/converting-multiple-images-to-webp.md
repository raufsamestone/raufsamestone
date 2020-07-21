---
date: 2020-07-22T22:00:00Z
path: converting-multiple-images-to-webp
title: Converting Multiple Images to WebP
tags:
- cloudinary
- SEO
- image
- image optimization
writer: Berkay Demirbas
avatar: "../images/raufsamestone.jpg"
english: true
---
This is how to convert your multiple any images from **.png** or **.jpeg** to **.webp** format with storage (Cloud) and optimization features.

**WebP** is so fast image format for your web app. [WebP](https://web.dev/serve-images-webp/ "Google Web Dev") is also developed and recommended by **Google**. It is also extremely important for **SEO** and web performance with image contents. Normally, you can use Google's native [WebP Converter](https://developers.google.com/speed/webp/). But this is not capable of web storage and other image optimization. 

We use [Cloudinary](https://cloudinary.com/ "Cloudinary")  image storage for this converting solutions. 
There are **two** simple solutions to converting multiple images.

## Solution 1 

You can set up the pre-transformation Upload settings on Cloudinary. 

Go to **Settings** and **Add Upload Preset**: 

![Cloudinary Upload Preset](https://res.cloudinary.com/raufsamestone/image/upload/v1595360280/blog-contents/converting-multiple-images-to-webp/upload-preset-cloudinary_pqzwpd.webp "Cloudinary Upload Preset")

Click to **Upload Manipulations**:

![Upload Manipulations](https://res.cloudinary.com/raufsamestone/image/upload/v1595360280/blog-contents/converting-multiple-images-to-webp/upload-preset-transformation-cloudinary_kwbfxr.webp "Upload Manipulations")

And then click to  **Add Eager Transformation:** 

![Add Eager Transformation](https://res.cloudinary.com/raufsamestone/image/upload/v1595360278/blog-contents/converting-multiple-images-to-webp/add-eager-transformation_mjtog7.webp "Add Eager Transformation")

Set your pre upload.

- Choose the format as **WebP**
- You don't have to set the image resolution to **1080**, but most screen device is smaller than 2K or 4K for web image contents.
- You can check for other useful flags like adding **unique ID** of *filename*.

Here is the final settings should look like: 

![Final upload settings](https://res.cloudinary.com/raufsamestone/image/upload/v1595360278/blog-contents/converting-multiple-images-to-webp/latest-settings_ew4bbo.webp "Final upload settings")

Thus, every image you upload will be automatically optimized to **webp** using both Media library UI or CLI.

## Solution 2

But what if we want to change the images we uploaded before? In this case, we have to use [Cloudinary CLI](https://cloudinary.com/documentation/cloudinary_cli "Cloudinary CLI").

You can transform your all images using URL [reference](https://cloudinary.com/documentation/image_transformation_reference) adding variables after **/upload/** path like **/c_scale,f_auto,h_517,w_1080/**.

But you have to list all URL of your images.

### Listing URLs

Firstly, we must install the CLI with [Python PIP](https://pypi.org/project/pip/ "Python PIP").

<deckgo-highlight-code>  
<code slot="code">  
pip3 install cloudinary-cli 
</code>  
</deckgo-highlight-code>

Configure your CLI with your **Cloudinary API KEY**

<deckgo-highlight-code>  
<code slot="code">  
export CLOUDINARY_URL=cloudinary://123456789012345:abcdefghijklmnopqrstuvwxyzA@cloud_name
</code>  
</deckgo-highlight-code>

- You can find your API key on dashboard. 

And, we should list all images info with [Search API](https://cloudinary.com/documentation/search_api).

You can search any variable like that, but we have to add **output** option for listing items to *JSON* file.
 
<deckgo-highlight-code>  
<code slot="code">  
cld search "cat" -f context -f tags -n 10 output.json
</code>  
</deckgo-highlight-code>

The output should be like that: 

<deckgo-highlight-code>  
<code slot="code">  
"public_id": "5953361",
    "filename": "sasdasd-01_ek7rzs",
    "format": "webp",
    "version": 1595336182,
    "resource_type": "image",
    "type": "upload",
    "created_at": "2020-07-21T12:56:22+00:00",
    "uploaded_at": "2020-07-21T12:56:22+00:00",
    "bytes": 47488,
    "backup_bytes": 0,
    "width": 1080,
    "height": 796,
    "aspect_ratio": 1.35678,
    "pixels": 859680,
    "pages": 1,
    "url": "http://res.cloudinary.com/raufsamestone/image/upload/v1595336182/sdasdasd.ek7rzs.webp",
    "secure_url": "https://res.cloudinary.com/raufsamestone/image/upload/v1595336182/asdasd.webp",
    "status": "active",
    "access_mode": "public",
    "access_control": null,
    "etag": "581034c158165f6f9c9c872f03618a6c",
    "created_by": {
      "access_key": "126251566858748",
      "custom_id": "asdasdfas12ff",
      "external_id": "61c057372fa8c45e60a23fa51aebf1"
    },
    "uploaded_by": {
      "access_key": "126251566858748",
      "custom_id": "asdasdasdasd",
      "external_id": "61c057372fa8c45e60a23fa51aebf1"
    }
  },
</code>  
</deckgo-highlight-code>

And we can map the specify "URL" from **JSON** with **Node JS** for listing all URL.

<deckgo-highlight-code>  
<code slot="code">  
const data = require('./output.json');
const output = data.map(url => url.url);
console.log(output);
</code>  
</deckgo-highlight-code>


and then you can replace and modify your all URL with any IDE.

![Cloudinary Output](https://res.cloudinary.com/raufsamestone/image/upload/v1595368210/blog-contents/converting-multiple-images-to-webp/cld-output-url.webp)

## What about JAMstack?

If you are interesting in adding Cloudinary to your **JAMstack** project, you can check [Gatsby's](https://gatsbyjs.org/) image optimization plugin called **gatsby-transformer-cloudinary** and you can connect with [Netlify CMS](https://www.netlifycms.org/docs/cloudinary/) to your Clodinary API.

[@raufsamestone](https://twitter.com/raufsamestone)