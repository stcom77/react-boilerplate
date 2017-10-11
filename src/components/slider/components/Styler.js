import { fadeIn, fadeOut, slideLeft, slideRight, zoomOut } from '../utils/Transitions';

class Styler {
  static getTransitionStyle(slide, direction, isItActive, speed) {
    let slideTransition = {};
    let visibility;
    const activeTransition = slide.props.transition;

    switch (activeTransition) {
    case 'fade':
      if (isItActive) {
        slideTransition = fadeOut(speed);
      } else {
        slideTransition = fadeIn(speed);
      }
      visibility = 'visible';
      break;
    case 'slide':
      if (isItActive) {
        slideTransition = slideLeft(speed);
      } else {
        slideTransition = slideRight(speed);
      }

      visibility = 'visible';
      break;
    case 'zoom':
      if (isItActive) {
        slideTransition = zoomOut(speed);
      }

      visibility = 'visible';
      break;
    }
    return {
      ...slideTransition,
      animationFillMode: 'forwards',
      zIndex: Styler.getSlideZIndex(isItActive),
      visibility,
    };
  }

  static getSlideZIndex = (isActive) => {
    return isActive ? 999 : 900;
  };

  static getNextSlideZIndex = (slide) => {
    return 999;
    if (this.isSlideNextActive(slide)) {
      return 900;
    }
    return slide.getIndex();
  };
}

export default Styler;
