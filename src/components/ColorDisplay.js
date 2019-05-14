import React from 'react';
import PropTypes from 'prop-types';
import StyleSheet from './ColorDisplay.css';

export default function ColorDisplay({ color }) {
  return (
    <div className={StyleSheet.ColorDisplay} style={{ background: color }}></div>
  );
}

ColorDisplay.propTypes = {
  color: PropTypes.string.isRequired
};
