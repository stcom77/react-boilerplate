import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const composeSlide = Component =>
  class BaseSlide extends PureComponent {
    constructor(props) {
      super(props);
      this.isItYoutubeVideo(props.img);
    }

    static propTypes = {
      href: PropTypes.string,
      img: PropTypes.string.isRequired,
      onImageLoadCallback: PropTypes.func,
    };

    static defaultProps = {
      showSlide: true,
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

    isActive = activeIndex => this.index === activeIndex;

    setIndex(index) {
      this.index = index;
    }

    getIndex() {
      return this.index;
    }

    addSlideElement(node) {
      this.elements.push(node);
    }

    isItYoutubeVideo = img => {
      return img.match(/(http|https):\/\/[^\/]*youtube\.com/);
    };

    onImageLoad = () => {
      const { onImageLoadCallback } = this.props;
      if (onImageLoadCallback) {
        onImageLoadCallback();
      }
    };

    render() {
      return <Component {...this.props} {...this.state} />;
    }
  };

export default composeSlide;
