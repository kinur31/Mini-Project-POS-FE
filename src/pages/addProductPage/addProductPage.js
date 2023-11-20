import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import AddProduct from '../../components/addProduct/addProduct';

const AddProductPage = () => {
  return (
    <Box p={4}>
      <Heading mb={4}>Add New Product</Heading>
      <AddProduct />
    </Box>
  );
};

export default AddProductPage;