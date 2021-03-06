import React, {Fragment } from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


import * as selectors from '../../../reducers';
import * as actions from '../../../actions';

class register extends React.Component{
  render() {
    const {onSubmit} = this.props;

    return (
      <Fragment>
        <h4>Nombre de Usuario</h4>
        <input type="text"
        ref = {node => {this.nombre = node;}}/>

        <h4>Correo</h4>
        <input type="text"
        ref = {node => {this.correo = node;}}/> <br/>

        <h4>Contrasena</h4>
        <input type="text"
        ref = {node => {this.contra = node;}}/> <br/>

        <nav>
          <Link to='/'>
            <button onClick={
              () => {
                onSubmit(
                  this.nombre.value,
                  this.contra.value,
                  this.correo.value,
                )
              }
            }>Registrar</button>
          </Link>
        </nav>
        
      </Fragment>
    );
  }
}

export default connect(
  undefined,
  dispatch => ({
    onSubmit(nombre, contra, correo){
      dispatch(actions.createUser(0,nombre, correo, contra));
    }
  })
)(register);