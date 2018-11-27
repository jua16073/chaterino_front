import {call, put, takeEvery, takeLatest, take, fork} from 'redux-saga/effects';
import * as Types from '../types';
import * as actions from '../actions';
import {request, reject} from 'superagent';


function addUser (nombre, contra) {
  const url = 'http://127.0.0.1:8000/auth/users/create/';
  console.log("nombre: "+nombre+" contra: "+contra);
  let data = {username:nombre, password:contra}
  let fetchData = {
    method:'POST',
    body:data,
    headers: new Headers(),
  }
  let pls
    pls =  fetch(url, fetchData)
    .then((data) => {
      console.log(data);
      return JSON.parse(data.text);
    })
    .catch((error) => {console.log(error);
    pls = error});
  console.log(pls);
  return pls;
}

function* callAddUser (action){
  const {nombre, contrasena} = action.payload;
  try{
    console.log("hey corriendo pls");
    const result = yield call (addUser, nombre, contrasena);
    console.log(result);
    yield put (actions.userCreated());
  }
  catch(err){
    console.log("fashó");
    yield call(reject);
  }
}

function* addUserSaga (){
  console.log("AddUserSaga");
  yield takeEvery(Types.USER_CREATED, callAddUser);
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
    console.log("help")
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