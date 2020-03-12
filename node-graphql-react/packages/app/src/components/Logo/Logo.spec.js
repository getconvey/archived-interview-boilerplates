import { cleanup, render } from '../../utils/testUtils';
import Logo from './Logo';
import React from 'react';

describe('[components] Logo', () => {
  afterEach(cleanup);

  it('should render a dark logo', () => {
    render(<Logo />);
  });

  it('should render a light logo', () => {
    render(<Logo type="light" />);
  });
});
