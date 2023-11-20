import { Box, Flex, Text } from "@chakra-ui/layout"
import Sidebar from "../../../components/sidebar/sidebar";

const DashboardCashier = () => {
    return (
        <Flex>
      <Sidebar/>
        <Box m={0}>
            <Text>This is Dashboard Cashier Page</Text>
        </Box>
        </Flex>
    )
}

export default DashboardCashier;