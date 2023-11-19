import { Box, Flex, Image } from "@chakra-ui/react";
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
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { Switch, Button } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import HeadCategory from "./headCategory";


const BodyCategory = () => {
  // const [selectAll, setSelectAll] = useState(false);
  const [categoryName, setCategoryName] = useState([]);
  const [status, setStatus] = useState(true);
  const toast = useToast();
  
  const fetchCategory = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/product/list-category"
      );
      setCategoryName(response.data.data);
      console.log(response.data.data);
      // console.log(response.data.data[0].eventcategory.categoryName);
    } catch (err) {
      console.log(err);
    }
  };

//   const handleChangeStatus = async () => {
//     try {
//       const response = await axios.update(
//         "http://localhost:8080/product/deactive"
//       );
//       setProduct(response.data.data);
//       console.log(response.data.data);
//       // console.log(response.data.data[0].eventcategory.categoryName);
//     } catch (err) {
//       console.log(err);
//     }
//   };


const handleDeleteCategory = async (id) => {
  try {
    const response = await axios.delete(
      `http://localhost:8080/product/destroy/${id}`
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
  }, 3000);
};

  useEffect(() => {
    fetchCategory();
  }, []);

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
              <Th fontSize="medium" color="#ffffff">Category Name</Th>
              <Th fontSize="medium" color='#ffffff' textAlign='center'>Action</Th>
            </Tr>
          </Thead>
          <Tbody
            color="#1E1E1E"
            fontFamily="Nunito"
            fontWeight="400"
            fontSize="12px"
            textAlign="center"
          >
            {categoryName.map((item, index) => (
              <Tr key={index}>
                <Td fontWeight="bold" size="24px">{item.category_name}</Td>
                
                {/* <Td><Box bgColor='#D1D1D1' w='100px' h='60px'/></Td> */}

                {/* <Td>{item.productCategory?.category_name}</Td> */}
                {/* <Td>status: {item.status_product === true ? 1 : 0}</Td> */}
                <Td textAlign="center">
                  <Box display="flex" justifyContent="center" gap="10px">
                    <Button
                      size="sm"
                      w="50px"
                      bgColor="#1A72DD"
                      color="#ffffff"
                    >
                      Edit
                    </Button>{" "}
                    <Button
                      size="sm"
                      w="50px"
                      variant="outline"
                      color="#1A72DD"
                      border="1px solid #1A72DD"
                      onClick={() => handleDeleteCategory(item.id)}
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
    </>
  );
};

export default BodyCategory;
