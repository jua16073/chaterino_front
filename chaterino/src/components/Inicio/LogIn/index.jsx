import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Register from '../Register';

class login extends React.Component{
  render () {
    const {onSubmit} = this.props;

    return (
      <Fragment>
        <p>Username</p>
        <input type="text"
        ref = {node => {this.username = node;}}/> <br/>
        <p>Contrasena</p>
        <input type="password"
        ref = {node => {this.pass = node;} }/> <br/>

        <button onClick={
          () => {
            onSubmit(
              this.username.value,
              this.pass.value
            );
            this.pass.value = "";
          }
        }>Login</button>

        <nav>
          <Link to="/register">
            <button onClick= {prueba}
            > Registrarse</button>
          </Link>
        </nav>
        
        <div>
          <Route path="/register"  component = {Register} />
        </div>
      </Fragment>
    )
  }
}

const prueba = () => {
  
}

export default connect(
  undefined,
  dispatch => ({
    onSubmit(user, pass){
      console.log("Login :D");
    }
  })
)(login);