export function registerPatientInRequest(
  formData,
  navigate,
) {
  return {
    type: '@register/REGISTERPATIENT_IN_REQUEST',
    payload: {
      formData,
      navigate,
    },
  };
}

export function registerPatientInSuccess(token, patient) {
  return {
    type: '@register/REGISTERPATIENT_IN_SUCCESS',
    payload: { token, patient },
  };
}

export function removePatient(id, navigate) {
  return {
    type: '@remove/REMOVE_PATIENT',
    payload: {
      id, navigate,
    },
  };
}

export function removeFailure() {
  return {
    type: '@remove/REMOVE_PATIENT',
  };
}

export function registerFailure() {
  return {
    type: '@register/REGISTER_FAILURE',
  };
}
