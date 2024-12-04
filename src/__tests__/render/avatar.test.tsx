import React from 'react';
import { _render } from '../utils';
import { Avatar } from '../../components';
import { TestIds } from '../../config';

const IMAGE_URL = 'https://avatars.githubusercontent.com/u/129527?v=4';
describe('@Tennisi/Avatar', () => {
  test('renders correctly', () => {
    const { getByTestId } = _render(<Avatar />);
    expect(getByTestId(TestIds.AVATAR_CONTAINER)).toBeDefined();
  });
  test('renders correctly image by url with loader', async () => {
    const { getByTestId } = _render(<Avatar imageSource={IMAGE_URL} />);
    expect(getByTestId(TestIds.AVATAR_CONTAINER)).toBeDefined();
    expect(getByTestId(TestIds.AVATAR_IMAGE)).toBeDefined();
  });
});
