import React from 'react';
import { Link } from 'react-router-dom';

import Vote from '../Vote';

import EditComment from './EditComment';
import './Comment.css';


const CommentVote = (props) => <Vote kind='comments' {...props} />;


const Delete = ({ id, action}) =>
  <button onClick={() => action(id)} className="comment-delete">
    &times;
  </button>
;

const Edit = ({ id, action }) =>
  <button onClick={() => action(id)} className="comment-edit">
    &times;
  </button>
;


const CommentView = ({ id, body, author, voteScore, editComment, deleteComment }) =>
  <div className="comment-wrapper">
    <div className="comment-author">
        { author } said:
    </div>
    <blockquote className="comment-quote">
      { body }
    </blockquote>
    <CommentVote id={id} voteScore={voteScore} />
    <div className="comment-actions">
      <Edit id={id} action={editComment} />
      <Delete id={id} action={deleteComment} />
    </div>
  </div>
;


const CommentEdit = (props) => (
  <div className="comment-wrapper">
    <EditComment comment={props} onSave={props.onSave} />
  </div>
);


class Comment extends React.Component {
  state = {
    editing: false
  }


  render() {
    if (this.state.editing) {
      return (
        <CommentEdit
          {...this.props}
          onSave={() => this.setState({editing: false})}
        />
      );
    }

    return (
      <CommentView
        {...this.props}
        editComment={() => this.setState({editing: true})}
      />
    );
  }
}


export default Comment;
