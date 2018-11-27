import * as types from '../types';

export const createUser = (
  id,
  nombre,
  correo,
  contrasena,
) => ({
  type: types.USER_CREATED,
  payload:{
    id,
    nombre,
    correo,
    contrasena,
  }
});

export const userCreated = (
) => ({
  type: types.ADD_USER_DONE,
  payload: {
  }
})

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

export const userVerified = (
  token
) => ({
  type: types.USER_VERIFIED_DONE,
  payload:{
    token,
  }
}) 

export const createChat = (
  id,
  title,
  tag,
  comments,
) => ({
  type: types.CHAT_CREATED,
  payload: {
    id,
    title,
    tag,
    comments,
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