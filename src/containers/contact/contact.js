import React from 'react';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import { OutLink, BackgroundedSpan } from '../../components/raufsamestoneUI/styled'

import content from './content';

const { title } = content;

const Contact = () => (
  <>
    <Fade in timeout={1000}>
      <Typography variant='h1' color='textPrimary'>
        <>{title}</>
      </Typography>
    </Fade>
    {/* <LinkList links={links} /> */}<br/>
    <OutLink href='mailto:hey@raufsamestone.com' rel='noopener' target='_blank'>Send <BackgroundedSpan>e-mail</BackgroundedSpan></OutLink><br/>
    <OutLink href='https://calendly.com/raufsamestone' rel='noopener' target='_blank'> Schedule a meeting on <BackgroundedSpan>Calendly</BackgroundedSpan></OutLink> <br/>
    <OutLink href='https://t.me/raufsamestone' rel='noopener' target='_blank'> Message me on <BackgroundedSpan>Telegram</BackgroundedSpan></OutLink> <br/>
    <OutLink href='https://github.com/raufsamestone' rel='noopener' target='_blank'> Repositories on <BackgroundedSpan>GitHub</BackgroundedSpan></OutLink> or  <OutLink href='https://gitlab.com/raufsamestone' rel='noopener' target='_blank'> <BackgroundedSpan>GitLab</BackgroundedSpan></OutLink> <br/>
    <OutLink href='https://twitter.com/raufsamestone' rel='noopener' target='_blank'>Or you can try <BackgroundedSpan>@raufsamestone</BackgroundedSpan> any social media.</OutLink> <br/>
  </>
);

export default Contact;
