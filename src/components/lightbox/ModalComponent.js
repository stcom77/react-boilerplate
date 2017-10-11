import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import SVGInline from 'react-svg-inline';
import closeIcon from 'assets/images/closeIcon.svg';
import { isNarrowScreenDevice } from '../../utils/other';
import { SWIPE_LEFT, SWIPE_RIGHT, handleGesure } from '../../utils/gestures';

const spinner = (
  <div className="spinner">
    <div className="double-bounce1"></div>
    <div className="double-bounce2"></div>
  </div>
);

const descriptionHeight = 50; //px

class ModalComponent extends PureComponent {
  static propTypes = {
    currentImage: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
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
      if(node.classList.contains('modal_lighbox__image')){
        if(event.type=='touchstart'){
          this.touchstartX = event.changedTouches[0].screenX;
        }
        if(event.type=='touchend'){
          this.touchendX = event.changedTouches[0].screenX;
          const gesture = handleGesure(this.touchstartX, this.touchendX);
          if(gesture == SWIPE_LEFT){
            this.prevImage();
          }
          if(gesture == SWIPE_RIGHT){
            this.nextImage();
          }
        }
        event.preventDefault();
        return;
      }
      node = node.parentNode;
    }
  }

  imageLoaded = () => {
    const { modalWidth, modalHeight } = this.state;
    let widthMagn;

    if (isNarrowScreenDevice()) {
      widthMagn = 0.9;
    } else {
      widthMagn = 0.7;
    }
    this.setState({ showSpinner: false });
    const minClientSize = Math.round(Math.min(document.documentElement.clientWidth, document.documentElement.clientHeight) * widthMagn);
    const maxDimension = Math.max(this.image.naturalWidth, this.image.naturalHeight);
    let newWidth, newHeight;
    switch (true) {
    case maxDimension <= minClientSize:
      newWidth = this.image.naturalWidth;
      newHeight = this.image.naturalHeight;
      break;
    case maxDimension === this.image.naturalWidth:
      newWidth = minClientSize;
      newHeight = Math.round((this.image.naturalHeight / this.image.naturalWidth) * newWidth);
      break;
    case maxDimension === this.image.naturalHeight:
      newHeight = minClientSize;
      newWidth = Math.round((this.image.naturalWidth / this.image.naturalHeight) * newHeight);
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
    const { images } = this.props;
    const { currentImage } = this.state;
    const currentImageIndex = images.findIndex(image => {
      return image.src == currentImage;
    });
    if (currentImageIndex > 0) {
      this.setState({ currentImage: images[currentImageIndex - 1].src });
    }
  }

  nextImage = () => {
    const { images } = this.props;
    const { currentImage } = this.state;
    const currentImageIndex = images.findIndex(image => {
      return image.src == currentImage;
    });
    if (currentImageIndex < images.length - 1) {
      this.setState({ currentImage: images[currentImageIndex + 1].src });
    }
  }

  setImageRef = (el) => {
    if(el){
      this.image = el;
      this.image.addEventListener('touchstart', this.swipeEvent, false);
      this.image.addEventListener('touchend', this.swipeEvent, false);
    }
  };

  onTransitionEnd = (e) => {
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
    const currentImageIndex = images.findIndex(image => {
      return image.src == currentImage;
    });
    if (currentImageIndex < images.length - 1) {
      return true;
    }
    return false;
  }

  isPrev = () => {
    const { images } = this.props;
    const { currentImage } = this.state;
    const currentImageIndex = images.findIndex(image => {
      return image.src == currentImage;
    });
    if (currentImageIndex > 0) {
      return true;
    }
    return false;
  }

  render() {
    const {
      onClose
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
            transform: 'translate(-50%, -50%)',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            outline: 'none',
          }
        }}
      >
        {showSpinner ? spinner : null}
        <div className="modal_lighbox__image" style={{ display: showSpinner ? 'none' : 'block' }}>
          <img ref={this.setImageRef} src={currentImage} onLoad={this.imageLoaded} style={{ visibility: adaptImage ? 'hidden' : 'visible' }} />
          <div className="modal_lighbox__nav">
            {this.isPrev() &&
            <div className="prev" onClick={this.prevImage}></div>
            }
            {this.isNext() &&
            <div className="next" onClick={this.nextImage}></div>
            }
          </div>
        </div>
        <div className="modal_lighbox__description">
          some picture description
          <SVGInline onClick={onClose} className='modal_lighbox__close_button' svg={closeIcon} />
        </div>
      </Modal>
    );
  }
}

export default ModalComponent;

