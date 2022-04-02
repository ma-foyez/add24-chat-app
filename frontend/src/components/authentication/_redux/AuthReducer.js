import * as Types from "./AuthTypes";

const initialState = {
    isLoading: false,
    registrationInput: {
        name: "",
        email: "",
        pic: "",
        password: "",
        confirmPassword: "",
    },
    picture: "",
    loginInput: {
        email: "",
        password: "",

    }
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.CHANGE_REG_INPUT_VALUE:
            let registrationInput = { ...state.registrationInput };
            registrationInput[action.payload.name] = action.payload.value;
            return {
                ...state,
                registrationInput
            };

        case Types.HOST_IMAGES:
           
            return {
                ...state,
                picture: action.payload.picture
            };

        default:
            return {
                ...state,
            };
            break;
    }
};

export default AuthReducer;