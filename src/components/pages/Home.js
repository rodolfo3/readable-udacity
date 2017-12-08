import React from 'react';

import Actions from '../Actions';
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
    <Actions />
  </div>
;


export default Home;
