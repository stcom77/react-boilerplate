import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Thumbnail from './Thumbnail';

export default class ThumbnailContainer extends PureComponent {
  static propTypes = {
    activeSlide: PropTypes.number,
    doSlideChange: PropTypes.func,
  }

  static defaultProps = {
    max_thumbs_count: 5,
    activeSlide: 0,
  };

  constructor(props) {
    super(props);
    this.state = {
      items: this.makeThumbs(props),
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activeSlide !== this.props.activeSlide) {
      this.setState({
        items: this.makeThumbs(nextProps)
      });
    }
  }

  onThumbClick = (index) => () => {
    const { doSlideChange } = this.props;
    if (doSlideChange) {
      doSlideChange(index);
    }
  }

  makeThumbs = (props) => {
    const slides = props.slides.takeAround(props.activeSlide, props.max_thumbs_count);
    return slides.map((slide, index) => {
      return <Thumbnail key={slide.props.thumb || slide.props.img} src={slide.props.thumb || slide.props.img} size={props.thumbSize || '50px'} index={slide.index} onClick={this.onThumbClick(index)} />;
    });
  };

  makeRef = (el) => this.wrapper = el;

  render() {
    const { items } = this.state;
    return <div className="thumb__wrapper" ref={this.makeRef}>{items}</div>;
  }
}
