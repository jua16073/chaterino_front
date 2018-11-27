import {call, put, takeEvery, takeLatest, take, fork} from 'redux-saga/effects';
import * as Types from '../types';
import * as actions from '../actions';
import {request, reject} from 'superagent';


function addUser (nombre, contra, correo) {
  const url = 'http://127.0.0.1:8000/api/chats/users/create/';
  let data = {username:nombre, password:contra, email:correo}
  console.log(data);
  let fetchData = {
    method:'POST',
    body:JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  }
  let pls
    pls =  fetch(url, fetchData)
    .then((data) => data.json())
    .catch((error) => {console.log(error)});
  return pls;
}

function* callAddUser (action){
  const {nombre, contrasena, correo} = action.payload;
  try{
    const result = yield call (addUser, nombre, contrasena, correo);
    console.log(result);
    yield put (actions.userCreated());
    console.log("termino?");
  }
  catch(err){
    console.log("fashó");
    console.log(err);
  }
}

function* addUserSaga (){
  console.log("AddUserSaga");
  yield takeEvery(Types.USER_CREATED, callAddUser);
}

///////////////////////////////////////////////////////////////////////////
//getUser

function getUser ({nombre, contrasena}) {
  const url = 'http://127.0.0.1:8000/auth/token/create/';
  let data = {username:nombre, password:contrasena}
  let fetchData = {
    method:'GET',
    body:JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  }
  return respuesta =fetch(url, fetchData)
    .then((data) => data.json())
    .catch((error) => {console.log(error)});
}


function* callGetUser (action){
  const {user, contra} = action.payload;
  try{
    const result = yield call (getUser, user, contra);
    console.log(result);
    yield put (actions.userVeridied(result));
  }
  catch(err){
    console.log("Verifiacion fallo");
    console.log(err);
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