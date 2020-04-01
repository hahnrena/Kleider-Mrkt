import { UserActionTypes } from '../actions/userTypes';

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});