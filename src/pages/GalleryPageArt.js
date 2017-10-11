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

class GalleryPage2 extends PureComponent {
  render() {
    return (
      <div className="gallery-page">
        <Header visible alwaysShow />
        <LightBox>
          <div className="container">
            <div className="tile is-ancestor">
              <div className="tile is-vertical">
                <div className="tile">
                  <div className="tile is-parent">
                    <article className="tile is-child link_with_description">
                      <figure className="image">
                        <img src={slide20Thumb} data-lightbox={slide20} />
                      </figure>
                      <div className="overlay">
                        <p className="title">Poppies</p>
                        <p>2013 year</p>
                        <p>50x60 cm</p>
                        <p>Canvas, oil</p>
                      </div>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child link_with_description">
                      <figure className="image">
                        <img src={slide5Thumb} data-lightbox={slide5} />
                      </figure>
                      <div className="overlay">
                        <p className="title">Poppies</p>
                        <p>2012 year</p>
                        <p>50x60 cm</p>
                        <p>Canvas, oil</p>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="tile">
                  <div className="tile is-parent">
                    <article className="tile is-child link_with_description">
                      <figure className="image">
                        <img src={slide12Thumb} data-lightbox={slide12} />
                      </figure>
                      <div className="overlay">
                        <p className="title">Yaffa</p>
                        <p>2011 year</p>
                        <p>30x40 cm</p>
                        <p>Canvas, oil</p>
                      </div>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child link_with_description">
                      <figure className="image">
                        <img src={slide13Thumb} data-lightbox={slide13} />
                      </figure>
                      <div className="overlay">
                        <p className="title">Old citadel</p>
                        <p>2011 year</p>
                        <p>40x50 cm</p>
                        <p>Canvas, oil</p>
                      </div>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child link_with_description">
                      <figure className="image">
                        <img src={slide16Thumb} data-lightbox={slide16} />
                      </figure>
                      <div className="overlay">
                        <p className="title">Desert</p>
                        <p>2011 year</p>
                        <p>30x40 cm</p>
                        <p>Canvas, oil</p>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="tile">
                  <div className="tile is-parent">
                    <article className="tile is-child link_with_description">
                      <figure className="image">
                        <img src={slide21Thumb} data-lightbox={slide21} />
                      </figure>
                      <div className="overlay">
                        <p className="title">Elbrus</p>
                        <p>2012 year</p>
                        <p>80x100 cm</p>
                        <p>Canvas, oil</p>
                      </div>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child link_with_description">
                      <figure className="image">
                        <img src={slide17Thumb} data-lightbox={slide17} />
                      </figure>
                      <div className="overlay">
                        <p className="title">Winter</p>
                        <p>2012 year</p>
                        <p>40x60 cm</p>
                        <p>Canvas, oil</p>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="tile">
                  <div className="tile is-parent">
                    <article className="tile is-child link_with_description">
                      <figure className="image">
                        <img src={slide3Thumb} data-lightbox={slide3} />
                      </figure>
                      <div className="overlay">
                        <p className="title">Flower spirit</p>
                        <p>2011 year</p>
                        <p>50x50 cm</p>
                        <p>Canvas, oil</p>
                      </div>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child link_with_description">
                      <figure className="image">
                        <img src={slide11Thumb} data-lightbox={slide11} />
                      </figure>
                      <div className="overlay">
                        <p className="title">Napoleon flower</p>
                        <p>2011 year</p>
                        <p>60x80 cm</p>
                        <p>Canvas, oil</p>
                      </div>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child link_with_description">
                      <figure className="image">
                        <img src={slide9Thumb} data-lightbox={slide9} />
                      </figure>
                      <div className="overlay">
                        <p className="title">Lilies</p>
                        <p>2011 year</p>
                        <p>60x80 cm</p>
                        <p>Canvas, oil</p>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="tile">
                  <div className="tile is-parent">
                    <article className="tile is-child link_with_description">
                      <figure className="image">
                        <img src={slide6Thumb} data-lightbox={slide6} />
                      </figure>
                      <div className="overlay">
                        <p className="title">Earth man</p>
                        <p>2012 year</p>
                        <p>80x60 cm</p>
                        <p>Canvas, oil</p>
                      </div>
                    </article>
                  </div>
                  <div className="tile is-parent is-7">
                    <article className="tile is-child link_with_description">
                      <figure className="image">
                        <img src={slide2Thumb} data-lightbox={slide2} />
                      </figure>
                      <div className="overlay">
                        <p className="title">Life</p>
                        <p>2014 year</p>
                        <p>60x80 cm</p>
                        <p>Canvas, acrylic</p>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="tile">
                  <div className="tile is-parent">
                    <article className="tile is-child link_with_description">
                      <figure className="image">
                        <img src={slide1Thumb} data-lightbox={slide1} />
                      </figure>
                      <div className="overlay">
                        <p className="title">Motherland</p>
                        <p>2011 year</p>
                        <p>20x30 cm</p>
                        <p>Canvas, oil</p>
                      </div>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child link_with_description">
                      <figure className="image">
                        <img src={slide7Thumb} data-lightbox={slide7} />
                      </figure>
                      <div className="overlay">
                        <p className="title">Brain</p>
                        <p>2011 year</p>
                        <p>40x40 cm</p>
                        <p>Canvas, oil</p>
                      </div>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child link_with_description">
                      <figure className="image">
                        <img src={slide18Thumb} data-lightbox={slide18} />
                      </figure>
                      <div className="overlay">
                        <p className="title">Rider</p>
                        <p>2010 year</p>
                        <p>60x40 cm</p>
                        <p>Canvas, oil</p>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="tile">
                  <div className="tile is-parent">
                    <article className="tile is-child link_with_description">
                      <figure className="image">
                        <img src={slide10Thumb} data-lightbox={slide10} />
                      </figure>
                      <div className="overlay">
                        <p className="title">Relations</p>
                        <p>2011 year</p>
                        <p>80x60 cm</p>
                        <p>Canvas, oil</p>
                      </div>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child link_with_description">
                      <figure className="image">
                        <img src={slide14Thumb} data-lightbox={slide14} />
                      </figure>
                      <div className="overlay">
                        <p className="title">Nymphs</p>
                        <p>2011 year</p>
                        <p>80x60 cm</p>
                        <p>Canvas, oil</p>
                      </div>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child link_with_description">
                      <figure className="image">
                        <img src={slide15Thumb} data-lightbox={slide15} />
                      </figure>
                      <div className="overlay">
                        <p className="title">Flowers</p>
                        <p>2011 year</p>
                        <p>80x60 cm</p>
                        <p>Canvas, oil</p>
                      </div>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child link_with_description">
                      <figure className="image">
                        <img src={slide8Thumb} data-lightbox={slide8} />
                      </figure>
                      <div className="overlay">
                        <p className="title">Women</p>
                        <p>2011 year</p>
                        <p>40x30 cm</p>
                        <p>Canvas, oil</p>
                      </div>
                    </article>
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

export default GalleryPage2;
