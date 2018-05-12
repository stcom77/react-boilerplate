import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { isTouchDevice } from 'utils/other';
import './styles.styl';

class LastWorksItem extends PureComponent {
  static propTypes = {
    children: PropTypes.any,
    src: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      hovered: false
    };
  }

  handleOverlayClickTouchDevice = () => {
    if (isTouchDevice()) {
      this.setState(prevState => ({
        hovered: !prevState.hovered
      }));
    }
  }

  handleMouseEnter = () => {
    if (!isTouchDevice()) {
      this.setState({ hovered: true });
    }
  }

  handleMouseLeave = () => {
    if (!isTouchDevice()) {
      this.setState({ hovered: false });
    }
  }

  render() {
    const { src, children } = this.props;

    return (
      <div className="link_with_description">
        <figure className="image is-square">
          <img src={src} />
        </figure>
        <div className={`overlay ${this.state.hovered ? 'hovered' : ''}`} onClick={this.handleOverlayClickTouchDevice} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
          {children}
        </div>
      </div>
    );
  }
}


export default LastWorksItem;
