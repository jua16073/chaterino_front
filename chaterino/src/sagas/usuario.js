import {call, put, takeEvery, takeLatest, take, fork} from 'redux-saga/effects';
import * as Types from '../types';
import {request, reject} from 'superagent';


function addUser (action) {
  const url = 'http://127.0.0.1:8000/auth/users/create/';
  return request
    .post(url)
    .send({username:action.nombre, password:action.contrasena})
    .then((data) => {
      return JSON.parse(data.text)
    });
}

function* callAddUser (action){
  try{
    const result = yield call (addUser, action);
    console.log(result);
    yield put ({type: Types.ADD_USER_DONE}, result);
  }
  catch(err){
    yield call(reject);
  }
}

function* addUserSaga (){
  yield* takeEvery(Types.USER_CREATED, callAddUser);
}

function getUser (action) {
  const url = 'GET http://127.0.0.1/users/${action.nombre}';
  return request
    .get(url)
    .then((data) => {
      return JSON.parse(data.text)
    })
}


function* callGetUser (action){
  try{
    const result = yield call (getUser, action);
    console.log(result);
    yield put ({type: Types.USER_VERIFIED_DONE}, result);
  }
  catch(err){
    yield call(reject);
  }
}

function* getUserSaga (){
  yield* takeEvery(Types.USER_VERIFIED, callGetUser);
}

export default function* root(){
  yield[
    fork(addUserSaga),
    fork(getUserSaga),
  ]
}