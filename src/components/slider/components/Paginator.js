import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Bullet from './Bullet';

class Paginator extends PureComponent {
  static propTypes = {
    doSlideChange: PropTypes.func,
    slides: PropTypes.arrayOf(PropTypes.string)
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  bulletClick = (e) => {
    const { doSlideChange } = this.props;

    if(e.target.dataset['index'] && doSlideChange){
      doSlideChange(parseInt(e.target.dataset['index'], 10));
    }
  }

  render() {
    const { slides } = this.props;
    return (
      <div className="bullets" onClick={this.bulletClick}>
        {slides.map((slide) => <Bullet key={slide.props.index} slide={slide} /> )}
      </div>
    );
  }
}

export default Paginator;
