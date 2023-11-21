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
import HeadManageProduct from "./headManage";
import axios from "axios";
import { useEffect, useState } from "react";
import Sidebar1 from "../sidebar/sidebar1";
import ModalProduct from "../modalEditProduct/editProduct";

const formatRupiah = (number) => {
  if (isNaN(number)) {
    return '';
  }
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);
};

const BodyManageProduct = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
    const [product, setProduct] = useState([]);
    const [productById, setProductById] = useState(null);
    const [productStatus, setProductStatus] = useState(null);
    const [productDelete, setProductDelete] = useState(null);
    const toast = useToast();

  const fetchProduct = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/product/list-product"
      );
      setProduct(response.data.data);
      console.log(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const updateProductStatus = async (productId, newStatus) => {
    try {
        const res = await axios.patch(`http://localhost:8080/product/edit/${productId}`, {
            status_product: newStatus
        });
        setProductStatus(res?.data?.data);
        toast({ title: res?.data?.message, status: 'success', position: 'top', duration: 2000, isClosable: true });
    } catch (err) {
        toast({ title: err?.response?.data, status: 'error', position: 'top', duration: 2000, isClosable: true });
    }
    setTimeout(() => {
      window.location.reload();
    }, 1000);
};

  const handleDeleteProduct = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/product/ignore/${id}`
      );

      toast({
        position: "top",
        title: "Delete Product",
        description: "Success...",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (err) {
      toast({
        position: "top",
        title: "Delete Product",
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

  const handleModalClose = () => {
    onClose();
    // getProductAll();
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
              <Th fontSize="medium" color="#ffffff" textAlign="center">
                Action
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
                <Switch colorScheme='green' isChecked={item.status_product === true ? true : false} onChange={() => updateProductStatus(item.id, item.status_product === true ? false : true)}/>
                </Td>
                <Td textAlign="center">
                  <Box display="flex" justifyContent="center" gap="10px">
                   {/* <ModalProduct /> */}
                    
      <Button size="sm" w="50px" bgColor="#1A72DD" color="#ffffff" onClick={() => { setProductById(item); onOpen(); }}>
        Edit
      </Button>{" "}
                    {/* <Button
                      size="sm"
                      w="50px"
                      bgColor="#1A72DD"
                      color="#ffffff"
                    >
                      Edit
                    </Button>{" "} */}
                    <Button
                      size="sm"
                      w="50px"
                      variant="outline"
                      color="#1A72DD"
                      border="1px solid #1A72DD"
                      onClick={() => handleDeleteProduct(item.id)}
                    >
                      Delete
                    </Button>
                  </Box>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      {isOpen &&<ModalProduct isOpen={isOpen} onClose={handleModalClose} product={product} setProduct={setProduct} productById={productById}/>}
    </>
  );
};

export default BodyManageProduct;
