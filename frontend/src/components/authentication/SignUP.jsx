import { Button, FormControl, FormLabel, InputGroup, Input, InputRightElement, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { handleRegistration, handleRegistrationInput, hostImages } from './_redux/AuthAction';
// import { useHistory } from "react-router-dom";

const SignUP = () => {
    const [showPass, setShowPass] = useState(false)
    const [confirmShowPass, setConfirmShowPass] = useState(false)

    const [pic, setPic] = useState();
    const [picLoading, setPicLoading] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { registrationInput, picture } = useSelector((state) => state.AuthReducer);
    

    const submitHandler = async () => {
        dispatch(handleRegistration(registrationInput, picture));
        // setPicLoading(true);
        // if (!name || !email || !password || !confirmPassword) {
        //     toast({
        //         title: "Please Fill all the Feilds",
        //         status: "warning",
        //         duration: 5000,
        //         isClosable: true,
        //         position: "bottom",
        //     });
        //     setPicLoading(false);
        //     return;
        // }
        // if (password !== confirmPassword) {
        //     toast({
        //         title: "Passwords Do Not Match",
        //         status: "warning",
        //         duration: 5000,
        //         isClosable: true,
        //         position: "bottom",
        //     });
        //     return;
        // }
        // console.log(name, email, password, pic);
        // try {
        //     const config = {
        //         headers: {
        //             "Content-type": "application/json",
        //         },
        //     };
        //     const { data } = await axios.post(
        //         "http://localhost:5000/api/user",
        //         {
        //             name,
        //             email,
        //             password,
        //             pic,
        //         },
        //         config
        //     );
        //     console.log(data);
        //     toast({
        //         title: "Registration Successful",
        //         status: "success",
        //         duration: 5000,
        //         isClosable: true,
        //         position: "bottom",
        //     });
        //     localStorage.setItem("userInfo", JSON.stringify(data));
        //     setPicLoading(false);
        //     navigate("/chats");
        // } catch (error) {
        //     const { response } = error;
        //     toast({
        //         title: "Error Occured!",
        //         description: response.data.message,
        //         status: "error",
        //         duration: 5000,
        //         isClosable: true,
        //         position: "bottom",
        //     });
        //     setPicLoading(false);
    }
    // };

    // upload image in cloudinary

    const postDetails = (name, value) => {
        dispatch(hostImages(name, value))
    };

    // handle change input value
    const handleChangeRegInput = (name, value) => {
        dispatch(handleRegistrationInput(name, value));
    };

    return (
        <VStack spacing="5px">
            <FormControl id='first-name' isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                    placeholder='Enter Your Name'
                    name="name"
                    onChange={(e) =>
                        handleChangeRegInput("name", e.target.value)
                    }
                />
            </FormControl>
            <FormControl id='email' isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                    type="email"
                    placeholder='Enter Your Email'
                    name="email"
                    onChange={(e) =>
                        handleChangeRegInput("email", e.target.value)
                    }
                />
            </FormControl>

            <FormControl id='password' isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup size='md'>
                    <Input
                        type={showPass ? "text" : "password"}
                        placeholder='Password'
                        name="password"
                        onChange={(e) =>
                            handleChangeRegInput("password", e.target.value)
                        }
                    />
                    <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={() => setShowPass(!showPass)}>
                            <FontAwesomeIcon icon={showPass ? faEyeSlash : faEye} />
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>

            <FormControl id='confirm-password' isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup size='md'>
                    <Input
                        type={confirmShowPass ? "text" : "password"}
                        placeholder='Confirm Password'
                        name="confirmPassword"
                        onChange={(e) =>
                            handleChangeRegInput("confirmPassword", e.target.value)
                        }
                    />
                    <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={() => setConfirmShowPass(!confirmShowPass)}>
                            <FontAwesomeIcon icon={confirmShowPass ? faEyeSlash : faEye} />
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>

            <FormControl id='pic'>
                <FormLabel>Upload Your Picture</FormLabel>
                <Input
                    type="file"
                    p={1.5}
                    accept="image/*"
                    onChange={(e) => postDetails("pic", e.target.files[0])}

                />
            </FormControl>

            <Button
                colorScheme="blue"
                width="100%"
                style={{ marginTop: 15 }}
                onClick={() => submitHandler()}
                isLoading={picLoading}
            >
                Sign UP
            </Button>
        </VStack>
    );
};

export default SignUP;