import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import pink from '@material-ui/core/colors/pink';
import PropTypes from 'prop-types';
import React from 'react';
import { StylesProvider } from '@material-ui/styles';

function ThemeProvider(props) {
  const { children } = props;

  const theme = React.useMemo(() => {
    const nextTheme = createMuiTheme({
      palette: {
        background: {
          default: '#F4F4F4',
          drawer: '#271b3c',
          paper: '#FFFFFF',
        },
        primary: {
          dark: '#271b3c',
          light: '#BDA0C5',
          main: '#884696',
        },
        secondary: pink,
      },
    });

    return nextTheme;
  }, []);

  return (
    <MuiThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <CssBaseline />
        {children}
      </StylesProvider>
    </MuiThemeProvider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default ThemeProvider;
