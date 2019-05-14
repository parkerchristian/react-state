import React, { PureComponent } from 'react';
import ColorPicker from './ColorPicker';

export default class App extends PureComponent {
  state = {
    color: ''
  }
  selectedColor = color => {
    this.setState({ color });
  }
  render() {
    return (
      <ColorPicker selectedColorButton={this.selectedColor} />
    );
  }
}
