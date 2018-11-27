import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import * as selectors from '../../../reducers';
import Comments from '../Comments';
import CommentForm from '../CommentForm';


const ChatP = ({
  id,
  title,
  match,
}) => (
  <Fragment>
    {
          console.log("En el Chat el titulos es "+title + " y el id es:" + id)
        }
    <div >
      <h4>{title}</h4>
      <div>
        {
          console.log(match.params.id)
        }
      
      <CommentForm />
    </div>
    </div>
  </Fragment>
  /*
   
   */
);
//<Comments key = {id} id = {id}/>

export default connect(
  (state, {id})=>({
    ...selectors.getChat(state, state.match.params.id),
  }),
  undefined, 
)(ChatP);