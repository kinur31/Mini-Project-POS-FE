import {
  useDisclosure,
  InputLeftElement,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useToast,
} from "@chakra-ui/react";
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftAddon,
  Textarea,
  Select,
  Stack,
} from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import React, { useRef, useEffect } from "react";
import { IconCloudUpload} from "@tabler/icons-react";

import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";

const categorySchema = Yup.object().shape({
  product_name: Yup.string().required("Product name is required"),
});

const ModalProduct = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const editProduct = async (product_name) => {
    try {
      const uppercaseInput = product_name.toUpperCase();
      let formData = new FormData();
      formData.append("product_name", uppercaseInput);

      await axios.patch("http://localhost:8080/product/edit/:id", formData);
      toast({
        position: "top",
        title: "Edit Category",
        description: "Success...",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (err) {
      toast({
        position: "top",
        title: "Edit Category",
        description: "Error...",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const formik = useFormik({
    initialValues: {
      product_name: "",
    },
    validationSchema: categorySchema,
    onSubmit: (values) => {
      editProduct(values.product_name);
    },
  });

  return (
    // <Box w="900px">
    <>
      <Button size="sm" w="50px" bgColor="#1A72DD" color="#ffffff" onClick={onOpen}>
        Edit
      </Button>{" "}
      <Modal onClose={onClose} isOpen={isOpen} size="custom" isCentered>
        <ModalOverlay />
        <ModalContent w="950px" h="600px">
          <ModalHeader fontWeight={"bold"}>Edit Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box
              display="flex"
              justifyContent="center"
              flexDirection="column"
              gap="20px"
            >
              <Box display="flex" w="100%" gap="20px">
                <Box w="50%" display="flex" flexDirection="column" gap="20px">
                  <FormControl>
                    <FormLabel>Product Image :</FormLabel>
                    <Box
                      bgColor="#EEEDED"
                      h="265px"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      borderRadius="10px"
                    >
                      <Box
                        className="dropzone"
                        color="#ffffff"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Input
                          type="file"
                          w="100%"
                          h="100%"
                          position="absolute"
                          opacity="0"
                        />
                        <IconCloudUpload
                        cursor="pointer"
                          color="#838383"
                          width="130px"
                          height="80px"
                        />
                      </Box>
                    </Box>
                  </FormControl>
                </Box>
                <Box w="50%" display="flex" flexDirection="column" gap="34px">
                  <FormControl>
                    <FormLabel>Product Name :</FormLabel>
                    <Input
                      bgColor="#EEEDED"
                      placeholder="Product name here..."
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Price :</FormLabel>
                    <InputGroup>
                      <InputLeftAddon bgColor="#EEEDED" children="Rp" />
                      <Input
                        type="tel"
                        bgColor="#EEEDED"
                        placeholder="phone number"
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl>
                    <FormLabel>Stock :</FormLabel>
                    <Input bgColor="#EEEDED" placeholder="Type stock here..." />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Product Category :</FormLabel>
                    <Select bgColor="#EEEDED" placeholder="Select option">
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                  </FormControl>
                </Box>
              </Box>
            </Box>
          </ModalBody>
          <ModalFooter display="flex" gap="20px">
            <Button
              w="80px"
              variant="outline"
              color="#1A72DD"
              border="1px solid #1A72DD"
            >
              Save
            </Button>
            <Button
              w="80px"
              bgColor="#1A72DD"
              color="#ffffff"
              onClick={onClose}
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalProduct;
