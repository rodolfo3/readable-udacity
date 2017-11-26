import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import serializeForm from 'form-serialize';

import { withActions } from '../helpers';
import { loadCategories } from '../../actions/categories';
import { loadPost, savePost } from '../../actions/posts';


const getPostById = (state, id) => state.posts && state.posts.byId[id];


const PostInnerForm = ({ post, categories, submitForm }) => {
  const innerSubmitForm = (ev) => {
    submitForm(serializeForm(ev.target, { hash: true }));
    ev.preventDefault();
  }

  return (
    <form onSubmit={innerSubmitForm}>
      <input type="hidden" name="id" value={post.id} />
      <label>
        Title
        <input type="text" name="title" defaultValue={post.title} required />
      </label>

      <label>
        Author
        <input type="text" name="author" defaultValue={post.author} required />
      </label>

      <label>
        Category
        <select name="category" defaultValue={post.category}>
          { categories && categories.map(c => <option key={c.path} value={c.path}>{c.name}</option>) }
        </select>
      </label>

      <label>
        Post body
        <textarea name="body" defaultValue={post.body} required></textarea>
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
  const { match } = props;
  const { id } = match.params;

console.log(id);
console.log('state', state);

  return {
    categories: state.categories,
    post: getPostById(state, id),
  }
};


const PostForm = ({ post, categories, submitForm }) => {
  return <PostInnerForm submitForm={submitForm} categories={categories} post={post} />;
};


const actions = (props) => {
  const { match } = props;
  const { id } = match.params;

  return [
    loadCategories(),
    loadPost(id),
  ];
};

const component = PostForm;


export default
  connect(mapStateToProps, mapDispatchToProps)(
    withRouter(
      withActions(actions)(component)
    )
  );
