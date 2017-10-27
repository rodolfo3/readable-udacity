import React, { Component } from 'react';
import { connect } from 'react-redux';


export const withActions = actions => OriginalComponent => {
  class WithActioncComponent extends Component {
    componentDidMount() {
      const { dispatch } = this.props;

      Promise.all(actions.map(act => dispatch(act)))
      .then(r => console.log('loaded!', r))
    }

    render() {
      return <OriginalComponent {...this.props} />
    }
  }

  return connect()(WithActioncComponent);
};
