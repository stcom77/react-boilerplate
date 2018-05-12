import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeLanguage } from '../actions';

class LangMenu extends PureComponent {
  static propTypes = {
    currentLang: PropTypes.string,
    dispatch: PropTypes.func,
  };

  render() {
    const { dispatch, currentLang } = this.props;
    return (
      <div className="lang_menu">
        <span className={`lang_menu__item ${currentLang == 'en' ? 'lang_menu__item--active' : ''}`} onClick={() => dispatch(changeLanguage('en'))}>EN</span>
        <span className="header__divider">/</span>
        <span className={`lang_menu__item ${currentLang == 'ru' ? 'lang_menu__item--active' : ''}`} onClick={() => dispatch(changeLanguage('ru'))}>RU</span>
      </div>
    );
  }
}

const getData = (state) => {
  return { currentLang: state.main.currentLang };
};

export default connect(getData)(LangMenu);
