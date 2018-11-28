import {call, put, takeEvery,fork} from 'redux-saga/effects';
import * as Types from '../types';
import * as actions from '../actions';

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

function getUser (nombre, contrasena) {
  console.log("en getUser");
  const url = 'http://127.0.0.1:8000/api-token-auth/';
  let data = {username:nombre, password:contrasena};
  console.log(data);
  let fetchData = {
    method:'POST',
    body:JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  }
  let respuesta;
  return respuesta =fetch(url, fetchData)
    .then((data) => data.json())
    .catch((error) => {console.log(error)});
}


function* callGetUser (action){
  const {nombre, contrasena} = action.payload;
  try{
    console.log("getUser empezado");
    const result = yield call (getUser, nombre, contrasena);
    console.log(result);
    yield put (actions.userVerified(result));
  }
  catch(err){
    console.log("Verifiacion fallo");
    console.log(err);
  }
}

function* getUserSaga (){
  console.log("getUserSaga");
  yield takeEvery(Types.USER_VERIFIED, callGetUser);
}

export default function* root(){
  yield[
    fork(addUserSaga),
    fork(getUserSaga),
  ]
}