import { React, useState } from "react";
import {
  Box,
  VStack,
  Heading,
  Input,
  Button,
  Text,
  Link,
  InputRightElement,
  InputGroup,
  FormControl,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { AiOutlineDingtalk } from "react-icons/ai";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { resetPassword } from "../../redux/reducer/authReducer";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    password: Yup.string()
      .required("Please Enter your password")
      .test(
        "regex",
        "Password must be min 8 characters, and have 1 Special Character, 1 Uppercase, 1 Number and 1 Lowercase",
        (val) => {
          let regExp = new RegExp(
            "^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$"
          );
          console.log(regExp.test(val), regExp, val);
          return regExp.test(val);
        }
      ),
    confirmationPassword: Yup.string().test(
      "passwords-match",
      "Passwords must match",
      function (value) {
        return this.parent.password === value;
      }
    ),
  });

  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      dispatch(resetPassword(values.password));
      navigate("/cek-email");
    },
  });

  return (
    <>
      <VStack margin={"5%"}>
        <Box className="title-tab" width={"40vw"} mt={"7%"}>
          <VStack>
            <Box
              bg={"#1A72DD"}
              height={"90px"}
              width={"90px"}
              borderRadius={"20px"}
            >
              <AiOutlineDingtalk size={"base"} />
            </Box>
            <Box mt={"5%"}>
              <Heading color={"#1A72DD"} fontSize={"32px"} textAlign={"center"}>
                OurPOS
              </Heading>
              <Text>Easy way to transaction</Text>
            </Box>
          </VStack>
        </Box>
        <Box mt={"4%"}>
          <Heading textAlign={"center"} fontSize={"35px"}>
            Kata sandi baru
          </Heading>
          <Text textAlign={"center"} fontSize={"18px"} width={"70vw"} mt={"5%"}>
            Silahkan masukan kata sandi baru anda
          </Text>
        </Box>
        <Box mt={"1.5vh"} width={"full"}>
          <Box>
            <FormControl
              isInvalid={formik.touched.password && formik.errors.password}
              nb={5}
              id="password"
              name="password"
            >
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  variant="filled"
                  borderRadius={"12px"}
                  height={"57px"}
                  size="lg"
                  placeholder="Kata sandi baru"
                  onChange={formik.handleChange}
                  value={formik.values.password}
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
            </FormControl>
          </Box>
        </Box>
        <Box mt={"1.5vh"} width={"full"}>
          <Box>
            <FormControl
              isInvalid={
                formik.touched.confirmationPassword &&
                formik.errors.confirmationPassword
              }
              nb={5}
              name="confirmationPassword"
              id="confirmationPassword"
            >
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  onChange={formik.handleChange}
                  variant="filled"
                  borderRadius={"12px"}
                  height={"57px"}
                  size="lg"
                  placeholder="Konfirmasi kata sandi baru"
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
            </FormControl>
          </Box>
        </Box>
        <Box width={"full"} mt={"1vh"}>
          <Button
            type="submit"
            bg="#1A72DD"
            color={"white"}
            width={"100%"}
            borderRadius={"12px"}
            height={"57px"}
            onClick={formik.handleSubmit}
          >
            Ganti
          </Button>
        </Box>
        <Text>
          {" "}
          Kembali ke{" "}
          <Link href="/login-cashier" color="#1A72DD">
            Login
          </Link>{" "}
        </Text>
      </VStack>
    </>
  );
};

export default ResetPassword;
