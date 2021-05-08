import { actionType } from '../actions/application';

export default (
    state = {
        settings: {
            server: 'DOWN',
            db: 'DOWN',
            rooms: [],
        },
    },
    { type, payload },
) => {
    switch (type) {
        case actionType.LOG_IN:
            return {
                ...state,
                ...payload,
            };

        case actionType.LOG_OUT:
            return {};

        case actionType.SET_TOKEN:
            return {
                ...state,
                ...payload,
            };

        case actionType.SET_SETTINGS:
            return {
                ...state,
                ...payload,
            };

        default:
            return state;
    }
};
