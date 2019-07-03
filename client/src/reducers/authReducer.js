import { LOGIN_DETAILS } from '../actions/types';

export default function(state = null, action) {
    const  { type, payload } = action;
    switch (type) {
        case LOGIN_DETAILS:
            return payload || false;
        default:
            return state;
    }
}