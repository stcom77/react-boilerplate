import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const NavMenu = ({currentLang}) => {
  return (
    <div>
      <NavLink exact to="/" activeClassName='header--active'>{currentLang == 'en' ? 'MAIN' : 'ДОМОЙ'}</NavLink>
      <span className="header__divider">/</span>
      <NavLink exact to="/art" activeClassName='header--active'>{currentLang == 'en' ? 'ART' : 'КАРТИНЫ'}</NavLink>
      <span className="header__divider">/</span>
      <NavLink exact to="/portrait" activeClassName='header--active'>{currentLang == 'en' ? 'PORTRAITS' : 'ПОРТРЕТЫ'}</NavLink>
      <span className="header__divider">/</span>
      <NavLink exact to="/contact" activeClassName='header--active'>{currentLang == 'en' ? 'CONTACT' : 'КОНТАКТЫ'}</NavLink>
    </div>
  );
};

NavMenu.propTypes = {
  currentLang: PropTypes.string,
};

const getData = (state) => {
  return { currentLang: state.main.currentLang };
};

export default connect(getData)(NavMenu);
