import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Navigation} from 'components';

import styles from './style';

type Props = {
  classes: Object,
};

const Header = ({ classes }: Props) => (
  <header className={classes.container}>
    <div className={classes.logo}>
    </div>
    <div className={classes.navigation}>
      <Navigation />
    </div>
  </header>
);

export default withStyles(styles)(Header);
