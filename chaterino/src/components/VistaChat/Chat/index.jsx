import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import uuid from 'uuid-v4';

import * as selectors from '../../../reducers';
import * as actions from '../../../actions';
import Comments from '../Comments';
import CommentForm from '../CommentForm';

const ChatP = ({
  id,
  title,
}) => (
  <Fragment>
    <div>
      <h1>{title}</h1>
      <div>
        <div>
        <Comments key = {id} id = {id}/>
        </div> 
        <div>
        <CommentForm id = {id}/>
        </div>
      </div>
    </div>
  </Fragment>
);

export default connect(
  (state, {match})=>({
    ...selectors.getChat(state, match.params.id),
  }),
  undefined,
)(ChatP);