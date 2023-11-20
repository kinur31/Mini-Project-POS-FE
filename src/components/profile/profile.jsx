import React from "react";
import {
  Box,
  Divider,
  IconButton,
  Text,
  VStack,
  Button,
  Avatar,
  Link,
} from "@chakra-ui/react";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { logoutSuccess } from "../../redux/reducer/authReducer";
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, isLogin } = useSelector((state) => state.AuthReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = React.useState(false);

  const updateState = () => {
    setShow(!show);
  };

  const profile = localStorage.getItem("profile");

  return (
    <Box>
      <Box position="relative">
        <Avatar size="md" src={profile} onClick={updateState} />
        {show && (
          <Box
            opacity={"1"}
            position={"fixed"}
            bottom={"7em"}
            left={"0"}
            p={"1em 5em"}
            zIndex={"10"}
          >
            <Box
              w={"20em"}
              p={"1em 1em"}
              bgColor={"#1A72DD"}
              borderRadius={"1em"}
              color={"black"}
            >
              <VStack>
                <IconButton
                  size={"3em"}
                  bgColor={"transparent"}
                  _hover={"none"}
                  icon={<AiOutlineClose size={"1em"} color={"black"} />}
                  _active={"none"}
                  onClick={updateState}
                  alignSelf={"flex-end"}
                />
                <VStack spacing={"0"}>
                  <Text textColor={"white"} fontWeight="bold" fontSize={"18px"}>
                    Halo saya {isLogin ? user?.fullname : "Not logged in"} 👋
                  </Text>
                  <Text textColor={"white"} fontWeight="bold" fontSize={"1em"}>
                    {isLogin ? user?.email : ""}
                  </Text>
                </VStack>
                <Divider borderColor={"#192655"} borderWidth={"2px"} />
                <VStack>
                  <Link to={"/dashboard"}>
                    <Text textColor={"whatsapp.400"} variant={"link"}>
                      Dashboard
                    </Text>
                  </Link>
                  <Button
                    color="red.400"
                    variant={"link"}
                    alignItems={"center"}
                    onClick={() => dispatch(logoutSuccess())}
                  >
                    <Text fontWeight="bold" mr={2}>
                      Log Out
                    </Text>
                    <BiLogOut ml={2} />
                  </Button>
                </VStack>
              </VStack>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Profile;
