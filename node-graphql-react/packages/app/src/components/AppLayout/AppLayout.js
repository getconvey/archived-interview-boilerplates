import Container from '@material-ui/core/Container';
import Logo from '../Logo';
import makeStyles from '@material-ui/core/styles/makeStyles';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles(theme => ({
  logo: {
    height: 40,
    width: 'auto',
  },
  topbar: {
    alignItems: 'center',
    display: 'flex',
    height: theme.spacing(15),
    justifyContent: 'flex-start',
  },
}));

function AppLayout(props) {
  const { children } = props;
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.topbar}>
        <Logo className={classes.logo} />
      </div>
      {children}
    </Container>
  );
}

AppLayout.displayName = 'AppLayout';
AppLayout.propTypes = {
  children: PropTypes.node,
};

export default AppLayout;
