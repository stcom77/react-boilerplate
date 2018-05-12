import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import SVGInline from 'react-svg-inline';
import closeIcon from 'assets/images/closeIcon.svg';
import { isNarrowScreenDevice } from '../../utils/other';
import { SWIPE_LEFT, SWIPE_RIGHT, handleGesure } from '../../utils/gestures';
import Spinner from 'components/Spinner';

const descriptionHeight = 50; //px

class ModalComponent extends PureComponent {
  static propTypes = {
    currentImage: PropTypes.number,
    images: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string,
      description: PropTypes.string
    })),
    onClose: PropTypes.func,
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    const { currentImage } = props;
    this.state = {
      showSpinner: true,
      modalWidth: '100px',
      modalHeight: '100px',
      currentImage,
      adaptImage: false,
    };
  }

  componentDidMount() {
    this.modal.node.addEventListener('touchstart', this.swipeEvent, false);
    this.modal.node.addEventListener('touchend', this.swipeEvent, false);
  }

  componentWillUnmount() {
    this.modal.node.removeEventListener('touchstart', this.swipeEvent, false);
    this.modal.node.removeEventListener('touchend', this.swipeEvent, false);
  }

  swipeEvent = (event) => {
    const { target } = event;
    let node = target;
    while (node !== document.body) {
      if (node.classList.contains('modal_lighbox__image')) {
        if (event.type == 'touchstart') {
          this.touchstartX = event.changedTouches[0].screenX;
        }
        if (event.type == 'touchend') {
          this.touchendX = event.changedTouches[0].screenX;
          const gesture = handleGesure(this.touchstartX, this.touchendX);
          if (gesture == SWIPE_LEFT) {
            this.prevImage();
          }
          if (gesture == SWIPE_RIGHT) {
            this.nextImage();
          }
        }
        event.preventDefault();
        return;
      }
      node = node.parentNode;
    }
  }

  countDimension = (ratio, otherDimension) => Math.round(ratio * otherDimension);

  imageLoaded = () => {
    const { modalWidth, modalHeight } = this.state;
    let widthMagn;
    if (isNarrowScreenDevice()) {
      widthMagn = 1;
    } else {
      widthMagn = 0.9;
    }

    const clientWidth = document.documentElement.clientWidth;
    const clientHeight = document.documentElement.clientHeight;

    let newWidth, newHeight;
    const imageRatio = this.image.naturalHeight / this.image.naturalWidth;

    switch (true) {
      case clientWidth >= clientHeight:
        newHeight = clientHeight * widthMagn;
        newWidth = this.countDimension(1 / imageRatio, newHeight);
        break;
      case clientHeight > clientWidth:
        newWidth = clientWidth * widthMagn;
        newHeight = this.countDimension(imageRatio, newWidth);
        break;
    }
    this.setState({
      modalWidth: `${newWidth}px`,
      modalHeight: `${newHeight + descriptionHeight}px`,
    });
    if ((parseInt(modalHeight, 10) - descriptionHeight) !== newHeight || parseInt(modalWidth, 10) !== newWidth) {
      this.setState({ adaptImage: true });
    }
    return;
  }

  calculateImageDimensions = () => {

  }

  prevImage = () => {
    const { currentImage } = this.state;

    if (currentImage - 1 > 0) {
      this.setState({ currentImage: currentImage - 1 });
    }
  }

  nextImage = () => {
    const { images } = this.props;

    const { currentImage } = this.state;

    if (currentImage + 1 < images.length) {
      this.setState({ currentImage: currentImage + 1 });
    }
  }

  setImageRef = (el) => {
    if (el) {
      this.image = el;
      this.image.addEventListener('touchstart', this.swipeEvent, false);
      this.image.addEventListener('touchend', this.swipeEvent, false);
    }
  };

  onTransitionEnd = (e) => {
    this.setState({ showSpinner: false });

    if (e.target.classList.contains('modal_lighbox')) {
      this.setState({ adaptImage: false });
    }
  }

  afterOpenModal = () => {
    const modal = document.getElementsByClassName('modal_lighbox')[0];
    if (modal) {
      modal.addEventListener('transitionend', this.onTransitionEnd);
    }
  }

  isNext = () => {
    const { images } = this.props;

    const { currentImage } = this.state;
    if (currentImage < images.length - 1) {
      return true;
    }
    return false;
  }

  isPrev = () => {
    const { currentImage } = this.state;
    if (currentImage > 0) {
      return true;
    }
    return false;
  }

  render() {
    const {
      onClose,
      images
    } = this.props;
    const { showSpinner, modalWidth, modalHeight, currentImage, adaptImage } = this.state;

    return (
      <Modal
        isOpen={true}
        closeTimeoutMS={200}
        contentLabel="No Overlay Click Modal"
        onRequestClose={onClose}
        className='modal_lighbox is-shadowless'
        ref={el => this.modal = el}
        onAfterOpen={this.afterOpenModal}
        style={{
          content: {
            width: modalWidth,
            height: modalHeight,
            transform: 'translate(-52%, -50%)',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            outline: 'none',
          }
        }}
        overlayClassName="modal__overlay"
      >
        {showSpinner ? <Spinner /> : null}
        <div className="modal_lighbox__image" style={{ display: showSpinner ? 'none' : 'block' }} onTransitionEnd={() => console.log('animation end')}>
          <img ref={this.setImageRef} src={images[currentImage].src} onLoad={this.imageLoaded} style={{ visibility: adaptImage ? 'hidden' : 'visible' }} />
          <div className="modal_lighbox__nav">
            {this.isPrev() &&
            <div className="prev" onClick={this.prevImage} onTouchStart={this.prevImage}></div>
            }
            {this.isNext() &&
            <div className="next" onClick={this.nextImage} onTouchStart={this.nextImage}></div>
            }
          </div>
        </div>
        <div className="modal_lighbox__description">
          {images[currentImage].description}
          <SVGInline onClick={onClose} className='modal_lighbox__close_button' svg={closeIcon} />
        </div>
      </Modal>
    );
  }
}

export default ModalComponent;

