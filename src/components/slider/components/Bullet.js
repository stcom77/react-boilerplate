import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Bullet extends PureComponent {
  static propTypes = {
    slide: PropTypes.object,
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      slide
    } = this.props;
    console.log(slide.props);
    return (
      <span key={slide.props.index} data-index={slide.props.index} className="bullet"><BulletThumb img={slide.props.thumb} /></span>
    );
  }
}

export default Bullet;

const BulletThumb = ({ img }) => {
  return (
    <div style={{ backgroundImage: `url(${img})` }} className="bullet__thumb"></div>
  );
};

BulletThumb.propTypes = {
  img: PropTypes.string,
};
