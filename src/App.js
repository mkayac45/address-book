import React from 'react';
import Contacts from './Components/contacts/Contacts';
import { Navbar } from './Components/Navbar';
import{povider ,Provider} from "react-redux";
import store from "./store";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import AddContact from './Components/contacts/AddContact';
function App() {
  return (
    <Provider store = {store}>
      <Router>
      <div className="App">
        <Navbar/>
        <div className='container'>
          <div className='py-3'>
            <Switch>
              <Route exact path="/" component={Contacts}/>
              <Route exact path="/contacts/add" component={AddContact}/>
            </Switch>

          </div>
        </div>
      </div>
      </Router>
    </Provider>
  );
};

export default App;
