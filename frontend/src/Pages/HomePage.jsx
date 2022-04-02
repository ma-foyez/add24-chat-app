import React from 'react';
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import img from '../assets/images/logo.svg'
import Login from './../components/authentication/Login';
import SignUP from '../components/authentication/SignUP';

const HomePage = () => {
    return (
        <React.Fragment>
            {/* For medium to large devices */}
            <div className="container p-3 d-none d-md-block">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-12">
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

            {/* For small devices */}

            <div className="container p-3 d-block d-md-none">
                <Box bg="white" w="100%" p={4} borderRadius="lg" color="black" borderWidth="1px ">
                    <div className="small-logo d-flex justify-content-center align-items-center mb-5">
                        <img src={img} alt='Chat APP Logo' className='img-fluid' />
                    </div>
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
        </React.Fragment>
    );
};

export default HomePage;