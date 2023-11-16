import {
  Grid,
  GridItem,
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
  Spacer,
} from "@chakra-ui/react";
import HeadManageCashier from "./headManage1";
import Sidebar1 from "../../components/sidebar/sidebar";
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
      <Grid
        templateAreas={`"nav main"
                  "nav main"`}
      >
        <GridItem area={"nav"}>
          <Sidebar1 />
        </GridItem>
        <GridItem area={"main"}>
          <VStack padding={"3%"}>
            <HeadManageCashier width={"full"} />
            <TableContainer
              width={"full"}
              mt={"4%"}
              borderRadius={"10px"}
              fontWeight={"bold"}
            >
              <Table variant="striped" bgColor={"#FFF6F3"}>
                <Thead bgColor={"#1A72DD"}>
                  <Tr>
                    <Th color={"#ffffff"}> Profile Picture </Th>
                    <Th color={"#ffffff"}> Fullname </Th>
                    <Th color={"#ffffff"}> Email </Th>
                    <Th color={"#ffffff"}> Password </Th>
                    <Th color={"#ffffff"}> Status </Th>
                    <Th color={"#ffffff"}> Action </Th>
                  </Tr>
                </Thead>
                <Tbody
                  fontFamily={"Nunito"}
                  fontWeight={"400"}
                  fontSize={"18px"}
                >
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
                      <Button
                        mr={"5px"}
                        border={"1px"}
                        bg={"#1A72DD"}
                        color={"#ffffff"}
                      >
                        Edit
                      </Button>
                      <Button border={"1px"}>Delete</Button>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </VStack>
        </GridItem>
      </Grid>
    </>
  );
};

export default DashboardAdmin;
