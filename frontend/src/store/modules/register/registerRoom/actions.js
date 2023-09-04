export function registerRoomInRequest(
  name,
  floor,
  number,
  navigate,
) {
  return {
    type: '@register/REGISTERROOM_IN_REQUEST',
    payload: {
      name, floor, number, navigate,
    },
  };
}

export function registerRoomInSuccess(token, room) {
  return {
    type: '@register/REGISTERROOM_IN_SUCCESS',
    payload: { token, room },
  };
}

export function removeRoom(id) {
  return {
    type: '@remove/REMOVE_ROOM',
    payload: {
      id,
    },
  };
}

export function removeFailure() {
  return {
    type: '@remove/REMOVE_ROOM',
  };
}

export function registerFailure() {
  return {
    type: '@register/REGISTER_FAILURE',
  };
}
