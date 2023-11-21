import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormLabel,
  Button,
  FormControl,
  Input,
  useDisclosure,
  useToast,
  IconButton,
  Text,
  InputGroup,
  FormErrorMessage,
  Box,
} from "@chakra-ui/react";
import { IconSearch, IconPlus } from "@tabler/icons-react";
import axios  from "axios";
import React from "react";
import * as Yup from "yup";
import { Field, Form, Formik, useFormik } from 'formik';

const categorySchema = Yup.object().shape({
  category_name: Yup.string().required("Category product is required"),
});

const ModalCategory = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const addCategory = async (category_name) => {
    try {
      const uppercaseInput = category_name.toUpperCase();
      let formData = new FormData();
      formData.append("category_name", uppercaseInput);
   
      await axios.post("http://localhost:8080/product/add-product-category", formData);
      toast({
        position: "top",
        title: "Add Category",
        description: "Success...",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

    } catch (err) {
      toast({
        position: "top",
        title: "Add Category",
        description: "Error...",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  const formik = useFormik({
    initialValues: {
      category_name: "",
    },
    validationSchema: categorySchema,
    onSubmit: (values) => {
      addCategory(values.category_name);
      
    },
  });


  return (
    <>
      <Button
        leftIcon={<IconPlus />}
        bgColor="#1A72DD"
        color="#ffffff"
        display="flex"
        gap="10px"
        onClick={onOpen}
      >
        Add Category
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        
        <ModalContent>
        <form onSubmit={formik.handleSubmit}>
<Box bgColor="#1A72DD">
          <ModalHeader color="white" variant="solid">ADD CATEGORY PRODUCT</ModalHeader></Box>
          <ModalCloseButton />
          <ModalBody pb={6}>
          <FormControl
              isInvalid={formik.touched.category_name && formik.errors.category_name}
            >
              <FormLabel>Category Name :</FormLabel>
              <InputGroup>
                <Input
                  placeholder= "Add new category"
                  type="text"
                  name="category_name"
                  value={formik.values.category_name}
                  onChange={formik.handleChange}
                ></Input>
              </InputGroup>
              {formik.touched.category_name && formik.errors.category_name && (
                <FormErrorMessage>{formik.errors.category_name}</FormErrorMessage>
              )}
            </FormControl>
           
          </ModalBody>

          <ModalFooter>
            <Button type="submit" colorScheme="blue" mr={3} >
              Add Category
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </form>

        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalCategory;
