import React from 'react';
import CategoryList from '../CategoryList';
import PostList from '../PostList';


const Home = () =>
  <div>
    <section>
      <h2>Categories</h2>
      <CategoryList />
    </section>
    <section>
      <h2>Posts</h2>
      <PostList />
    </section>
  </div>
;


export default Home;
