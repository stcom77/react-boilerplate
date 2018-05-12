import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Header from 'components/Header';
import Footer from 'components/Footer';
import starImg from 'assets/images/Star.svg';
import SVGInline from 'react-svg-inline';
import { Helmet } from 'react-helmet';

class ContactPage extends PureComponent {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {} = this.state;

    return (
      <section className="conacts-page hero is-fullheight">
        <Helmet>
          <title>Elena Sharbur</title>
        </Helmet>
        <div className="hero-head">
          <Header visible />
        </div>
        <div className="contact-info hero-body">
          <div className="container has-text-centered">
            <div className="level">
              <div className="level-item">
                <SVGInline svg={starImg} />
              </div>
            </div>
            <h2>
              ART@ELENASHARBUR.COM
            </h2>
            <h2>
              Mob.: +7 916 655 47 47
            </h2>
            <h2>
              WhatsApp / Viber
            </h2>
          </div>
        </div>
        <div className="hero-foot">
          <Footer/>
        </div>
      </section>
    );
  }
}

export default ContactPage;
