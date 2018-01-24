import React from 'react';
import { Link } from 'react-router-dom';


const CategoryItem = ({ name, path }) =>
  <li>
    <Link to={`/${path}`}>
        name={name}; path={path}
    </Link>
  </li>
;


const CategoryList = ({ categories }) =>
  <ul>
    { categories && categories.map(category => <CategoryItem key={category.name} {...category} />) }
  </ul>
;


export default CategoryList;
