import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Header from 'components/Header';
import Footer from 'components/Footer';
import slide5Thumb from 'assets/images/arts/m5.jpg';
import slide5 from 'assets/images/arts/5.jpg';
import slide20Thumb from 'assets/images/arts/t20.jpg';
import slide20 from 'assets/images/arts/20.jpg';
import slide12Thumb from 'assets/images/arts/t12.jpg';
import slide12 from 'assets/images/arts/12.jpg';
import slide13Thumb from 'assets/images/arts/t13.jpg';
import slide13 from 'assets/images/arts/13.jpg';
import slide16Thumb from 'assets/images/arts/t16.jpg';
import slide16 from 'assets/images/arts/16.jpg';
import slide21Thumb from 'assets/images/arts/t21.jpg';
import slide21 from 'assets/images/arts/21.jpg';
import slide17Thumb from 'assets/images/arts/t17.jpg';
import slide17 from 'assets/images/arts/17.jpg';
import slide3Thumb from 'assets/images/arts/t3.jpg';
import slide3 from 'assets/images/arts/3.jpg';
import slide9Thumb from 'assets/images/arts/t9.jpg';
import slide9 from 'assets/images/arts/9.jpg';
import slide11Thumb from 'assets/images/arts/t11.jpg';
import slide11 from 'assets/images/arts/11.jpg';
import slide6Thumb from 'assets/images/arts/t6.jpg';
import slide6 from 'assets/images/arts/6.jpg';
import slide2Thumb from 'assets/images/arts/t2.jpg';
import slide2 from 'assets/images/arts/2.jpg';
import slide1Thumb from 'assets/images/arts/t1.jpg';
import slide1 from 'assets/images/arts/1.jpg';
import slide7Thumb from 'assets/images/arts/t7.jpg';
import slide7 from 'assets/images/arts/7.jpg';
import slide18Thumb from 'assets/images/arts/t18.jpg';
import slide18 from 'assets/images/arts/18.jpg';
import slide8Thumb from 'assets/images/arts/t8.jpg';
import slide8 from 'assets/images/arts/8.jpg';
import slide10Thumb from 'assets/images/arts/t10.jpg';
import slide10 from 'assets/images/arts/10.jpg';
import slide14Thumb from 'assets/images/arts/t14.jpg';
import slide14 from 'assets/images/arts/14.jpg';
import slide15Thumb from 'assets/images/arts/t15.jpg';
import slide15 from 'assets/images/arts/15.jpg';
import LightBox from 'components/lightbox';

import GalleryItem from 'components/GalleryItem';
import { art } from './gallery_info';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

class GalleryPage2 extends PureComponent {
  static propTypes = {
    currentLang: PropTypes.string,
  };

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
                      src={slide20Thumb}
                      srcLightbox={slide20}
                    >
                      {this.makeItemInfo(art, '20', this.props.currentLang)}
                    </GalleryItem>
                  </div>
                  <div className="tile is-parent">
                    <GalleryItem
                      src={slide5Thumb}
                      srcLightbox={slide5}
                    >
                      {this.makeItemInfo(art, 'm5', this.props.currentLang)}
                    </GalleryItem>
                  </div>
                </div>
                <div className="tile">
                  <div className="tile is-parent">
                    <GalleryItem
                      src={slide12Thumb}
                      srcLightbox={slide12}
                    >
                      {this.makeItemInfo(art, 't12', this.props.currentLang)}
                    </GalleryItem>
                  </div>
                  <div className="tile is-parent">
                    <GalleryItem
                      src={slide13Thumb}
                      srcLightbox={slide13}
                    >
                      {this.makeItemInfo(art, 't13', this.props.currentLang)}
                    </GalleryItem>
                  </div>
                  <div className="tile is-parent">
                    <GalleryItem
                      src={slide16Thumb}
                      srcLightbox={slide16}
                    >
                      {this.makeItemInfo(art, 't16', this.props.currentLang)}
                    </GalleryItem>
                  </div>
                </div>
                <div className="tile">
                  <div className="tile is-parent">
                    <GalleryItem
                      src={slide21Thumb}
                      srcLightbox={slide21}
                    >
                      {this.makeItemInfo(art, 't21', this.props.currentLang)}
                    </GalleryItem>
                  </div>
                  <div className="tile is-parent">
                    <GalleryItem
                      src={slide17Thumb}
                      srcLightbox={slide17}
                    >
                      {this.makeItemInfo(art, 't17', this.props.currentLang)}
                    </GalleryItem>
                  </div>
                </div>
                <div className="tile">
                  <div className="tile is-parent">
                    <GalleryItem
                      src={slide3Thumb}
                      srcLightbox={slide3}
                    >
                      {this.makeItemInfo(art, 't3', this.props.currentLang)}
                    </GalleryItem>
                  </div>
                  <div className="tile is-parent">
                    <GalleryItem
                      src={slide11Thumb}
                      srcLightbox={slide11}
                    >
                      {this.makeItemInfo(art, 't11', this.props.currentLang)}
                    </GalleryItem>
                  </div>
                  <div className="tile is-parent">
                    <GalleryItem
                      src={slide9Thumb}
                      srcLightbox={slide9}
                    >
                      {this.makeItemInfo(art, '9', this.props.currentLang)}
                    </GalleryItem>
                  </div>
                </div>
                <div className="tile">
                  <div className="tile is-parent">
                    <GalleryItem
                      src={slide6Thumb}
                      srcLightbox={slide6}
                    >
                      {this.makeItemInfo(art, '6', this.props.currentLang)}
                    </GalleryItem>
                  </div>
                  <div className="tile is-parent is-7">
                    <GalleryItem
                      src={slide2Thumb}
                      srcLightbox={slide2}
                    >
                      {this.makeItemInfo(art, '2', this.props.currentLang)}
                    </GalleryItem>
                  </div>
                </div>
                <div className="tile">
                  <div className="tile is-parent">
                    <GalleryItem
                      src={slide1Thumb}
                      srcLightbox={slide1}
                    >
                      {this.makeItemInfo(art, '1', this.props.currentLang)}
                    </GalleryItem>
                  </div>
                  <div className="tile is-parent">
                    <GalleryItem
                      src={slide7Thumb}
                      srcLightbox={slide7}
                    >
                      {this.makeItemInfo(art, '7', this.props.currentLang)}
                    </GalleryItem>
                  </div>
                  <div className="tile is-parent">
                    <GalleryItem
                      src={slide18Thumb}
                      srcLightbox={slide18}
                    >
                      {this.makeItemInfo(art, '18', this.props.currentLang)}
                    </GalleryItem>
                  </div>
                </div>
                <div className="tile">
                  <div className="tile is-parent">
                    <GalleryItem
                      src={slide10Thumb}
                      srcLightbox={slide10}
                    >
                      {this.makeItemInfo(art, '10', this.props.currentLang)}
                    </GalleryItem>
                  </div>
                  <div className="tile is-parent">
                    <GalleryItem
                      src={slide14Thumb}
                      srcLightbox={slide14}
                    >
                      {this.makeItemInfo(art, '14', this.props.currentLang)}
                    </GalleryItem>
                  </div>
                  <div className="tile is-parent">
                    <GalleryItem
                      src={slide15Thumb}
                      srcLightbox={slide15}
                    >
                      {this.makeItemInfo(art, '15', this.props.currentLang)}
                    </GalleryItem>
                  </div>
                  <div className="tile is-parent">
                    <GalleryItem
                      src={slide8Thumb}
                      srcLightbox={slide8}
                    >
                      {this.makeItemInfo(art, '8', this.props.currentLang)}
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

export default connect(getData)(GalleryPage2);
