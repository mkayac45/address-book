import React, { useState } from 'react'
import { Link } from 'react-router-dom';
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


            <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto ml-auto">
            <li class="nav-item">
                <div class="justify-content-md-center">
                    <form class="form-inline my-2 my-lg-0 my-lg-0 d-flex">
                        <input class="form-control mr-sm-2" type="text" placeholder="Ara..." aria-label="Search"
                         onChange={(e) => props.setSearch (e.target.value)}
                        />
                        
                    </form>
                </div>
            </li>
        </ul>
    </div>
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
