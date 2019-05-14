import React from 'react';
import { shallow } from 'enzyme';
import ColorDisplay from './ColorDisplay';

describe('ColorDisplay Tests', () => {
  it('renders ColorDisplay', () => {
    const wrapper = shallow(<ColorDisplay color='#000000' />);
    expect(wrapper).toMatchSnapshot();
  });
});
