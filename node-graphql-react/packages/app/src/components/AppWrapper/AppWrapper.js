import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import AppLayout from '../AppLayout';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import pink from '@material-ui/core/colors/pink';
import React from 'react';

const client = new ApolloClient({ uri: 'https://localhost:4000' });
const theme = createMuiTheme({
  palette: {
    background: {
      default: '#FAFAFA',
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

const AppWrapper = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <>
          <CssBaseline />
          <AppLayout />
        </>
      </ThemeProvider>
    </BrowserRouter>
  </ApolloProvider>
);

export default AppWrapper;
