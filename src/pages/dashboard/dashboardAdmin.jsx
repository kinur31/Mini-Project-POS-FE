import {
  VStack,
  Image,
  Table,
  Switch,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
} from "@chakra-ui/react";
// import { IoIosArrowBack } from "react-icons/io";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { useFormik } from "formik";
// import { useDispatch } from "react-redux";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const DashboardAdmin = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // const formik = useFormik({
  //   initialValues: {
  //     username: "",
  //     password: "",
  //   },
  //   onSubmit: async (values) => {
  //     dispatch(login(values.username, values.password));
  //     toast.success("Logged in");
  //     // navigate("/");
  //   },
  // });

  // const handleChange = () => {
  //   navigate("/");
  // };

  return (
    <>
      <VStack margin={"5%"}>
        <TableContainer width={"full"}>
          <Table variant="striped" colorScheme="teal">
            <Thead>
              <Tr>
                <Th> Profile Picture </Th>
                <Th> Fullname </Th>
                <Th> Email </Th>
                <Th> Password </Th>
                <Th> Status </Th>
                <Th> Action </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  {" "}
                  <Image />{" "}
                </Td>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
                <Td>
                  <Switch size="md" />
                </Td>
                <Td>
                  <Button></Button>
                  <Button></Button>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  {" "}
                  <Image />{" "}
                </Td>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
                <Td>
                  <Switch size="md" />
                </Td>
                <Td>
                  <Button></Button>
                  <Button></Button>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  {" "}
                  <Image />{" "}
                </Td>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
                <Td>
                  <Switch size="md" />
                </Td>
                <Td>
                  <Button></Button>
                  <Button></Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </VStack>
    </>
  );
};

export default DashboardAdmin;
