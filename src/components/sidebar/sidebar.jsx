import {
  Box,
  Text,
  Image,
  Stack,
  HStack,
  VStack,
  Button,
  Flex,
} from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  IconBox,
  IconLayoutDashboard,
  IconUser,
  IconBrandDatabricks,
  IconChevronDown,
  IconChevronUp,
  IconChartBar,
} from "@tabler/icons-react";
import { IconChevronRight, IconChevronLeft } from "@tabler/icons-react";
// import Logo from "../../../public/images/logo.png";
import { FiMenu, FiX } from "react-icons/fi";


const Sidebar = () => {
  const [activeUser, setActiveUser] = useState("");
  const [activeMenu, setActiveMenu] = useState("dash");
  const [showProductDropdown, setShowProductDropdown] = useState(false);
  const [activeSubProduct, setActiveSubProduct] = useState("product-list");
  const [showReportDropdown, setShowReportDropdown] = useState(false);
  const [activeSubReport, setActiveSubReport] = useState("analytics");
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };


  const handleUserClick = (user) => {
    setActiveUser(user);
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    if (showProductDropdown === true) {
      setShowProductDropdown(false);
      setActiveSubProduct("product-list");
    } else if (showReportDropdown === true) {
      setShowReportDropdown(false);
      setActiveSubReport("analytics");
    } else if (activeUser === "profile") {
      setActiveUser("");
    }
  };

  const handleProductClick = () => {
    setShowProductDropdown(!showProductDropdown);
  };

  const handleSubProductClick = (menu) => {
    setActiveSubProduct(menu);
  };

  const handleReportClick = () => {
    setShowReportDropdown(!showReportDropdown);
  };

  const handleSubReportClick = (menu) => {
    setActiveSubReport(menu);
  };
  return (
   <Box
    top={0}
    borderRightWidth="1px"
    position="sticky"
    h="100vh"
    display="flex"
    flexDirection="column"
    justifyContent="space-between"
    paddingBottom="32px"
    boxShadow="0px .3px 2px .1px #808080"
  >
    <Box display="flex" flexDirection="column" gap="45px">
      <Link to={""}>
        <HStack spacing="0" padding="32px 0 0 24px">
          <Flex justifyContent="center" gap="10px">
          <Image borderRadius="30px" w="50px" src="./images/logo.png" />
          <Text
            fontFamily="Paytone One"
            fontSize="32px"
            color="#1A72DD"
            fontWeight="400"
          >
            SRR
          </Text>
          </Flex>
        </HStack>
      </Link>
      <Box
        display={isOpen ? "block" : "none"} // Show/hide sidebar content based on isOpen state
      >
      </Box>
      {/* menu list */}
      <Box display="flex" flexDirection="column" gap="10px">
        {/* dashboard */}
        <Link to={"/dashboard"}>
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
        <Link to={"/menu"}>
         
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
        <Link to={"/profile"}>
         
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
            <Box
              w="30px"
              h="30px"
              bgColor="#1A72DD"
              borderRadius="50%"
            ></Box>
            <Text
              fontFamily="Nunito"
              fontSize="16px"
              fontWeight="600"
              isTruncated
             
            >
              Fransisca Angelica
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
  </Box>
  );
};

export default Sidebar;
