import React from 'react';
import { connect } from 'react-redux';


import { withActions } from '../helpers';
import { vote } from '../../actions/vote';


const Vote = ({ up, down, voteScore = null }) =>
  <div>
    <button onClick={up}>Up</button>
    { voteScore }
    <button onClick={down}>Down</button>
  </div>
;


const mapStateToProps = (state, props) => ({
  voteScore: props.voteScore,
});


const mapDispatchToProps = (dispatch, props) => {
  const { kind, id } = props;
  return {
    up: () => dispatch(vote({kind, id, type: 'up'})),
    down: () => dispatch(vote({kind, id, type: 'down'})),
  };
};


const component = Vote;
const actions = [];

export default
  connect(mapStateToProps, mapDispatchToProps)(
      withActions(actions)(component)
  );
