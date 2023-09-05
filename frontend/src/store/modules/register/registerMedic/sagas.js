import {
  takeLatest, call, put, all,
} from 'redux-saga/effects';

import { toast } from 'react-toastify';
import api from '../../../../services/api';

import { registerMedicInSuccess, registerFailure, removeFailure } from './actions';

export function* registerMedic({ payload }) {
  try {
    const {
      name, gender, speciality, crm, cpf, adress, navigate,
    } = payload;

    const response = yield call(api.post, 'doctors', {
      name,
      speciality,
      gender,
      crm,
      cpf,
      adress,
    });

    const { token, doctor } = response.data;

    api.defaults.headers.common.Authorization = `Bearer ${token}`;

    yield put(registerMedicInSuccess(token, doctor));

    navigate('/list/doctor');
  } catch (err) {
    toast.error('Falha no cadastro, verifique os dados');
    yield put(registerFailure());
  }
}

export function* removeMedic({
  payload,
}) {
  try {
    const { id } = payload;

    toast.success('Excluído com Sucesso');
    yield call(api.delete, `doctors/${id}`);
  } catch (err) {
    toast.error('Item já excluído');
    yield put(removeFailure());
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
  takeLatest('@register/REGISTERMEDIC_IN_REQUEST', registerMedic),
  takeLatest('@remove/REMOVE_MEDIC', removeMedic),
]);
