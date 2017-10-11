import React, { PureComponent, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';

export default class Slide extends PureComponent {
  static propTypes = {
    activeSlide: PropTypes.string,
    alt: PropTypes.string,
    autoplay: PropTypes.bool,
    children: PropTypes.node,
    height: PropTypes.string,
    img: PropTypes.string,
    onImageLoadCallback: PropTypes.func,
    showSlide: PropTypes.bool,
    style: PropTypes.object,
    width: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.isItYoutubeVideo(props.img);
  }

  static defaultProps = {
    showSlide: true
  };

  getNode() {
    return this.node;
  }

  getTransition() {
    return this.transition;
  }

  getTimeout() {
    return this.timeout;
  }

  isActive = (activeIndex) => (this.index === activeIndex);

  setIndex(index) {
    this.index = index;
  }

  getIndex() {
    return this.index;
  }

  addSlideElement(node) {
    this.elements.push(node);
  }

  isItYoutubeVideo = (img) => {
    return img.match(/(http|https):\/\/[^\/]*youtube\.com/);
  };

  render() {
    const { img, style, showSlide, onImageLoadCallback, width = '100%', height = '100%', autoplay, activeSlide, alt = '' } = this.props;
    if (!showSlide) {
      return null;
    }

    let imgElement;
    if (this.isItYoutubeVideo(img)) {
      if (activeSlide) {
        imgElement = <iframe style={{ width, height }} src={`${img}${autoplay ? '?autoplay=1' : ''}`} />;
      } else {
        imgElement = null;
      }
    } else {
      imgElement = <img src={img} alt={alt} className="le_slide__main_img" />;
    }
    return (
      <div className="le_slide" style={{ ...style, backgroundImage: `url(${img})` }} onLoad={onImageLoadCallback}>
        {imgElement}
        {Children.map(this.props.children, (child) => {
          return cloneElement(child, { style });
        })}
      </div>
    );
  }
}

