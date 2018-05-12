import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Header from 'components/Header';
import Footer from 'components/Footer';
import p3_1 from 'assets/images/photo/3_1.jpg';
import p3_2 from 'assets/images/photo/3_2.jpg';
import p4_1 from 'assets/images/photo/4_1.jpg';
import p4_2 from 'assets/images/photo/4_2.jpg';
import p5_1 from 'assets/images/photo/5_1.jpg';
import p5_2 from 'assets/images/photo/5_2.jpg';
import p6_1 from 'assets/images/photo/6_1.jpg';
import p6_2 from 'assets/images/photo/6_2.jpg';
import p1_1 from 'assets/images/photo/1_1.jpg';
import p1_2 from 'assets/images/photo/1_2.jpg';
import p2_1 from 'assets/images/photo/2_1.jpg';
import p2_2 from 'assets/images/photo/2_2.jpg';
import p7_1 from 'assets/images/photo/7_1.jpg';
import p7_2 from 'assets/images/photo/7_2.jpg';
import p8_1 from 'assets/images/photo/8_1.jpg';
import p8_2 from 'assets/images/photo/8_2.jpg';
import LightBox from 'components/lightbox';

import GalleryItem from 'components/GalleryItem';
import { photo } from './photo_info';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

class GalleryPageCryptoArt extends PureComponent {
  static propTypes = {
    currentLang: PropTypes.string,
  };

  makeItemInfo = (info, key, lang) => {
    return info[key] ? info[key][lang].map((item, index) => <p key={item} className={index == 0 ? 'title' : ''}>{item}</p>) : null;
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
                      src={p3_1}
                      srcLightbox={p3_2}
                    >
                      {this.makeItemInfo(photo, 'p3_1', this.props.currentLang)}
                    </GalleryItem>
                  </div>
                  <div className="tile is-parent">
                    <GalleryItem
                      src={p4_2}
                      srcLightbox={p4_1}
                    >
                      {this.makeItemInfo(photo, 'p4_2', this.props.currentLang)}
                    </GalleryItem>
                  </div>
                </div>
                <div className="tile">
                  <div className="tile is-parent">
                    <GalleryItem
                      src={p5_1}
                      srcLightbox={p5_2}
                    >
                      {this.makeItemInfo(photo, 'p5_1', this.props.currentLang)}
                    </GalleryItem>
                  </div>
                  <div className="tile is-parent is-7">
                    <GalleryItem
                      src={p6_1}
                      srcLightbox={p6_2}
                    >
                      {this.makeItemInfo(photo, 'p6_1', this.props.currentLang)}
                    </GalleryItem>
                  </div>
                </div>
                <div className="tile">
                  <div className="tile is-parent">
                    <GalleryItem
                      src={p2_1}
                      srcLightbox={p2_2}
                    >
                      {this.makeItemInfo(photo, 't21', this.props.currentLang)}
                    </GalleryItem>
                  </div>
                  <div className="tile is-parent">
                    <GalleryItem
                      src={p1_1}
                      srcLightbox={p1_2}
                    >
                      {this.makeItemInfo(photo, 't17', this.props.currentLang)}
                    </GalleryItem>
                  </div>
                </div>
                <div className="tile">
                  <div className="tile is-parent">
                    <GalleryItem
                      src={p8_1}
                      srcLightbox={p8_2}
                    >
                      {this.makeItemInfo(photo, '6', this.props.currentLang)}
                    </GalleryItem>
                  </div>
                  <div className="tile is-parent is-7">
                    <GalleryItem
                      src={p7_1}
                      srcLightbox={p7_2}
                    >
                      {this.makeItemInfo(photo, '2', this.props.currentLang)}
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

export default connect(getData)(GalleryPageCryptoArt);
