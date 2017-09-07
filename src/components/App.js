import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import TestComp from 'components/TestComp';
import TestComp2 from 'components/TestComp2';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={TestComp} />
          <Route path="/test" render={() => <TestComp2 />} />
        </Switch>
      </Router>
    );
  }
}

export default connect(() => ({}))(App);
