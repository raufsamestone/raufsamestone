---
avatar: "/uploads/raufsamestone.jpg"
date: 2021-08-07T21:00:00Z
path: react-gtm
title: React'de GTM Entegrasyon Yöntemleri
tags:
- gatsbyjs
- GTM
- react
writer: Berkay Demirbas
english: false

---
İster React tabanlı bir web uygulamanız olsun, ister [Gatsby](https://www.gatsbyjs.com/) ya da [NextJS](https://nextjs.org/) gibi framework kullanıyor olun, **Google Tag Manager** kurulumunuzu ilk başta doğru yapmanız, sonraki aşamalarda debug, analiz ve raporlamalarınız için son derece önemlidir.

Bu içerikte, React tabanlı web uygulamanıza ve Gatsby'de farklı yöntemlerle nasıl GTM ekleyebileceğinizi aktaracağım.

**Gerekenler:**

\- Bir adet internete bağlı bilgisayar.  
\- GTM Hesabı

Kurulumlara başlamadan önce,

* GTM'deki ayarlarınızın doğruluğundan emin olmalısınız. _Admin > Container Settings_, Target Platform **Web** olmalıdır.  
    
  ![](https://res.cloudinary.com/raufsamestone/image/upload/v1628443038/blog-contents/react-gtm/jykujgxnooiwqragfeco.png)
* Tüm kurulumlarınızda tracking kodlarınızı (**container ID**) statik olarak değil, .**env** gibi [**Environment Variable**](https://en.wikipedia.org/wiki/Environment_variable) değişkeni olarak atamanız, [**Netlify**](https://docs.netlify.com/configure-builds/environment-variables/) **ya da** [**Vercel**](https://vercel.com/docs/environment-variables) **gibi** deploy tarafında da kullanımını kolaylaştıracaktır.

## React SPA'de GTM Kurulumu

Genellikle **SPA**'ler (Single Page Application) için tercih edilen sade, [Create React app](https://create-react-app.dev/ "Create React App") ile oluşturduğunuz bir web uygulaması/sitesine **GTM** entegrasyonu için, [React Helmet](https://www.npmjs.com/package/react-helmet "React Helmet")'i tercih edebilirsiniz.

**Yükleme:**

    yarn add react-helmet

Daha sonra GTM'deki snippetinizi olduğu gibi eklemeniz yeterlidir.  
  
![](https://res.cloudinary.com/raufsamestone/image/upload/v1628443036/blog-contents/react-gtm/ofathsesrqhbcddlp8d9.png)

**Kullanımı:**

    const Helmet = () => (
     <ReactHelmet>
      <script>
       {(function(w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({
         'gtm.start': new Date().getTime(),
         event: 'gtm.js',
        });
        var f = d.getElementsByTagName(s)[0],
         j = d.createElement(s),
         dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
       })(window, document, 'script', 'dataLayer', 'GTM-XXXXX')}
      </script>
     </ReactHelmet>
    )

## react-gtm-module ile GTM Kurulumu

Spesifik olarak GTM için oluşturulmuş [react-gtm-module](https://yarnpkg.com/package/react-gtm-module) paketini kullanabilirsiniz.

**Yükleme:**

    yarn add react-gtm-module

**Kullanımı:**

    import React from 'react'
    import ReactDOM from 'react-dom'
    import Router from 'react-router'
    import routes from './routes'
    ...
    
    import TagManager from 'react-gtm-module'
    
    const tagManagerArgs = {
        gtmId: 'GTM-XXXXX'
    }
    
    TagManager.initialize(tagManagerArgs)
    ...
    
    const app = document.getElementById('app')
    ReactDOM.render(<Router routes={routes} />, app)

**dataLayer Gönderimi:**

    import React from 'react'
    import ReactDOM from 'react-dom'
    import Router from 'react-router'
    import routes from './routes'
    
    ...
    import TagManager from 'react-gtm-module'
    
    const tagManagerArgs = {
        gtmId: 'GTM-000000',
        dataLayer: {
            userId: '001',
            userProject: 'project'
        }
    }
    
    TagManager.initialize(tagManagerArgs)
    ...
    
    const app = document.getElementById('app')
    ReactDOM.render(<Router routes={routes} />, app)

## Gatsby JS'de GTM Kurulumu

Üstteki yöntemlerin dışında, yine özellikle Gatsby ekosistemi içerisinde oluşturulmuş olan yardımcı pluginleri kullanabilirsiniz.

### Plugin Kullanarak

Üstte bahsedilen react-helmet haricinde, Gatsby'nin official pluginlerinden [gatsby-plugin-google-tagmanager](https://www.gatsbyjs.com/plugins/gatsby-plugin-google-tagmanager/)'ı da kullanabilirsiniz.

**Kurulum:**

    yarn add gatsby-plugin-google-tagmanager

**Kullanım:**

    // gatsby-config.js
    plugins: [
      {
        resolve: "gatsby-plugin-google-tagmanager",
        options: {
          id: "YOUR_GOOGLE_TAGMANAGER_ID",
          defaultDataLayer: { platform: "gatsby" },
          gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
          gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
          dataLayerName: "YOUR_DATA_LAYER_NAME",
          enableWebVitalsTracking: true,
        },
      },
    ]

### Custom HTML Kullanarak

GatsbyJS'deki [Custom HTML](https://www.gatsbyjs.com/docs/custom-html/#adding-custom-javascript) yöntemiyle daha uğraştırıcı fakat pluginden bağımsız olarak daha stabil ve yönetilebilir halde GTM kurulumu yapabilirsiniz.

    // src/html.js
    
    <script
      dangerouslySetInnerHTML={{
        __html: `
       {(function(w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({
         'gtm.start': new Date().getTime(),
         event: 'gtm.js',
        });
        var f = d.getElementsByTagName(s)[0],
         j = d.createElement(s),
         dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
       })(window, document, 'script', 'dataLayer', 'GTM-XXXXX')}
            `,
      }}
    />

## NextJS'de GTM Kurulumu

En kısa yoldan **__document.js_** dosyası oluşturarak **Google Analytics** ya da **GTM** entegrasyon yapabilirsiniz.

    import Document, { Html, Head, Main, NextScript } from 'next/document'
    
    export default class MyDocument extends Document {
      render() {
        return (
          <Html>
            <Head>
              {/* Global Site Tag (gtag.js) - Google Analytics */}
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                  page_path: window.location.pathname,
                });
              `,
                }}
              />
            </Head>
            <body>
              <Main />
              <NextScript />
            </body>
          </Html>
        )
      }
    }
            </Head>
            <body>
              <Main />
              <NextScript />
            </body>
          </Html>
        )
      }
    }

Örneğin **Vercel** kullanıyorsanız da, ilgili değişkeni Siteniz _>_ _Settings >_ Environment Variables kısmından ekleyebilirsiniz.

![](https://res.cloudinary.com/raufsamestone/image/upload/v1628443037/blog-contents/react-gtm/orkqzngqcnlnsg9vphsf.png)