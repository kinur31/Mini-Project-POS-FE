import {
  Box,
  VStack,
  Heading,
  Input,
  Button,
  Text,
  Link,
} from "@chakra-ui/react";
import { AiOutlineDingtalk } from "react-icons/ai";
// import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from "../../redux/reducer/authReducer";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      dispatch(login(values.username, values.password));
      toast.success("Logged in");
      // navigate("/");
    },
  });

  // const handleChange = () => {
  //   navigate("/");
  // };

  return (
    <>
      <VStack margin={"5%"}>
        <Box className="title-tab" width={"40vw"} mt={"10%"}>
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
        <Box mt={"5%"}>
          <Heading textAlign={"center"} fontSize={"35px"}>
            Lupa Kata Sandi
          </Heading>
          <Text textAlign={"center"} fontSize={"18px"} width={"70vw"} mt={"5%"}>
            Masukan Email anda untuk membuat kata sandi baru
          </Text>
        </Box>
        <Box mt={"1.5vh"} width={"full"}>
          <Box>
            <Input
              type="email"
              variant="filled"
              borderRadius={"15px"}
              height={"65px"}
              size="lg"
              placeholder="Email Anda"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="email"
            />
          </Box>
        </Box>
        <Box width={"full"} mt={"1vh"}>
          <Button
            type="submit"
            bg="#1A72DD"
            color={"white"}
            width={"100%"}
            borderRadius={"15px"}
            height={"63px"}
            onClick={formik.handleSubmit}
          >
            Kirim
          </Button>
        </Box>
        <Text>
          {" "}
          Kembali ke{" "}
          <Link href="/login-admin" color="#1A72DD">
            Login
          </Link>{" "}
        </Text>
      </VStack>
      <ToastContainer />
    </>
  );
};

export default ForgotPassword;
