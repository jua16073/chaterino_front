import React, {Fragment} from 'react';
import Form from '../Principal/Form';
import Login from '../Inicio/LogIn';
import Registrar from '../Inicio/Register';
import {connect} from 'react-redux';
import ChatList from '../Principal/ChatsList';
import Chat from '../VistaChat/Chat';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';


import * as selectors from '../../reducers';

import './app.css';
import Home from '../Principal/Home';


const chaterinoApp = ({token}) => (
  <Fragment>
    <div className="app">
      <Route exact path="/" component={Login}/>
      <Route path = "/register" component={Registrar}/>
      <Route path = "/chats/:id" component={Chat}/>
      {
        console.log("El token es")
      }
      {
        console.log(token)
      }
      <Route path = "/chats" exact = {true} render = {() => (
        token != null ? (<Home/>) : (<Redirect to= "/"/>)
      )} />  
    </div>
    
  </Fragment>
);
/*

*/



export default connect(
  state => ({
    ...selectors.getToken(state),
  }),
  undefined
)(chaterinoApp);