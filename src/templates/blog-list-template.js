import React from 'react';
import { SEO } from 'components';
import Layout from '../components/layout'
import { graphql, Link } from "gatsby"
import Fade from '@material-ui/core/Fade';
import EN from "../../src/images/en.svg"
import TR from "../../src/images/tr.svg"
import { GatsbyLink, Title, Wrapper, Time, SubTitle, PaginationButtonGroup, AvatarImage, Dot, ListWrapper } from '../components/raufsamestoneUI/styled'

export default class BlogList extends React.Component {
  render() {
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()
    const posts = this.props.data.allMarkdownRemark

    return (
      <Layout>
        <SEO title='Blog' />
        <br />
        <br />
        <h1>Latest Blog Posts</h1>
        {
          posts.edges.map(({ node }) => (
            <ListWrapper>
              <Wrapper key={node.id}>
                <GatsbyLink to={node.frontmatter.path || node.fields.slug}>
                  <Fade in timeout={1000}>
                    <Title>{node.frontmatter.title} 
                    </Title>
                  </Fade>
                  <Wrapper style=
                    {{ margin: '5px 0' }} flex alignCenter>
                    <AvatarImage
                      fixed={node.frontmatter.avatar.childImageSharp.fixed}
                      alt={node.frontmatter.writer}
                    />
                    {node.frontmatter.writer}
                    <Dot>•</Dot>
                    <Time> {node.frontmatter.date}</Time>  <Dot>•</Dot>
                    {node.timeToRead} min to read 
                    <Dot>•</Dot>
                    {node.frontmatter.english ?
                      <img className='language-flag' src={EN} alt='English USA Language Flag' />
                      :
                      <img  className='language-flag'src={TR} alt='Turkish Language Flag' />
                    }
                </Wrapper>
                  <SubTitle>{node.excerpt}</SubTitle>
                </GatsbyLink>
              </Wrapper>
            </ListWrapper>
          ))
        }

        <PaginationButtonGroup>
          {!isFirst && (
            <GatsbyLink to={`/blog/${prevPage}`} rel="prev">
              Back
            </GatsbyLink>
          )}
          {!isLast && (
            <GatsbyLink to={`/blog/${nextPage}`} rel="next">
              Next
            </GatsbyLink>
          )}
        </PaginationButtonGroup>
        <Link to='/rss'>Follow the RSS feed</Link> <br />
        <Link to='/tags'>Show all blog tags</Link>
      </Layout>
    )
  }
}


export const blogListQuery = graphql`
query blogListQueryList($skip: Int!, $limit: Int!) {
  allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }
    limit: $limit
    skip: $skip
  ) {
    edges {
      node {
        fields{
          slug
        }
        id
        excerpt(pruneLength: 200)
        frontmatter {
          date(formatString: "LL")
          path
          title
          writer
          english
          avatar {
            childImageSharp {
              fixed(width:30, height:30) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
        timeToRead
      }
    }
  }
}


`

