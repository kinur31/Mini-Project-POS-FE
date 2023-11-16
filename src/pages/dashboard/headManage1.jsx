import {
  useDisclosure,
  Box,
  Text,
  Input,
  Button,
  HStack,
} from "@chakra-ui/react";
import { IconSearch, IconPlus } from "@tabler/icons-react";

// import ModalCreateProduct from '../../modal/createProduct';
import { Link } from "react-router-dom";

const HeadManageCashier = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <HStack>
      <Box>
        <Text color="#1A72DD" fontWeight="700" fontSize="25px">
          Manage Cashier
        </Text>
      </Box>
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
            placeholder="Search User here...."
          />
          <IconSearch color="#838383" />
        </Box>
        <Box>
          <Link to={"/add-product"}>
            <Button
              bgColor="#1A72DD"
              color="#ffffff"
              display="flex"
              gap="10px"
              onClick={onOpen}
              alignItems="center"
            >
              {" "}
              <IconPlus /> <Text>Create Cashier</Text>{" "}
            </Button>
          </Link>
        </Box>
      </Box>
    </HStack>
  );
};

export default HeadManageCashier;
