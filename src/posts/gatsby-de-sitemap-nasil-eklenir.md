---
date: 2020-06-27T21:00:00Z
path: gatsby-sitemap
title: Gatsby'de Site Haritası Nasıl Eklenir?
tags:
- react
- SEO
- sitemap
- gatsby
writer: Berkay Demirbas
avatar: "../images/raufsamestone.jpg"
english: false
---

**SEO**'nun olmazsa olmazlarından Sitemap'i (Site Haritası), **Gatsby**'ye plugin aracılığıyla ekleyebilirsiniz.

## Pluginin Yüklenmesi

**Yarn**

<deckgo-highlight-code>  
<code slot="code">  
yarn add gatsby-plugin-sitemap  
</code>  
</deckgo-highlight-code>

ya da

**Npm**

<deckgo-highlight-code>  
<code slot="code">  
npm install --save add gatsby-plugin-sitemap  
</code>  
</deckgo-highlight-code>

## Kullanımı

Paketi yükledikten sonra **gatsby-config.js** içerisine plugini ekliyoruz.

<deckgo-highlight-code>  
<code slot="code">  
siteMetadata: {
siteUrl: `https://www.example.com`,
},
plugins: \[`gatsby-plugin-sitemap`\]
</code>  
</deckgo-highlight-code>

## Sitemap Oluşturma

Sitemap'in oluşturulabilmesi için **production** modda siteyi çalıştırmak gerekiyor. Dolayısıyla **gatsby build && gatsby serve** komutu yazılmadan sitemap oluşmaz.

Plugin devreye girdiğinde daima şu sayfaları devre dışı bırakır ve buna müdahale edilemez.

* /dev-404-page
* /404
* offline-plugin-app-shell-fallback

## Opsiyonlar

**query**

Gatsby içinde oluşturulmuş içerikleri **GraphQL** ile ayıklayarak kategorize edebilirsiniz.

**output**

Sitemap'in gösterileceği yoldur. Varsayılan olarak **/sitemap.xml** tanımlıdır.

**exclude**

Site haritasında gösterilmesini istemediğiniz sayfaları **RegEX** ile ekleyebileceğiniz komuttur.

**createLinkInHead**

Site haritanızdaki **`<Head>`** etiketlerine linklerin eklenip eklenmeyeceğini **boolean** ile belirlediğiniz komuttur.

**sitemapSize**

Site haritasındaki içerik sayısını spesifik olarak belirleyebilirsiniz.
Varsayılan olarak **5000**'dir. 5000'den fazla olduğunda, site haritasının yüklenmesini ve robotlar tarafından okunmasını kolaylaştırmak amacıyla, 5001. içeriği **sitemap-2.xml** gibi bir output'a otomatik olarak devreder. Oldukça kullanışlı bir özellik.

**Kaynak**  
[https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap/](https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap/ "https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap/")