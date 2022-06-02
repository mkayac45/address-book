import React from 'react';
import Contacts from './Components/contacts/Contacts';
import { Navbar } from './Components/Navbar';
import{provider ,Provider} from "react-redux";
import store from "./store";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import AddContact from './Components/contacts/AddContact';
import { EditContact } from './Components/contacts/EditContact';

function App() {
  return (
    
    <Provider store = {store}>
      <Router>
        <div>
          <Navbar/>
          <div className='container'>
            <div className='py-3'>
              <Routes>
                <Route  path="/" element={<Contacts/>}/>
                <Route  path="/contacts/add" element={<AddContact/>}/>
                <Route  path="/contacts/edit/:id" element={<EditContact disabled = {false}/>}/>
                <Route  path="/contacts/view/:id" element={<EditContact disabled = {true}/>}/>
              </Routes>
            </div>
          </div>
      </div>
      </Router>
    </Provider>
  );
};

export default App;
