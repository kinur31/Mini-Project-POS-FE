import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useToast,
  InputGroup,
  Stack,
  VStack,
  Image,
  FormErrorMessage,
} from "@chakra-ui/react";
import * as Yup from "yup";
import { IconCloudUpload } from "@tabler/icons-react";
import { useFormik } from "formik";
import { useDropzone } from "react-dropzone";

const productSchema = Yup.object().shape({
  product_name: Yup.string().required("Product name is required"),
  product_category_id: Yup.string().required("Category product is required"),
  price: Yup.string().required("Price product is required"),
  stock: Yup.string().required("Stock product is required"),
});

const ModalEditCashier = ({ isOpen, onClose, cashierById }) => {
  const [showAlert, setShowAlert] = useState(false);

  const toast = useToast();

  useEffect(() => {
    if (showAlert) {
      const timeout = setTimeout(() => {
        setShowAlert(false);
        onClose();
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [showAlert, onClose]);

  const formik = useFormik({
    initialValues: {
      fullname: cashierById?.fullname || "",
      address: cashierById?.address || "",
      username: cashierById?.username || "",
    },
    validationSchema: productSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        await axios.patch(`http://localhost:8080/user/${cashierById.id}`);

        onClose();
        toast({
          position: "top",
          title: "Cashier Updated",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } catch (error) {
        console.error("Error updating cashier:", error);
        toast({
          position: "top",
          title: "Error",
          description: "Failed to update cashier.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW="42em">
        <ModalHeader>Edit Cashier</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <form onSubmit={formik.handleSubmit}>
            <Box display="flex" gap="20px">
              <Box w="50%" display="flex" flexDirection="column" gap="20px">
                <FormControl>
                  <FormLabel htmlFor="product_name">Full name:</FormLabel>
                  <Input
                    id="fullname"
                    name="fullname"
                    onChange={formik.handleChange}
                    value={formik.values.fullname}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="price">address:</FormLabel>
                  <Input
                    type="text"
                    id="address"
                    name="address"
                    onChange={formik.handleChange}
                    value={formik.values.address}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="stock">username:</FormLabel>
                  <Input
                    type="text"
                    id="username"
                    name="username"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                  />
                </FormControl>
              </Box>
            </Box>
            <ModalFooter>
              <Button
                mt={4}
                mr={3}
                colorScheme="blue"
                isLoading={formik.isSubmitting}
                type="submit"
              >
                Update Product
              </Button>
              <Button mt={4} colorScheme="gray" onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </form>
        </ModalBody>
        {/* ... */}
      </ModalContent>
    </Modal>
  );
};

export default ModalEditCashier;
