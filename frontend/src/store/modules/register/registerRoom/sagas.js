import {
  takeLatest, call, put, all,
} from 'redux-saga/effects';

import { toast } from 'react-toastify';
import api from '../../../../services/api';

import { registerRoomInSuccess, registerFailure } from './actions';

export function* registerRoom({ payload }) {
  try {
    const {
      name, number, floor, navigate,
    } = payload;

    const response = yield call(api.post, 'rooms', {
      name,
      number,
      floor,
    });

    const { token, room } = response.data;

    api.defaults.headers.common.Authorization = `Bearer ${token}`;

    yield put(registerRoomInSuccess(token, room));

    navigate('/list/room');
  } catch (err) {
    toast.error('Falha no cadastro, verifique os dados');
    yield put(registerFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@register/REGISTERROOM_IN_REQUEST', registerRoom),
]);
