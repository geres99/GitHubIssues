import React from 'react';
import { render } from 'setup/tests/index';
import Avatar from '.';

describe('HeaderWithDescription', () => {
  test('component renders correctly', () => {
    const { getByTestId } = render(
      <Avatar
        size={50}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
    );
    const element = getByTestId('avatar');

    expect(element).toBeTruthy();
  });
});
