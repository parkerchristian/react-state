import React, { PureComponent } from 'react';

export default class Incrementer extends PureComponent {
  state = {
    counter: 0
  };

  buttonClick = () => {
    this.setState(state => {
      return { counter: state.counter + 1 };
    });
  }

  render() {
    const { counter } = this.state;

    return (
      <section>
        <p>Count: {counter}</p>
        <button onClick={this.buttonClick}>Count!</button>
      </section>
    );
  }
}
