import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withActions } from '../helpers';

import { loadPost, deletePost } from '../../actions/posts';
import { loadPostComments, deleteComment } from '../../actions/comments';

import PostView from './PostView';


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
  const { error, postId } = props;

  const post = state.posts.byId[postId];
  const commentIds = state.comments.byPostId[postId];

  const comments = commentIds && commentIds.map(id => state.comments.byId[id]);

  return {
    id: postId,
    post,
    comments,
    error
  };
};


const mapDispatchToProps = (dispatch, props) => {
  const { history } = props;
  return {
    deleteComment: (id) => dispatch(deleteComment({ id })),
    deletePost: (id) => dispatch(deletePost({ id })).then(() => history.push('/'))
  };
};


export default
  connect(mapStateToProps, mapDispatchToProps)(
    withRouter(
      withActions(actions)(PostView)
    )
  );
