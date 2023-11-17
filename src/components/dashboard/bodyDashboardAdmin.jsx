import { Box, Image } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { Switch, Button } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

const BodyDashboardAdmin = () => {
  // const [selectAll, setSelectAll] = useState(false);
  const [cashier, setCashier] = useState([]);
  const [status, setStatus] = useState(true);
  const fetchCashier = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/product/list-product"
      );
      setCashier(response.data.data);
      console.log(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChangeStatus = async () => {
    try {
      const response = await axios.update(
        "http://localhost:8080/product/deactive"
      );
      setStatus(response.data.data);
      console.log(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCashier();
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
              <Th color="#ffffff">Profile Picture</Th>
              <Th color="#ffffff">Full Name</Th>
              <Th color="#ffffff">Email</Th>
              <Th color="#ffffff">Status</Th>
              <Th color="#ffffff">Action</Th>
            </Tr>
          </Thead>
          <Tbody
            color="#1E1E1E"
            fontFamily="Nunito"
            fontWeight="400"
            fontSize="12px"
            textAlign="center"
          >
            {cashier.map((item, index) => (
              <Tr key={index}>
                <Td>
                  <Image
                    // height="120px"
                    width="80px"
                    src={`${process.env.REACT_APP_IMAGE_URL}/cashier/${item?.avatar}`}
                    alt="product pict"
                  />
                </Td>
                <Td>{item.fullname}</Td>
                <Td>{item.email}</Td>
                <Td>{item.status}</Td>
                {/* <Td>status: {item.status_product === true ? 1 : 0}</Td> */}
                <Td textAlign="center">
                  <Switch
                    colorScheme="green"
                    onClick={handleChangeStatus}
                    value={status}
                    isChecked={status === true ? true : false}
                  />
                </Td>
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

export default BodyDashboardAdmin;
