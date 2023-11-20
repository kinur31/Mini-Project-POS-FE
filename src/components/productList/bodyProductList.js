import { Box, Flex, Image, useDisclosure } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  useToast,
} from "@chakra-ui/react";
import { Switch, Button } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Sidebar1 from "../sidebar/sidebar1";
import ModalProduct from "../modalEditProduct/editProduct";
import Search from "../search/search";

const formatRupiah = (number) => {
  if (isNaN(number)) {
    return '';
  }
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);
};

const ProductList = () => {
    const [product, setProduct] = useState([]);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/filter"
      );
      setProduct(response.data.data);
      console.log(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [product]);

  return (
    <>
      <TableContainer textAlign="center">
        <Table
          size="sm"
          variant="striped"
          bgColor="#FFF6F3"
          textAlign={"center"}
        >
          <Thead bgColor="#1A72DD" h="40px">
            <Tr>
              <Th fontSize="medium" color="#ffffff">Product Name</Th>
              <Th fontSize="medium" color="#ffffff">Product Image</Th>
              <Th fontSize="medium" color="#ffffff">Price</Th>
              <Th fontSize="medium" color="#ffffff">Stock</Th>
              <Th fontSize="medium" color="#ffffff">Category</Th>
              <Th fontSize="medium" color="#ffffff" textAlign="center">
                Status
              </Th>
            </Tr>
          </Thead>
          <Tbody
            color="#1E1E1E"
            fontFamily="Nunito"
            fontWeight="400"
            fontSize="12px"
            textAlign="center"
          >
            {product.map((item, index) => (
              <Tr key={index}>
                <Td fontWeight="bold">{item.product_name}</Td>
                <Td>
                  
                  <Image
                    // height="120px"
                    width="100px"
                    src={`${process.env.REACT_APP_IMAGE_URL}/products/${item?.image}`}
                    alt="product pict"
                  />
                </Td>
                {/* <Td><Box bgColor='#D1D1D1' w='100px' h='60px'/></Td> */}
                <Td fontWeight="bold">{formatRupiah(item.price)}</Td>
                <Td fontWeight="bold">{item.stock}</Td>
                <Td fontWeight="bold">{item.productCategory?.category_name}</Td>
                <Td textAlign="center">
                <Switch colorScheme='green' isChecked={item.status_product === true ? true : false} />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ProductList;
