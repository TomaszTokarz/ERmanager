export const logIn = (displayName, email, uid) => ({
    type: actionType.LOG_IN,
    payload: {
        displayName,
        email,
        uid,
    },
});

export const logOut = () => ({
    type: actionType.LOG_OUT,
    payload: {},
});

export const setToken = token => ({
    type: actionType.SET_TOKEN,
    payload: {
        token,
    },
});

export const setSettings = settings => ({
    type: actionType.SET_SETTINGS,
    payload: {
        settings,
    },
});

export const actionType = {
    LOG_IN: 'LOG_IN',
    LOG_OUT: 'LOG_OUT',
    SET_TOKEN: 'SET_TOKEN',
    SET_SETTINGS: 'SET_SETTINGS',
};
