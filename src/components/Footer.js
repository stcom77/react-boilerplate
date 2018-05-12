import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LangMenu from 'components/LangMenu';
import NavMenu from 'components/NavMenu';

class Footer extends PureComponent {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="level">
            <div className="level-item level-left">
              <nav>
                <NavMenu />
              </nav>
            </div>
            <div className="level-item level-right">
              <div className="social-icons">
                <a href="https://www.instagram.com/lenasharbur/">
                  <i className="fa fa-instagram" />
                </a>
                <a href="https://www.facebook.com/ElenaSharbur">
                  <i className="fa fa-facebook" />
                </a>
                <a href="https://vk.com/lena_sharbur">
                  <i className="fa fa-vk" />
                </a>
                <a href="https://www.ok.ru/elenfleur">
                  <i className="fa fa-odnoklassniki" />
                </a>
              </div>
              <div>
                <LangMenu />
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
