import React from 'react';
import { Link } from 'react-router-dom';

import PostsView from '../PostView';


// TODO breadcrumbs to category
const Post = (props) =>
  <div>
    <Link to="/">&#8592; Home</Link>
    <PostsView postId={props.match.params.id} history={props.history} />
  </div>
;


export default Post;
