import {
  Box,
  Image,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useDisclosure,
  TableContainer,
  useToast,
} from "@chakra-ui/react";
import { Switch, Button } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import ModalEditCashier from "../modalEditCashier/modalEditCashier";

const BodyDashboardAdmin = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [cashier, setCashier] = useState([]);
  const [cashierById, setCashierById] = useState(null);
  const [status, setCashierStatus] = useState(true);

  const fetchCashier = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/user/findCashier"
      );
      setCashier(response.data.data);
      console.log(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const updateCashierStatus = async (id, newStatus) => {
    try {
      const res = await axios.patch(`http://localhost:8080/user/${id}`, {
        status: newStatus,
      });
      setCashierStatus(res?.data?.data);
    } catch (err) {
      toast({
        title: err?.response?.data,
        status: "error",
        position: "top",
        duration: 2000,
        isClosable: true,
      });
    }
    window.location.reload();
  };

  const handleDeleteCashier = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8080/user/${id}`);

      toast({
        position: "top",
        title: "Delete Cashier",
        description: "Success...",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (err) {
      toast({
        position: "top",
        title: "Delete Cashier",
        description: "Error...",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
    window.location.reload();
  };

  const handleModalClose = () => {
    onClose();
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
              <Th fontSize={"sm"} color="#ffffff">
                Profile Picture
              </Th>
              <Th fontSize={"sm"} color="#ffffff">
                Full Name
              </Th>
              <Th fontSize={"sm"} color="#ffffff">
                Email
              </Th>
              <Th fontSize={"sm"} color="#ffffff">
                Status
              </Th>
              <Th fontSize={"sm"} color="#ffffff">
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
            {cashier.map((item, index) => (
              <Tr key={index}>
                <Td>
                  {item?.avatar !== null ? (
                    <Image
                      width="80px"
                      src={`${process.env.REACT_APP_IMAGE_URL}/cashier/${item?.avatar}`}
                      alt="product pict"
                    />
                  ) : (
                    "The cashier has not uploaded an avatar"
                  )}
                </Td>
                <Td fontSize={"md"}>{item.fullname}</Td>
                <Td fontSize={"md"}>{item.email}</Td>
                <Td textAlign="center">
                  <Switch
                    colorScheme="green"
                    isChecked={item.status === true ? true : false}
                    onChange={() =>
                      updateCashierStatus(
                        item.id,
                        item.status === true ? false : true
                      )
                    }
                  />
                </Td>
                <Td textAlign="center">
                  <Box display="flex" justifyContent="center" gap="10px">
                    <Button
                      size="sm"
                      w="50px"
                      bgColor="#1A72DD"
                      color="#ffffff"
                      onClick={() => {
                        setCashierById(item);
                        onOpen();
                      }}
                    >
                      Edit
                    </Button>{" "}
                    <Button
                      size="sm"
                      w="50px"
                      variant="outline"
                      color="#1A72DD"
                      border="1px solid #1A72DD"
                      onClick={() => handleDeleteCashier(item.id)}
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
      {isOpen && (
        <ModalEditCashier
          isOpen={isOpen}
          onClose={handleModalClose}
          cashier={cashier}
          setCashier={setCashier}
          cashierById={cashierById}
        />
      )}
    </>
  );
};

export default BodyDashboardAdmin;
