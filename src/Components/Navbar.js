import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { contactReducer } from '../Reducers/contactReducer';
import "../Components/contacts/Contacts.css"

export const Navbar = (props) => {

  
  return (
    <nav className='navbar shadow fixed-top navbar-expand-sm navbar-dark bg-dark'>
        <div className='container'>
            <Link to={"/"} className='navbar-brand aligns-content-center'>
                <i className='fa fa-mobile text-warning'/>
                Adres <span className='text-warning'>Defterim</span>
            </Link>
            </div>


            
            <form className="form-inline my-2 my-lg-0 d-flex justify-content-center">
            <input className="form-control mr-sm-1 justify-content-center " type="search" placeholder="Ara" aria-label="Search"
            onChange={(e) => props.setSearch (e.target.value)}
            
            />
            <button class="btn btn-outline-success my-2 my-sm-0 " type="submit">ARA</button>
            </form>
          

            <div>
            <div>
                <Link to={"/contacts/add"} className='btn btn-success ml-auto'>
                  Yeni Adres
                </Link>
            </div>
            </div>
            
             
        
    </nav>
  );
};
