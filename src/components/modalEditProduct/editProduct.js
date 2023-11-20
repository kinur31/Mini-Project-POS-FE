import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
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
  FormErrorMessage
} from '@chakra-ui/react';
import * as Yup from "yup";
import { IconCloudUpload } from "@tabler/icons-react";
import { useFormik } from 'formik';
import { useDropzone } from 'react-dropzone';

const productSchema = Yup.object().shape({
  product_name: Yup.string().required("Product name is required"),
  product_category_id: Yup.string().required("Category product is required"),
  price: Yup.string().required("Price product is required"),
  stock: Yup.string().required("Stock product is required"),
});


const ModalProduct = ({ isOpen, onClose, productById }) => {
  const [productCategory, setProductCategory] = useState([]);
  const [image, setImage] = useState(productById?.image);
  const [showAlert, setShowAlert] = useState(false);

  const toast = useToast();

  const fetchCategory = async () => {
    try {
      const response = await axios.get('http://localhost:8080/product/list-category');
      setProductCategory(response.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCategory();
    if (showAlert) {
      const timeout = setTimeout(() => {
        setShowAlert(false);
        onClose(); 
      }, 2000); 
      
      return () => clearTimeout(timeout);
    }
  }, [showAlert, onClose]);

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        const imageURL = URL.createObjectURL(acceptedFiles[0]);
        setImage(imageURL);
        formik.setFieldValue('image', acceptedFiles[0]); 
      }
    },
  });

  const formik = useFormik({
    initialValues: {
      product_name: productById?.product_name || '',
      product_category_id: productById?.product_category_id || '',
      price: productById?.price || '',
      stock: productById?.stock || '',
      image: productById?.image,
      // status_product: productById?.status_product || false,
    },
    validationSchema: productSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const formData = new FormData();
        acceptedFiles.forEach((file) => {
          formData.append("image", file);
        });

        // Check if a new file is uploaded, if not, use the existing image
        if (acceptedFiles.length === 0) {
          formData.delete('image');
        }

        console.log([...formData]);
        console.log(acceptedFiles);
        await axios.patch(`http://localhost:8080/product/edit/${productById.id}`, formData);

        onClose();
        toast({
          position: "top",
          title: 'Product Updated',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      } catch (error) {
        console.error('Error updating product:', error);
        toast({
          position: "top",
          title: 'Error',
          description: 'Failed to update product.',
          status: 'error',
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
      <ModalHeader>Edit Product</ModalHeader>
      <ModalCloseButton />
      <ModalBody  pb={6}>
        <form onSubmit={formik.handleSubmit}>
          <Box display='flex' gap='20px'>
            <Box w='50%'>
              <FormControl>
                <FormLabel color="#696666">Product Image:</FormLabel>
                <Box
                  bgColor="#EEEDED"
                  h="265px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="10px"
                >
                  <Box
                    {...getRootProps()}
                    className="dropzone"
                    color="#ffffff"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    w="100%"
                    h="100%"
                    position="relative"
                  >
                    <Input
                      {...getInputProps()}
                      size="xl"
                      type="file"
                      w="100%"
                      h="100%"
                      position="absolute"
                      opacity="0"
                    />
                    {/* Display the existing image */}
                    {image && !acceptedFiles.length && (
                      <Image
                        src={`${process.env.REACT_APP_IMAGE_URL}/products/${image}`}
                        alt="Existing Image"
                        w="100%"
                        h="100%"
                        objectFit="cover"
                        borderRadius="10px"
                        cursor={'pointer'}
                      />
                    )}
                    {/* Display the newly selected image */}
                    {acceptedFiles.length > 0 && (
                      <Image
                        src={image}
                        alt="Selected Image"
                        w="100%"
                        h="100%"
                        objectFit="cover"
                        borderRadius="10px"
                       
                      />
                    )}
                  </Box>
                </Box>
              </FormControl>
            </Box>
  
            <Box w='50%' display='flex' flexDirection='column' gap='20px'>
              <FormControl>
                <FormLabel htmlFor="product_name">Product Name:</FormLabel>
                <Input
                  id="product_name"
                  name="product_name"
                  onChange={formik.handleChange}
                  value={formik.values.product_name}
                />
              </FormControl>
  
              <FormControl>
                <FormLabel htmlFor="product_category_id">Product Category:</FormLabel>
                <Select
                  id="product_category_id"
                  name="product_category_id"
                  onChange={formik.handleChange}
                  value={formik.values.product_category_id}
                >
                  {productCategory.map((item, index) => (
                    <option key={index} value={item.id} style={{ color: 'black' }}>
                      {item.category_name}
                    </option>
                  ))}
                </Select>
              </FormControl>
  
              <FormControl>
                <FormLabel htmlFor="price">Price:</FormLabel>
                <Input
                  type="number"
                  id="price"
                  name="price"
                  onChange={formik.handleChange}
                  value={formik.values.price}
                />
              </FormControl>
  
              <FormControl>
                <FormLabel htmlFor="stock">Stock:</FormLabel>
                <Input
                  type="number"
                  id="stock"
                  name="stock"
                  onChange={formik.handleChange}
                  value={formik.values.stock}
                />
              </FormControl>
            </Box>
          </Box>
  <ModalFooter>
          <Button mt={4} mr={3} colorScheme="blue" isLoading={formik.isSubmitting} type="submit">
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
  )
};
  

export default ModalProduct;
