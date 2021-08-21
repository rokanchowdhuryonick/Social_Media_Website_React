// import UserList from './components/UserList';
// import {users} from './usersData';
import {useState} from 'react';
import $ from 'jquery';
import Header from './components/Header';
import Login from './components/Login';
import Logout from './components/Logout';
import AddAdmin from './components/AddAdmin';
import AdminList from './components/AdminList';
import CountryList from './components/CountryList';
import AddCountry from './components/AddCountry';
import AddRestricted from './components/AddRestricted';
import RestrictedList from './components/RestrictedList';
import {BrowserRouter, BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import Dashboard from './components/Dashboard';
import UserList from './components/UserList';

//import 'bootstrap/dist/js/bootstrap.min.js';

 

function App() {

  return (
   
    <div>
      
      <BrowserRouter>
      <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/dt/dt-1.10.25/datatables.min.css"/>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/dashboard'>
            <Dashboard/>
          </Route>
          <Route path='/addadmin'>
            <AddAdmin/>
          </Route>
          <Route path='/adminList'>
            <AdminList/>
          </Route>
          <Route path='/countryList'>
            <CountryList/>
          </Route>
          <Route path='/addCountry'>
            <AddCountry/>
          </Route>
          <Route path='/addRestricted'>
            <AddRestricted/>
          </Route>
          <Route path='/restrictedWordList'>
            <RestrictedList/>
          </Route>
          <Route path='/users'>
            <UserList/>
          </Route>
          <Route path='/logout'>
            <Logout/>
          </Route>
          
          <script src="http://127.0.0.1:8000/js/jquery-3.1.1.min.js"></script>
<script src="http://127.0.0.1:8000/js/bootstrap.min.js"></script>
<script src="http://127.0.0.1:8000/js/jquery.sticky-kit.min.js"></script>
<script src="http://127.0.0.1:8000/js/jquery.scrollbar.min.js"></script>
<script src="http://127.0.0.1:8000/js/script.js"></script>
 
<script type="text/javascript" src="https://cdn.datatables.net/v/dt/dt-1.10.25/datatables.min.js"></script>
    
      </BrowserRouter>
  </div>
  );
}

export default App;
