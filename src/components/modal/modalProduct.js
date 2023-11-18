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
  Image,
  Select,
  Stack,
  Box,
  VStack,
} from "@chakra-ui/react";
import { IconSearch, IconPlus } from "@tabler/icons-react";
import axios from "axios";
import React from "react";
import * as Yup from "yup";
import { Field, Form, Formik, useFormik } from "formik";
import { useDropzone } from "react-dropzone";
import { IconCloudUpload } from "@tabler/icons-react";
import { useEffect, useState, useRef } from "react";

const productSchema = Yup.object().shape({
  product_name: Yup.string().required("Product name is required"),
  product_category_id: Yup.string().required("Category product is required"),
  price: Yup.string().required("Price product is required"),
  stock: Yup.string().required("Stock product is required"),
  productImage: Yup.string(),
});

const ModalProduct = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [productImage, setProductImage] = useState(null);
  const inputImage = useRef(null);
  const [productCategory, setProductCategory] = useState([]);

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: "image/*", // Accept only image files
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        const imageURL = URL.createObjectURL(acceptedFiles[0]);
        setProductImage(imageURL);
      }
    },
  });

  const formProduct = async (
    product_name,
    product_category_id,
    price,
    stock
  ) => {
    try {
      const uppercaseInput = product_name.toUpperCase();
      let formData = new FormData();
      formData.append("product_name", uppercaseInput);
      formData.append("product_category_id", product_category_id);
      formData.append("price", price);
      formData.append("stock", stock);
      // formData.append("image", fieldImage);
      acceptedFiles.forEach((file) => {
        formData.append("image", file);
      });
      await axios.post("http://localhost:8080/product/add-product", formData);
      toast({
        position: "top",
        title: "Add Product",
        description: "Success...",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (err) {
      toast({
        position: "top",
        title: "Add Product",
        description: "Error...",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  const fetchCategory = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/product/list-category"
      );
      setProductCategory(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const handleReset = () => {
    if (inputImage.current) {
      inputImage.current.value = null;
    }
  };

  const formik = useFormik({
    initialValues: {
      product_name: "",
      product_category_id: "",
      price: "",
      stock: "",
      eventImage: null,
    },
    validationSchema: productSchema,
    onSubmit: (values) => {
      formProduct(
        values.product_name,
        values.product_category_id,
        values.price,
        values.stock
      );
    },
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProductImage(file);
  };

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
        Add New Product
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
            <ModalHeader color="white" variant="solid">ADD PRODUCT</ModalHeader>
            </Box>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl
                isInvalid={
                  formik.touched.product_name && formik.errors.product_name
                }
              >
                <FormLabel>Product Name :</FormLabel>
                <InputGroup>
                  <Input
                    placeholder="Add new product"
                    type="text"
                    name="product_name"
                    value={formik.values.product_name}
                    onChange={formik.handleChange}
                  ></Input>
                </InputGroup>
                {formik.touched.product_name &&
                  formik.errors.product_name && (
                    <FormErrorMessage>
                      {formik.errors.product_name}
                    </FormErrorMessage>
                  )}
              </FormControl>

              <FormControl
                isInvalid={formik.touched.price && formik.errors.price}
              >
                <FormLabel>Selling price :</FormLabel>
                <InputGroup>
                  <Input
                    placeholder="Input price"
                    type="number"
                    name="price"
                    value={formik.values.price}
                    onChange={formik.handleChange}
                  ></Input>
                </InputGroup>
                {formik.touched.price && formik.errors.price && (
                  <FormErrorMessage>{formik.errors.price}</FormErrorMessage>
                )}
              </FormControl>

              <FormControl
                isInvalid={formik.touched.stock && formik.errors.stock}
              >
                <FormLabel>Stock :</FormLabel>
                <InputGroup>
                  <Input
                    placeholder="Input stock"
                    type="number"
                    name="stock"
                    value={formik.values.stock}
                    onChange={formik.handleChange}
                  ></Input>
                </InputGroup>
                {formik.touched.stock && formik.errors.stock && (
                  <FormErrorMessage>{formik.errors.stock}</FormErrorMessage>
                )}
              </FormControl>

              <FormControl>
                <FormLabel>Category product :</FormLabel>
                <InputGroup>
                  <Select
                    name="product_category_id"
                    //   background="#262626"
                    //   color="#585454"
                    //   border="0"
                    placeholder="Choose product category"
                    value={formik.values.productCategory}
                    onChange={formik.handleChange}
                  >
                    {productCategory.map((item, index) => (
                      <option
                        key={index}
                        value={item.id}
                        style={{ color: "black" }}
                      >
                        {item.category_name}
                      </option>
                    ))}
                  </Select>
                </InputGroup>
              </FormControl>

              <FormControl
                isInvalid={
                  formik.touched.productImage && formik.errors.productImage
                }
              >
                <FormLabel>Upload Image :</FormLabel>
                <Box>
                  <InputGroup>
                    <Stack
                      border="2px solid grey"
                      justifyContent="center"
                      gap={0}
                      rounded=".5em"
                      overflow="hidden"
                    >
                      <VStack
                        p="40px"
                        h="13em"
                        hidden={productImage ? true : false}
                        {...getRootProps()}
                        className="dropzone"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Input {...getInputProps()} ref={inputImage} />
                        {/* <Image src={Upload} /> */}
                        <IconCloudUpload cursor="pointer" size="30px" />
                        <Text
                          cursor="pointer"
                          textAlign="center"
                          w="200px"
                          fontSize="small"
                        >
                          Drag 'n' drop some files here, or click to select
                          files
                        </Text>
                      </VStack>
                      {productImage && (
                        <Stack className="dropzone">
                          <Image
                            ref={inputImage}
                            src={productImage}
                            alt="Uploaded Image"
                            style={{ maxWidth: "100%" }}
                          />
                          <Button overflow="hidden" onClick={handleReset}>
                            <Text>Reset</Text>
                          </Button>
                        </Stack>
                      )}
                    </Stack>
                  </InputGroup>
                  {formik.touched.productImage &&
                    formik.errors.productImage && (
                      <FormErrorMessage>
                        {formik.errors.productImage}
                      </FormErrorMessage>
                    )}
                </Box>
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button type="submit" colorScheme="1A72DD" mr={3}>
                Add Product
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalProduct;
