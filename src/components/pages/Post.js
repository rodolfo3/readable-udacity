import React from 'react';
import { Link } from 'react-router-dom';

import Page from './Page';
import PostsView from '../PostView';


// TODO breadcrumbs to category
const Post = (props) =>
  <Page>
    <Link to="/">&#8592; Home</Link>
    <PostsView postId={props.match.params.id} history={props.history} />
  </Page>
;


export default Post;
