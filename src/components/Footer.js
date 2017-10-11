import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Footer extends PureComponent {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      ...props
    } = this.props;
    const {} = this.state;

    return (
      <footer className="footer">
        <div className="container">
          <div className="level">
            <div className="level-item level-left">
              <nav>
                <Link to="/">ELENA SHARBUR</Link>
                <span className="footer__divider">/</span>
                <Link to="/art">ART</Link>
                <span className="footer__divider">/</span>
                <Link to="/contact">CONTACT</Link>
              </nav>
            </div>
            <div className="level-item level-right">
              <div className="social-icons">
                <Link to="https://www.instagram.com/lenasharbur/">
                  <i className="fa fa-instagram"></i>
                </Link>
                <Link to="https://www.facebook.com/ElenaSharbur">
                  <i className="fa fa-facebook"></i>
                </Link>
                <Link to="https://vk.com/lena_sharbur">
                  <i className="fa fa-vk"></i>
                </Link>
                <Link to="https://www.ok.ru/elenfleur">
                  <i className="fa fa-odnoklassniki"></i>
                </Link>
              </div>
              <nav>
                <a>EN</a>
                <span className="footer__divider">/</span>
                <a>RU</a>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
