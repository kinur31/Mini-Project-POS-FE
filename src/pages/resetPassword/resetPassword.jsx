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
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { resetPassword } from "../../redux/reducer/authReducer";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      password: "",
    },
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
            <Input
              type="email"
              variant="filled"
              borderRadius={"12px"}
              height={"57px"}
              size="lg"
              placeholder="Kata sandi baru"
              onChange={formik.handleChange}
              value={formik.values.email}
              name="email"
            />
          </Box>
        </Box>
        <Box mt={"1.5vh"} width={"full"}>
          <Box>
            <Input
              type="email"
              variant="filled"
              borderRadius={"12px"}
              height={"57px"}
              size="lg"
              placeholder="Konfirmasi kata sandi baru"
              onChange={formik.handleChange}
              value={formik.values.email}
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
