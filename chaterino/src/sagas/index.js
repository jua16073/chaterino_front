import {fork} from 'redux-saga/effects';
import ChatSaga from './chat';
import UsuarioSaga from './usuario';
import CommentSaga from './comments';

//superagent? libreria de js

export default function* root() {
  yield [
    fork[UsuarioSaga],
  ]
}