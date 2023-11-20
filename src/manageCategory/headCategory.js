import { useDisclosure, Box, Text, Input, Button, IconButton,useToast, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, ModalFooter, FormLabel } from "@chakra-ui/react";
import { IconSearch, IconPlus } from "@tabler/icons-react";
// import ModalCreateProduct from '../../modal/createProduct';
import { Link } from "react-router-dom";
import ModalCategory from "../components/modal/modalCategory";
import React from 'react';

const HeadCategory = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast();

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  return (
    <Box padding="10px 20px 10px 20px">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Text
          color="#1A72DD"
        //   fontFamily="Nunito"
          fontWeight="700"
          fontSize="20px"
        >
          Manage Category Product
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
          <ModalCategory  />
        </Box>
      </Box>
    </Box>
  );
};

export default HeadCategory;
