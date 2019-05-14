import React from 'react';
import { shallow } from 'enzyme';
import Incrementer from './Incrementer';

describe('Incrementer Tests', () => {
  it('Renders Incrementer', () => {
    const wrapper = shallow(<Incrementer />);
    expect(wrapper).toMatchSnapshot();
  });

  it('increments counter on click', () => {
    const wrapper = shallow(<Incrementer />);
    wrapper.find('button').at(0).simulate('click');
    expect(wrapper.state('counter')).toEqual(1);
  });

});
