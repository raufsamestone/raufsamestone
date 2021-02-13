import React, { Component } from 'react';
import { graphql, Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import { SEO } from 'components';
import Layout from '../components/layout';
import {
  GatsbyLink,
  PostContent,
  Time,
  AvatarImage,
  Wrapper,
  Dot,
  Label,
} from '../components/raufsamestoneUI/styled';

export default class BlogTemplate extends Component {
  async componentDidMount() {
    try {
      const deckdeckgoHighlightCodeLoader = require('@deckdeckgo/highlight-code/dist/loader');

      await deckdeckgoHighlightCodeLoader.defineCustomElements(window);
    } catch (err) {
      console.error(err);
    }
  }
  render() {
    const post = this.props.data.markdownRemark;
    return (
      <Layout>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description | post.excerpt}
          blogPostSlug={post.fields.slug}
          lang={post.frontmatter.english ? 'en' : 'tr'}
          cardImageURL={post.frontmatter.cardImageURL}
        />
        <br />
        <GatsbyLink to='/blog'>
          <Typography variant='p' align='center' color='textPrimary'>
            Back to posts
          </Typography>
          <br />
        </GatsbyLink>
        <br />
        <Fade in timeout={1000}>
          <Typography variant='h1' color='textPrimary'>
            {post.frontmatter.title}
          </Typography>
        </Fade>
        <Wrapper margin flex alignCenter>
          <AvatarImage
            fixed={post.frontmatter.avatar.childImageSharp.fixed}
            alt={post.frontmatter.writer}
          />
          <Link to='/about'> {post.frontmatter.writer}</Link>
          <Dot>•</Dot>
          <Time> {post.frontmatter.date}</Time>
        </Wrapper>
        <PostContent dangerouslySetInnerHTML={{ __html: post.html }} />
        {post.frontmatter.tags.map((tag, i) => [
          <GatsbyLink to={`/tags/${kebabCase(tag)}/`} key={i}>
            <Label color='#17252A'>{tag}</Label>
            {i < post.frontmatter.tags.length - 1 ? ' ' : ''}
          </GatsbyLink>,
        ])}
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        tags
        description
        english
        writer
        cardImageURL
        avatar {
          childImageSharp {
            fixed(width: 30, height: 30, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
      excerpt(pruneLength: 200)
    }
  }
`;
