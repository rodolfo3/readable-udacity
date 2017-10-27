import React from 'react';


const CategoryItem = ({ name, path }) =>
  <li>
    name={name}; path={path}
  </li>
;


const CategoryList = ({ categories }) =>
  <ul>
    { categories && categories.map(category => <CategoryItem key={category.name} {...category} />) }
  </ul>
;


export default CategoryList;
