---
date: 2021-12-30T17:00:00Z
path: /adaptive-loading
title: Improving UX Performance Using Adaptive Loading 
tags:
- Web Performance
- UX
- Adaptive Loading
english: true
writer: Berkay Demirbas
avatar: "../images/raufsamestone.jpg"
cardImageURL: https://res.cloudinary.com/raufsamestone/image/upload/v1640871362/blog-contents/adaptive-hooks/wajh7yrl40vbtl0bngh7.png
---

This is how you improve your web performance with adaptive serve your images or components if your user's device battery status is down or internet connection slow.

In addition to the use of new generation image formats such as **webp,** **AVIF** it also offers these users a better user experience according to device and external factors like slow connections, devices, etc.

## Implementing Adaptive Loading to **React** 

You can check **React Adaptive Hooks** package [here](https://www.npmjs.com/package/react-adaptive-hooks). 

## Install the package

```jsx
yarn add react-adaptive-hooks // or npm i react-adaptive-hooks
```

## Using for Network Status

```jsx
import React from 'react';
 
import { useNetworkStatus } from 'react-adaptive-hooks/network';
 
const MyComponent = () => {
  const { effectiveConnectionType } = useNetworkStatus();
 
  let media;
  switch(effectiveConnectionType) {
    case 'slow-2g':
      media = <img src='...' alt='low resolution' />;
      break;
    case '2g':
      media = <img src='...' alt='medium resolution' />;
      break;
    case '3g':
      media = <img src='...' alt='high resolution' />;
      break;
    case '4g':
      media = <video muted controls>...</video>;
      break;
    default:
      media = <video muted controls>...</video>;
      break;
  }
  
  return <div>{media}</div>;
};
```

This module allows you to manipulate media according to the user's internet connection speed.

## Using for Save Data

```jsx
import React from 'react';
 
import { useSaveData } from 'react-adaptive-hooks/save-data';
 
const MyComponent = () => {
  const { saveData } = useSaveData();
  return (
    <div>
      { saveData ? <img src='...' /> : <video muted controls>...</video> }
    </div>
  );
};
```

This is default network requests for loading images.

![https://res.cloudinary.com/raufsamestone/image/upload/v1640868837/blog-contents/adaptive-hooks/l0kujjibwnxlomtkrtzg.jpg](https://res.cloudinary.com/raufsamestone/image/upload/v1640868837/blog-contents/adaptive-hooks/l0kujjibwnxlomtkrtzg.jpg)

When you enable the hook, images are not loaded by default. 

![https://res.cloudinary.com/raufsamestone/image/upload/v1640868836/blog-contents/adaptive-hooks/jym0yeeziwn5hcmac4f9.jpg](https://res.cloudinary.com/raufsamestone/image/upload/v1640868836/blog-contents/adaptive-hooks/jym0yeeziwn5hcmac4f9.jpg)

### Using with Code-loading & Code-splitting

Depending on the **CPU** speed of the user, it is possible to load an adaptive **[chunked](https://www.geeksforgeeks.org/what-is-chunk-in-node-js/)** components.

```jsx
import React, { Suspense, lazy } from 'react';
 
import { useNetworkStatus } from 'react-adaptive-hooks/network';
 
const Full = lazy(() => import(/* webpackChunkName: "full" */ './Full.js'));
const Light = lazy(() => import(/* webpackChunkName: "light" */ './Light.js'));
 
const MyComponent = () => {
  const { effectiveConnectionType } = useNetworkStatus();
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        { effectiveConnectionType === '4g' ? <Full /> : <Light /> }
      </Suspense>
    </div>
  );
};
 
export default MyComponent;
```

It is also possible to create different experimental variables according to the battery status of the mobile device the user uses while visiting your web site, or displays like retina.

##  Get user's battery status 

You can check which browsers support navigator.getBattery() in [here](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/getBattery).

```jsx
const [battery, setBattery] = useState({ level: 0, charging: false });

  const handleChange = ({ target: { level, charging } }) => {
    setBattery({ level, charging });
  };

  const useSaveData = useSaveData()

  useEffect(() => {
    let battery;
    navigator.getBattery().then((bat) => {
      battery = bat;
      battery.addEventListener("levelchange", handleChange);
      battery.addEventListener("chargingchange", handleChange);
      handleChange({ target: battery });
    });
    return () => {
      battery.removeEventListener("levelchange", handleChange);
      battery.removeEventListener("chargingchange", handleChange);
    };
  }, []);
```

Then create a variable that you can change in the source of the image like this:

```jsx
const Image = () => {
    const batteryLevel = battery.level * 100
    const quality = batteryLevel < 50 ? 50 : 100
    return `https://images.unsplash.com/photo-1627156863760-f49b81d8ab77?fm=webp&w=2000&q=${quality}`;
  };
```

So, if the user's battery drops below 50 percent, our image quality will change accordingly.

You can check these links more about adaptive loading 🔗

- [https://adaptive-loading.web.app/cra-battery-considerate-loading/](https://adaptive-loading.web.app/cra-battery-considerate-loading/)
- [https://dev.to/addyosmani/adaptive-loading-improving-web-performance-on-low-end-devices-1m69](https://dev.to/addyosmani/adaptive-loading-improving-web-performance-on-low-end-devices-1m69)
- [https://web.dev/adaptive-loading-cds-2019/](https://web.dev/adaptive-loading-cds-2019/)
- [https://w3guy.com/detecting-retina-display-javascript-css/](https://w3guy.com/detecting-retina-display-javascript-css/)
- [https://github.com/GoogleChromeLabs/react-adaptive-hooks](https://github.com/GoogleChromeLabs/react-adaptive-hooks)