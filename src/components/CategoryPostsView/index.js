import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withActions } from '../helpers';

import { loadCategories } from '../../actions/categories';
import { loadCategoryPosts } from '../../actions/posts';

import component from './component';


const actions = (props) => {
  const actions = [
    loadCategoryPosts(props.path),
  ];

  if (props.category) {
    return actions;
  } else {
    return [loadCategories(), ...actions];
  }
};


const mapStateToProps = (state, props) => {
  const { params } = props.match;
  const { path } = params;

  const postIds = state.posts.byCategory[path];
  const posts = postIds && postIds.map(id => state.posts.byId[id]);
  const category = state.categories && state.categories.find(c => c.path === path);

  return {
    category,
    posts,
    path,
  }
};


const mapDispatchToProps = dispatch => ({
});


export default
  connect(mapStateToProps, mapDispatchToProps)(
    withRouter(
      withActions(actions)(component)
    )
  );
