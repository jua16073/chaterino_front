import React, {Fragment} from 'react';
import {connect} from 'react-redux';

import * as selectors from '../../../reducers';

import Comments from '../Comments';
const Chat = ({
  id,
  title,
}
) => (
  <Fragment>
    <div>
      <h4>{title}</h4>
    </div>
  </Fragment>
  /*
   <div>
      <Comments id = {id}/>
    </div>
   */
);

export default connect(
  (state, {id})=>({
    ...selectors.getChat(state, id),
  }),
  undefined, 
)(Chat);