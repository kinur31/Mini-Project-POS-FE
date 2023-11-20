import { Box, Text } from "@chakra-ui/react";
import ModalCreateCashier from "../modalCreateCashier/modalCreateCashier";
import Search from "../search/search";

const HeadDashboardAdmin = () => {
  return (
    <Box padding="10px 20px 10px 20px">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Text color="#1A72DD" fontWeight="700" fontSize="20px">
          User Management
        </Text>

        <Box display="flex" alignItems="center" gap="18px">
          <Search />
        </Box>
        <ModalCreateCashier />
      </Box>
    </Box>
  );
};

export default HeadDashboardAdmin;
