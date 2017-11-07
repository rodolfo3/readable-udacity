import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import serializeForm from 'form-serialize';

import { withActions } from '../helpers';
import { loadCategories } from '../../actions/categories';
import { savePost } from '../../actions/posts';


const PostInnerForm = ({ categories, submitForm }) => {
  const innerSubmitForm = (ev) => {
    submitForm(serializeForm(ev.target, { hash: true }));
    ev.preventDefault();
  }

  return (
    <form onSubmit={innerSubmitForm}>
      <label>
        Title
        <input type="text" name="title" required />
      </label>

      <label>
        Author
        <input type="text" name="author" required />
      </label>

      <label>
        Category
        <select name="category">
          { categories && categories.map(c => <option key={c.path} value={c.path}>{c.name}</option>) }
        </select>
      </label>

      <label>
        Post body
        <textarea name="body" required></textarea>
      </label>

      <input type="submit" />
    </form>
  );
};


const mapDispatchToProps = (dispatch, { history }) => {
  return ({
  submitForm: (formData) => (
    dispatch(savePost(formData)).then(({ posts }) => history.push(`/posts/${posts[0].id}`))
  )

})};


const mapStateToProps = (state, props) => {
  return {
    categories: state.categories,
  }
};


const PostForm = ({ categories, submitForm }) => {
  console.log(submitForm);
  return <PostInnerForm submitForm={submitForm} categories={categories} />;
};


const actions = [
  loadCategories(),
];

const component = PostForm;


export default
  connect(mapStateToProps, mapDispatchToProps)(
    withRouter(
      withActions(actions)(component)
    )
  );
