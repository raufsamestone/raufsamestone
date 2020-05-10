import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Footer } from '../../components/raufsamestoneUI/styled'
import styles from './style';

type Props = {
  classes: Object,
};

const FooterSection = ({ classes }: Props) => (
  <Footer
    className={classes.container}>
    © {new Date().getFullYear()}, I use Cookie 🍪
  </Footer>
);

export default withStyles(styles)(FooterSection);
