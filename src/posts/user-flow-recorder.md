---
date: 2021-01-02T17:00:00Z
path: /user-flow-recorder
title: Measure User Flows with Chrome’s Recorder
tags:
- Web Analytics
- Chrome
- User Flows
english: true
writer: Berkay Demirbas
avatar: "../images/raufsamestone.jpg"
cardImageURL: https://res.cloudinary.com/raufsamestone/image/upload/v1641129431/blog-contents/chrome-recorder/gsm7c4rxvd2osyhn65gi.png
---

In **Chrome 97**, the Record feature has been added to better measure web analytics measurements and user behaviors.

In order to test this beta feature, you must first download **Chrome 97** from [here](https://www.google.com/chrome/beta/).

To open the Recorder panel use `shift + ⌘ + p`

![https://res.cloudinary.com/raufsamestone/image/upload/v1641126868/blog-contents/chrome-recorder/rk5xcho4wuw4ynluh3ks.jpg](https://res.cloudinary.com/raufsamestone/image/upload/v1641126868/blog-contents/chrome-recorder/rk5xcho4wuw4ynluh3ks.jpg)

For example, you can measure your e-commerce site **product clicks or** **add to cart** events

![https://res.cloudinary.com/raufsamestone/image/upload/v1641127099/blog-contents/chrome-recorder/f7ttcntpgk1o9xqrrkll.png](https://res.cloudinary.com/raufsamestone/image/upload/v1641127099/blog-contents/chrome-recorder/f7ttcntpgk1o9xqrrkll.png)

You can automate your test events by replaying your previous recordings like **add to cart** and **remove to cart** events for your **[Google Tag Manager Enhanced Ecommerce](https://developers.google.com/analytics/devguides/collection/ua/gtm/enhanced-ecommerce#cart)** tests.

![https://res.cloudinary.com/raufsamestone/image/upload/v1641126867/blog-contents/chrome-recorder/dwsbmzmde4insglv3yx0.jpg](https://res.cloudinary.com/raufsamestone/image/upload/v1641126867/blog-contents/chrome-recorder/dwsbmzmde4insglv3yx0.jpg)

Update existing events in recordings, assign new events and frames. It is a hot feature, especially in **SPA**s.

You can also create multiple functions by adding another event to the record. For example, as a **Search Query** case, you can simulate a user who searches only for **jackets.**

![https://res.cloudinary.com/raufsamestone/image/upload/v1641126867/blog-contents/chrome-recorder/rzgcbve1f3cc5uxwt7rs.jpg](https://res.cloudinary.com/raufsamestone/image/upload/v1641126867/blog-contents/chrome-recorder/rzgcbve1f3cc5uxwt7rs.jpg)

And add other searches like **tshirt** by adding a new step.

![https://res.cloudinary.com/raufsamestone/image/upload/v1641127886/blog-contents/chrome-recorder/iopeh0dpecr9jkfmmgfc.jpg](https://res.cloudinary.com/raufsamestone/image/upload/v1641127886/blog-contents/chrome-recorder/iopeh0dpecr9jkfmmgfc.jpg)

To create different user records by manipulating the events after the slider in product impression measurements, you can specify the user's next click as add to wishlist like this.

![https://res.cloudinary.com/raufsamestone/image/upload/v1641127340/blog-contents/chrome-recorder/vp7zojelun5ppfaqyk98.jpg](https://res.cloudinary.com/raufsamestone/image/upload/v1641127340/blog-contents/chrome-recorder/vp7zojelun5ppfaqyk98.jpg)

Also, you can export these records to [Puppeteer](https://pptr.dev/) for detailed performance and measurement tests.

You can find more about chrome’s new feature 🔗 :  
- [https://www.youtube.com/watch?v=rMUayh1QPYs](https://www.youtube.com/watch?v=rMUayh1QPYs)
- [https://developer.chrome.com/docs/devtools/recorder/](https://developer.chrome.com/docs/devtools/recorder/)
