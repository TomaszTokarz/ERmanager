import { actionType } from '../actions/application';

export default (state = {}, action) => {
    switch (action.type) {
        case actionType.LOG_IN:
            return {
                ...state,
                ...action.payload,
            };

        case actionType.LOG_OUT:
            return {};

        case actionType.SET_TOKEN:
            return {
                ...state,
                ...action.payload,
            };

        default:
            return state;
    }
};
