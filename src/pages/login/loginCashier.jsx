import { React, useState } from "react";
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
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from "../../redux/reducer/authReducer";

const LoginCashier = () => {
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      dispatch(login(values.username, values.password));
      toast.success("Logged in");
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
              onBlur={formik.handleBlur}
              name="username"
              onChange={formik.handleChange}
            />
          </Box>
          <Box mt={"3vh"}>
            <FormLabel fontWeight={"bold"}> Password </FormLabel>
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                variant="filled"
                borderRadius={"15px"}
                height={"65px"}
                size="lg"
                placeholder="At least 8 characters"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                required
              />
              <InputRightElement h={"full"}>
                <Button
                  variant={"ghost"}
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }
                >
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
            {/* <Input
              type={showPassword ? "text" : "password"}
              variant="filled"
              borderRadius={"15px"}
              height={"65px"}
              size="lg"
              placeholder="At least 8 characters"
              value={formik.values.password}
              onBlur={formik.handleBlur}
              name="password"
              onChange={formik.handleChange}
            /> */}
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
