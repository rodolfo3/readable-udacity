import React, { Component } from 'react';
import { connect } from 'react-redux';


const Loading = () => <strong>Loading...</strong>;


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
    }

    componentDidMount() {
      const actions = buildActions(acts, this.props);

      if (actions.length) {
        const { dispatch } = this.props;
        Promise.all(actions.map(act => dispatch(act)))
          .then(() => {
            console.log(this.props);
            this.setState({ loaded: true });
          })
      } else {
          this.setState({ loaded: true });
      }
    }

    render() {
      if (this.state.loaded) {
console.log('component', this.props);
        return <OriginalComponent {...this.props} />
      }
console.log('loading');
      return <Loading />;
    }
  }

  return connect()(WithActioncComponent);
};
