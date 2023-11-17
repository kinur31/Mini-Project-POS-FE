import { useDisclosure, Box, Text, Input, Button } from "@chakra-ui/react";
import { IconSearch, IconPlus } from "@tabler/icons-react";
// import ModalCreateProduct from '../../modal/createProduct';
import { Link } from "react-router-dom";

const HeadDashboarAdmin = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box padding="10px 20px 10px 20px">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Text
          color="#1A72DD"
          //   fontFamily="Nunito"
          fontWeight="700"
          fontSize="20px"
        >
          Manage Product
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
              placeholder="Search Product here...."
            />
            <IconSearch color="#838383" />
          </Box>
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
              <IconPlus /> <Text>Create Product</Text>{" "}
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default HeadDashboarAdmin;
