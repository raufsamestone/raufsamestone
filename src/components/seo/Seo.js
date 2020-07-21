import React from 'react';
import Helmet from 'react-helmet';
import useSiteMetadata from './useSiteMetadata';

type Props = {
  description?: String,
  lang?: String,
  meta: [],
  title: String,
  blogPostSlug:  String,
  cardImageURL: String
};

function SEO({ description, lang, meta, title, blogPostSlug, cardImageURL }: Props) {
  const siteMetadata = useSiteMetadata();
  const metaDescription = description || siteMetadata.description;
  const OgImage = cardImageURL ? cardImageURL :  `https://www.raufsamestone.com${blogPostSlug}twitter-card.jpg`  
  const TwitterCard = blogPostSlug ? 'summary_large_image' : 'summary_large_image'
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${siteMetadata.title}`}
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
        },
        {
          name: `twitter:creator`,
          content: '@raufsamestone',
        },
        {
          name: `twitter:site`,
          content: '@raufsamestone',
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          property: "og:image",
          content: OgImage,
        },
        {
          name: "twitter:card",
          content: TwitterCard
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

export default SEO;
