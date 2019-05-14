import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from './ColorPicker';

describe('ColorPicker Tests', () => {
  it('renders color picker', () => {
    const wrapper = shallow(<ColorPicker selectedColorButton={jest.fn()}/>);
    expect(wrapper).toMatchSnapshot();
  });
  
  it('selects red on click', () => {
    const selectedColorButton = jest.fn();
    const wrapper = shallow(<ColorPicker selectedColorButton={selectedColorButton} />);
    wrapper.find('button').at(0).simulate('click');
    expect(selectedColorButton).toHaveBeenCalledWith('red');
  });
  it('selects yellow on click', () => {
    const selectedColorButton = jest.fn();
    const wrapper = shallow(<ColorPicker selectedColorButton={selectedColorButton} />);
    wrapper.find('button').at(1).simulate('click');
    expect(selectedColorButton).toHaveBeenCalledWith('yellow');
  });
  it('selects blue on click', () => {
    const selectedColorButton = jest.fn();
    const wrapper = shallow(<ColorPicker selectedColorButton={selectedColorButton} />);
    wrapper.find('button').at(2).simulate('click');
    expect(selectedColorButton).toHaveBeenCalledWith('blue');
  });

});
