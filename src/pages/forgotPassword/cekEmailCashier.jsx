import { Box, VStack, Heading, Button, Text } from "@chakra-ui/react";
import { AiOutlineDingtalk } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const CekEmail2 = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/login-cashier");
  };

  return (
    <>
      <VStack margin={"5%"}>
        <Box className="title-tab" width={"40vw"} mt={"13%"}>
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
          <Heading textAlign={"center"} fontSize={"33px"}>
            Silahkan cek email anda
          </Heading>
          <Text textAlign={"center"} fontSize={"18px"} width={"70vw"} mt={"5%"}>
            Tautan untuk membuat kata sandi baru telah terkirim
          </Text>
        </Box>
        <Box mt={"1.5vh"} width={"full"}></Box>
        <Box width={"full"} mt={"1vh"}>
          <Button
            type="submit"
            bg="#1A72DD"
            color={"white"}
            width={"100%"}
            borderRadius={"12px"}
            height={"57px"}
            onClick={handleNavigate}
          >
            Kembali ke Login
          </Button>
        </Box>
      </VStack>
    </>
  );
};

export default CekEmail2;
