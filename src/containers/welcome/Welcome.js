import React from 'react';
import { CTALink } from '../../components/raufsamestoneUI/styled'
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import content from './content';
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';
const { tagline, title, subtitle, span } = content;
const show = true;
const aniDuration = '2000'
const color = 'yellow';
const Welcome = () => (
  <>
    <Typography variant='h3' color='textPrimary'>
      {tagline}
    </Typography>
    <Fade in timeout={1000}>
      <Typography variant='h1' color='textPrimary'>
        <>
          {title}
          <RoughNotation color={color}  animationDuration={aniDuration} show={show} type='highlight'>
            {span}
          </RoughNotation>
        </>
      </Typography>
    </Fade>
    <Typography variant='h3' color='textPrimary'>
    <div style={{
      marginTop:'1rem'
    }} />
   <RoughNotationGroup show={show}>
        Start with my JAMstack
        <RoughNotation animationDuration={aniDuration} type='box'> <CTALink title='Jamstack Videos' to='/videos'>videos</CTALink></RoughNotation>
      </RoughNotationGroup>
    </Typography>
  </>
);

export default Welcome;
