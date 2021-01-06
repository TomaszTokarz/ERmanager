export const setRoom = room => ({
    type: actionType.SET_ROOM,
    payload: room,
});

export const actionType = {
    SET_ROOM: 'SET_ROOM',
};
