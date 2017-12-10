import React from 'react';

import Page from './Page';

import PostForm from '../PostForm';


const EditPost = (props) =>
  <Page breadcrumbs={[
      {to: "/", label: "Home"},
      {to: `/posts/${props.match.params.id}/`, label: "Post"},
    ]}
  >
    <PostForm history={props.history} postId={props.match.params.id} />
  </Page>
;


export default EditPost;
