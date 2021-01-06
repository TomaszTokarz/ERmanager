import { actionType } from '../actions/application';

export default (
    state = {
        settings: {
            server: 'DOWN',
            db: 'DOWN',
            rooms: [],
        },
    },
    action,
) => {
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

        case actionType.SET_SETTINGS:
            return {
                ...state,
                ...action.payload,
            };

        default:
            return state;
    }
};
