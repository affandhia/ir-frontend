/**
 *
 * Sepage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import {} from 'react-router-dom';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectSepage, makeSelectText } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { changeSearchBox, getPredictGenre } from './actions';

import Hero from 'components/Hero/Loadable';
import SearchBar from 'components/SearchBar';
import MovieList from 'containers/PredictPage/MovieList';

export class Sepage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const { text, onPredictGenre, onChangeSearchText, sepage } = this.props;
    const { loading, error, movies } = sepage;
    const footer = (
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <SearchBar
            multiline
            text={text}
            onChangeSearchText={onChangeSearchText}
            onSearchClick={onPredictGenre}
          />
        </div>
      </div>
    );
    return (
      <div>
        <Helmet>
          <title>Sepage</title>
          <meta name="description" content="Description of Sepage" />
        </Helmet>
        <article>
          <section id="hero">
            <Hero footer={footer} />
          </section>
          <section id="movie-list">
            <MovieList
              loading={loading}
              error={error}
              movies={movies}
              emptyMsg="Silahkan tulis Plot film"
              noResultMsg="Tidak ada film yang sejenis"
            />
          </section>
        </article>
      </div>
    );
  }
}

Sepage.propTypes = {
  sepage: PropTypes.shape(),
  text: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
  onChangeSearchText: PropTypes.func,
  onPredictGenre: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  sepage: makeSelectSepage(),
  text: makeSelectText(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onPredictGenre: () => dispatch(getPredictGenre()),
    onChangeSearchText: (text) => dispatch(changeSearchBox(text)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'sepage', reducer });
const withSaga = injectSaga({ key: 'sepage', saga });

export default compose(withReducer, withSaga, withConnect)(Sepage);
