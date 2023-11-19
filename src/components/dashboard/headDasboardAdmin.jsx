import { Box, Text, Input } from "@chakra-ui/react";
import { IconSearch } from "@tabler/icons-react";
import ModalCreateCashier from "../modalCreateCashier/modalCreateCashier";

const HeadDashboardAdmin = () => {
  return (
    <Box padding="10px 20px 10px 20px">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Text color="#1A72DD" fontWeight="700" fontSize="20px">
          User Management
        </Text>

        <Box display="flex" alignItems="center" gap="18px">
          <Box
            w="300px"
            display="flex"
            alignItems="center"
            bgColor="#D1D1D1"
            padding="0 5px 0 5px"
            borderRadius="5px"
          >
            <Input
              border="none"
              _focus={{ border: "none", boxShadow: "none" }}
              placeholder="Search Cashier here...."
            />
            <IconSearch color="#838383" />
          </Box>
          <ModalCreateCashier />
        </Box>
      </Box>
    </Box>
  );
};

export default HeadDashboardAdmin;
