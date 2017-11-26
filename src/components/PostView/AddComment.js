import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import serializeForm from 'form-serialize';
import { withActions } from '../helpers';


import { saveComment } from '../../actions/comments';


const CommentForm = ({ submitForm }) => {
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
    <form onSubmit={innerSubmitForm}>
      <label>
        Author
        <input type="text" name="author" required />
      </label>

      <label>
        Comment body
        <textarea name="body" required></textarea>
      </label>

      <input type="submit" />
    </form>
  );
};


const actions = [];
const component = CommentForm;


const mapStateToProps = (state, props) => {
  return {
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


export default
  withRouter(
    connect(mapStateToProps, mapDispatchToProps)(
      withActions(actions)(component)
    )
  );
