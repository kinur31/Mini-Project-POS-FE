import React from "react";
import Dashboard from "../../components/dasboardReport/dashboardReport";
import { Box, Heading } from '@chakra-ui/react';

const DashboardPage = () => {
return (
    <Box>
        <Heading>Dashboard Admin</Heading>
        <Dashboard />
    </Box>
)
}

export default DashboardPage;