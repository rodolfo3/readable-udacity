import component from './component';
import { connect } from 'react-redux';

import { withActions } from '../helpers';
import { loadAllPosts } from '../../actions/posts';


const actions = [
  loadAllPosts(),
];


const extractPosts = (state, sortField = 'voteScore') => {
  const posts = Object.values(state.posts.byId);
  return posts.sort((a, b) => a[sortField] - b[sortField]).reverse();
};


const mapStateToProps = state => {
  return {
    posts: extractPosts(state),
  }
};


const mapDispatchToProps = dispatch => ({
});


export default
  connect(mapStateToProps, mapDispatchToProps)(
    withActions(actions)(component)
  );
