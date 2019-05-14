import React, { PureComponent } from 'react';
import styles from './ColorPicker.css';

export default class ColorPicker extends PureComponent {
  state = {
    color: 'black'
  };

  colorClicked = color => {
    this.setState({ color });
    console.log(`${color}`);
  }
  
  render() {
    const { color } = this.state;

    return (
      <section className={styles.ColorPicker}>
        <button className={styles.red} onClick={this.colorClicked.bind(null, 'red')}>RED</button>
        <button className={styles.yellow} onClick={() => this.colorClicked('yellow')}>YELLOW</button>
        <button className={styles.blue} onClick={() => this.colorClicked('blue')}>BLUE</button>
        <div className={styles[color]}></div>
      </section>
    );
  }
}
