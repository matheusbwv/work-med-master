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

export function registerFailure() {
  return {
    type: '@register/REGISTER_FAILURE',
  };
}
