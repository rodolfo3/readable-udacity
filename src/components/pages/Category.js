import React from 'react';
import { Link } from 'react-router-dom';

import Actions from '../Actions';
import CategoryPostsView from '../CategoryPostsView';


const Category = (props) =>
  <div>
    <Link to="/">&#8592; Home</Link>
    <CategoryPostsView categoryPath={props.match.params.path} />
    <Actions />
  </div>
;


export default Category;
