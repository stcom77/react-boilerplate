import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Header from 'components/Header';
import Footer from 'components/Footer';
import slide1Thumb from 'assets/images/portraits/t1.jpg';
import slide1 from 'assets/images/portraits/1.jpg';
import slide4Thumb from 'assets/images/portraits/t4.jpg';
import slide4 from 'assets/images/portraits/4.jpg';
import slide3Thumb from 'assets/images/portraits/t3.jpg';
import slide3 from 'assets/images/portraits/3.jpg';
import slide6Thumb from 'assets/images/portraits/t6.jpg';
import slide6 from 'assets/images/portraits/6.jpg';
import slide5Thumb from 'assets/images/portraits/t5.jpg';
import slide5 from 'assets/images/portraits/5.jpg';
import slide2Thumb from 'assets/images/portraits/t2.jpg';
import slide2 from 'assets/images/portraits/2.jpg';
import slide13Thumb from 'assets/images/portraits/t13.jpg';
import slide13 from 'assets/images/portraits/13.jpg';
import slide7Thumb from 'assets/images/portraits/t7.jpg';
import slide7 from 'assets/images/portraits/7.jpg';
import slide8Thumb from 'assets/images/portraits/t8.jpg';
import slide8 from 'assets/images/portraits/8.jpg';
import slide10Thumb from 'assets/images/portraits/t10.jpg';
import slide10 from 'assets/images/portraits/10.jpg';
import slide11Thumb from 'assets/images/portraits/t11.jpg';
import slide11 from 'assets/images/portraits/11.jpg';
import slide9Thumb from 'assets/images/portraits/t9.jpg';
import slide9 from 'assets/images/portraits/9.jpg';
import slide1742Thumb from 'assets/images/portraits/t1742.jpg';
import slide1742 from 'assets/images/portraits/1742.jpg';
import LightBox from '../components/lightbox';
import { connect } from 'react-redux';
import { portraits } from './gallery_info';
import { Helmet } from 'react-helmet';

import GalleryItem from 'components/GalleryItem';

class GalleryPage extends PureComponent {
  static propTypes = {
    currentLang: PropTypes.string,
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  modalClick = () => {
    this.setState({ showModal: !this.state.showModal });
  }

  makeItemInfo = (info, key, lang) => {
    return info[key][lang].map((item, index) => <p key={item} className={index == 0 ? 'title' : ''}>{item}</p>);
  };

  render() {
    return (
      <div className="gallery-page">
        <Helmet
          htmlAttributes={{ 'lang': this.props.currentLang }}
        >
          <title>Elena Sharbur</title>
        </Helmet>
        <Header visible alwaysShow />
        <LightBox>
          <div className="container">
            <div className="tile is-ancestor">
              <div className="tile is-vertical">
                <div className="tile">
                  <div className="tile is-parent">
                    <GalleryItem
                      src={slide4Thumb}
                      srcLightbox={slide4}
                    >
                      {this.makeItemInfo(portraits, '4', this.props.currentLang)}
                    </GalleryItem>
                  </div>
                  <div className="tile is-parent">
                    <GalleryItem
                      src={slide3Thumb}
                      srcLightbox={slide3}
                    >
                      {this.makeItemInfo(portraits, '3', this.props.currentLang)}
                    </GalleryItem>
                  </div>
                  <div className="tile is-parent is-4">
                    <GalleryItem
                      src={slide1Thumb}
                      srcLightbox={slide1}
                    >
                      {this.makeItemInfo(portraits, 't1', this.props.currentLang)}
                    </GalleryItem>
                  </div>
                </div>
                <div className="tile">
                  <div className="tile is-parent is-6">
                    <GalleryItem
                      src={slide6Thumb}
                      srcLightbox={slide6}
                    >
                      {this.makeItemInfo(portraits, 't6', this.props.currentLang)}
                    </GalleryItem>
                  </div>
                  <div className="tile is-parent">
                    <GalleryItem
                      src={slide5Thumb}
                      srcLightbox={slide5}
                    >
                      {this.makeItemInfo(portraits, 't5', this.props.currentLang)}
                    </GalleryItem>
                  </div>
                </div>
                <div className="tile">
                  <div className="tile is-parent is-5">
                    <GalleryItem
                      src={slide2Thumb}
                      srcLightbox={slide2}
                    >
                      {this.makeItemInfo(portraits, 't2', this.props.currentLang)}
                    </GalleryItem>
                  </div>
                  <div className="tile is-parent">
                    <GalleryItem
                      src={slide13Thumb}
                      srcLightbox={slide13}
                    >
                      {this.makeItemInfo(portraits, '13', this.props.currentLang)}
                    </GalleryItem>
                  </div>
                </div>
                <div className="tile">
                  <div className="tile is-parent">
                    <GalleryItem
                      src={slide8Thumb}
                      srcLightbox={slide8}
                    >
                      {this.makeItemInfo(portraits, 't8', this.props.currentLang)}
                    </GalleryItem>
                  </div>
                  <div className="tile is-parent">
                    <GalleryItem
                      src={slide10Thumb}
                      srcLightbox={slide10}
                    >
                      {this.makeItemInfo(portraits, 't10', this.props.currentLang)}
                    </GalleryItem>
                  </div>
                  <div className="tile is-parent">
                    <GalleryItem
                      src={slide11Thumb}
                      srcLightbox={slide11}
                    >
                      {this.makeItemInfo(portraits, 't11', this.props.currentLang)}
                    </GalleryItem>
                  </div>
                  <div className="tile is-parent">
                    <GalleryItem
                      src={slide7Thumb}
                      srcLightbox={slide7}
                    >
                      {this.makeItemInfo(portraits, 't7', this.props.currentLang)}
                    </GalleryItem>
                  </div>
                </div>
                <div className="tile">
                  <div className="tile is-parent">
                    <GalleryItem
                      src={slide9Thumb}
                      srcLightbox={slide9}
                    >
                      {this.makeItemInfo(portraits, 't9', this.props.currentLang)}
                    </GalleryItem>
                  </div>
                  <div className="tile is-parent">
                    <GalleryItem
                      src={slide1742Thumb}
                      srcLightbox={slide1742}
                    >
                      {this.makeItemInfo(portraits, 't1742', this.props.currentLang)}
                    </GalleryItem>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </LightBox>
        <Footer />
      </div>
    );
  }
}

const getData = (state) => {
  return { currentLang: state.main.currentLang };
};

export default connect(getData)(GalleryPage);
