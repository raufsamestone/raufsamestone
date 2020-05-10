---
date: "2020-05-10"
path: 'react-helmet-jamstack-seo'
title: "React Helmet ile SEO Componenti Oluşturma"
tags: ["Jamstack", "SEO", "Gatsby", "React", "React Helmet"]
writer: Berkay Demirbas
avatar: ../images/berkay.jpg
english: false
---

**Gatsby**'de **React Helmet** kütüphanesini kullanarak, SEO componentinin nasıl oluşturulduğundan bahsedeceğim. 

Öncelikle:
## React Helmet Nedir? 

Düz bir **HTML** sayfasında kullanılabilen etiketlerin React üzerinde dinamikleştirilmesine olanak sağlar. Kullanımı son derece basittir.

Ancak, pure **React** ile sayfa oluşturup `react-helmet` ile **SEO componenti** yazmaktansa, zaten react-helmet'i kullanmak için gereksinim duyduğumuz Static bir site üzerinde, yani **JAMStack** uygulamasında bunu yapacağımız için, **Gatsby** gibi **SSG**'ler üzerinden devam etmenizi ve bu componenti modifiye etmenizi tavsiye ederim.

Gatsby Default Starter paketini indirelim:

 <deckgo-highlight-code>
    <code slot="code">
gatsby new gatsby-starter-default https://github.com/gatsbyjs/gatsby-starter-default
    </code>
</deckgo-highlight-code>


**Gatsby-default-starter** paketiyle birlikte gelen bir SEO componentimiz var. Bu componenti inceleyelim.

İki ana kütüphane bizi karşılıyor. `react-helmet` ve `prop-types`

 <deckgo-highlight-code>
    <code slot="code">
import PropTypes from prop-types"
import { Helmet } from "react-helmet"
    </code>
</deckgo-highlight-code>

`prop-types` ile var olan **SEO.JS** componenti içerisindeki Propsların alabileceği değerleri giriyoruz. Burada dikkat edilmesi gerek durum, props olarak alınabilecek değerler sadece String değil Object de alabiliyor. Böylelikle dinamik olarak oluşturduğunuz sayfalardaki dataları, örneğin; **Markdown** ya da **YAML** datalarını, bu propslarda kullanabilirsiniz.

 <deckgo-highlight-code>
    <code slot="code">
SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}
SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}
    </code>
</deckgo-highlight-code>



React Helmet kısmında ise, renderlanmış bir HTML etiketlerinin nasıl olabileceğini belirliyoruz.

 <deckgo-highlight-code highlight-lines="9,10">
    <code slot="code">
 < Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        }
      ].concat(meta)}
    />
    </code>
</deckgo-highlight-code>


## Kullanımı 

SEO componentin, dinamik sayfalarınızda, örneğin `SecondPage.JS` içerisine importlamanız yeterli.

 <deckgo-highlight-code highlight-lines="1,2, 6,6">
    <code slot="code">
import React from "react"
import { PageProps } from "gatsby"

import SEO from "../components/seo"

const SecondPage = (props: PageProps) => (
  <>
    < SEO  title="Sayfa Başlığı"  description="Açıklama"/>
    <h1> Sayfa İçeriği</h1>
  </>
)
export default SecondPage
    </code>
</deckgo-highlight-code>


### Kaynaklar

Github: <a href='https://github.com/nfl/react-helmet' rel="noopener noreferrer" target='_blank'>React Helmet</a>

Github: <a href='https://github.com/gatsbyjs/gatsby-starter-default'>Gatsby Starter Default</a>

--- 

Detaylı videoyu, buradan izleyebilirsiniz. 

`youtube:https://www.youtube.com/embed/dm_U_4vwhKA`

