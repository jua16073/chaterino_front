import {call, put, takeEvery, takeLatest, take, fork} from 'redux-saga/effects';
import * as Types from '../types';
import {request, reject} from 'superagent';


function addUser (action) {
  const url = 'POST http://127.0.0.1:8000/api/users/${action.name}';
  return request
    .get(url)
    .then((data) => {
      return JSON.parse(data.text)
    });
}

function* callAddUser (action){
  try{
    const result = yield call (addUser, action);
    console.log(result);
    yield put ({type: 'ADD_USER_DONE'}, result);
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
    yield put ({type: 'ADD_USER_DONE'}, result);
  }
  catch(err){
    yield call(reject);
  }
}

function* getUserSaga (){
  yield* takeEvery(Types.FETCH_USER, callGetUser);
}

export default function* root(){
  yield[
    fork(addUserSaga),
    fork(getUserSaga),
  ]
}