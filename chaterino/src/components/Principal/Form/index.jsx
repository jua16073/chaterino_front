import React, {Fragment} from 'react';
import {connect} from 'react-redux';

import * as actions from '../../../actions';


class form extends React.Component{
  render() {
    const {onSubmit} = this.props;

    return (
      <Fragment>
        <h3>Titulo</h3><br/>
        <input type= "text"
        ref = {node => {this.title = node;}}/>

        <h3>Tag</h3>
        <input type= "text"
        ref = {node => {this.tags = node;}}/> <br/>

        <button  onClick={
          () => {
            onSubmit(
              this.title.value,
              this.tags.value
            );
            console.log("hola");
            this.title.value = "";
            this.tags.value = "";
          }
        }>Nuevo Chat</button>
      </Fragment>
    )
  }
}

export default connect(
  undefined,
  dispatch => ({
    onSubmit(titulo, tag){
      dispatch(actions.createChat(0,titulo,tag,[]) )
    }
  })
)(form);