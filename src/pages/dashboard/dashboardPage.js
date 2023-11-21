import React from "react";
// import Dashboard from "../../components/dasboardReport/dashboardReport";
import { Box, Flex, Heading } from '@chakra-ui/react';
import PageReport from "../report";
import Sidebar1 from "../../components/sidebar/sidebar1";


const DashboardPage = () => {
return (
    <Flex>
        <Sidebar1 />
        <Heading m={4}>Dashboard Admin</Heading>
        {/* <Dashboard /> */}
        <PageReport />
    </Flex>
)
}

export default DashboardPage;