import React, {Fragment} from 'react';
import {connect} from 'react-redux';

import * as selectors from '../../../reducers';

const Comment = ({
  id,
  body,
}) => (
  <Fragment>
    <p>{body}</p>
  </Fragment>
);

export default connect(
  (state, {id}) => ({
    ...selectors.getComment(state,id),
  }),
  undefined,
)(Comment);