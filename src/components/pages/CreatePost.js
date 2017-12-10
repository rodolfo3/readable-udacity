import React from 'react';
import { Link } from 'react-router-dom';

import Page from './Page';

import PostForm from '../PostForm';


const CreatePost = (props) =>
  <Page>
    <Link to="/">&#8592; Home</Link>
    <PostForm history={props.history} />
  </Page>
;


export default CreatePost;
