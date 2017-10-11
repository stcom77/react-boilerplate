import React from 'react';
import PropTypes from 'prop-types';

const Thumbnail = ({ src: image, size, onClick }) => {
  const style = {
    backgroundImage: `url(${image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: size,
    height: size
  };
  return (
    <div className="thumb__item" style={style} onClick={onClick} />
  );
};

Thumbnail.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.string,
  src: PropTypes.string,
};

export default Thumbnail;
