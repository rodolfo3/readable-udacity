import { connect } from 'react-redux';

import PostViewContainer from './container';
import { withActions } from '../helpers';
import { loadAllPosts } from '../../actions/posts';


const actions = [
  loadAllPosts(),
];


const extractPosts = (state) => Object.values(state.posts.byId);


const mapStateToProps = state => {
  return {
    posts: extractPosts(state),
  }
};


const mapDispatchToProps = dispatch => ({
});


export default
  connect(mapStateToProps, mapDispatchToProps)(
    withActions(actions)(PostViewContainer)
  );
