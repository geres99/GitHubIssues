import React from 'react';
import { render } from 'setup/tests/index';
import HeaderWithDescription from '.';

describe('HeaderWithDescription', () => {
  test('component renders correctly', () => {
    const text = 'Test';
    const { getAllByText } = render(
      <HeaderWithDescription header={text} description={text} />
    );
    const elements = getAllByText(text);

    expect(elements.length).toBe(2);
  });
});
