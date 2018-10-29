import React, {Fragment} from 'react';
import {connect} from 'react-redux';

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

        <button onClick= {prueba}
        > Registrarse</button>
      </Fragment>
    )
  }
}

const prueba = () => {
  console.log("Registrarse")
}

export default connect(
  undefined,
  dispatch => ({
    onSubmit(user, pass){
      console.log("Login :D");
    }
  })
)(login);