const SET_PROFILE = 'SET_PROFILE';

const initialProfileState = {
    username: 'Guest',
    profilePhotoUrl: 'default-profile.png',
};

const profileReducer = (state = initialProfileState, action) => {
    switch (action.type) {
        case SET_PROFILE:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

export default profileReducer;