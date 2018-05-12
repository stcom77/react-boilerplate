import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ModalComponent from './ModalComponent';
import SVGInline from 'react-svg-inline';

class Lightbox extends PureComponent {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    const lightboxImages = [];

    const processChildren = (child) => {
      const image = this.getLightBoxData(child);
      if (image) {
        lightboxImages.push(image);
        return;
      }
      if (child.props && child.props.children) {
        this.traverseChildren(child.props.children, processChildren);
      }
    };

    this.traverseChildren(props.children, processChildren);

    this.state = {
      images: lightboxImages,
      showModal: false,
      currentImage: undefined,
    };
  }

  componentDidMount() {
    addEventListener('orientationchange', this.closeModal);
  }

  componentWillUnmount() {
    removeEventListener('orientationchange', this.closeModal);
  }

  traverseChildren = (children, fn) => {
    return React.Children.forEach(children, fn);
  }

  onImageClick = (event) => {
    const { target } = event;
    const img = this.findImageNode(target);
    if (img !== false && img.dataset['lightbox']) {
      const currentImage = this.state.images.findIndex(item => item.src == img.dataset['lightbox']);
      this.setState({ showModal: true, currentImage });
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

    if (React.isValidElement(item)) {
      if (item.props.src && item.props.srcLightbox) {
        return {
          src: item.props.srcLightbox,
          description: ''
        };
      }
    }
    return undefined;
  }

  closeModal = () => {
    this.setState({ showModal: false });
  }

  render() {
    const { children } = this.props;
    const { currentImage, images } = this.state;

    return (
      <div onClick={this.onImageClick}>{children}
        {this.state.showModal &&
        <ModalComponent onClose={this.closeModal} images={images} currentImage={currentImage} />
        }
      </div>
    );
  }
}

export default Lightbox;
