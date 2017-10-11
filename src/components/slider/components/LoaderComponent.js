import PropTypes from 'prop-types';
import React from 'react';
import style from '../styles/loader.styl';

const Loader = ({ type }) => {
  return (
    <div className={`loader ${type}`}>Loading...</div>
  );
};

Loader.propTypes = {
  type: PropTypes.string,
};

export default Loader;
