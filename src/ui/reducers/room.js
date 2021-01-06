import { actionType } from '../actions/room';

export default (state = {}, action) => {
    switch (action.type) {
        case actionType.SET_ROOM:
            return {
                ...state,
                ...action.payload,
            };

        default:
            return state;
    }
};
