import React from 'react';
import { addProps } from '../utils/other';


class SlideCollection {
  constructor(slides) {
    this.store = slides ? [...slides] : [];
    this.activeIndex = 0;
    this.animateTransform = false;
  }

  [Symbol.iterator]() {
    return this.store.values();
  }

  get length() {
    return this.store.length;
  }

  set length(val) {
    //might trow error
  }

  add(slide) {
    this.store.push(addProps(slide, { index: this.store.length }));
  }

  map(callback) {
    return this.store.map(callback);
  }

  getSlide(index) {
    return this.store[index];
  }

  getTransition = (slide) => slide.props.transition;

  makeSlide(node, style, isActive = false) {
    return React.cloneElement(node, {
      key: node.props.img,
      className: `layer ${isActive ? 'active' : ''}`,
      'data-transition': this.getTransition(node),
      style,
    });
  };

  slice(begin, end) {
    return new SlideCollection(this.store.slice(begin, end));
  }

  takeAround(point, count) {
    const result = [];
    if (point > this.length - 1 || point < 0) {
      return [];
    }
    result.push(this.store[point]);
    for (let currentCount = count - 1, leftPart = this.store.slice(0, point), rightPart = this.store.slice(point + 1);
      (leftPart.length > 0 || rightPart.length > 0) && currentCount > 0;
    ) {
      let item;
      item = leftPart.pop();
      if (item) {
        result.unshift(item);
        currentCount--;
      }
      if (currentCount === 0) {
        return result;
      }
      item = rightPart.shift();
      if (item) {
        result.push(item);
        currentCount--;
      }
    }
    return result;
  }
}

export default SlideCollection;
