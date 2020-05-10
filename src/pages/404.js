import React from 'react';
import { Layout, SEO } from 'components';
import { BackgroundedSpan } from '../components/raufsamestoneUI/styled'
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
const NotFoundPage = () => (
  <Layout>
    <SEO title='404: Not found' />
    <div style={{ display: "Flex", justifyContent: "center" }}>
      <Fade in timeout={1000}>
        <BackgroundedSpan>
          <Typography variant='h1' color='textPrimary'> 404
     </Typography>
        </BackgroundedSpan>
      </Fade>
    </div>
  </Layout>
);

export default NotFoundPage;
