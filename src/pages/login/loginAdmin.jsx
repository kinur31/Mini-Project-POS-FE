import React, { useState } from "react";
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
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginAdmin } from "../../redux/reducer/authReducer";

const LoginAdmin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const toastNotification = useToast();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        await dispatch(loginAdmin(values.username, values.password));
        navigate("/admin/user-management");

        // Display success toast
        toastNotification({
          title: "Login Successful",
          description: "Welcome!",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } catch (error) {
        // Display error toast
        toastNotification({
          title: "Login Failed",
          description: "Invalid username or password",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    },
  });

  return (
    <>
      <VStack margin={"5%"}>
        <Box className="title-tab" width={"full"}>
          <HStack spacing={"90px"}>
            <Box>
              <Link to={"/"}>
                <IconButton
                  bg={"#1A72DD"}
                  aria-label="Search database"
                  icon={<IoIosArrowBack />}
                  color={"white"}
                />
              </Link>
            </Box>
            <Box>
              <Heading color={"#1A72DD"} fontSize={"24px"}>
                Log in as Admin
              </Heading>
            </Box>
          </HStack>
        </Box>
        <Box mt={"10%"} width={"full"}>
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
                  {showPassword ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
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
        <Link to="/forgot-password1">
          <Text color={"#1A72DD"}>Forgot Password?</Text>
        </Link>
      </VStack>
      <ToastContainer />
    </>
  );
};

export default LoginAdmin;
