import { LOGOUT_USER } from '../actions/userActions';

const initialState = {
    currentUser: null
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGOUT_USER:
            return {
                ...state,
                currentUser: null
            };
        default:
            return state;
    }
};

export default userReducer;
