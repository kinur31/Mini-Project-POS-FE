import { Box, Text, Image, HStack, Flex, Avatar, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDisclosure } from "@chakra-ui/hooks";
import { useDispatch, useSelector } from "react-redux";
import { logoutSuccess } from "../../redux/reducers/authReducer";
import LogoutModal from "../../pages/dashboard/cashier/logoutModal";
import { IconChevronRight, IconChevronLeft, IconLayoutDashboard } from "@tabler/icons-react";
import Profile from "../profile/profile";
import {logo} from "../../assets/images/logo.png";


const CashierSidebar = () => {
  const { user, isLogin } = useSelector((state) => state.AuthReducer);
  const [activeUser, setActiveUser] = useState("");
  const [activeMenu, setActiveMenu] = useState("dash");

  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleUserClick = (user) => {
    setActiveUser(user);
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  const handleLogout = () => {
    onClose(); // Close the modal
    dispatch(logoutSuccess());
  };

  return (
    <Box
      top={0}
      position="sticky"
      h="100vh"
      w="350px"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      paddingBottom="32px"
    >
      
      <Box display="flex" flexDirection="column" gap="45px">
          <Link to={""}>
            <HStack spacing="0" padding="32px 0 0 24px">
              <Image src="../../../logo.png" />
              <Text
                fontFamily="Paytone One"
                fontSize="32px"
                color="#1A72DD"
                fontWeight="400"
              >
                SSR
              </Text>
            </HStack>
          </Link>
          {/* menu list */}
          <Box display="flex" flexDirection="column" gap="10px">
            {/* dashboard */}
            <Link to={"/cashier/dashboard"}>
              <HStack
                style={{
                  color: activeMenu === "dash" ? "#1A72DD" : "#707070",
                  backgroundColor:
                    activeMenu === "dash" ? "#FFF7F3" : "transparent",
                }}
                onClick={() => handleMenuClick("dash")}
                w="full"
                h="56px"
                gap="18px"
              >
                <Box
                  w="5px"
                  h="56px"
                  bgColor="#1A72DD"
                  borderTopRightRadius="5px"
                  borderBottomRightRadius="5px"
                  style={{
                    visibility: activeMenu === "dash" ? "visible" : "hidden",
                  }}
                />
                <IconLayoutDashboard stroke={1.5} size="24px" />
                <Text fontFamily="Nunito" fontSize="18px" fontWeight="600">
                  Dashboard
                </Text>
              </HStack>
            </Link>
            {/* user management */}
            <Link to={"/cashier/menu"}>
              <HStack
                style={{
                  color: activeMenu === "menu" ? "#1A72DD" : "#707070",
                  backgroundColor:
                    activeMenu === "menu" ? "#FFF7F3" : "transparent",
                }}
                onClick={() => handleMenuClick("menu")}
                w="full"
                h="56px"
                gap="18px"
              >
                <Box
                  w="5px"
                  h="56px"
                  bgColor="#1A72DD"
                  borderTopRightRadius="5px"
                  borderBottomRightRadius="5px"
                  style={{
                    visibility: activeMenu === "menu" ? "visible" : "hidden",
                  }}
                />
                <IconLayoutDashboard stroke={1.5} size="24px" />
                <Text fontFamily="Nunito" fontSize="18px" fontWeight="600">
                  Menu
                </Text>
              </HStack>
            </Link>
            <Link to={"/cashier/profile"}>
              <HStack
                style={{
                  color: activeMenu === "profile" ? "#1A72DD" : "#707070",
                  backgroundColor:
                    activeMenu === "profile" ? "#FFF7F3" : "transparent",
                }}
                onClick={() => handleMenuClick("profile")}
                w="full"
                h="56px"
                gap="18px"
              >
                <Box
                  w="5px"
                  h="56px"
                  bgColor="#1A72DD"
                  borderTopRightRadius="5px"
                  borderBottomRightRadius="5px"
                  style={{
                    visibility: activeMenu === "profile" ? "visible" : "hidden",
                  }}
                />
                <IconLayoutDashboard stroke={1.5} size="24px" />
                <Text fontFamily="Nunito" fontSize="18px" fontWeight="600">
                  Profile
                </Text>
              </HStack>
            </Link>
          </Box>
        </Box>
      <Box>
        <Link to={""}>
          <HStack
            style={{
              color: activeUser === "profile" ? "#1A72DD" : "#707070",
              backgroundColor:
                activeUser === "profile" ? "#FFF7F3" : "transparent",
            }}
            onClick={() => handleUserClick("profile")}
            w="full"
            h="56px"
            gap="18px"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex" gap="18px" alignItems="center">
              <Box
                w="5px"
                h="56px"
                bgColor="#1A72DD"
                borderTopRightRadius="5px"
                borderBottomRightRadius="5px"
                style={{
                  visibility: activeUser === "profile" ? "visible" : "hidden",
                }}
              />
                  <Profile />
              <Text
                fontFamily="Nunito"
                fontSize="18px"
                fontWeight="600"
                isTruncated
              >
                {isLogin ? user?.fullname : "Not Found"}
              </Text>
            </Box>
            <Box padding="0 10px 0 0">
              {activeUser === "profile" ? (
                <IconChevronLeft size="18px" />
              ) : (
                <IconChevronRight size="18px" />
              )}
            </Box>
          </HStack>
        </Link>
      </Box>
      {/* Logout Modal */}
      <LogoutModal isOpen={isOpen} onClose={onClose} handleLogout={handleLogout} />
    </Box>
  );
};

export default CashierSidebar;
