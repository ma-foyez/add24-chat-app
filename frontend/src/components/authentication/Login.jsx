import React, { useState } from 'react';
import { Button, FormControl, FormLabel, InputGroup, Input, InputRightElement, VStack } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {

    const [showPass, setShowPass] = useState(false)
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()


    const handleLogin = () => {
        console.log("click on submit")
    }

    return (
        <VStack spacing="5px">

            <FormControl id='email' isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                    type="email"
                    placeholder='Enter Your Email'
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormControl>

            <FormControl id='password' isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup size='md'>
                    <Input
                        type={showPass ? "text" : "password"}
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={() => setShowPass(!showPass)}>
                            <FontAwesomeIcon icon={showPass ? faEyeSlash : faEye} />
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>

            <Button
                colorScheme="blue"
                width="100%"
                style={{ marginTop: 15 }}
                onClick={() => handleLogin()}
            >
                Login
            </Button>
            <Button
                variant="solid"
                colorScheme="red"
                width="100%"
                style={{ marginTop: 15 }}
                onClick={() => {
                    setEmail("guest@example.com");
                    setPassword("123456");
                }}
            >
                Get Guest User Credentials
            </Button>
        </VStack>
    );
};

export default Login;