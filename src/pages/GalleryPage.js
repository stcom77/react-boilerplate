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

class GalleryPage extends PureComponent {
  static propTypes = {};

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

  render() {
    const {
      showModal
    } = this.state;
    const {} = this.state;

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
                        <img src={slide4Thumb} data-lightbox={slide4} />
                      </figure>
                      <div className="overlay">
                        <p className="title">
                          Nataly
                        </p>
                        <p>
                          2014 year
                        </p>
                        <p>
                          20x20 cm
                        </p>
                        <p>
                          Canvas, oil
                        </p>
                      </div>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child link_with_description">
                      <figure className="image">
                        <img src={slide3Thumb} data-lightbox={slide3} />
                      </figure>
                      <div className="overlay">
                        <p className="title">
                          Marya
                        </p>
                        <p>
                          2014 year
                        </p>
                        <p>
                          20x20 cm
                        </p>
                        <p>
                          Canvas, oil
                        </p>
                      </div>
                    </article>
                  </div>
                  <div className="tile is-parent is-4">
                    <article className="tile is-child link_with_description">
                      <figure className="image">
                        <img src={slide1Thumb} data-lightbox={slide1} />
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
                    </article>
                  </div>
                </div>
                <div className="tile">
                  <div className="tile is-parent is-6">
                    <article className="tile is-child link_with_description">
                      <figure className="image">
                        <img src={slide6Thumb} data-lightbox={slide6} />
                      </figure>
                      <div className="overlay">
                        <p className="title">
                          Emotions
                        </p>
                        <p>
                          2015 year
                        </p>
                        <p>
                          80x60 cm
                        </p>
                        <p>
                          Canvas, acrylic
                        </p>
                      </div>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child link_with_description">
                      <figure className="image">
                        <img src={slide5Thumb} data-lightbox={slide5} />
                      </figure>
                      <div className="overlay">
                        <p className="title">
                          Red-haired girl
                        </p>
                        <p>
                          2015 year
                        </p>
                        <p>
                          40x30 cm
                        </p>
                        <p>
                          Canvas, acrylic
                        </p>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="tile">
                  <div className="tile is-parent is-5">
                    <article className="tile is-child link_with_description">
                      <figure className="image">
                        <img src={slide2Thumb} data-lightbox={slide2} />
                      </figure>
                      <div className="overlay">
                        <p className="title">
                          Duchess Olga
                        </p>
                        <p>
                          2015 year
                        </p>
                        <p>
                          80x60 cm
                        </p>
                        <p>
                          Canvas, oil
                        </p>
                      </div>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child link_with_description">
                      <figure className="image">
                        <img src={slide13Thumb} data-lightbox={slide13} />
                      </figure>
                      <div className="overlay">
                        <p className="title">
                          Nicas
                        </p>
                        <p>
                          2016 year
                        </p>
                        <p>
                          30x30 cm
                        </p>
                        <p>
                          Canvas, oil
                        </p>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="tile">
                  <div className="tile is-parent">
                    <article className="tile is-child link_with_description">
                      <figure className="image">
                        <img src={slide8Thumb} data-lightbox={slide8} />
                      </figure>
                      <div className="overlay">
                        <p className="title">
                          Vika
                        </p>
                        <p>
                          2010 year
                        </p>
                        <p>
                          40x20 cm
                        </p>
                        <p>
                          Paper, mascara
                        </p>
                      </div>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child link_with_description">
                      <figure className="image">
                        <img src={slide10Thumb} data-lightbox={slide10} />
                      </figure>
                      <div className="overlay">
                        <p className="title">
                          Self portrait
                        </p>
                        <p>
                          2010 year
                        </p>
                        <p>
                          80x60 cm
                        </p>
                        <p>
                          Paper, watercolor
                        </p>
                      </div>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child link_with_description">
                      <figure className="image">
                        <img src={slide11Thumb} data-lightbox={slide11} />
                      </figure>
                      <div className="overlay">
                        <p className="title">
                          Keith
                        </p>
                        <p>
                          2010 year
                        </p>
                        <p>
                          40x30 cm
                        </p>
                        <p>
                          Canvas, oil
                        </p>
                      </div>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child link_with_description">
                      <figure className="image">
                        <img src={slide7Thumb} data-lightbox={slide7} />
                      </figure>
                      <div className="overlay">
                        <p className="title">
                          Anna
                        </p>
                        <p>
                          2010 year
                        </p>
                        <p>
                          30x40 cm
                        </p>
                        <p>
                          Design paper, mascara
                        </p>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="tile">
                  <div className="tile is-parent">
                    <article className="tile is-child link_with_description">
                      <figure className="image">
                        <img src={slide9Thumb} data-lightbox={slide9} />
                      </figure>
                      <div className="overlay">
                        <p className="title">
                          Lovers
                        </p>
                        <p>
                          2010 year
                        </p>
                        <p>
                          80x70 cm
                        </p>
                        <p>
                          Canvas, oil
                        </p>
                      </div>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child link_with_description">
                      <figure className="image">
                        <img src={slide1742Thumb} data-lightbox={slide1742} />
                      </figure>
                      <div className="overlay">
                        <p className="title">
                          Rafael
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

export default GalleryPage;
