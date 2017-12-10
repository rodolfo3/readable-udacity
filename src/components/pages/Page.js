import React from 'react';
import './Page.css';


const Page = ({ children }) =>
  <div>
    <header className="header">
      My Reads
      <span aria-label="logo" role="img">&#128214;</span>
    </header>
    { children }
  </div>
;


export default Page;
