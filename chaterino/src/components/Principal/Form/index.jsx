import React, {Fragment} from 'react';
import {connect} from 'react-redux';

import * as actions from '../../../actions';
import * as selectors from '../../../reducers';


class form extends React.Component{
  render() {
    const {onSubmit} = this.props;
    const {token} = this.props.token;
    console.log("el token es");
    console.log(token);
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
              token
            );
            this.title.value = "";
            this.tags.value = "";
          }
        }>Nuevo Chat</button>
      </Fragment>
    )
  }
}

export default connect(
  state => (
    selectors.getToken(state)
  ),
  (dispatch) => ({
    onSubmit(titulo, tok){
      dispatch(actions.createChat(titulo,tok));
    }
  })
)(form);