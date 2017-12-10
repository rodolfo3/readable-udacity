import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PostForm from './PostForm';

import { withActions } from '../helpers';
import { loadCategories } from '../../actions/categories';
import { loadPost, savePost } from '../../actions/posts';


const getPostById = (state, id) => state.posts && state.posts.byId[id];


const mapDispatchToProps = (dispatch, { history }) => ({
  submitForm: (formData) => (
    dispatch(savePost(formData)).then(({ posts }) => history.push(`/posts/${posts[0].id}`))
  ),
});


const mapStateToProps = (state, props) => {
console.log(props);
return {
  categories: state.categories,
  post: props.postId ? getPostById(state, props.postId) : {},
}
};


const actions = (props) =>
  Array.concat(
    [loadCategories()],
    props.postId ? [loadPost(props.postId)] : []
  )
;

export default
  connect(mapStateToProps, mapDispatchToProps)(
    withRouter(
      withActions(actions)(PostForm)
    )
  );
