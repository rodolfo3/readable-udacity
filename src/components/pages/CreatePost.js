import React from 'react';
import { Link } from 'react-router-dom';

import PostForm from '../PostForm';


const CreatePost = (props) =>
  <div>
    <Link to="/">&#8592; Home</Link>
    <PostForm history={props.history} />
  </div>
;


export default CreatePost;
