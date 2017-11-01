import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withActions } from '../helpers';

import { loadPost } from '../../actions/posts';
import { loadPostComments } from '../../actions/comments';

import component from './component';


const actions = (props) => {
  const actions = [
    loadPostComments(props.id),
  ];

  if (props.post) {
    return actions;
  } else {
    return [loadPost(props.id), ...actions];
  };
}


const mapStateToProps = (state, props) => {
  const { params } = props.match;
  const { id } = params;

  const post = state.posts.byId[id];
  const commentIds = state.comments.byPostId[id];

  const comments = commentIds && commentIds.map(id => state.comments.byId[id]);

  return {
    id,
    post,
    comments,
  };
};


const mapDispatchToProps = dispatch => ({
});


export default
  connect(mapStateToProps, mapDispatchToProps)(
    withRouter(
      withActions(actions)(component)
    )
  );
