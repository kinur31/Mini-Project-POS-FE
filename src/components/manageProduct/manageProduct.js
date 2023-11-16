import { Box, Flex, Image } from '@chakra-ui/react'
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer} from '@chakra-ui/react'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { Switch, Button } from '@chakra-ui/react'
import HeadManageProduct from './headManage';
import axios from "axios";
import { useEffect, useState } from "react";
import Sidebar1 from '../sidebar/sidebar1';

const BodyManageProduct = () => {
    // const [selectAll, setSelectAll] = useState(false);
        const [product, setProduct] = useState([]);
        const [status, setStatus] = useState(true)
        const fetchProduct = async () => {
          try {
            const response = await axios.get("http://localhost:8080/product/list-product");
            setProduct(response.data.data);
            console.log(response.data.data);
            // console.log(response.data.data[0].eventcategory.categoryName);
          } catch (err) {
            console.log(err);
          }
        };

        const handleChangeStatus = async () => {
            try {
                const response = await axios.update("http://localhost:8080/product/deactive");
                setProduct(response.data.data);
                console.log(response.data.data);
                // console.log(response.data.data[0].eventcategory.categoryName);
              } catch (err) {
                console.log(err);
              }
        }

        useEffect (() => {
            fetchProduct();
        }, []);
    
    return (
        <>
            <TableContainer textAlign="center">
                <Table size='sm' variant='striped' bgColor='#FFF6F3' textAlign={"center"}>
                <Thead bgColor='#1A72DD' h='40px'>
                    <Tr >
                        <Th color='#ffffff'>Product Name</Th> 
                        <Th color='#ffffff'>Product Image</Th>
                        <Th color='#ffffff'>Price</Th>
                        <Th color='#ffffff'>Stock</Th>
                        <Th color='#ffffff'>Category</Th>
                        <Th color='#ffffff' textAlign='center'>Status</Th>
                        <Th color='#ffffff' textAlign='center'>Action</Th>
                    </Tr>
                </Thead>
                <Tbody color='#1E1E1E' fontFamily='Nunito' fontWeight='400' fontSize='12px' textAlign="center">
                {product.map((item, index) => (
                    <Tr key={index}>
                        <Td>{item.product_name}</Td>
                        <Td >
                        <Image
              // height="120px"
              width="80px"
              src={`${process.env.REACT_APP_IMAGE_URL}/products/${item?.image}`}
              alt="product pict"
              />
                        </Td>
                        {/* <Td><Box bgColor='#D1D1D1' w='100px' h='60px'/></Td> */}
                        <Td >{item.price}</Td>
                        <Td >{item.stock}</Td>
                        <Td >{item.productCategory?.category_name}</Td>
                        {/* <Td>status: {item.status_product === true ? 1 : 0}</Td> */}
                        <Td textAlign='center'><Switch colorScheme='green' onClick={handleChangeStatus} value={status} isChecked={status === true ? true : false}/></Td>
                        <Td textAlign='center'><Box display='flex' justifyContent='center' gap='10px'><Button size='sm' w='50px' bgColor='#1A72DD' color='#ffffff'>Edit</Button> <Button size='sm' w='50px' variant='outline' color='#1A72DD' border='1px solid #1A72DD'>Delete</Button></Box></Td>
                    </Tr>
                    ))}
                </Tbody>
                </Table>
            </TableContainer>
            </>
    )
}

export default BodyManageProduct;