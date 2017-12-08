import component from './component';
import { connect } from 'react-redux';

import { withActions } from '../helpers';
import { loadAllPosts } from '../../actions/posts';


const actions = [
  loadAllPosts(),
];


const mapStateToProps = state => {
  return {
    posts: Object.values(state.posts.byId),
  }
};


const mapDispatchToProps = dispatch => ({
});


export default
  connect(mapStateToProps, mapDispatchToProps)(
    withActions(actions)(component)
  );
