import { produce } from 'immer';

const INITIAL_STATE = {
  token: null,
  loading: false,
  room: null,
};

export default function registerPatient(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case '@register/REGISTERROOM_IN_SUCCESS':
      return produce(state, (draft) => {
        draft.token = action.payload.token;
        draft.room = action.payload.room;
      });
    default:
      return state;
  }
}
