import {
  Box,
  HStack,
  VStack,
  Heading,
  IconButton,
  FormLabel,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from "../../redux/reducer/authReducer";

const LoginCashier = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      dispatch(login(values.username, values.password));
      // navigate("/");
    },
  });

  const handleChange = () => {
    navigate("/");
  };

  return (
    <>
      <VStack margin={"5%"}>
        <Box className="title-tab" width={"full"}>
          <HStack spacing={"90px"}>
            <Box>
              <IconButton
                bg={"#1A72DD"}
                aria-label="Search database"
                icon={<IoIosArrowBack />}
                color={"white"}
                onClick={handleChange}
              />
            </Box>
            <Box>
              <Heading color={"#1A72DD"} fontSize={"24px"}>
                Log in as Cashier
              </Heading>
            </Box>
          </HStack>
        </Box>
        <Box marginTop={"10%"} width={"full"}>
          <Box>
            <FormLabel fontWeight={"bold"}> Username </FormLabel>
            <Input
              type="text"
              variant="filled"
              borderRadius={"15px"}
              height={"65px"}
              size="lg"
              placeholder="Username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="username"
            />
          </Box>
          <Box mt={"3vh"}>
            <FormLabel fontWeight={"bold"}> Password </FormLabel>
            <Input
              type="password"
              variant="filled"
              borderRadius={"15px"}
              height={"65px"}
              size="lg"
              placeholder="At least 8 characters"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="password"
            />
          </Box>
        </Box>
        <Box width={"full"} mt={"10vh"}>
          <Button
            type="submit"
            bg="#1A72DD"
            color={"white"}
            width={"100%"}
            borderRadius={"15px"}
            height={"63px"}
            onClick={formik.handleSubmit}
          >
            Login
          </Button>
        </Box>
        <Link to="/forgot-password">
          <Text color={"#1A72DD"}>Forgot Password?</Text>
        </Link>
      </VStack>
      <ToastContainer />
    </>
  );
};

export default LoginCashier;
