// Define the logout action type
export const LOGOUT_USER = 'LOGOUT_USER';

// Define the logout action creator
export const logoutUser = () => {
    return {
        type: LOGOUT_USER
    };
};
