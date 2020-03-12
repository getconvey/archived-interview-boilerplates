import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MockedProvider } from '@apollo/react-testing';
import React from 'react';
import { render } from '@testing-library/react';
import ThemeProvider from '../providers/ThemeProvider';

const Wrapper = ({ children, mocks }) => (
  <MockedProvider mocks={mocks}>
    <BrowserRouter>
      <ThemeProvider>{children}</ThemeProvider>
    </BrowserRouter>
  </MockedProvider>
);

Wrapper.propTypes = {
  children: PropTypes.node,
  mocks: PropTypes.array,
};

const customRender = (ui, options) =>
  render(ui, { wrapper: Wrapper, ...options });

export * from '@testing-library/react';
export { customRender as render };
