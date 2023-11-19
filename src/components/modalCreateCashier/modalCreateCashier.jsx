import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Text,
  FormErrorMessage,
} from "@chakra-ui/react";
import { IconPlus } from "@tabler/icons-react";
import * as Yup from "yup";
import axios from "axios";
import { useFormik } from "formik";
import { useToast } from "react-toastify";

const CashierScheme = Yup.object().shape({
  fullname: Yup.string()
    .min(2, "Nama lengkap minimal memiliki 2 karakter")
    .max(50, "Nama lengkap tidak boleh lebih dari 50 karakter")
    .matches(
      /^[a-zA-Z\s']+$/,
      "Nama lengkap hanya boleh mengandung huruf dan spasi"
    )
    .required("Nama lengkap diperlukan"),
  address: Yup.string()
    .min(5, "Alamat minimal memiliki 5 karakter")
    .max(100, "Alamat tidak boleh lebih dari 100 karakter")
    .required("Alamat diperlukan"),
  email: Yup.string()
    .email("Format email tidak valid")
    .required("Email diperlukan"),
  username: Yup.string()
    .max(30, "Maksimal 30 karakter")
    .required("username wajib diisi dengan maksimal berisi 30 karakter"),
  password: Yup.string()
    .min(8, "Password harus memiliki setidaknya 8 karakter")
    .max(20, "Password tidak boleh lebih dari 20 karakter")
    .required("Password diperlukan"),
});

function ModalCreateCashier() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const token = localStorage.getItem("token");

  const formRegister = async (fullname, address, email, username, password) => {
    try {
      await axios.post(
        "http://localhost:8080/user",
        {
          fullname,
          address,
          email,
          username,
          password,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
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
      toast({
        position: "top",
        title: "Cashier Registration",
        description: "Error...",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const formik = useFormik({
    initialValues: {
      fullname: "",
      address: "",
      email: "",
      username: "",
      password: "",
    },

    validationSchema: CashierScheme,
    onSubmit: (values, { resetForm }) => {
      formRegister(
        values.fullname,
        values.address,
        values.email,
        values.username,
        values.password
      );
      resetForm({ values: "" });
    },
  });

  return (
    <>
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

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <form onSubmit={formik.handleSubmit}>
          <ModalContent>
            <ModalHeader>Create your cashier</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl
                isInvalid={formik.touched.fullname && formik.errors.fullname}
              >
                <FormLabel>Full Name</FormLabel>
                <Input
                  placeholder="Full name"
                  type="text"
                  name="fullname"
                  value={formik.values.fullname}
                  onChange={formik.handleChange}
                />

                {formik.touched.fullname && formik.errors.fullname && (
                  <FormErrorMessage>{formik.errors.fullname}</FormErrorMessage>
                )}
              </FormControl>

              <FormControl
                mt={4}
                isInvalid={formik.touched.address && formik.errors.address}
              >
                <FormLabel>Address</FormLabel>
                <Input
                  placeholder="Address"
                  type="text"
                  name="address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                />

                {formik.touched.address && formik.errors.address && (
                  <FormErrorMessage>{formik.errors.address}</FormErrorMessage>
                )}
              </FormControl>

              <FormControl
                mt={4}
                isInvalid={formik.touched.email && formik.errors.email}
              >
                <FormLabel>Email</FormLabel>
                <Input
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />

                {formik.touched.email && formik.errors.email && (
                  <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                )}
              </FormControl>

              <FormControl
                mt={4}
                isInvalid={formik.touched.username && formik.errors.username}
              >
                <FormLabel>Username</FormLabel>
                <Input
                  placeholder="Username"
                  type="text"
                  name="username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                />

                {formik.touched.username && formik.errors.username && (
                  <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
                )}
              </FormControl>

              <FormControl
                mt={4}
                isInvalid={formik.touched.password && formik.errors.password}
              >
                <FormLabel>Password</FormLabel>
                <Input
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />

                {formik.touched.password && formik.errors.password && (
                  <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
                )}
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button type="submit" colorScheme="blue" mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
}

export default ModalCreateCashier;
