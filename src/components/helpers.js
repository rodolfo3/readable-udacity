import React, { Component } from 'react';
import { connect } from 'react-redux';

import './helpers.css';


const Loading = () =>
  <div className="loading-wrapper">
    <strong className="loading-text">
      Loading...
    </strong>
  </div>
;


const buildActions = (actions, props) => {
  if (typeof actions === 'function') {
    return actions(props);
  } else {
    return actions;
  }
}


export const withActions = acts => OriginalComponent => {
  class WithActioncComponent extends Component {
    state = {
      loaded: false,
      error: null,
    }

    componentDidMount() {
      const actions = buildActions(acts, this.props);

      if (actions.length) {
        const { dispatch } = this.props;
        Promise.all(actions.map(act => dispatch(act)))
          .then(() => {
            this.setState({ loaded: true });
          })
          .catch(error => {
            this.setState({ error, loaded: true });
          });
      } else {
          this.setState({ loaded: true });
      }
    }

    render() {
      if (this.state.loaded) {
        return <OriginalComponent {...this.props} error={this.state.error} />
      }
      return <Loading />;
    }
  }

  return connect()(WithActioncComponent);
};
