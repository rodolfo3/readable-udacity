import React from 'react';

import PostView from './component';
import { connect } from 'react-redux';

import { withActions } from '../helpers';
import { loadAllPosts } from '../../actions/posts';


const actions = [
  loadAllPosts(),
];


const extractPosts = (state) => Object.values(state.posts.byId);


const sortPosts = (posts, sortField) =>
  posts.sort((a, b) => a[sortField] - b[sortField]).reverse();
;

const mapStateToProps = state => {
  return {
    posts: extractPosts(state),
  }
};


const mapDispatchToProps = dispatch => ({
});


class PostViewController extends React.Component {
  state = {
    sortBy: 'voteScore',
  }

  render() {
    return <PostView
      posts={sortPosts(this.props.posts, this.state.sortBy)}
      sort={ sortBy => this.setState({ sortBy }) }
      sortedBy={this.state.sortBy}
    />
  }
}


export default
  connect(mapStateToProps, mapDispatchToProps)(
    withActions(actions)(PostViewController)
  );
