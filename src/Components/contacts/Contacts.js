import React, {} from 'react'
import { useSelector } from 'react-redux'
import "./Contacts.css"
import Contact from "./ContactItem"





const Contacts = (props) => {
    const contacts = useSelector(state => state.contact.contacts)
 
  return (
    
    <section className="contact-list">
        <div className="container-fluid-abc">
            <div className="row ">
                <div className="col-md-10">
                    <div className="list">
                        
                          {contacts.filter((x)=> 
                          x.name.toLowerCase().includes(props.search.toLowerCase()) ||
                          x.country.toLowerCase().includes(props.search.toLowerCase()) ||
                          x.city.toLowerCase().includes(props.search.toLowerCase()) ||
                          x.company.toLowerCase().includes(props.search.toLowerCase()) 
          
                          ).map((contact) => (
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
