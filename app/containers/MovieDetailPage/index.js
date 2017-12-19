/**
 *
 * MovieDetailPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectMovieDetailPage, { makeSelectMovieDetails } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getMovieDetails, getPredictMovie, clearData } from './actions';

import MovieDetail from './MovieDetail';

export class MovieDetailPage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    const { match, onGetMovieDetails, onClearData, movie } = this.props;
    if (movie && movie.id !== match.params.movieId) {
      onClearData();
    }
    onGetMovieDetails(match.params.movieId);
  }

  render() {
    return <MovieDetail {...this.props} />;
  }
}

MovieDetailPage.propTypes = {
  moviedetailpage: PropTypes.shape(),
  movie: PropTypes.shape(),
  dispatch: PropTypes.func.isRequired,
  onGetMovieDetails: PropTypes.func,
  onClearData: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  moviedetailpage: makeSelectMovieDetailPage(),
  movie: makeSelectMovieDetails(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onGetMovieDetails: id => dispatch(getMovieDetails(id)),
    onPredictMovie: id => dispatch(getPredictMovie(id)),
    onClearData: () => dispatch(clearData()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'movieDetailPage', reducer });
const withSaga = injectSaga({ key: 'movieDetailPage', saga });

export default compose(withReducer, withSaga, withConnect)(MovieDetailPage);
