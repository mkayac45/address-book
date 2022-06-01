import React from 'react'
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className='navbar shadow fixed-top navbar-expand-sm navbar-dark bg-dark'>
        <div className='container'>
            <Link to="/" className='navbar-brand'>
                <i className='fa fa-mobile text-warning'/>
                Adres <span className='text-warning'>Defterim</span>
            </Link>
            <div>
                <Link to="/contacts/add" className='btn btn-light ml-auto'>
                  Yeni Adres
                </Link>
            </div>
        </div>
    </nav>
  );
};
