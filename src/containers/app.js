import React, { Component } from 'react';
import { IndexRoute, Route, Router, browserHistory } from 'react-router';
import { HomeContainer, ProjectContainer, ShellContainer, ResumeContainer } from './';
import store from '../redux/store';
import { Provider } from 'react-redux';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={ShellContainer}>
            <IndexRoute to="/" component={HomeContainer} />
            <Route path="/home" component={HomeContainer} />
            <Route path="/resume" component={ResumeContainer} />
            <Route path="/projects/:projectId" component={ProjectContainer} />
          </Route>
        </Router>
      </Provider>
    );
  }
}