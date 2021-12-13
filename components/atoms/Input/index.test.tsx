import React from 'react';
import { render } from 'setup/tests/index';
import Input from '.';

describe('Input', () => {
  test('component renders correctly placeholder', () => {
    const text = 'Test';
    const { getByPlaceholderText } = render(<Input placeholder={text} />);
    const element = getByPlaceholderText(text);

    expect(element).toBeTruthy();
  });

  test('component renders correctly value', () => {
    const text = 'Test';
    const { getByDisplayValue } = render(<Input value={text} />);
    const element = getByDisplayValue(text);

    expect(element).toBeTruthy();
  });
});
