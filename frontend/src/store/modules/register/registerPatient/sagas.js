import {
  takeLatest, call, put, all,
} from 'redux-saga/effects';

import { toast } from 'react-toastify';
import api from '../../../../services/api';

import { registerPatientInSuccess, registerFailure } from './actions';

export function* registerPatient({ payload }) {
  try {
    const { navigate } = payload;

    const response = yield call(api.post, 'patients', payload.formData);

    const { token, patient } = response.data;

    api.defaults.headers.common.Authorization = `Bearer ${token}`;

    yield put(registerPatientInSuccess(token, patient));

    navigate('/list/patient');
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
  takeLatest('@register/REGISTERPATIENT_IN_REQUEST', registerPatient),
]);
