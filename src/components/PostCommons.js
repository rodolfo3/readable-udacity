import React from 'react';
import { Link } from 'react-router-dom';

import Vote from './Vote';
import './PostView/PostView.css';


export const PostVote = (props) => <Vote kind='posts' {...props} />;


export const DeletePost = ({ id, action}) =>
  <button onClick={() => action(id)} className="post-delete">
    &times;
  </button>
;


export const EditPost = ({ category, id }) =>
  <Link to={`/${category}/${id}/edit`} className="post-edit">
    edit
  </Link>
;
