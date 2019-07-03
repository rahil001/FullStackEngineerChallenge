import { FETCH_EMPLOYEES, ADD_EMPLOYEES, FETCH_PERFORMANCE } from '../actions/types';

export default function(state = {}, action) {
    const  { type, payload } = action;
    switch (type) {
        case FETCH_EMPLOYEES:
            return payload;
        case ADD_EMPLOYEES:
            return payload;
        case FETCH_PERFORMANCE:
            return {...state, payload};
        default:
            return state;
    }
}
