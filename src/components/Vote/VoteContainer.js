import { connect } from 'react-redux';
import { vote } from '../../actions/vote';

import Vote from './Vote';

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

export default connect(mapStateToProps, mapDispatchToProps)(Vote);
