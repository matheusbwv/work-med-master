export function registerMedicInRequest(name, gender, speciality, crm, cpf, adress, navigate) {
  return {
    type: '@register/REGISTERMEDIC_IN_REQUEST',
    payload: {
      name, gender, speciality, crm, cpf, adress, navigate,
    },
  };
}

export function registerMedicInSuccess(token, doctor) {
  return {
    type: '@register/REGISTERMEDIC_IN_SUCCESS',
    payload: { token, doctor },
  };
}

export function removeMedic(id, navigate) {
  return {
    type: '@remove/REMOVE_MEDIC',
    payload: {
      id, navigate,
    },
  };
}

export function removeFailure() {
  return {
    type: '@remove/REMOVE_MEDIC',
  };
}

export function registerFailure() {
  return {
    type: '@register/REGISTER_FAILURE',
  };
}
