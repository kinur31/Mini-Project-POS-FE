import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/avatar";
import { BiSolidEdit } from "react-icons/bi";
import { Input } from "@chakra-ui/input";
import { useEffect, useRef, useState } from "react";
import CashierSidebar from "../../../components/sidebar/CashierSidebar";
import { useDispatch, useSelector } from "react-redux";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { useFormik } from "formik";
import axios from "axios";
import { useToast } from "@chakra-ui/toast";
import { IconButton } from "@chakra-ui/button";
import AvatarModal from "../../../components/modal/modalAvatar";
import { useDisclosure } from "@chakra-ui/hooks";

const CashierProfile = (handleFile) => {
  const [userById, setUserById] = useState([]);

  const handleModalClose = () => {
    onClose();
    // getProductAll();
  };

  const { user, isLogin } = useSelector((state) => state.AuthReducer);
  const [image, setImage] = useState(user?.avatar);
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  useEffect(() => {}, [image]);

  return (
    <Flex>
      <CashierSidebar />
      <Box display="flex" justifyContent="space-between" m={0} w="full" p={4}>
        <Stack w="20em" alignItems="center">
          <Box>
            <Avatar
              size="2xl"
              rounded="full"
              src={`${process.env.REACT_APP_IMAGE_URL}/avatar/${user?.avatar}`}
            >
              <Flex gap={0} position="absolute" bottom={2} right={0}>
                <IconButton
                  colorScheme="facebook"
                  size="md"
                  icon={<BiSolidEdit />}
                  rounded="full"
                  onClick={() => {
                    setUserById(user?.id);
                    setImage(user?.avatar);
                    onOpen();
                  }}
                />
              </Flex>
            </Avatar>
          </Box>
          <Text fontWeight="bold" fontSize={"18px"}>
            {isLogin ? user?.fullname : "Guest"}
          </Text>
          <Text>Cashier</Text>
        </Stack>
        <Stack w="full">
          <Heading size="md">Personal Information</Heading>
          <Box display="flex" flexDirection="column" gap="20px">
            <FormControl>
              <FormLabel>Full name:</FormLabel>
              <Input
                type="text"
                disabled="true"
                _placeholder={{ color: "black" }}
                placeholder={isLogin ? user?.fullname : "Guest"}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Address:</FormLabel>
              <Input
                type="text"
                disabled="true"
                _placeholder={{ color: "black" }}
                placeholder={isLogin ? user?.address : "Guest"}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Username:</FormLabel>
              <Input
                type="text"
                disabled="true"
                _placeholder={{ color: "black" }}
                placeholder={isLogin ? user?.username : "Guest"}
              />
            </FormControl>
          </Box>
        </Stack>
      </Box>
      {isOpen && (
        <AvatarModal
          isOpen={isOpen}
          onClose={handleModalClose}
          user={user}
          userById={userById}
          setUserById={setUserById}
        />
      )}
    </Flex>
  );
};

export default CashierProfile;
