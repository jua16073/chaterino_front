import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import { Route, NavLink, Redirect } from 'react-router-dom';

import Chatlist from '../ChatsList';
import Form from '../Form';

const Home = () => (
  <Fragment>
    <Chatlist/>
    <Form/>
  </Fragment>
)

export default Home;