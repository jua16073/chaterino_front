import * as types from '../types';

export const createUser = (
  id,
  nombre,
  contrasena,
) => ({
  type: types.USER_CREATED,
  payload:{
    id,
    nombre,
    contrasena,
  }
});

export const verifyUser = (
  nombre,
  contrasena
) => ({
  type: types.USER_VERIFIED,
  payload:{
    nombre,
    contrasena,
  }
});

export const createChat = (
  id,
  title,
) => ({
  type: types.CHAT_CREATED,
  payload: {
    id,
    title
  }
});

export const joinChat = (
  idUsuario,
  idChat,
) => ({
  type: types.CHAT_JOINED,
  payload:{
    idUsuario,
    idChat,
  }
});

export const comment = (
  id,
  idUsuario,
  idChat,
  body,
) => ({
  type: types.COMMENTED,
  payload: {
    id,
    idUsuario,
    idChat,
    body,
  }
});