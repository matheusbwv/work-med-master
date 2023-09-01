import { produce } from 'immer';

const INITIAL_STATE = {
  token: null,
  loading: false,
  doctor: null,
};

export default function registerMedic(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case '@register/REGISTERMEDIC_IN_SUCCESS':
      return produce(state, (draft) => {
        draft.token = action.payload.token;
        draft.doctor = action.payload.doctor;
      });
    case '@remove/REMOVE_MEDIC':
      return produce(state, (draft) => {
        draft.token = action.payload.token;
        draft.doctor = null;
      });
    default:
      return state;
  }
}
