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
  const [website,setWeb] = useState("");
  const [company,setCompany] = useState("");
  const [city,setCity] = useState("");
  const [street,setStreet] = useState("");
  const [suite,setSuite] = useState("");
  const [zipcode,setZipcode] = useState("");
  const [country,setCountry] = useState("");
  const [aaddress,setAaddress] = useState("");
  const [ins,setIns] = useState("");
  const [tw,setTw] = useState("");
  const [git,setGit] = useState("");
  const [lk,setLk] = useState("");
  

  const createContact = (e) => {
    e.preventDefault();
    const new_contact = {
      id:shortid.generate(),
      name:name,
      email:email,
      phone:phone,
      website:website,
      company:company,
      city:city,
      street:street,
      suite:suite,
      zipcode:zipcode,
      country:country,
      aaddress:aaddress,
      ins:ins,
      tw:tw,
      git:git,
      lk:lk,

      
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
                  placeholder='İsminizi Giriniz'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  />
              </div>

              <div className='form-group m-2'>
                <input 
                  type="text"
                  className='form-control'
                  placeholder='Emailinizi Giriniz'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  />
              </div>

              <div className='form-group m-2'>
                <input 
                  type="text"
                  className='form-control'
                  placeholder='Telefon Numaranızı Giriniz' 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  />
              </div>

              <div className='form-group m-2'>
                <input 
                  type="text"
                  className='form-control'
                  placeholder='WebSite adresinizi giriniz.' 
                  value={website}
                  onChange={(e) => setWeb(e.target.value)}
                  />
              </div>

              <div className='form-group m-2'>
                <input 
                  type="text"
                  className='form-control'
                  placeholder='İnstagram adresinizi giriniz.' 
                  value={ins}
                  onChange={(e) => setIns(e.target.value)}
                  />
              </div>

              <div className='form-group m-2'>
                <input 
                  type="text"
                  className='form-control'
                  placeholder='Twitter adresinizi giriniz.' 
                  value={tw}
                  onChange={(e) => setTw(e.target.value)}
                  />
              </div>

              <div className='form-group m-2'>
                <input 
                  type="text"
                  className='form-control'
                  placeholder='Github adresinizi giriniz.' 
                  value={git}
                  onChange={(e) => setGit(e.target.value)}
                  />
              </div>

              <div className='form-group m-2'>
                <input 
                  type="text"
                  className='form-control'
                  placeholder='Linkedln adresinizi giriniz.' 
                  value={lk}
                  onChange={(e) => setLk(e.target.value)}
                  />
              </div>

              <div className='form-group m-2'>
                <input 
                  type="text"
                  className='form-control'
                  placeholder='Şirket ismini giriniz.' 
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  />
              </div>

              <div className='form-group m-2'>
                <input 
                  type="text"
                  className='form-control'
                  placeholder='Ülkenizi Giriniz' 
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  />
              </div>

              <div className='form-group m-2'>
                <input 
                  type="text"
                  className='form-control'
                  placeholder='Şehir ismini giriniz.' 
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  />
              </div>

              <div className='form-group m-2'>
                <input 
                  type="text"
                  className='form-control'
                  placeholder='Sokak ismini giriniz' 
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  />
              </div>

              <div className='form-group m-2'>
                <input 
                  type="text"
                  className='form-control'
                  placeholder='Daire ismini giriniz' 
                  value={suite}
                  onChange={(e) => setSuite(e.target.value)}
                  />
              </div>
              <div className='form-group m-2'>
                <input 
                  type="text"
                  className='form-control'
                  placeholder='Posta Kodunu giriniz.' 
                  value={zipcode}
                  onChange={(e) => setZipcode(e.target.value)}
                  />
              </div>

              <div className='form-group m-2'>
                <input 
                  type="text"
                  className='form-control'
                  placeholder='Açık Adresi Giriniz' 
                  value={aaddress}
                  onChange={(e) => setAaddress(e.target.value)}
                  />
              </div>
              <button className='btn btn-primary' type='submit'>Contact Add</button>
            </form>
          </div>
        </div>
   
  )
}

export default AddContact