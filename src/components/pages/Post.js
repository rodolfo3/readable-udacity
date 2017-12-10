import React from 'react';

import Page from './Page';
import PostsView from '../PostView';


const Post = (props) =>
  <Page>
    <PostsView postId={props.match.params.id} history={props.history} />
  </Page>
;


export default Post;
