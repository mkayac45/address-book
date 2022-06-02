import React,{useState} from 'react'
import {useDispatch} from "react-redux";
import {addContact} from "../../Actions/ContactActions";
import shortid from "shortid";
import { useNavigate } from 'react-router-dom';




const AddContact = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [web,setWeb] = useState("");
  const [company,setCompany] = useState("");
  const [city,setCity] = useState("");
  const [street,setStreet] = useState("");
  const [suite,setSuite] = useState("");
  const [zipcode,setZipcode] = useState("");

  const createContact = (e) => {
    e.preventDefault();
    const new_contact = {
      id:shortid.generate(),
      name:name,
      email:email,
      phone:phone,
      web:web,
      company:company,
      address:{
      city:city,
      street:street,
      suite:suite,
      zipcode:zipcode,
      }
      
    }
    dispatch(addContact(new_contact))
    navigate('/');

  }

  return (
        <div className='card border-0 shadow' style={{marginTop:50}}>
          <div className='card-header'>Add Contact</div>
          <div className='card-body'>
            <form onSubmit={(e) => createContact(e)}>
              <div className='form-group m-2'>
                <input 
                  type="text"
                  className='form-control'
                  placeholder='Enter Your Name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  />
              </div>

              <div className='form-group m-2'>
                <input 
                  type="text"
                  className='form-control'
                  placeholder='Enter Your Mail'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  />
              </div>

              <div className='form-group m-2'>
                <input 
                  type="text"
                  className='form-control'
                  placeholder='Enter Your Phone Number' 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  />
              </div>

              <div className='form-group m-2'>
                <input 
                  type="text"
                  className='form-control'
                  placeholder='Enter Your WebSite' 
                  value={web}
                  onChange={(e) => setWeb(e.target.value)}
                  />
              </div>

              <div className='form-group m-2'>
                <input 
                  type="text"
                  className='form-control'
                  placeholder='Enter Your Company Name' 
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  />
              </div>

              <div className='form-group m-2'>
                <input 
                  type="text"
                  className='form-control'
                  placeholder='Enter Your City' 
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  />
              </div>

              <div className='form-group m-2'>
                <input 
                  type="text"
                  className='form-control'
                  placeholder='Enter Your Street' 
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  />
              </div>

              <div className='form-group m-2'>
                <input 
                  type="text"
                  className='form-control'
                  placeholder='Enter Your Suite' 
                  value={suite}
                  onChange={(e) => setSuite(e.target.value)}
                  />
              </div>
              <div className='form-group m-2'>
                <input 
                  type="text"
                  className='form-control'
                  placeholder='Enter Your ZipCode' 
                  value={zipcode}
                  onChange={(e) => setZipcode(e.target.value)}
                  />
              </div>
              <button className='btn btn-primary' type='submit'>Contact Add</button>
            </form>
          </div>
        </div>
   
  )
}

export default AddContact