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
import { logoutSuccess } from "../../redux/reducers/authReducer";
import { BiLogOut } from "react-icons/bi";
import { IconChevronRight, IconChevronLeft, IconLayoutDashboard } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, isLogin } = useSelector((state) => state.AuthReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = React.useState(false);

  const updateState = () => {
    setShow(!show);
  };

  const profile = localStorage.getItem("token");

  return (
    <Box>
      <Box>
        <Avatar size="md" src= {isLogin ? (
          <Avatar
            size="md"
            rounded="full"
            src={`${process.env.REACT_APP_IMAGE_URL}/avatar/${user?.avatar}`}
          />
        ) : (
          <IconChevronRight size="18px" />
        )} onClick={updateState} />
        {show && (
          <Box
            opacity={"1"}
            position={"fixed"}
            bottom={"2em"}
            left={"-5"}
            p={"1em 5em"}
          >
            <Box
              w={"8em"}
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
                <VStack>
                  <Button
                    color="white"
                    variant={"link"}
                    alignItems={"center"}
                    onClick={async () => {
                      await dispatch(logoutSuccess());
                      navigate("/login-admin");
                    }}
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
