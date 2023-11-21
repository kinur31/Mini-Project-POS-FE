import { useDisclosure, Box, Text, Input, Button } from "@chakra-ui/react";
import { IconSearch, IconPlus } from "@tabler/icons-react";
// import ModalCreateProduct from '../../modal/createProduct';
import { Link } from "react-router-dom";
import ModalProduct from "../modal/modalProduct";
import Search from "../search/search";

const HeadManageProduct = (props) => {
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
          </Box>
          <ModalProduct />
        </Box>
      </Box>
    </Box>
  );
};

export default HeadManageProduct;
