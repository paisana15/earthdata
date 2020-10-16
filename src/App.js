import React, { Component } from 'react';
// import { Route, Switch, BrowserRouter as Router, withRouter, Redirect } from 'react-router-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
// import ScrollToTop from "../src/components/ScrollToTop";

// Import Css
import './App.scss';

// Root Include
const Root = React.lazy(() => import('./pages/HomePage'));

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Router>
          <React.Suspense fallback={<div></div>}>
            <Switch>
              <Route exact path="/" component={Root} />
              {/* <Route path="/404" component={PageError} />
              <Redirect to="/404" /> */}
            </Switch>
          </React.Suspense>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;