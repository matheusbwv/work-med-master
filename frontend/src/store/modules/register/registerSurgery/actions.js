export function registerSurgeryInRequest(
  name,
  description,
  navigate,
) {
  return {
    type: '@register/REGISTERSURGERY_IN_REQUEST',
    payload: {
      name, description, navigate,
    },
  };
}

export function registerSurgeryInSuccess(token, surgery) {
  return {
    type: '@register/REGISTERSURGERY_IN_SUCCESS',
    payload: { token, surgery },
  };
}

export function registerFailure() {
  return {
    type: '@register/REGISTER_FAILURE',
  };
}
