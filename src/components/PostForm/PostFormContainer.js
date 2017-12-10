import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { withActions } from '../helpers';
import { loadCategories } from '../../actions/categories';
import { savePost } from '../../actions/posts';
import PostForm from './PostForm';


const mapDispatchToProps = (dispatch, { history }) => ({
  submitForm: (formData) => (
    dispatch(savePost(formData)).then(({ posts }) => history.push(`/posts/${posts[0].id}`))
  ),
});


const mapStateToProps = (state) => ({
  categories: state.categories,
});


const actions = [
  loadCategories(),
];


export default
  connect(mapStateToProps, mapDispatchToProps)(
    withRouter(
      withActions(actions)(PostForm)
    )
  );
