import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import './home.css'

import Register from '../Register';
import * as actions from '../../../actions';
import * as selectors from '../../../reducers';

class login extends React.Component{
  render () {
    const {onSubmit} = this.props;

    return (
      <Fragment>
        <div className="Login">
          <p>Username</p>
          <input type="text"
          ref = {node => {this.username = node;}}/> <br/>
          <p>Contrasena</p>
          <input type="password"
          ref = {node => {this.pass = node;} }/> <br/>

          <nav>
            <Link to = "/chats">
              <button onClick={
                () => {
                  onSubmit(
                    this.username.value,
                    this.pass.value
                  );
                  this.pass.value = "";
                }
              }>Login</button>
            </Link>
          </nav>
          

          <nav>
            <Link to="/register">
              <button onClick= {prueba}
              > Registrarse</button>
            </Link>
          </nav>
          
          <div>
            <Route path="/register"  component = {Register} />
          </div>
        </div>
      </Fragment>
    )
  }
}

const prueba = () => {
  
}

export default connect(
  undefined,
  (dispatch) => ({
    onSubmit(user, pass){
      dispatch(actions.verifyUser(user,pass))
    }
  })
)(login);