import React, {Fragment} from 'react';
import Form from '../Principal/Form';
import Login from '../Inicio/LogIn';
import Registrar from '../Inicio/Register';


const chaterinoApp = () => (
  <Fragment>
    <Form/>
    <Login/>
    <Registrar/>
  </Fragment>
);

export default chaterinoApp;