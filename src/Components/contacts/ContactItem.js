import React, { useState } from 'react'
import Avatar from 'react-avatar'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteContact } from '../../Actions/ContactActions';
import "./Contacts.css"
import { DeleteModal } from './DeleteModal';

const ContactItem = ({contact}) => {
    const {id,name,phone,email} = contact;
    const dispatch = useDispatch();
    const [modalShow, setModalShow] = useState(false);
    
   
  return (
    <div className='card mt-5 border-dark bg-dark d-flex '>
    <div className="card-body">
    <div className='row'>
        <div className='col-md-2 align-items-center justify-content-center d-flex' >
            <Avatar className='contact-img' name ={name} size="110" round={true}/>
        </div>
        <div className='col-md-9 align-item-center '>
            <ul className="list-group" >
                <li className="list-group-item list-group-item-dark ">{name}</li>
                <li className="list-group-item list-group-item-dark">{phone}</li>
                <li className="list-group-item list-group-item-dark">{email}</li>
            </ul>
        </div>
        <div className='col-md-1 d-flex flex-column align-items-center actions justify-content-center d-flex'>
            <Link to={`/contacts/view/${id}`}>
            <span  className="btn btn-warning my-1">
                <i className="fa fa-eye"/>
            </span>
            </Link>
            <Link to={`/contacts/edit/${id}`}>
            <span className="btn btn-primary my-1" alt="edit">
                <i className="fa fa-pen"/>
            </span>
            </Link>
           
            <span className="btn btn-danger my-1" onClick={() => setModalShow(true)}>
                <i className="fa fa-trash"/>
            </span>

            
            
        </div>    
    </div>
    </div>
                <DeleteModal
                 show={modalShow}
                 onHide={() => setModalShow(false)}
                 onDelete={()=> {dispatch(deleteContact(id));setModalShow(false);}}
                />
    </div>
    
    


)
}

export default ContactItem