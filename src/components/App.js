import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import MainPage from '../pages/MainPage';
import ArtistPage from '../pages/ArtistPage';
import ContactPage from '../pages/ContactPage';
import GalleryPage from '../pages/GalleryPage';
import GalleryPageArt from '../pages/GalleryPageArt';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/artist" component={ArtistPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/portrait" component={GalleryPage} />
          <Route path="/art" component={GalleryPageArt} />
          <Route exact path="/" component={MainPage} />
          <Redirect to="/art"/>
        </Switch>
      </Router>
    );
  }
}

export default connect(() => ({}))(App);
