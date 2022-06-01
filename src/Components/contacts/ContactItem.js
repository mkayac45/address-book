import React from 'react'
import Avatar from 'react-avatar'
import { Link } from 'react-router-dom';
import "./Contacts.css"

const ContactItem = ({contact}) => {
    const {name,phone,email} = contact;
  return (
    <div className='row'>
        <div className='col-md-6 align-items-center' >
            <Avatar className='contact-img' name ={name} size="110" round={true}/>
        </div>
        <div className='col-md-5 align-item-center'>
            <ul class="list-group" >
                <li class="list-group-item">{name}</li>
                <li class="list-group-item">{phone}</li>
                <li class="list-group-item">{email}</li>
            </ul>
        </div>
        <div className='col-md-1 d-flex flex-column align-items-center actions'>
            <a href='#'>
            <span to className="btn btn-warning my-1">
                <i className="fa fa-eye"/>
            </span>
            </a>
            <a href='#'>
            <span to className="btn btn-primary my-1">
                <i className="fa fa-pen"/>
            </span>
            </a>
            <a href='#'>
            <span to className="btn btn-danger my-1">
                <i className="fa fa-trash"/>
            </span>
            </a>
        </div>    
    </div>
)
}

export default ContactItem