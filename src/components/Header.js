import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import debounce from 'lodash/debounce';
import jump from 'jump.js';

class Header extends PureComponent {
  static
  propTypes = {
    alwaysShow: PropTypes.bool,
    visible: PropTypes.bool,
  };

  static
  defaultProps = {
    visible: false,
    alwaysShow: false
  };

  constructor(props) {
    const { visible, alwaysShow } = props;

    super(props);
    this.state = {
      visible: alwaysShow || visible
    };
  }

  componentDidMount() {
    const { alwaysShow } = this.props;
    if(!alwaysShow){
      window.addEventListener('scroll', this.checkWindowScrolled);
    }
  }

  componentWillUnmount(){
    const { alwaysShow } = this.props;

    if(!alwaysShow){
      window.removeEventListener('scroll', this.checkWindowScrolled);
    }
  }

  checkWindowScrolled = debounce(() => {
    const windowHeight = document.documentElement.clientHeight;
    if (window.pageYOffset > windowHeight) {
      this.setState({ visible: true });
    } else {
      this.setState({ visible: false });
    }
  }, 100);

  goToArt = () => {
    jump('.last-works__body', {
      offset: -30,
    });
  }

  render() {
    const { visible } = this.state;
    return (
      <div className={`header header--fixed ${visible ? 'header--visible' : 'header--hidden'}`}>
        <div className="container">
          <div className="level is-mobile">
            <div className="level-item level-left">
              <Link to="/">MAIN</Link>
              <span className="header__divider">/</span>
              <Link to="#" onClick={this.goToArt}>ART</Link>
              <span className="header__divider">/</span>
              <Link to="/contact">CONTACT</Link>
            </div>
            <div className="level-item level-right">
              <div>
                <Link to="/">EN</Link>
                <span className="header__divider">/</span>
                <Link to="/art">RU</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
