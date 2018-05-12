import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { isTouchDevice } from 'utils/other';


class GalleryItem extends PureComponent {
  static propTypes = {};

  constructor() {
    super();
    this.state = {
      hovered: false
    };
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
    const { src, srcLightbox, children } = this.props;

    return (
      <article className="tile is-child link_with_description">
        <figure className="image">
          <img src={src} data-lightbox={srcLightbox} />
        </figure>
        <div className={`overlay ${this.state.hovered ? 'hovered' : ''}`} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
          {children}
        </div>
      </article>
    );
  }
}

export default GalleryItem;
