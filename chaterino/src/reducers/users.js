import {combineReducers} from 'redux';
import * as types from '../types';

const byId = (state = {}, action) => {
  switch (action.type) {
    case types.USER_VERIFIED_DONE:{
      return action.payload.result;
    }

    default:
      return state;
  }
}

const auth = (state = false, action) => {
  switch(action.type){
    case types.USER_VERIFIED_DONE:{
      state = true;
    }

    case types.LOG_OUT:{
      state = false;
    }

    default:
      return state;
  }
}

const users = combineReducers({
  byId,
  auth,
});

export default users;

export const getUser = (state, id) => state.byId[id];

export const getAuth = (state)=> state.auth;
