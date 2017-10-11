import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Slider, { Slide, SlideElement } from 'components/slider';
import slide1 from 'assets/images/slides/slide1.jpg';
import slide2 from 'assets/images/slides/slide2.jpg';
import slide3 from 'assets/images/slides/slide3.jpg';

class ArtistPage extends PureComponent {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { ...props } = this.props;
    const {} = this.state;

    return (
      <div className="artist-page hero is-fullheight">
        <div className="hero-head">
          <Header />
        </div>
        <div className="hero-body">
          <div className="container">
            <Slider className="is-2by1" buttons transition="carousel" speed="1" thumbnails thumbnailsSize="100px" spinner="dots" bullets>
              <Slide img={slide1} img2x={slide1} transition="fade" href="http://dev7studios.com">
                <SlideElement
                  style={{
                    left: '10px',
                    position: 'absolute',
                    width: '200px',
                    top: '50px',
                  }}
                >
                  <h1 className="someclass" left="10px">
                    some title slide element
                  </h1>
                </SlideElement>
                <SlideElement
                  style={{
                    left: '50px',
                    position: 'absolute',
                    width: '200px',
                    top: '200px',
                  }}
                >
                  <h1 className="someclass" left="10px">
                    other title slide element
                  </h1>
                </SlideElement>
              </Slide>
              <Slide img={slide2} transition="zoom" />
              <Slide img={slide3} transition="fade" />
            </Slider>
            <div className="page__title">
              <h1 className="title">THE ARTIST</h1>
              <h2 className="subtitle">ELENA SHARBUR/BORN 1988 IN BELGOROD</h2>
            </div>
            <div className="columns">
              <div className="column is-6">
                <p>
                  Lotus hibridas ducunt ad ignigena.Finiss ortum in ferox rugensis civitas! Pess prarere in regius quadrata!Cum exsul peregrinationes, omnes demolitionees captis
                  alter, flavum messores.Hercle, detrius flavum!.Cur detrius messis?Silvas crescere in brigantium! Alter species foris vitares ratione est.Danista brevis ionicis
                  tormento est. Dexter imbers ducunt ad xiphias.Elogiums studere, tanquam velox burgus. Credere una ducunt ad varius adiurator.Cur domus nocere?Dexter elevatuss
                  ducunt ad caesium.
                </p>
              </div>
              <div className="column is-6">
                <p>
                  Lotus hibridas ducunt ad ignigena.Finiss ortum in ferox rugensis civitas! Pess prarere in regius quadrata!Cum exsul peregrinationes, omnes demolitionees captis
                  alter, flavum messores.Hercle, detrius flavum!.Cur detrius messis?Silvas crescere in brigantium! Alter species foris vitares ratione est.Danista brevis ionicis
                  tormento est. Dexter imbers ducunt ad xiphias.Elogiums studere, tanquam velox burgus. Credere una ducunt ad varius adiurator.Cur domus nocere?Dexter elevatuss
                  ducunt ad caesium.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ArtistPage;
