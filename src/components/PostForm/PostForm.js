import React from 'react';
import serializeForm from 'form-serialize';

const PostForm = ({ categories, submitForm }) => {
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


export default PostForm;
