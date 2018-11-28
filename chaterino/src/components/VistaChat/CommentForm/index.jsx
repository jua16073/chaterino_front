import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import uuid from 'uuid-v4';

import * as selectors from '../../../reducers';
import * as actions from '../../../actions';

class Commentform extends React.Component{
  render(){
    const {onSubmit} = this.props;
    const {id} = this.props;

    return(
      <Fragment>
        <input type="text" ref = {node => {this.comment = node;}} />
        <button onClick = {
          () => {
            onSubmit(
              id,
              this.comment.value,
            );
            this.comment.value = "";
          }
        }>Comentar</button>
      </Fragment>
    )
  }
}

export default connect(
  undefined,
  (dispatch) => ({
    onSubmit(id,body){
      dispatch(actions.comment(uuid(), id, body));
    }
  })
)(Commentform);