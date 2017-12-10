import React from 'react';
import { Link } from 'react-router-dom';

import './Page.css';


const Page = ({ children, breadcrumbs = null }) =>
  <div>
    <header className="header">
      My Reads
      <span aria-label="logo" role="img">&#128214;</span>
    </header>
    <div>
      { breadcrumbs
        ? breadcrumbs.map(({ to, label }) => <Link className="breadcrumb-link" to={to}>{ label }</Link>)
        : <Link className="breadcrumb-link" to="/">Home</Link>
      }
    </div>
    { children }
  </div>
;


export default Page;
