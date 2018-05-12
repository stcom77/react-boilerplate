import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import debounce from 'lodash/debounce';
import jump from 'jump.js';
import { connect } from 'react-redux';
import LangMenu from 'components/LangMenu';
import NavMenu from 'components/NavMenu';

class Header extends PureComponent {
  static propTypes = {
    alwaysShow: PropTypes.bool,
    currentLang: PropTypes.string,
    visible: PropTypes.bool,
  };

  static defaultProps = {
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
    if (!alwaysShow) {
      window.addEventListener('scroll', this.checkWindowScrolled);
    }
  }

  componentWillUnmount() {
    const { alwaysShow } = this.props;

    if (!alwaysShow) {
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

  render() {
    const { visible } = this.state;

    return (
      <div className={`header header--fixed ${visible ? 'header--visible' : 'header--hidden'}`}>
        <div className="container">
          <div className="level is-mobile">
            <div>
              <div className="level-item level-left">
                <NavMenu />
              </div>
            </div>
            <div className="level-item level-right">
              <LangMenu />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const getData = (state) => {
  return { currentLang: state.main.currentLang };
};

export default connect(getData)(Header);
