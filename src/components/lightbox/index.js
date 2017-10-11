import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ModalComponent from './ModalComponent';
import SVGInline from 'react-svg-inline';

class Lightbox extends PureComponent {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    const { children } = props;
    super(props);
    const lightboxImages = [];

    const processChildren = (child) => {
      const image = this.getLightBoxData(child);
      if (image) {
        lightboxImages.push(image);
      }
      const { props = {} } = child;
      if (props.children) {
        React.Children.forEach(props.children, processChildren);
      }
    };

    React.Children.forEach(children, processChildren);
    // const childrenToRender = React.cloneElement(props.children);

    this.state = {
      images: lightboxImages,
      showModal: false,
      currentImage: null,
    };
  }

  traverseChildren = (children, fn) => {
    return React.Children.map(children, fn);
  }

  onImageClick = (event) => {
    const { target } = event;
    const img = this.findImageNode(target);
    if (img !== false && img.dataset['lightbox']) {
      this.setState({ showModal: true, currentImage: img.dataset['lightbox'] });
    }
  }

  findImageNode = (node) => {
    while (node != document.body) {
      const nodes = [...node.parentNode.childNodes];
      for (node of nodes) {
        if (node.tagName === 'FIGURE') {
          const imgTags = [...node.childNodes].filter((node) => (node.tagName === 'IMG'));
          return imgTags[0];
        }
      }
      node = node.parentNode;
    }
    return false;
  }

  getLightBoxData = (item) => {
    if (item.type === 'img' && item.props['data-lightbox']) {
      return {
        src: item.props['data-lightbox'],
        description: item.props['data-description']
      };
    }
    return null;
  }

  closeModal = () => {
    this.setState({ showModal: false });
  }

  render() {
    const { children } = this.props;
    const { currentImage, images } = this.state;

    const { showModal } = this.state;
    return <div onClick={this.onImageClick}>{children}
      {showModal &&
        <ModalComponent onClose={this.closeModal} images={images} currentImage={currentImage} />
      }
    </div>;
  }
}

export default Lightbox;
