import { cleanup, render } from '../../utils/testUtils';
import AppLayout from './AppLayout';
import React from 'react';

describe('[components] AppLayout', () => {
  afterEach(cleanup);

  it('should render', () => {
    const { getByText } = render(
      <AppLayout>
        <div>hello world</div>
      </AppLayout>,
    );

    expect(getByText('hello world')).toBeDefined();
  });
});
