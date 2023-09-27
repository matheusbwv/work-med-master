import {
  takeLatest, call, put, all,
} from 'redux-saga/effects';

import { toast } from 'react-toastify';
import api from '../../../../services/api';

import {
  registerMedicInSuccess, registerFailure, removeFailure,
  updateMedicSuccess, updateMedicFailure,
} from './actions';

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

    const doctor = response.data;

    // api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(registerMedicInSuccess(doctor));

    navigate('/list/doctor');
  } catch (err) {
    toast.error('Falha no cadastro, verifique os dados');
    yield put(registerFailure());
  }
}

export function* updateMedic({ payload }) {
  try {
    const {
      name, gender, speciality, crm, cpf, adress, navigate,
    } = payload;

    const doctor = {
      name, gender, speciality, crm, cpf, adress,
    };

    console.log(payload);

    const response = yield call(api.put, 'doctors', doctor);

    toast.success('Médico atualizado com sucesso!');

    navigate('/doctor/list');

    yield put(updateMedicSuccess(response.data));
  } catch (err) {
    toast.error('Erro a atualizar médico, verifique seus dados!');
    yield put(updateMedicFailure);
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
  takeLatest('@medic/REGISTERMEDIC_IN_REQUEST', registerMedic),
  takeLatest('@medic/REMOVE_MEDIC', removeMedic),
  takeLatest('@medic/UPDATE_MEDIC_REQUEST', updateMedic),
]);
