import React from 'react';
import {connect} from 'react-redux';

import Comment from '../Comment';

import * as selectors from '../../../reducers';

const comments = ({
  comments = []
}) => (
  <div>
    {
      comments.length > 0 ?
      comments.map (({id}) =>
       <Comment  key = {id} id ={id} />)
      : <li>Sin comentarios</li>
    }
  </div>
);

export default connect (
  (state, {id}) => ({
    comments: selectors.getChat(state,id).comments,
  }),
  undefined
)(comments);