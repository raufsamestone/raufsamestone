// import React from 'react';
// import { Layout, SEO } from 'components';
// import { graphql } from "gatsby"

// export default class Videos extends React.Component {
//   render() {
//     const videos = this.props.data.allYoutubeVideo
//     return (
//       <Layout>
//         <SEO title='Videos' />
//         <div className='video-grid'>
//           {
//             videos.edges.map(({ node }) => (
//               <div className='video-item' key={node.id}>
//                 <a href={`https://www.youtube.com/watch?v=${node.videoId}`} rel="noopener noreferrer" target='_blank' >
//                   <div>
//                   <img className='video-card' src={node.thumbnail.url} alt={node.title} />
//                   <div className='video-description'>
//                   <h2>{node.title}</h2>
//                   <date>{node.publishedAt}</date>
//                   </div>
//                   </div>
//                 </a>
//               </div>
//             ))
//           }
//         </div>
//       </Layout>
//     )
//   }
// }

// export const YoutubeVideosQuery = graphql`
// query YoutubeVideosQuery {
//   allYoutubeVideo {
//     edges {
//       node {
//         id
//         publishedAt(fromNow: true)
//         title
//         thumbnail {
//           url
//           height
//           width
//         }
//         description
//         videoId
//       }
//     }
//   }
// }
// `