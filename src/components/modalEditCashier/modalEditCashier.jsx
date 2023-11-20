import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useToast,
} from "@chakra-ui/react";
import * as Yup from "yup";
import { useFormik } from "formik";

const cashierSchema = Yup.object().shape({
  fullname: Yup.string().required("fullname is required"),
  address: Yup.string().required("address is required"),
  username: Yup.string().required("username is required"),
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

  const formRegister = async (fullname, address, username) => {
    try {
      await axios.patch(`http://localhost:8080/user/${cashierById.id}`, {
        fullname: fullname,
        address: address,
        username: username,
      });
      toast({
        position: "top",
        title: "Cashier Registration",
        description: "Success...",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      onClose();
    } catch (err) {
      console.error("Error in formRegister:", err);
      toast({
        position: "top",
        title: "Cashier Registration",
        description: "Error...",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
    window.location.reload();
  };

  const formik = useFormik({
    initialValues: {
      fullname: cashierById?.fullname || "",
      address: cashierById?.address || "",
      username: cashierById?.username || "",
    },

    validationSchema: cashierSchema,
    onSubmit: (values) => {
      formRegister(values.fullname, values.address, values.username);
    },
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Cashier</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <form onSubmit={formik.handleSubmit}>
            <Box display="flex" flexDirection="column" gap="20px">
              <FormControl>
                <FormLabel>Full name:</FormLabel>
                <Input
                  id="fullname"
                  name="fullname"
                  onChange={formik.handleChange}
                  value={formik.values.fullname}
                />
              </FormControl>

              <FormControl>
                <FormLabel>address:</FormLabel>
                <Input
                  type="text"
                  id="address"
                  name="address"
                  onChange={formik.handleChange}
                  value={formik.values.address}
                />
              </FormControl>

              <FormControl>
                <FormLabel>username:</FormLabel>
                <Input
                  type="text"
                  id="username"
                  name="username"
                  onChange={formik.handleChange}
                  value={formik.values.username}
                />
              </FormControl>
            </Box>
            <ModalFooter>
              <Button
                mt={4}
                mr={3}
                colorScheme="blue"
                isLoading={formik.isSubmitting}
                type="submit"
              >
                Update Cashier
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
