import React from 'react';
import { render } from 'setup/tests/index';
import ScreenContentWrapper from '.';

describe('ScreenContentWrapper', () => {
  test('component renders correctly', () => {
    const { getByTestId } = render(<ScreenContentWrapper />);
    const element = getByTestId('ScreenContentWrapper');

    expect(element).toBeTruthy();
  });
});
