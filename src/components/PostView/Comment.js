import React from 'react';
import Vote from '../Vote';

import './Comment.css';


const CommentVote = (props) => <Vote kind='comments' {...props} />;


const Delete = ({ id, action}) =>
  <button onClick={() => action(id)} className="comment-delete">
    &times;
  </button>
;


const Comment = ({ id, body, author, voteScore, deleteComment }) =>
  <div className="comment-wrapper">
    <div className="comment-author">
        { author } said:
    </div>
    <blockquote className="comment-quote">
      { body }
    </blockquote>
    <CommentVote id={id} voteScore={voteScore} />
    <Delete id={id} action={deleteComment} />
  </div>
;


export default Comment;
