import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Header from 'components/Header';
import Footer from 'components/Footer';
import bitcoinThumb from 'assets/images/arts/bitcoin_th.jpg';
import bitcoin from 'assets/images/arts/bitcoin.jpg';
import lipsThumb from 'assets/images/arts/lips_th.jpg';
import lips from 'assets/images/arts/lips.jpg';
import carThumb from 'assets/images/arts/car_th.jpg';
import car from 'assets/images/arts/car.jpg';
import cryptoladyThumb from 'assets/images/arts/cryptolady_th.jpg';
import cryptolady from 'assets/images/arts/cryptolady.jpg';
import buz3Thumb from 'assets/images/arts/buz3.jpg';
import buz3 from 'assets/images/arts/buz3.jpg';
import buz4Thumb from 'assets/images/arts/buz4.jpg';
import buz4 from 'assets/images/arts/buz4.jpg';
import buz5Thumb from 'assets/images/arts/buz5.jpg';
import buz5 from 'assets/images/arts/buz5.jpg';
import temptationThumb from 'assets/images/arts/temptation_th.jpg';
import temptation from 'assets/images/arts/temptation.jpg';
import buz2Thumb from 'assets/images/arts/buz2_th.jpg';
import buz2 from 'assets/images/arts/buz2.jpg';
import bearThumb from 'assets/images/arts/bear_th.jpg';
import bear from 'assets/images/arts/bear.jpg';
import moneyThumb from 'assets/images/arts/money_th.jpg';
import money from 'assets/images/arts/money.jpg';
import LightBox from 'components/lightbox';

import GalleryItem from 'components/GalleryItem';
import { crypto } from './crypto_info';
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
                      src={lipsThumb}
                      srcLightbox={lips}
                    >
                      {this.makeItemInfo(crypto, 'lips', this.props.currentLang)}
                    </GalleryItem>
                  </div>
                  <div className="tile is-parent">
                    <GalleryItem
                      src={bitcoinThumb}
                      srcLightbox={bitcoin}
                    >
                      {this.makeItemInfo(crypto, 'bitcoin', this.props.currentLang)}
                    </GalleryItem>
                  </div>
                </div>
                <div className="tile">
                  <div className="tile is-parent">
                    <GalleryItem
                      src={temptationThumb}
                      srcLightbox={temptation}
                    >
                      {this.makeItemInfo(crypto, 'temptation', this.props.currentLang)}
                    </GalleryItem>
                  </div>
                  <div className="tile is-parent is-7">
                    <GalleryItem
                      src={bearThumb}
                      srcLightbox={bear}
                    >
                      {this.makeItemInfo(crypto, 'bear', this.props.currentLang)}
                    </GalleryItem>
                  </div>
                </div>
                <div className="tile">
                  <div className="tile is-parent">
                    <GalleryItem
                      src={carThumb}
                      srcLightbox={car}
                    >
                      {this.makeItemInfo(crypto, 'car', this.props.currentLang)}
                    </GalleryItem>
                  </div>
                  <div className="tile is-parent">
                    <GalleryItem
                      src={cryptoladyThumb}
                      srcLightbox={cryptolady}
                    >
                      {this.makeItemInfo(crypto, 'cryptolady', this.props.currentLang)}
                    </GalleryItem>
                  </div>
                </div>
                <div className="tile">
                  <div className="tile is-parent is-7">
                    <GalleryItem
                      src={moneyThumb}
                      srcLightbox={money}
                    >
                      {this.makeItemInfo(crypto, 'money', this.props.currentLang)}
                    </GalleryItem>
                  </div>
                  <div className="tile is-parent">
                    <GalleryItem
                      src={buz2Thumb}
                      srcLightbox={buz2}
                    >
                      {this.makeItemInfo(crypto, 'buz', this.props.currentLang)}
                    </GalleryItem>
                  </div>
                </div>
                <div className="tile">
                  <div className="tile is-parent">
                    <GalleryItem
                      src={buz5Thumb}
                      srcLightbox={buz5}
                    >
                      {this.makeItemInfo(crypto, 'buz', this.props.currentLang)}
                    </GalleryItem>
                  </div>
                  <div className="tile is-parent">
                    <GalleryItem
                      src={buz4Thumb}
                      srcLightbox={buz4}
                    >
                      {this.makeItemInfo(crypto, 'buz', this.props.currentLang)}
                    </GalleryItem>
                  </div>
                  <div className="tile is-parent">
                    <GalleryItem
                      src={buz3Thumb}
                      srcLightbox={buz3}
                    >
                      {this.makeItemInfo(crypto, 'buz', this.props.currentLang)}
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
