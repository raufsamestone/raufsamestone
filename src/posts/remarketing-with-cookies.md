---
date: 2021-16-30T21:00:00Z
path: /remarketing-with-cookies
title: Remarketing with Cookies
tags:
  - Marketing
  - Next
  - Cookies
  - Middleware API
english: true
writer: Berkay Demirbas
avatar: "../images/raufsamestone.jpg"
cardImageURL: https://res.cloudinary.com/raufsamestone/image/upload/v1642357843/blog-contents/remarketing-cookie/ofraawmgxed6k7wz1gkv.png
---

You may want to run campaigns that serve different landing pages to your users, especially in **B2C** mailing campaigns.

For this, instead of creating separate landing pages for each of your campaigns, you can develop more effective automation and marketing techniques using modern web technologies like [NextJS](https://nextjs.org/).

Assuming that the user clicks on our **UTM** campaigns, we will show a different landing page depending on the cookie status, without changing the page.

![Remarketing with cookies](https://res.cloudinary.com/raufsamestone/image/upload/v1642353975/blog-contents/remarketing-cookie/pg5hxxbpqsvmhncor0ub.png)

Let's see what we're going:

- Creating a new app with NextJs.
- Building [middleware](https://nextjs.org/docs/middleware) for rewrite functions.
- Create and set cookie status for UTM campaign values.

Create a new web app using. [More details here.](https://nextjs.org/learn/basics/create-nextjs-app/setup)

```jsx
npx create-next-app
```

Create a new typescript file called **\_middleware.ts** on **/pages**.

Import objects from [Next Server](https://nextjs.org/docs/api-reference/next/server) for Middleware API.

```jsx
import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";
```

Add a new function for rewriting. Basically, the task of this function is to fetch the user’s cookie status, and rewrite them to the campaign page without leaving it on the same page path.

```jsx
//pages/_middleware.ts

const PUBLIC_FILE = /\.(.*)$/;

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  let response = NextResponse.next();

  if (PUBLIC_FILE.test(req.nextUrl.pathname)) {
    return response;
  }

  if (req.nextUrl.pathname === "/") {
    switch (true) {
      case Boolean(req.cookies["remarketing"] === "true"):
        response = NextResponse.rewrite("/marketing-page");
        break;
      default:
        response = NextResponse.next();
    }
    return response;
  }
  return response;
}
```

Create a new marketing page called **/marketing-page**, you can duplicate the index page for now.

This page will use for our main redirected campaign page and changing cookie status to false.

For that, we use [react-cookie.](https://www.npmjs.com/package/react-cookie)

```jsx
//pages/marketing-page.js

const [cookie, setCookie] = useCookies();

const setRemarketingCookie = async () => {
  try {
    setCookie("remarketing", "false");
  } catch (err) {
    console.log(err);
  }
};
```

And we will run this function for when the user wants to cancel campaign and return to the home page.

```jsx
//pages/marketing-page.js

<div className={styles.grid} onClick={setRemarketingCookie}>
  <Link href="/">
    <a href="/" className={styles.card}>
      <h2>Back to main page &rarr;</h2>
      <p>I don't want it!</p>
    </a>
  </Link>
</div>
```

Let's refactor our original homepage. We use **useRouter to** check the current URL and, extracting UTM campaign values like Campaign, Medium. etc.

```jsx
//pages/index.js

const [cookie, setCookie] = useCookies();
const router = useRouter();

const cookieName = "remarketing";
const utmCampaign = "lead_generation";
const utmMedium = "email";

const matchCampaign =
  router.query.utm_campaign === utmCampaign &&
  router.query.utm_medium === utmMedium;

useEffect(() => {
  if (matchCampaign) {
    setCookie(cookieName, "true");
  }
});
```

Congratulations! 🎉

Now, the users when clicking any UTM campaign, our cookie and marketing page will change.

![https://res.cloudinary.com/raufsamestone/video/upload/v1642355675/blog-contents/remarketing-cookie/testin-middleware-next-marketing-coookie-dglzzl.gif](https://res.cloudinary.com/raufsamestone/video/upload/v1642355675/blog-contents/remarketing-cookie/testin-middleware-next-marketing-coookie-dglzzl.gif)

Also, you can send to Google Analytics, this cookie value as a custom event for which users cancel your campaign.

- Clone the repository in [here](https://github.com/raufsamestone/next-middleware-remarketing-with-cookie).
- Watch the [Marketing Automation With Customer.io + Next js session](https://www.youtube.com/watch?v=PIOMMQuwq8Y)
