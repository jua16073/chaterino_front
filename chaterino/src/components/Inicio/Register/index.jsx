import React, {Fragment } from 'react';
import {connect} from 'react-redux';

class register extends React.Component{
  render() {
    const {onSubmit} = this.props;

    return (
      <Fragment>
        <h4>Nombre de Usuario</h4>
        <input type="text"
        ref = {node => {this.nombre = node;}}/>

        <h4>Contrasena</h4>
        <input type="text"
        ref = {node => {this.contra = node;}}/> <br/>

        <button onClick={
          () => {
            onSubmit(
              this.nombre.value,
              this.contra.value
            )
          }
        }>Registrar</button>
      </Fragment>
    );
  }
}

export default connect(
  undefined,
  dipatch => ({
    onSubmit(nombre, contra){
      console.log("Registrar");
    }
  })
)(register);