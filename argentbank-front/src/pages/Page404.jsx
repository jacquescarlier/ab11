import React from 'react';
import Nav from '../containers/nav/Nav';
import { NavLink } from 'react-router-dom';
import '../css/page404.css'

export default function Page404()  {
  return (
    <div>
      <div className="container-general">
        <Nav />
        <div className="page404">
          <div className="page404Content">
            <h2>Page Not Found</h2>
            <p>We can't seem to find the page you're looking for.</p>
            <NavLink to="/" className="errorPage404">Home page</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

