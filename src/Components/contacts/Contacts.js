import React from 'react'
import { useSelector } from 'react-redux'
import "./Contacts.css"
import Contact from "./ContactItem"

const Contacts = () => {
    const contacts = useSelector(state => state.contacts)
  return (
    
    <section className="contact-list">
        <div className="container-fluid-abc">
            <div className="row ">
                <div className="col-md-10">
                    <div className="card">
                        <div className="card-body">
                           {contacts.map((contact) => (<Contact contact = {contact}/> 
                            ))}      
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
  )
  
}

export default Contacts
