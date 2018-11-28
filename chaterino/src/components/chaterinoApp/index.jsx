import React, {Fragment} from 'react';
import Form from '../Principal/Form';
import Login from '../Inicio/LogIn';
import Registrar from '../Inicio/Register';
import ChatList from '../Principal/ChatsList';
import Chat from '../VistaChat/Chat';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

import './app.css';
import Home from '../Principal/Home';


const chaterinoApp = () => (
  <Fragment>
    <div className="app">
      <Route exact path="/" component={Login}/>
      <Route path = "/register" component={Registrar}/>
      <Route path = "/chats" exact = {true} component= {Home}/>
      <Route path = "/chats/:id" component={Chat}/>
    </div>
    
  </Fragment>
);
/*
<Route path = "/chats" exact = {true} render = {() => (
        this.state.users.user != null ? (<Home/>) : (<Redirect to= "/"/>)
      )} />  
*/



export default chaterinoApp;