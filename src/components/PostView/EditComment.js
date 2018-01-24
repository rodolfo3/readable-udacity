import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import serializeForm from 'form-serialize';
import { withActions } from '../helpers';
import { saveComment } from '../../actions/comments';


import './EditComment.css';


const CommentForm = ({ submitForm, comment }) => {
  const innerSubmitForm = (ev) => {
    const { target } = ev;
    submitForm(
      serializeForm(target, { hash: true })
    )
    .then(
      () => target.reset()
    );
    ev.preventDefault();
  }

  return (
    <form onSubmit={innerSubmitForm} className='add-comment-form'>
      { comment.id && <input className="comment-form-field" type="hidden" name="id" value={comment.id} /> }

      <label className="add-comment-label">
        Your name
        <input
          className="add-comment-field"
          type="text"
          name="author"
          required
          defaultValue={comment.author}
        />
      </label>

      <label className="add-comment-label">
        Comment
        <textarea className="add-comment-field" name="body" required>{ comment.body }</textarea>
      </label>

      <input type="submit" />
    </form>
  );
};


const actions = [];
const component = CommentForm;


const mapStateToProps = (state, props) => {
  return {
    comment: {
      author: '',
      body: '',
    },
  };
};


const mapDispatchToProps = (dispatch, props) => {
  const { params } = props.match;
  const { id } = params;
  const parentId = id;

  return {
    submitForm: (formData) => (
      dispatch(saveComment({...formData, parentId: parentId}))
    )
  }
};


export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  withActions(actions),
)(component);
