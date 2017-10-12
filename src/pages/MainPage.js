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
import p6 from 'assets/images/portraits/r6.jpg';
import a20 from 'assets/images/arts/m20.jpg';
import p1 from 'assets/images/portraits/t1.jpg';
import p1742 from 'assets/images/portraits/t1742.jpg';
import a5 from 'assets/images/arts/m5.jpg';
import a13 from 'assets/images/arts/m13.jpg';
import jump from 'jump.js';
import { TweenMax, Bounce, TweenLite, TimelineMax } from "gsap";


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
        <Header />
        <section className="hero is-fullheight">
          <div className="hero-header">
            <div className="container">
              <div className="level is-mobile">
                <div className="level-left"></div>
                <div className="level-right main-page__lang"><span>EN / RU</span></div>
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
              </Slider>
            </div>
            <div className="level art-title is-mobile">
              <div className="level-item has-text-centered">
                <h1 className="title">THE ART</h1>
              </div>
            </div>
            <div className="level gallery-title is-mobile">
              <div className="level-item has-text-centered">
                <h2 className="subtitle">MY GALLERY</h2>
              </div>
            </div>
            <div className="columns is-ancestor last-works__body">
              <div className="column is-6 link_with_description">
                <Link to="/art">
                  <figure className="image is-square">
                    <img src={a20} alt="Art gallery" />
                    <figcaption className="overlay">
                      <span>Arts</span>
                    </figcaption>
                  </figure>
                </Link>
              </div>
              <div className="column is-6 link_with_description">
                <Link to="/portrait">
                  <figure className="image is-square link_with_description">
                    <img src={p6} />
                    <figcaption className="overlay">
                      <span>Portraits</span>
                    </figcaption>
                  </figure>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="section last-works">
          <div className="container">
            <div className="level last-works__title is-mobile">
              <div className="level-item">
                <h2 className="title is-size-3">LAST WORKS</h2>
              </div>
            </div>
            <div className="last-works__body">
              <div className="columns">
                <div className="column is-6 link_with_description">
                  <figure className="image is-square">
                    <img src={p1} />
                  </figure>
                  <div className="overlay">
                    <p className="title">
                      Kira portrait
                    </p>
                    <p>
                      2016 year
                    </p>
                    <p>
                      50x40 cm
                    </p>
                    <p>
                      Canvas, acrylic
                    </p>
                  </div>
                </div>
                <div className="column is-6 link_with_description">
                  <figure className="image is-square">
                    <img src={p1742} />
                  </figure>
                  <div className="overlay">
                    <p className="title">
                      Rafael portrait
                    </p>
                    <p>
                      2017 year
                    </p>
                    <p>
                      40x40 cm
                    </p>
                    <p>
                      Canvas, oil
                    </p>
                  </div>
                </div>
              </div>
              <div className="columns">
                <div className="column is-6 link_with_description">
                  <figure className="image is-square">
                    <img src={a5} />
                  </figure>
                  <div className="overlay">
                    <p className="title">
                      Poppies
                    </p>
                    <p>
                      2012 year
                    </p>
                    <p>
                      50x60 cm
                    </p>
                    <p>
                      Canvas, oil
                    </p>
                  </div>
                </div>
                <div className="column is-6 link_with_description">
                  <figure className="image is-square">
                    <img src={a13} />
                  </figure>
                  <div className="overlay">
                    <p className="title">
                      Old citadel
                    </p>
                    <p>
                      2011 year
                    </p>
                    <p>
                      40x50 cm
                    </p>
                    <p>
                      Canvas, oil
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default MainPage;
