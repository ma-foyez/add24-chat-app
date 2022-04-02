import Axios from "axios";
import { SimpleToaster } from "../../master/SimpleToaster/SimpleToaster";
import * as Types from "./AuthTypes";

const base_URL = "http://localhost:5000/";

/**
 * Registration input value changes
 * @param {name}
 * @param {value}
 * 
 * @since 1.0.0
 *  
 * @return handleRegistrationInput
 */

export const handleRegistrationInput = (name, value) => (dispatch) => {
    const formData = {
        name: name,
        value: value
    }
    dispatch({ type: Types.CHANGE_REG_INPUT_VALUE, payload: formData })
}

/**
 * image host in cloudinary & get api 
 * @param {string} value
 * @return hostImages
 */

export const hostImages = (name, value) => (dispatch) => {
    const responseData = {
        isLoading: true,
        picture: ""
    }

    dispatch({ type: Types.HOST_IMAGES, payload: responseData })
    if (value === undefined) {
        SimpleToaster("warning", "Please Select an Image!")
        return;
    }
    if (value.type === "image/jpeg" || value.type === "image/png") {
        const data = new FormData();
        data.append("file", value);
        data.append("upload_preset", "add24-chat-app");
        data.append("cloud_name", "mafayez");
        fetch("https://api.cloudinary.com/v1_1/mafayez/image/upload", {
            method: "post",
            body: data,
        })
            .then((res) => res.json())
            .then((data) => {
                responseData.isLoading = false;
                responseData.picture = data.url.toString();
                dispatch({ type: Types.HOST_IMAGES, payload: responseData })
            })
            .catch((err) => {
                responseData.isLoading = false;
                dispatch({ type: Types.HOST_IMAGES, payload: responseData })
            });
    } else {
        SimpleToaster("warning", "Please Select a Valid Image!")
        responseData.isLoading = false;
        dispatch({ type: Types.HOST_IMAGES, payload: responseData })
    }
};

/**
 * Registration 
 *
 * @since 1.0.0
 *
 * @return handleRegistration
 */
export const handleRegistration = (registrationInput, pic) => async (dispatch) => {

    console.log('registrationInput :>> ', registrationInput);
    console.log('regPicture :>> ', pic);

    const { name, email, password, confirmPassword } = registrationInput;

    if (!name || !email || !password || !confirmPassword) {
        SimpleToaster("warning", "Please Fill all the fields")
    }
    if (password !== confirmPassword) {

        SimpleToaster("warning", "Passwords do not match!")
    }

    const responseData = {
        isLoading: true,
        status: false,
        data: {}
    }
    dispatch({ type: Types.HANDLE_REGISTRATION, payload: responseData });

    try {
        const config = {
            headers: {
                "Content-type": "application/json",
            },
        };
        const { data } = await Axios.post(
            `${base_URL}api/user`,
            {
                name,
                email,
                password,
                pic,
            },
            config
        );
        console.log(data);
        SimpleToaster("success", "Registration Successful")
        responseData.isLoading = false;
        // responseData.status = false;
        localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
        const { response } = error;
        SimpleToaster("warning", "Error Occured!", response.data.message,)
        responseData.isLoading = false;

    }
}