import React from 'react';
import { render } from 'setup/tests/index';
import Typography from '.';

describe('Typography', () => {
  test('component renders correctly', () => {
    const text = 'Test';
    const { getByText } = render(<Typography>{text}</Typography>);
    const element = getByText(text);

    expect(element).toBeTruthy();
  });
});
