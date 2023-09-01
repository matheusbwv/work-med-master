export function registerPatientInRequest(
  name,
  gender,
  medic_history,
  contact,
  cpf,
  adress,
  navigate,
) {
  return {
    type: '@register/REGISTERPATIENT_IN_REQUEST',
    payload: {
      name, gender, medic_history, contact, cpf, adress, navigate,
    },
  };
}

export function registerPatientInSuccess(token, patient) {
  return {
    type: '@register/REGISTERPATIENT_IN_SUCCESS',
    payload: { token, patient },
  };
}

export function registerFailure() {
  return {
    type: '@register/REGISTER_FAILURE',
  };
}
