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

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectSepage from './selectors';
import reducer from './reducer';
import saga from './saga';

import Hero from 'components/Hero/Loadable';
import SearchBar from 'components/SearchBar';

export class Sepage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const { text, onSearchClick } = this.props;
    const footer = (
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <SearchBar multiline text={text} onSearchClick={onSearchClick} />
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
        </article>
      </div>
    );
  }
}

Sepage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  sepage: makeSelectSepage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'sepage', reducer });
const withSaga = injectSaga({ key: 'sepage', saga });

export default compose(withReducer, withSaga, withConnect)(Sepage);
