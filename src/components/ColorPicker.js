import React from 'react';
import PropTypes from 'prop-types';
import styles from './ColorPicker.css';

export default function ColorPicker({ selectedColorButton }) {
  return (
    <section className={styles.ColorPicker}>
      <button className={styles.red} onClick={() => selectedColorButton('red')}>RED</button>
      <button className={styles.yellow} onClick={() => selectedColorButton('yellow')}>YELLOW</button>
      <button className={styles.blue} onClick={() => selectedColorButton('blue')}>BLUE</button>
    </section>
  );
}

ColorPicker.propTypes = {
  selectedColorButton: PropTypes.func.isRequired
};
