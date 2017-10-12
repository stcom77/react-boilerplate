import React, { PureComponent, Children } from 'react';
import PropTypes from 'prop-types';
import Styler from './Styler';
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
import { TweenMax, Bounce, TweenLite, TimelineMax, TimelineLite } from 'gsap';
//todo-stas: для каждого слайда сделать возможность указания длительности и начала анимации
//todo-stas: для слайдов с авто сменой рендерить stagger для ручный без задержки

import styles from '../styles/styles.styl';

class Slider extends PureComponent {
  static propTypes = {
    arrows: PropTypes.shape({
      enable: PropTypes.bool,
      style: PropTypes.string,
      hide_onleave: PropTypes.bool,
    }),
    auto: PropTypes.number, // autoplay timeout seconds if set slides autoplayed
    bullets: PropTypes.shape({
      enable: PropTypes.bool,
      style: PropTypes.string,
      h_align: PropTypes.string,
      v_align: PropTypes.string,
      space: PropTypes.number,
    }),
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
    spinner: PropTypes.string,
    thumbnailsSize: PropTypes.string,
    wheel: PropTypes.bool,
    width: PropTypes.number,
  };

  static defaultProps = {
    direction: MOVE_NEXT,
    firstSlide: 0,
    lazy: false
  };

  constructor(props) {
    super(props);
    this.state = {};
    const slides = new SlideCollection();
    Children.map(props.children, (child) => {
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
    this.adjustSize();
  }

  shouldComponentUpdate(nextProps, nextState) {
    const changedKeys = compareState(this.state, nextState);
    return !this.changesOnlyImagesLoadedState(changedKeys);
  }

  makeAnimation = false;
  countLoadedImages = 0;

  adjustSize = () => {
    const { width, height } = this.props;
    if (width) {
      this.leSlider.style.width = `${width}px`;
    }
    if (height) {
      this.leSlider.style.height = `${height}px`;
    }
  }

  processSlide = (slide) => {
    const { img, img2x = img, thumb = img } = slide.props;

    return this.applyProps(slide, { img, img2x, thumb });
  }

  changesOnlyImagesLoadedState(changes) {
    return changes.length === 1 && changes.includes('imagesLoaded');
  }

  moveNextSlide = debounce(() => {
    const { slides, activeSlide: currentSlide } = this.state;
    if (this.slider && this.currentSlide < slides.length - 1) {
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

  divRef = (el) => (this.mainDiv = el);

  endAnimationCycle = () => {
    const { doSlideChange } = this.state;
    if (doSlideChange) {
      this.setState({
        doSlideChange: false,
        activeSlide: this.getAnimationDestIndex(),
        nextSlide: null,
      });
    }
    this.scheduleNextAnimationCycle();
  };

  scheduleNextAnimationCycle = () => {
    const { auto } = this.props;
    const { direction } = this.state;

    if (auto) {
      setTimeout(() => {
        this.setState({
          doSlideChange: true,
          direction
        });
      }, auto * 1000);
    }
  };

  getPrevButton = () => {
    const { prevButton, buttons } = this.props;
    if (buttons) {
      if (!prevButton) {
        return (
          <Button className="button left" onClick={this.movePrevSlide}>
            <SVGInline className="arrow_button" svg={iconLeft} />
          </Button>
        );
      }
      return prevButton;
    }
    return null;
  };

  getNextButton = () => {
    const { nextButton, buttons } = this.props;
    if (buttons) {
      if (!nextButton) {
        return (
          <Button className="button right" onClick={this.moveNextSlide}>
            <SVGInline className="arrow_button" svg={iconRight} />
          </Button>
        );
      }
      return nextButton;
    }
    return null;
  };

  onSlideLoad = () => {
    this.setState({ lazy: false });
    console.log('lazy slide loaded');
  };

  onWheel = (event) => {
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

  onLoad = (event) => {
    const { target } = event;
    const { slides, imagesLoaded = 0 } = this.state;
    const { lazy } = this.props;
    if (target instanceof HTMLImageElement && target.classList.contains('le_slide__main_img')) {
      if (lazy) {
        this.setState({ allImagesLoaded: true });
      } else {
        if (slides.length >= imagesLoaded) {
          this.setState({ imagesLoaded: imagesLoaded + 1 });
        }
        if (slides.length <= imagesLoaded + 1) {
          this.setState({ allImagesLoaded: true });
          if (this.props.auto) {
            setTimeout(this.makeAnimationGsap, this.props.auto * 1);
          } else {
            this.makeAnimationGsap(true);
          }
        }
      }
    }
  };

  makeFadeAnimation = (slides, animDuration, fadeDuration) => {
    const makeAnimation = (slides, slideIndex) => {
      const tl = new TimelineMax();
      const nextSlideIndex = this.getNextSlideIndex(slides, slideIndex);
      tl.to(slides[slideIndex], fadeDuration, { autoAlpha: 0 }, 0);
      tl.to(slides[nextSlideIndex], fadeDuration, { autoAlpha: 1 }, 0);
      return tl;
    };
    [...slides].forEach((slide, index) => slide.style.opacity = index == 0 ? 1 : 0);
    const parent = new TimelineMax({ repeat: -1, delay: animDuration, repeatDelay: animDuration, paused: true });
    for (let i = 0; i < slides.length; i++) {
      parent.addLabel('slide' + i + 'start', animDuration * i);
      parent.add(makeAnimation(slides, i), animDuration * i);
      parent.addLabel('slide' + i + 'end');
      parent.addPause('slide' + i + 'end');
    }
    this.slider = parent;
    this.currentSlide = 0;
  }

  setCurrentSlide = (index) => this.setState({ activeSlide: index });

  setButtonState = () => {

  }

  completeSlideChange = (index) => {
    const { slides } = this.state;
    console.log(index);
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
        isNextSlide: true
      });
    }
    this.setCurrentSlide(index);
  };

  makeSlideAnimation = (slides, animDuration, fadeDuration, paused) => {
    const cw = slides[0].clientWidth;
    [...slides].forEach((slide, index) => slide.style.left = index == 0 ? 0 : `${cw}px`);
    const parent = new TimelineMax({ repeat: -1, delay: animDuration, repeatDelay: animDuration, paused, onComplete: () => console.log('complete') });
    for (let i = 0; i < slides.length; i++) {
      parent.addLabel('slide' + i + 'start');
      parent.to(slides[i], fadeDuration, { left: 0, onComplete: () => this.completeSlideChange(i), onReverseComplete: () => this.completeSlideChange(this.getPrevSlideIndex(slides, i)) });
      parent.addLabel('slide' + i + 'end');
      parent.addPause('slide' + i + 'end');
    }
    this.slider = parent;
    window.mySlider = parent;
    this.currentSlide = 0;
  }

  makeAnimationGsap = (paused = true) => {
    const slides = document.getElementsByClassName('le_slide');
    const animDuration = 5;
    const fadeDuration = 2;
    this.makeSlideAnimation(slides, animDuration, fadeDuration, paused);
  }

  getNextSlideIndex = (slides, index) => index === slides.length - 1 ? index : index + 1;
  getPrevSlideIndex = (slides, index) => index === 0 ? 0 : index - 1;
  isSlideNextActive = (slides, slide) => (slide.index === this.getNextSlideIndex(slides));
  isSlideActive = (slide) => slide.props.index === this.state.activeSlide;

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
  }

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

  getSlideIndex = (slide) => slide.props.index;

  getSlide(index) {
    return this.state.slides.getSlide(index);
  }

  renderSlide = (slide, destIndex, lazy = false, showOnlySlide = 0, onSlideLoadCallback) => {
    // debugger;
    const { doSlideChange, direction, speed, activeSlide: activeSlideIndex } = this.state;

    // let box = document.getElementById("artist");
    // let art = document.getElementById("art");
    // document.getElementsByClassName("le_slider");
    //
    // // TweenLite.from(box, 6, {left:"632px", position: "absolute", ease:Bounce.easeOut, delay:1});
    // var tl1 = new TimelineMax({ paused: true });
    // tl1.from(box, 6, {left:"632px", position: "absolute", ease:Bounce.easeOut, delay:1});
    // var tl2 = new TimelineMax();
    // tl2.from(art, 6, {left:"432px", position: "absolute", ease:Bounce.easeOut, delay:1});
    // tl1.play();


    if (lazy && this.getSlideIndex(slide) !== showOnlySlide) {
      return null;
    }
    const style = {
      // visibility: this.isSlideActive(slide) ? 'visible' : 'hidden',
    };

    if (doSlideChange && (this.isSlideActive(slide) || slide.props.index === destIndex)) {
      // style = Styler.getTransitionStyle(this.getSlide(activeSlideIndex), direction, this.isSlideActive(slide), speed);
    }

    slide = this.applyStyle(slide, {
      // visibility: 'hidden',
      // zIndex: 999,
      // zIndex: this.isSlideActive(slide) ? Styler.getSlideZIndex(true) : slide.props.index,
      ...style,
      // opacity: this.isSlideActive(slide) ? 1 : 0,
      // position: this.isSlideActive(slide) ? 'relative' : 'absolute',
      // position: 'absolute',
      // top: 0,
      // left: 0,
    });

    slide = this.applyProps(slide, {
      key: slide.props.img,
      className: `layer ${this.isSlideActive(slide) ? 'active' : ''}`,
      // 'data-transition': slide.props.transition,
      activeSlide: this.isSlideActive(slide)
    });

    if (lazy) {
      slide = this.applyProps(slide, {
        onImageLoadCallback: onSlideLoadCallback
      });
    }

    return slide;
  }

  renderSlides = () => {
    const { slides } = this.state;
    const destIndex = this.getAnimationDestIndex();
    return slides.map((slide) => this.renderSlide(slide, destIndex));
  }

  renderLazy = (callBack) => {
    const { doSlideChange, direction, activeSlide, speed, slides } = this.state;
    const destIndex = this.getAnimationDestIndex(activeSlide, direction);
    return slides.map((slide) => this.renderSlide(slide, doSlideChange, direction, speed, activeSlide, destIndex, true, 0, callBack));
  }

  doSliceChange = (activateSlide) => {
    this.setState({ doSlideChange: true, nextSlide: activateSlide });
  }

  sliderRef = (el) => {
    this.leSlider = el;
  }

  render() {
    const { slides, isNextSlide, isPrevSlide } = this.state;
    const { prevButton, nextButton, buttons, auto, height, width, thumbnailsSize, spinner, className, bullets, showThumbnails } = this.props;
    const { lazy, allImagesLoaded, activeSlide } = this.state;

    let renderedSlides;
    if (lazy) {
      renderedSlides = this.renderLazy(this.onSlideLoad);
    } else {
      renderedSlides = this.renderSlides();
    }
    return (
      <div className={`le_slider ${allImagesLoaded ? 'loaded' : ''} ${className ? className : ''}`} ref={this.sliderRef} onWheel={this.onWheel} onLoad={this.onLoad}>
        {spinner &&
        <Loader type={spinner} />
        }
        <div ref={this.divRef} className={'le_slider__wrapper'} onAnimationEnd={this.endAnimationCycle}>
          {renderedSlides}
          {isPrevSlide &&
          <LeftSliderButton button={prevButton} show={buttons} onClick={this.movePrevSlide} />
          }
          {isNextSlide &&
          <RightSliderButton button={nextButton} show={buttons} onClick={this.moveNextSlide} />
          }
          {showThumbnails &&
          <ThumbnailContainer slides={slides} thumbSize={thumbnailsSize} activeSlide={activeSlide} doSlideChange={this.doSliceChange} />
          }
          {bullets &&
          <Paginator doSlideChange={this.doSliceChange} slides={slides} />
          }
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
