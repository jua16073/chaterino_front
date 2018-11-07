import React, {Fragment} from 'react';
import Form from '../Principal/Form';
import Login from '../Inicio/LogIn';
import Registrar from '../Inicio/Register';
import ChatList from '../Principal/ChatsList';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import './app.css';
import Home from '../Principal/Home';


const chaterinoApp = () => (
  <Fragment>
    <div className="app">
      <Route exact path="/" component={Login}/>
      <Route path = "/register" component={Registrar}/>
      <Route path = "/chats" component ={Home}/> 
    </div>
    
  </Fragment>
);

export default chaterinoApp;