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
  const contact = useSelector((state) =>
    state.contact.contacts.find((x) => x.id == id)
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [web, setWeb] = useState("");
  const [company, setCompany] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [suite, setSuite] = useState("");
  const [zipcode, setZipcode] = useState("");

  useEffect(() => {
    if (contact != undefined && id != undefined) {
      console.log(contact);
      setName(contact.name);
      setEmail(contact.email);
      setPhone(contact.phone);
      setWeb(contact.web);
      setCompany(contact.company);
      setCity(contact.city);
      setStreet(contact.street);
      setSuite(contact.suite);
      setZipcode(contact.zipcode);
    }
  }, [contact]);

  const onUpdateContact = (e) => {
    e.preventDefault();
    const update_contact = Object.assign(contact, {
      id: shortid.generate(),
      name: name,
      email: email,
      phone: phone,
      web: web,
      company: company,
      address: {
        city: city,
        street: street,
        suite: suite,
        zipcode: zipcode,
      },
    });
    dispatch(updateContact(update_contact));
    navigate("/");
  };

  return (
    <div style={{ marginTop: 50 }}>
      <div className="card-header">{disabled ? "View Contact":"Edit Contact"}</div>
      <div className="card-body">
        <form onSubmit={(e) => onUpdateContact(e)}>
          <div className="form-group m-2">
            <input
            disabled = {disabled}
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group m-2">
            <input
            disabled = {disabled}
              type="text"
              className="form-control"
              placeholder="Enter Your Mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group m-2">
            <input
            disabled = {disabled}
              type="text"
              className="form-control"
              placeholder="Enter Your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="form-group m-2">
            <input
            disabled = {disabled}
              type="text"
              className="form-control"
              placeholder="Enter Your WebSite"
              value={web}
              onChange={(e) => setWeb(e.target.value)}
            />
          </div>

          <div className="form-group m-2">
            <input
            disabled = {disabled}
              type="text"
              className="form-control"
              placeholder="Enter Your Company Name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>

          <div className="form-group m-2">
            <input
            disabled = {disabled}
              type="text"
              className="form-control"
              placeholder="Enter Your City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div className="form-group m-2">
            <input
            disabled = {disabled}
              type="text"
              className="form-control"
              placeholder="Enter Your Street"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
          </div>

          <div className="form-group m-2">
            <input
            disabled = {disabled}
              type="text"
              className="form-control"
              placeholder="Enter Your Suite"
              value={suite}
              onChange={(e) => setSuite(e.target.value)}
            />
          </div>
          <div className="form-group m-2">
            <input
            disabled = {disabled}
              type="text"
              className="form-control"
              placeholder="Enter Your ZipCode"
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value)}
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
