import React from 'react';
import { connect } from 'react-redux';


import { withActions } from '../helpers';
import { vote } from '../../actions/vote';


const Vote = ({ up, down }) =>
  <div>
    <button onClick={up}>Up</button>
    <button onClick={down}>Down</button>
  </div>
;


const mapStateToProps = (state) => ({
});


const mapDispatchToProps = (dispatch, props) => {
  const { kind, id } = props;
  return {
    up: () => vote({kind, id, type: 'up'}),
    down: () => vote({kind, id, type: 'down'}),
  };
};


const component = Vote;
const actions = [];

export default
  connect(mapStateToProps, mapDispatchToProps)(
      withActions(actions)(component)
  );
