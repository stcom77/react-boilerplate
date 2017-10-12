import React, { Children, cloneElement, PureComponent } from 'react';
import PropTypes from 'prop-types';
import composeSlide from './BaseSlide';
import SlideElement from './SlideElement';
import random from 'lodash/random';
import { isRetina } from '../utils/other';

class Slide extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    href: PropTypes.string,
    img: PropTypes.string.isRequired,
    onImageLoadCallback: PropTypes.func,
  }

  static defaultProps = {
    showSlide: true
  };

  constructor(props) {
    super(props);
    this.isItYoutubeVideo(props.img);
    const elements = [];

    Children.forEach(props.children, (child) => {
      if (child.type == SlideElement) {
        elements.push(cloneElement(child, { key: random(1000), style: {...props.style, ...child.props.style} }));
      }
    });
    this.state = { elements };
  }

  static defaultProps = {
    showSlide: true
  };

  isItYoutubeVideo = (img) => {
    return img.match(/(http|https):\/\/[^\/]*youtube\.com/);
  };

  render() {
    const { img, img2x = img, style, showSlide, onImageLoadCallback, width = '100%', height = '100%', autoplay, activeSlide, alt = '', href = '' } = this.props;
    const { elements } = this.state;
    const slideImage = isRetina() ? img2x : img;
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
      imgElement = <img src={img} alt={alt} className="le_slide__main_img" style={{ visibility: 'hidden', display: 'none' }} />;
    }
    return (
      <a
        className="le_slide slide"
        data-src={img}
        style={{ ...style, backgroundImage: `url(${slideImage})`, backgroundPosition: 'center center', backgroundSize: 'cover' }}
        onLoad={onImageLoadCallback}
        role="tabpanel"
        aria-hidden={!activeSlide}
        href={href}
      >
        {imgElement}
        <div className="le_slide__elements" style={style}>
          {elements}
        </div>
      </a>
    );
  }
}

export default composeSlide(Slide);
