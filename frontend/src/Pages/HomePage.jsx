import React from 'react';
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import img from '../assets/images/add24logo_transparant.svg'
import Login from './../components/authentication/Login';
import SignUP from '../components/authentication/SignUP';

const HomePage = () => {
    return (

        <div className="container p-3">
            <div className="row justify-content-center align-items-center">
                <div className="col-lg-6 col-md-6 col-sm-12 d-none d-md-block">
                    <img src={img} alt='Chat APP Logo' className='img-fluid' />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <Box bg="white" w="100%" p={4} borderRadius="lg" color="black" borderWidth="1px ">
                        <Tabs variant='soft-rounded'>
                            <TabList mb="1em">
                                <Tab width="50%">Login</Tab>
                                <Tab width="50%">Sign UP</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <Login />
                                </TabPanel>
                                <TabPanel>
                                    <SignUP />
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </Box>
                </div>
            </div>
        </div>
    );
};

export default HomePage;