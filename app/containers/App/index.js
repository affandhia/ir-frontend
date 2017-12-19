/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from '../../components/Layout';
import HomePage from '../HomePage/Loadable';
import NotFoundPage from '../NotFoundPage/Loadable';
import PredictPage from '../PredictPage/Loadable';
import MovieDetailPage from '../MovieDetailPage';
import SearchPage from '../Sepage';

export default function App() {
  return (
    <Layout>
      <Switch>
        <Route
          exact activeClassName="active-navbar"
          path="/"
          render={() => (
            <Redirect to="/features" />
        )}
        />
        <Route exact activeClassName="active-navbar" path="/features" component={HomePage} />
        <Route exact activeClassName="active-navbar" path="/search-by-movie" component={PredictPage} />
        <Route exact activeClassName="active-navbar" path="/search-by-plot" component={SearchPage} />
        <Route exact activeClassName="active-navbar" path="/movie/:movieId" component={MovieDetailPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Layout>
  );
}
