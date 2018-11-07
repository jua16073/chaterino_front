import React, {Fragment} from 'react';
import {connect} from 'react-redux';

import * as actions from '../../../actions';

class CommentForm extends React.Component{
  render(){
    const {onSubmit} = this.props;

    return (
      <Fragment>
        <input type="text"
        ref = {node => {this.comentario = node;}}  />
        <button onClick={
          () => {
            onSubmit(
              this.comentario.value,
            )
          }
        }
        >Comentar</button>
      </Fragment>
    );
  }
}

export default connect(
  undefined,
  dipatch => ({
    onSubmit(body){
      dispatch(actions.comment(0, body));
    }
  })
)(CommentForm);