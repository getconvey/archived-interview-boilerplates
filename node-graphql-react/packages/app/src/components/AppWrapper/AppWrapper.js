import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Routes from '../Routes';
import ThemeProvider from '../../providers/ThemeProvider';

const client = new ApolloClient({ uri: 'https://localhost:4000' });

const AppWrapper = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <ThemeProvider>
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  </ApolloProvider>
);

export default AppWrapper;
