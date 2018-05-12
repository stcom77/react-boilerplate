import React, { PureComponent, Children } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import Slide from './Slide';
import SlideCollection from './SlideCollection';
import Button from './button';
import SVGInline from 'react-svg-inline';
import iconLeft from '../icons/arrowleft.svg';
import iconRight from '../icons/arrowright.svg';
import { MOVE_NEXT, MOVE_PREV } from '../utils/constants';
import ThumbnailContainer from './ThumbnailContainer';
import debounce from 'lodash/debounce';
import { compareState } from '../utils/other';
import Loader from './LoaderComponent';
import Paginator from './Paginator';
import { TimelineMax, TimelineLite } from 'gsap';
//todo-stas: для каждого слайда сделать возможность указания длительности и начала анимации
//todo-stas: для слайдов с авто сменой рендерить stagger для ручный без задержки

import styles from '../styles/styles.styl';

class Slider extends PureComponent {
  static propTypes = {
    animationType: PropTypes.string,
    arrows: PropTypes.shape({
      enable: PropTypes.bool,
      style: PropTypes.string,
      hide_onleave: PropTypes.bool,
    }),
    auto: PropTypes.number, // autoplay timeout seconds if set slides autoplayed
    bullets: PropTypes.bool,
    buttons: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    direction: PropTypes.number,
    firstSlide: PropTypes.number,
    height: PropTypes.number,
    lazy: PropTypes.bool,
    nextButton: PropTypes.bool,
    prevButton: PropTypes.bool,
    showThumbnails: PropTypes.bool,
    sliderLayout: PropTypes.string,
    speed: PropTypes.number,
    spinner: PropTypes.string,
    thumbnailsSize: PropTypes.string,
    wheel: PropTypes.bool,
    width: PropTypes.number,
  };

  static defaultProps = {
    direction: MOVE_NEXT,
    firstSlide: 0,
    lazy: false,
    animationType: 'slide',
    speed: 2,
  };

  constructor(props) {
    super(props);
    this.state = {};
    const slides = new SlideCollection();
    Children.map(props.children, child => {
      if (child.type === Slide) {
        slides.add(this.processSlide(child));
      }
    });
    // const options = this.getOptionsFromLayout(props.children);
    this.state = {
      slides,
      activeSlide: 0,
      isNextSlide: slides.length > 1,
      isPrevSlide: false,
      lazy: props.lazy,
    };
  }

  componentDidMount() {
    // window.addEventListener('load', ()=>this.adjustSize());
    const slides = this.renderedSlidesArray;
    this.slidesNode = slides.map(slide => findDOMNode(slide));
    this.adjustSize();
  }

  shouldComponentUpdate(nextProps, nextState) {
    const changedKeys = compareState(this.state, nextState);
    return !this.changesOnlyImagesLoadedState(changedKeys);
  }

  makeAnimation = false;
  countLoadedImages = 0;
  imageSizes = [];
  maxImageRatio = 1;

  adjustSize = () => {
    // this.calculateSlidesRatio();
    // debugger;
    const { width, height } = this.props;
    if (width) {
      this.leSlider.style.width = `${width}px`;
    }
    if (height) {
      this.leSlider.style.height = `${height}px`;
    }
  };

  processSlide = slide => {
    if (!React.isValidElement(slide)) {
      return null;
    }
    // if (slide.type.name != 'BaseSlide') {
    //   return null;
    // }
    const { img, img2x = img, thumb = img } = slide.props;
    if (!img) {
      return null;
    }
    return this.applyProps(slide, { img, img2x, thumb });
  };

  changesOnlyImagesLoadedState(changes) {
    return changes.length === 1 && changes.includes('imagesLoaded');
  }

  moveNextSlide = debounce(() => {
    const { slides, activeSlide: currentSlide } = this.state;
    if (this.slider && currentSlide < slides.length - 1) {
      const activeSlide = this.getNextSlideIndex(slides, currentSlide);
      this.slider.play(`slide${activeSlide}start`);
      this.setState({ activeSlide });
    }
  }, 500);

  movePrevSlide = debounce(() => {
    const { slides, activeSlide: currentSlide } = this.state;
    if (this.slider && currentSlide > 0) {
      const activeSlide = this.getPrevSlideIndex(slides, currentSlide);
      // this.slider.reverse(`slide${activeSlide}start`);
      this.slider.reverse();
      this.setState({ activeSlide });
    }
  }, 500);

  makeWrapperRef = el => (this.mainDiv = el);

  onWheel = event => {
    const { wheel } = this.props;
    if (wheel) {
      event.preventDefault();
      event.persist();
      if (event.deltaX >= 0) {
        this.moveNextSlide();
      } else {
        this.movePrevSlide();
      }
    }
  };

  onLoad = event => {
    const { target } = event;
    const { slides, imagesLoaded = 0 } = this.state;
    const { lazy } = this.props;

    if (target instanceof HTMLImageElement && target.classList.contains('le_slide__main_img')) {
      this.imageSizes.push({ width: target.width, height: target.height });
      if (lazy) {
        this.setState({ allImagesLoaded: true });
      } else {
        this.setState({ imagesLoaded: imagesLoaded + 1 });

        if (this.allImagesLoaded(slides, imagesLoaded)) {
          //расчет размера слайдов и адаптация
          // debugger;
          console.log('images loaded');
          this.setState({ allImagesLoaded: true });
          this.makeAnimationGsap();
        }
      }
    }
  };

  allImagesLoaded(slides, imagesLoaded) {
    return slides.length <= imagesLoaded + 1;
  }

  makeFadeAnimation = () => {
    const { auto, speed, direction } = this.props;
    const slides = this.slidesNode;
    const makeTween = (slides, slideIndex) => {
      const tl = new TimelineLite();
      const nextSlideIndex = slideIndex == slides.length - 1 ? 0 : slideIndex + 1;
      tl.to(slides[slideIndex], speed, { autoAlpha: 0 }, 0);
      tl.to(slides[nextSlideIndex], speed, { autoAlpha: 1 }, 0);
      return tl;
    };
    if (auto) {
      const parent = new TimelineMax({ repeat: -1, delay: auto, repeatDelay: auto });
      [...slides].forEach((slide, index) => (slide.style.opacity = index == 0 ? 1 : 0));
      const tweens = [...slides].map((slide, index) => makeTween(slides, index));
      tweens.forEach((tween, index) => {
        parent.add(tween, auto * index);
      });
      this.slider = parent;
    } else {
      [...slides].forEach((slide, index) => (slide.style.opacity = index == 0 ? 1 : 0));
      const parent = new TimelineMax({ paused: true });
      for (let i = 0; i < slides.length; i++) {
        parent.addLabel(`slide${i == slides.length - 1 ? 0 : i + 1}start`, i * 2);
        parent.addCallback(() => this.completeSlideChange(i == slides.length - 1 ? 0 : i + 1), i * 2);
        parent.add(makeTween(slides, i), i * 2);
        parent.addLabel(`slide${i == slides.length - 1 ? 0 : i + 1}end`);
        parent.addPause(`slide${i == slides.length - 1 ? 0 : i + 1}end`);
      }
      this.slider = parent;
      window.mySlider = parent;
    }
  };

  setCurrentSlide = index => this.setState({ activeSlide: index });

  completeSlideChange = index => {
    const { slides } = this.state;

    switch (true) {
      case index == slides.length - 1:
        this.setState({ isNextSlide: false, isPrevSlide: true });
        break;
      case index == 0:
        this.setState({ isPrevSlide: false, isNextSlide: true });
        break;
      default:
        this.setState({
          isPrevSlide: true,
          isNextSlide: true,
        });
    }
    this.setCurrentSlide(index);
  };

  makeSlideAnimation = animDuration => {
    // const slides = document.getElementsByClassName('le_slide');
    const { auto, speed, direction } = this.props;

    const slidesNode = this.slidesNode;
    const cw = slidesNode[0].clientWidth;
    [...slidesNode].forEach((slide, index) => (slide.style.left = index == 0 ? 0 : `${cw}px`));
    const parent = new TimelineMax();
    if (auto) {
      //staggerAnimation
      parent.repeat(-1).paused(false);

      // .repeatDelay(auto)
      parent.set(slidesNode[0], { left: 0, zIndex: 0 });
      parent.staggerTo(slidesNode, speed, { left: 0 }, auto * direction);
      parent.to(slidesNode[0], 0, { left: 1344, zIndex: 999 });
      parent.to(slidesNode[0], auto, {});
      parent.to(slidesNode[0], speed, { left: 0 });
    } else {
      parent.paused(true);
      slidesNode.forEach((slide, index) => {
        parent.addLabel('slide' + index + 'start');
        parent.to(slide, speed, {
          left: 0,
          onComplete: () => this.completeSlideChange(index),
          onReverseComplete: () => this.completeSlideChange(this.getPrevSlideIndex(slidesNode, index)),
        });
        parent.addLabel(`slide${index}end`);
        parent.addPause(`slide${index}end`);
      });
    }
    this.slider = parent;
    window.mySlider = parent;
  };

  makeAnimationGsap = () => {
    const { animationType } = this.props;
    switch (animationType) {
      case 'slide':
        this.makeSlideAnimation();
        break;
      case 'fade':
        this.makeFadeAnimation();
        break;
    }
  };

  getNextSlideIndex = (slides, index) => (index === slides.length - 1 ? index : index + 1);
  getPrevSlideIndex = (slides, index) => (index === 0 ? 0 : index - 1);
  isSlideNextActive = (slides, slide) => slide.index === this.getNextSlideIndex(slides);
  isSlideActive = slide => slide.props.index === this.state.activeSlide;

  getAnimationDestIndex = () => {
    const { slides, activeSlide, direction, nextSlide } = this.state;
    if (nextSlide) {
      return nextSlide;
    }

    switch (direction) {
      case MOVE_NEXT:
        return this.getNextSlideIndex(slides, activeSlide);
        break;
      case MOVE_PREV:
        return this.getPrevSlideIndex(slides, activeSlide);
        break;
    }
    return false;
  };

  applyStyle = (slide, style) => {
    return React.cloneElement(slide, {
      style,
    });
  };

  applyProps = (slide, props) => {
    return React.cloneElement(slide, {
      ...props,
    });
  };

  getSlideIndex = slide => slide.props.index;

  getSlide(index) {
    return this.state.slides.getSlide(index);
  }

  renderSlide = (slide, lazy = false, showOnlySlide = 0, onSlideLoadCallback) => {
    if (lazy && this.getSlideIndex(slide) !== showOnlySlide) {
      return null;
    }

    slide = this.applyProps(slide, {
      key: slide.props.img,
      className: `layer ${this.isSlideActive(slide) ? 'active' : ''}`,
      // 'data-transition': slide.props.transition,
      activeSlide: this.isSlideActive(slide),
      ref: this.slideRef,
    });

    if (lazy) {
      slide = this.applyProps(slide, {
        onImageLoadCallback: onSlideLoadCallback,
      });
    }

    return slide;
  };

  renderSlides = () => {
    const { slides } = this.state;
    const destIndex = this.getAnimationDestIndex();
    return slides.map(slide => this.renderSlide(slide));
  };

  calculateSlidesRatio = () => {
    // debugger;
    const ratios = this.imageSizes.map(item => (item.width / item.height));
    this.maxImageRatio = Math.max(...ratios);
    const height = Math.round(this.leSlider.clientWidth / this.maxImageRatio);
    this.leSlider.style.width = '100%';
    this.leSlider.style.height = `${height}px`;
  }
  renderLazy = callBack => {
    const { direction, activeSlide, speed, slides } = this.state;
    const destIndex = this.getAnimationDestIndex(activeSlide, direction);
    return slides.map(slide => this.renderSlide(slide, direction, speed, activeSlide, destIndex, true, 0, callBack));
  };

  doSlideChange = activeSlide => {
    this.slider.seek(`slide${activeSlide}end`);
    this.completeSlideChange(activeSlide);
  };

  sliderRef = el => {
    this.leSlider = el;
  };

  slideRef = el => {
    if (!this.renderedSlidesArray) {
      this.renderedSlidesArray = [];
    }
    this.renderedSlidesArray.push(el);
  };

  renderLeftButton = () => {
    const { isPrevSlide } = this.state;
    const { prevButton, buttons, auto } = this.props;
    if (isPrevSlide && !auto) {
      return <LeftSliderButton button={prevButton} show={buttons} onClick={this.movePrevSlide} />;
    }
    return null;
  };

  renderRightButton = () => {
    const { isNextSlide } = this.state;
    const { nextButton, buttons, auto } = this.props;
    if (isNextSlide && !auto) {
      return <RightSliderButton button={nextButton} show={buttons} onClick={this.moveNextSlide} />;
    }
    return null;
  };

  renderThumbnails = () => {
    const { thumbnailsSize, showThumbnails } = this.props;

    if (showThumbnails) {
      return <ThumbnailContainer slides={slides} thumbSize={thumbnailsSize} activeSlide={activeSlide} doSlideChange={this.doSlideChange} />;
    }
    return null;
  };

  renderPaginator = () => {
    const { bullets } = this.props;
    const { slides } = this.state;

    if (bullets) {
      return <Paginator doSlideChange={this.doSlideChange} slides={slides} />;
    }
    return null;
  };

  endAnimationCycle = () => {
    console.log('end animation');
  }

  render() {
    const { spinner, className } = this.props;
    const { lazy, allImagesLoaded } = this.state;

    let renderedSlides;
    if (lazy) {
      renderedSlides = this.renderLazy();
    } else {
      renderedSlides = this.renderSlides();
    }
    return (
      <div className={`le_slider ${allImagesLoaded ? 'loaded' : ''} ${className ? className : ''}`} ref={this.sliderRef} onWheel={this.onWheel} onLoad={this.onLoad}>
        {spinner && <Loader type={spinner} />}
        <div ref={this.makeWrapperRef} className={'le_slider__wrapper'} onAnimationEnd={this.endAnimationCycle}>
          {renderedSlides}
          {this.renderLeftButton()}
          {this.renderRightButton()}
          {this.renderThumbnails()}
          {this.renderPaginator()}
        </div>
      </div>
    );
  }
}

export default Slider;

const LeftSliderButton = ({ defButton, show, onClick }) => {
  if (show) {
    if (!defButton) {
      return (
        <Button className="le_slider__button le_slider__button--left" onClick={onClick}>
          <SVGInline className="arrow_button" svg={iconLeft} />
        </Button>
      );
    }
    return defButton;
  }
  return null;
};

LeftSliderButton.propTypes = {
  defButton: PropTypes.node,
  onClick: PropTypes.func,
  show: PropTypes.bool,
};

const RightSliderButton = ({ defButton, show, onClick }) => {
  if (show) {
    if (!defButton) {
      return (
        <Button className="le_slider__button le_slider__button--right" onClick={onClick}>
          <SVGInline className="arrow_button" svg={iconRight} />
        </Button>
      );
    }
    return defButton;
  }
  return null;
};
RightSliderButton.propTypes = {
  defButton: PropTypes.node,
  onClick: PropTypes.func,
  show: PropTypes.bool,
};
