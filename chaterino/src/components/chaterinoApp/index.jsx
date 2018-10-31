import React, {Fragment} from 'react';
import Form from '../Principal/Form';
import Login from '../Inicio/LogIn';
import Registrar from '../Inicio/Register';
import ChatList from '../Principal/ChatsList';
import {BrowserRouter, Link} from 'react-router-dom';


const chaterinoApp = () => (
  <Fragment>
    <Login/>
  </Fragment>
);

export default chaterinoApp;