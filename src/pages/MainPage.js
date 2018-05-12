import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import starImg from 'assets/images/Star.svg';
import arrowDownImg from 'assets/images/arrowDown.svg';
import SVGInline from 'react-svg-inline';
import Slider, { Slide, SlideElement } from 'components/slider';
import Header from 'components/Header';
import Footer from 'components/Footer';
import slide1 from 'assets/images/slides/slide1.jpg';
import slide2 from 'assets/images/slides/slide2.jpg';
import slide3 from 'assets/images/slides/slide3.jpg';
import slide4 from 'assets/images/slides/slide4.jpg';
import jump from 'jump.js';
import LastWorks from 'components/LastWorks';
import GalleryBlock from 'components/GalleryBlock';
import LangMenu from 'components/LangMenu';
import { Helmet } from 'react-helmet';


/*
todo-stas: сделать звезду быстрее
сделать описание работ на last works
лайтбокс
Артист
сделать параллакс статичн карт вместо слайдера
верхнее меню
*/

class MainPage extends PureComponent {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  goToSlider = () => {
    jump('.le_slider', {
      offset: -30,
    });
  }

  jumpToArtTitle = () => {
    jump('.art-title', {
      offset: -30,
    });
  }

  render() {
    const {} = this.state;

    return (
      <div className="main-page">
        <Helmet>
          <title>Elena Sharbur</title>
        </Helmet>
        <Header onMainPage />
        <section className="hero is-fullheight">
          <div className="hero-header">
            <div className="container">
              <div className="level is-mobile">
                <div className="level-left"></div>
                <LangMenu />
              </div>
            </div>
          </div>
          <div className="hero-body main-page__body">
            <div className="container">
              <div className="level is-mobile">
                <div className="level-item">
                  <h1 className="title is-uppercase main-title is-centered">
                    elena sharbur
                  </h1>
                </div>
              </div>
              <div className="level is-mobile">
                <div className="level-item star">
                  <SVGInline className="star-image" svg={starImg} />
                </div>
              </div>
              <nav className="columns">
                <div className="column is-2 is-offset-3">
                  <Link id="artist" className='level-item has-text-centered nav-item' to='/artist'>
                    ARTIST
                  </Link>
                </div>
                <div id="art" className="column is-2">
                  <div className='level-item has-text-centered nav-item' onClick={this.jumpToArtTitle}>
                    ART
                  </div>
                </div>
                <div className="column is-2">
                  <Link className='level-item has-text-centered nav-item' to='/contact'>
                    CONTACT
                  </Link>
                </div>
              </nav>
            </div>
          </div>
          <div className="hero-foot">
            <div className="level is-mobile">
              <div className="level-item" onClick={this.goToSlider}>
                <SVGInline className="arrow-down" svg={arrowDownImg} />
              </div>
            </div>
          </div>
        </section>
        <section className="section gallery-block">
          <div className="container">
            <div className="hero is-medium">
              <Slider
                className="is-2by1"
                buttons
                transition="carousel"
                speed={2}
                thumbnails
                thumbnailsSize="100px"
                spinner="dots"
                width={1344}
                height={600}
                auto={5}
                animationType="fade"
              >
                <Slide
                  img={slide1}
                  img2x={slide1}
                  transition="slide"
                  href="http://dev7studios.com"
                >
                </Slide>
                <Slide
                  img={slide2}
                  transition="slide"
                />
                <Slide img={slide3} transition="slide" />
                <Slide img={slide4} transition="slide" />
              </Slider>
            </div>
            <GalleryBlock />
          </div>
        </section>
        <LastWorks />
        <Footer />
      </div>
    );
  }
}

export default MainPage;
