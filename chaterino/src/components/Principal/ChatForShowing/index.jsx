import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


import * as selectors from '../../../reducers';

import ChatP from '../../VistaChat/Chat';

const ChatList = ({
  id,
  title,
  match
}
) => (
  <Fragment>
    <div>
      <Link to = {`chats/${id}`}>
      <h4>{title}</h4>
      </Link>
    </div>
    {
      console.log("el id deberia de ser: "+id)
    }

    <Route path={`chats/${id}`} render= {() =><ChatP key = {id} id = {id}/>} />

  </Fragment>
);
//<Route path= {'chats/:id'} component = {Chat}/>
/*
const ChatPage = () => (

)*/

export default connect(
  (state, {id})=>({
    ...selectors.getChat(state, id),
  }),
  undefined, 
)(ChatList);