import React from 'react';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import content from './content';

const { tagline, title, subtitle, span } = content;

const Welcome = () => (
  <>
    <Typography variant='h3' color='textPrimary'>
      {tagline}
    </Typography>
    <Fade in timeout={1000}>
      <Typography variant='h1' color='textPrimary'>
        <>
          {title} 
           <span className='highlighted'>{span}</span>
        </>
      </Typography>
    </Fade>
    <Typography variant='h3' color='textPrimary'>
      {subtitle} <br /> <br />
    </Typography>
  </>
);

export default Welcome;
