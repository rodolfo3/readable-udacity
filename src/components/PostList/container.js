import React from 'react';
import { connect } from 'react-redux';

import PostView from './component';
import { deletePost } from '../../actions/posts';


const sortPosts = (posts, sortField) =>
  posts.sort((a, b) => a[sortField] - b[sortField]).reverse();
;


class PostViewContainer extends React.Component {
  state = {
    sortBy: 'voteScore',
  }

  render() {
    return <PostView
      posts={sortPosts(this.props.posts, this.state.sortBy)}
      sort={ sortBy => this.setState({ sortBy }) }
      sortedBy={this.state.sortBy}
      deletePost={this.props.deletePost}
    />
  }
}


const mapStateToProps = (state, props) => props;

const mapDispatchToProps = (dispatch, props) => ({
  deletePost: (id) => dispatch(deletePost({ id })),
});


export default connect(mapStateToProps, mapDispatchToProps)(PostViewContainer);
