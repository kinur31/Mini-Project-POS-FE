import { Box, VStack, Heading, Text, Button, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const navigate = useNavigate();

  const handleChange = () => {
    navigate("/login-admin");
  };
  return (
    <>
      <VStack margin={"5%"}>
        <Box marginTop={"15%"}>
          <VStack>
            <Heading> Welcome to OurPOS!</Heading>
            <Text>
              {" "}
              Select login as the admin or cashier first to continue.{" "}
            </Text>
          </VStack>
        </Box>
        <Box marginTop={"10%"}>
          <Image src="./Image1.png" />
        </Box>
        <Box width={"350px"} marginTop={"10%"}>
          <Button
            bg="#1A72DD"
            color={"white"}
            width={"100%"}
            borderRadius={"15px"}
            height={"63px"}
            onClick={handleChange}
          >
            {" "}
            Log in as Admin{" "}
          </Button>
        </Box>
        <Text fontSize={"14px"}> Or </Text>
        <Box width={"350px"}>
          <Button
            bg="#1A72DD"
            color={"white"}
            width={"100%"}
            borderRadius={"15px"}
            height={"63px"}
          >
            {" "}
            Log in as Cashier{" "}
          </Button>
        </Box>
      </VStack>
    </>
  );
};

export default LoginScreen;
