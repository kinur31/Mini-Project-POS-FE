import { Box, Flex, Text } from "@chakra-ui/layout"
import SideBarCashier from "../../../components/sidebar/CashierSidebar";

const DashboardCashier = () => {
    return (
        <Flex>
      <SideBarCashier/>
        <Box m={0}>
            <Text>This is Dashboard Cashier Page</Text>
        </Box>
        </Flex>
    )
}

export default DashboardCashier;