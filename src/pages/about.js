import React from 'react';
import { graphql } from "gatsby"
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import { Layout, SEO } from 'components';
import {
  Label, AvatarImage, Wrapper, AboutContent,
  TypeScriptIcon,
  JSIcon,
  NetlifyIcon,
  GatsbyIcon,
  NextIcon,
  GraphQIcon,
  ReactIcon,
  VueIcon,
  CSSIcon,
  HTMLIcon,
  MarkdownIcon,
  ZeplinIcon,
  FigmaIcon,
  VimIcon,
  NuxtIcon,
  AppleIcon,
  VscodeIcon,
  AiIcon,
  GitLab,
  GithubIcon,
  XdIcon,
  ChromeIcon,
  PwaIcon,
  GoogleIcon,
  AnalyticsIcon,
  DataStudio,
  SemanticUI,
  MaterialUI,
  TailwindCss,
  SquareButton
} from '../components/raufsamestoneUI/styled'

const About = ({ data }) => (

  <Layout>
    <SEO title='About' />
    <br />
    <Fade in timeout={1000}>
      <SquareButton as='a' href='/Berkay_Demirbas_CV_2020.pdf'>
        Download CV as PDF
   </SquareButton>
    </Fade>
    <br /> <br />
    <Fade in timeout={1000}>
      <Typography variant='h1' color='textPrimary'>
        <>Berkay Demirbaş</>
      </Typography>
    </Fade>
    <Typography variant='p' color='textPrimary'>
      <>
        <Wrapper flex alignCenter>
          {
            data.allFile.edges.map(({ node }) => (
              <AvatarImage
                fixed={node.childImageSharp.fixed}
                alt='Berkay'
              />
            ))
          }
            @raufsamestone
        </Wrapper>
      </>
    </Typography>
    <AboutContent>
      <h3>Jobs</h3>
      <p>Digital Marketing, Growth Hacker, JAMstack Developer - Konzek Technology, Inc <Label color='#3caf3a'>Current</Label></p>
      <p>Co-Founder - Monotalic Digital Agency <Label color='#3caf3a'>Current</Label></p>
      <p>Digital Banking Operations Specialist, TEB, Inc <Label color='#17252A'>5 years</Label></p>
      <p>CRM Campaigns, Garanti Emeklilik, Inc <Label color='#17252A'>2 years</Label></p>
      <h3> Languages and Skills  </h3>
      <p>JAMstack <span role="img" aria-label="JAMstack"><GatsbyIcon />  <NextIcon /> <NuxtIcon /></span></p>
      <p>React <span role="img" aria-label="React JS"> <ReactIcon /></span></p>
      <p>Vue <span role="img" aria-label="Vue"><VueIcon /></span></p>
      <p>Netlify CMS <span role="img" aria-label="Netlify"><NetlifyIcon /></span></p>
      <p>GraphQL<span role="img" aria-label="GraphQL"><GraphQIcon /></span> </p>
      <p>HTML, CSS, Java Script<span role="img" aria-label="HTML, CSS, JS"> <HTMLIcon /> <CSSIcon /> <JSIcon /></span> </p>
      <p>Styled-components <span role="img" aria-label="Styled-components"> 💅</span>  </p>
      <p>Type Script <span role="img" aria-label="Type Script" ><TypeScriptIcon /></span> </p>
      <p>Template Languages for JS (Markdown, Nunjucks etc.)<span role="img" aria-label="Markdwon"><MarkdownIcon /></span>  </p>
      <p>UI/ UX Design and Development <span role="img" aria-label="UX Develop"><XdIcon />  <AiIcon />   <FigmaIcon /></span> </p>
      <p>UI Libraries<span role="img" aria-label="UI Libraries"> <SemanticUI /> <MaterialUI /> <TailwindCss />  </span></p>
      <p>Progressive Web Apps <span role="img" aria-label="PWA"><PwaIcon style={{ marginBottom: '-5px' }} /></span> </p>
      <p>Search Engine Optimization <span role="img" aria-label="SEO"> <GoogleIcon />  <AnalyticsIcon /> <DataStudio /></span></p>
      <p>Growth Hacking</p>
      <h3> Contributes  </h3>
      <p>Gatsby JS</p>
      <p>Semantic UI </p>
      <p>MDN Mozilla</p>
      <p>ButterCup</p>
      <p>More details on <a href='https://github.com/raufsamestone' target='__blank' rel='noopener'>GitHub</a> </p>
      <h3> Organizations  </h3>
      <p>JAMstack İstanbul </p>
      <p>React Turkey </p>
      <h3> Tools  </h3>
      <p>MacBook Pro 13'3 mid 2017 <span role="img" aria-label="Apple"><AppleIcon /></span> </p>
      <p>VSCode<span role="img" aria-label="VSCode"> <VscodeIcon /></span> </p>
      <p>Vim<span role="img" aria-label="Vim"> <VimIcon /></span> </p>
      <p>Git<span role="img" aria-label="GitLab"> <GitLab /> <GithubIcon /></span> </p>
      <p>Chrome <span role="img" aria-label="Chrome"> <ChromeIcon /></span></p>
      <p>Adobe XD <span role="img" aria-label="XD"> <XdIcon /></span></p>
      <p>Adobe Illustrator <span role="img" aria-label="Illustrator"> <AiIcon /></span></p>
      <p>Figma <span role="img" aria-label="Figma"> <FigmaIcon /></span></p>
      <p>Zeplin <span role="img" aria-label="Zeplin"> <ZeplinIcon /></span></p>
    </AboutContent>
  </Layout>
)

export default About;

export const blogListQuery = graphql`
query AboutImage {
        allFile(filter: {childImageSharp: {fixed: {originalName: {eq: "berkay.jpg"}}}}) {
        edges {
        node {
        id
        childImageSharp {
        fixed(width:50, height:50) {
        ...GatsbyImageSharpFixed
      }
        }
      }
    }
  }
}
`
