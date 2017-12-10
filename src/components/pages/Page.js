import React from 'react';


const Page = ({ children }) =>
  <div>
    <header>
      My Reads
      <span aria-label="logo" role="img">&#128214;</span>
    </header>
    { children }
  </div>
;


export default Page;
