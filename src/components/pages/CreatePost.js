import React from 'react';

import Page from './Page';

import PostForm from '../PostForm';


const CreatePost = (props) =>
  <Page>
    <PostForm history={props.history} />
  </Page>
;


export default CreatePost;
