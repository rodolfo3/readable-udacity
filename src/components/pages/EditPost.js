import React from 'react';
import { Link } from 'react-router-dom';

import PostForm from '../PostForm';


const EditPost = (props) =>
  <div>
    <Link to="/">&#8592; Home</Link>
    <Link to={`/posts/${props.id}/`}>&#8592; Post</Link>
    <PostForm history={props.history} postId={props.match.params.id} />
  </div>
;


export default EditPost;
