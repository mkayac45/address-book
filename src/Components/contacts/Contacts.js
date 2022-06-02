import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import "./Contacts.css"
import Contact from "./ContactItem"

const Contacts = () => {
    const contacts = useSelector(state => state.contact.contacts)
  return (
    
    <section className="contact-list">
        <div className="container-fluid-abc">
            <div className="row ">
                <div className="col-md-10">
                    <div className="list">
                        
                           {contacts.map((contact) => (
                           <Contact contact = {contact} key={contact.id}/> 
                            ))}
                        
                        </div>
                    </div>
                </div>
                </div>
           
    </section>
    
  )
  
}

export default Contacts
