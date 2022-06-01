import React from 'react';
import Contacts from './Components/contacts/Contacts';
import { Navbar } from './Components/Navbar';
import{provider ,Provider} from "react-redux";
import store from "./store";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import AddContact from './Components/contacts/AddContact';
function App() {
  return (
    
    <Provider store = {store}>
      <Router>
        <div className="App">
          <Navbar/>
          <div className='container'>
            <div className='py-3'>
              <Routes>
                <Route  path="/" element={<Contacts/>}/>
                <Route  path="/contacts/add" element={<AddContact/>}/>
              </Routes>
            </div>
          </div>
      </div>
      </Router>
    </Provider>
  );
};

export default App;
