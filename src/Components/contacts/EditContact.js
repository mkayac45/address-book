import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import shortid from "shortid";
import { updateContact } from "../../Actions/ContactActions";

export const EditContact = (props) => {
    const disabled = props.disabled;
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const hStyle = { color: 'white' };
  const contact = useSelector((state) =>
    state.contact.contacts.find((x) => x.id == id)
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWeb] = useState("");
  const [company, setCompany] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [suite, setSuite] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [country, setCountry] = useState("");
  const [aaddress, setAaddress] = useState("");
  const [ins,setIns] = useState("");
  const [tw,setTw] = useState("");
  const [git,setGit] = useState("");
  const [lk,setLk] = useState("");

  useEffect(() => {
    if (contact != undefined && id != undefined) {
      console.log(contact);
      setName(contact.name);
      setEmail(contact.email);
      setPhone(contact.phone);
      setWeb(contact.website);
      setCompany(contact.company);
      setCity(contact.city);
      setStreet(contact.street);
      setSuite(contact.suite);
      setZipcode(contact.zipcode);
      setCountry(contact.country);
      setAaddress(contact.aaddress);
      setIns(contact.ins);
      setTw(contact.tw);
      setGit(contact.git);
      setLk(contact.lk);
    }
  }, [contact]);

  const onUpdateContact = (e) => {
    e.preventDefault();
    const update_contact = Object.assign(contact, {
      id: shortid.generate(),
      name: name,
      email: email,
      phone: phone,
      website: website,
      company: company,
      city: city,
      street: street,
      suite: suite,
      zipcode: zipcode,
      country:country,
      aaddress:aaddress,
      ins:ins,
      tw:tw,
      git:git,
      lk:lk,
      
 
    });
    dispatch(updateContact(update_contact));
    navigate("/");
  };

  return (
    <div style={{ marginTop: 50 }}>
      <div className="card-header bg-dark " style={hStyle} >{disabled ? "View Contact":"Edit Contact"}</div>
      <div className="card-body">
        <form onSubmit={(e) => onUpdateContact(e)}>
          <div className="input-group m-2">
            <span class="input-group-text" id="addon-wrapping">
            <i class="fa-duotone fa-pen-field"></i>
            &nbsp;&nbsp;Ad/Soyad</span>
            <input
            disabled = {disabled}
              type="text"
              className="form-control"
              placeholder="Ad/Soyad Giriniz"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="input-group m-2">
          <span class="input-group-text" id="addon-wrapping">
          <i class="fa-solid fa-envelope"></i>
          &nbsp;&nbsp;Email</span>
            <input
            disabled = {disabled}
              type="text"
              className="form-control"
              placeholder="Mail adresinizi giriniz."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group m-2">
          <span class="input-group-text" id="addon-wrapping">
          <i class="fa-solid fa-phone"></i>
          &nbsp;&nbsp;Telefon Numarası</span>
            <input
            disabled = {disabled}
              type="text"
              className="form-control"
              placeholder="Telefon Numaranızı Giriniz"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="input-group m-2">
          <span class="input-group-text" id="addon-wrapping">
          <i class="fa-solid fa-barcode"></i>
          &nbsp;&nbsp;Website</span>
            <input
            disabled = {disabled}
              type="text"
              className="form-control"
              placeholder="WebSite adresinizi giriniz."
              value={website}
              onChange={(e) => setWeb(e.target.value)}
            />
          </div>

          <div className="input-group m-2">
          <span class="input-group-text" id="addon-wrapping">
          <i class="fa-brands fa-instagram"></i>
          &nbsp;&nbsp;İnstagram</span>
            <input
            disabled = {disabled}
              type="text"
              className="form-control"
              placeholder="İnstagram adresinizi giriniz."
              value={ins}
              onChange={(e) => setIns(e.target.value)}
            />
          </div>

          <div className="input-group m-2">
          <span class="input-group-text" id="addon-wrapping">
          <i class="fa-brands fa-twitter"></i>
          &nbsp;&nbsp;Twitter</span>
            <input
            disabled = {disabled}
              type="text"
              className="form-control"
              placeholder="Twitter adresinizi giriniz."
              value={tw}
              onChange={(e) => setTw(e.target.value)}
            />
          </div>

          <div className="input-group m-2">
          <span class="input-group-text" id="addon-wrapping">
          <i class="fa-brands fa-github"></i>
          &nbsp;&nbsp;Github</span>
            <input
            disabled = {disabled}
              type="text"
              className="form-control"
              placeholder="Github adresinizi giriniz."
              value={git}
              onChange={(e) => setGit(e.target.value)}
            />
          </div>

          <div className="input-group m-2">
          <span class="input-group-text" id="addon-wrapping">
          <i class="fa-brands fa-linkedin"></i>
          &nbsp;&nbsp;Linkedln</span>
            <input
            disabled = {disabled}
              type="text"
              className="form-control"
              placeholder="Linkedln adresinizi giriniz."
              value={lk}
              onChange={(e) => setLk(e.target.value)}
            />
          </div>

          <div className="input-group m-2">
          <span class="input-group-text" id="addon-wrapping">
          <i class="fa-brands fa-creative-commons"></i>
          &nbsp;&nbsp;Şirket İsmi</span>
            <input
            disabled = {disabled}
              type="text"
              className="form-control"
              placeholder="Şirket İsminizi Giriniz"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>

          <div className="input-group m-2">
          <span class="input-group-text" id="addon-wrapping">Ülke İsmi</span>
            <input
            disabled = {disabled}
              type="text"
              className="form-control"
              placeholder="Şirket İsminizi Giriniz"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>

          <div className="input-group m-2">
          <span class="input-group-text" id="addon-wrapping">Şehir</span>
            <input
            disabled = {disabled}
              type="text"
              className="form-control"
              placeholder="Yaşadığınız Şehri Giriniz."
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div className="input-group m-2">
          <span class="input-group-text" id="addon-wrapping">Sokak</span>
            <input
            disabled = {disabled}
              type="text"
              className="form-control"
              placeholder="Sokağı giriniz."
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
          </div>

          <div className="input-group m-2">
          <span class="input-group-text" id="addon-wrapping ">Apartman</span>
            <input
            disabled = {disabled}
              type="text"
              className="form-control"
              placeholder="Apartman İsmini giriniz."
              value={suite}
              onChange={(e) => setSuite(e.target.value)}
            />
          </div>
          <div className="input-group m-2">
          <span class="input-group-text" id="addon-wrapping">PostaKodu</span>
            <input
            disabled = {disabled}
              type="text"
              className="form-control"
              placeholder="Posta kodunu giriniz."
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value)}
            />
          </div>

          <div className="input-group m-2">
          <span class="input-group-text" id="addon-wrapping ">Açık Address</span>
            <input
            disabled = {disabled}
              type="text"
              className="form-control"
              placeholder="Açık Adresi Giriniz"
              value={aaddress}
              onChange={(e) => setAaddress(e.target.value)}
            />
          </div>

          {!disabled && <button className="btn btn-primary" type="submit">
            Update Add
          </button>}
        </form>
      </div>
    </div>
  );
};
