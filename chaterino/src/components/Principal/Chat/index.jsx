import React, {Fragment} from 'react';
import {connect} from 'react-redux';

import * as selectors from '../../../reducers';
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
);

export default connect(
  (state, {id})=>({
    ...selectors.getChat(state, id),
  }),
  undefined, 
)(Chat);