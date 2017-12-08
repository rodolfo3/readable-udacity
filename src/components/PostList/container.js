import React from 'react';
import PostView from './component';


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
    />
  }
}


export default PostViewContainer;
