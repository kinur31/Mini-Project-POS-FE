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
// import { useNavigate } from "react-router-dom";

const LoginCashier = () => {
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
            <FormLabel> Email or Phone Number </FormLabel>
            <Input
              type="email"
              variant="filled"
              borderRadius={"15px"}
              height={"65px"}
              size="lg"
              placeholder="Email or Phone Number"
              value={""}
            />
          </Box>
          <Box mt={"3vh"}>
            <FormLabel> Password </FormLabel>
            <Input
              type="password"
              variant="filled"
              borderRadius={"15px"}
              height={"65px"}
              size="lg"
              placeholder="At least 8 characters"
              value={""}
            />
          </Box>
        </Box>
        <Box width={"full"} mt={"10vh"}>
          <Button
            bg="#1A72DD"
            color={"white"}
            width={"100%"}
            borderRadius={"15px"}
            height={"63px"}
          >
            {" "}
            Login{" "}
          </Button>
        </Box>
        <Link>
          {" "}
          <Text color={"#1A72DD"}>Forgot Password?</Text>
        </Link>
      </VStack>
    </>
  );
};

export default LoginCashier;
