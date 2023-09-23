import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.css';
import './style.css';

function Layout() {
  return (
    <>
      <head>
        <title>Website menu 02</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <link href='https://fonts.googleapis.com/css?family=Roboto:400,100,300,700' rel='stylesheet' type='text/css' />

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />

      </head>
      <body>
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
          <div className="container">
            <form action="#" className="searchform order-lg-last">
              <div className="form-group d-flex">
                <input type="text" className="form-control pl-3" placeholder="Search" />
                <button type="submit" placeholder="" className="form-control search">
                  <span className="fa fa-search"></span>
                </button>
              </div>
            </form>
            <div className="collapse navbar-collapse" id="ftco-nav">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/productos" className="nav-link">
                    Productos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/detalle" className="nav-link">
                    Detalle
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Outlet />
      </body>
    </>
  );
}

export default Layout;

