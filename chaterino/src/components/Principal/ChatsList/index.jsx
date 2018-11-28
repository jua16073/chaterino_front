import React, {Fragment} from 'react';
import {connect} from 'react-redux';

import * as selectors from '../../../reducers';
import Chat from '../ChatForShowing';

const Lista = ({chats = []}) => (
  <Fragment>
    <h2>Chats</h2>
    <div>
      {
        chats.length > 0 ?
        chats.map(({id}) =>
        <Chat key ={id} id = {id} /> 
         )
        : <li>No hay chats</li>
      }
    </div>
  </Fragment>
);

export default connect(
  state => ({
    chats: selectors.getChats(state),
  }),
  undefined
)(Lista);