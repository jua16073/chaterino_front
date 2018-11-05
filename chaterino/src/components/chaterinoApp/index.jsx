import React, {Fragment} from 'react';
import Form from '../Principal/Form';
import Login from '../Inicio/LogIn';
import Registrar from '../Inicio/Register';
import ChatList from '../Principal/ChatsList';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


const chaterinoApp = () => (
  <Fragment>
    <Route exact path="/" component={Login}/>
    <Route path = "/register" component={Registrar}/>
    <Route path = "/chats" component ={ChatList}/> 
  </Fragment>
);

export default chaterinoApp;