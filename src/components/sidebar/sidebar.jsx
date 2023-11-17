import { Box, Text, Image, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  IconLayoutDashboard,
  IconUser,
  IconBrandDatabricks,
  IconChevronDown,
  IconChevronUp,
  IconChartBar,
} from "@tabler/icons-react";
import { IconChevronRight, IconChevronLeft } from "@tabler/icons-react";

const SideBar = () => {
  const [activeUser, setActiveUser] = useState("");
  const [activeMenu, setActiveMenu] = useState("dash");
  const [showProductDropdown, setShowProductDropdown] = useState(false);
  const [activeSubProduct, setActiveSubProduct] = useState("product-list");
  const [showReportDropdown, setShowReportDropdown] = useState(false);
  const [activeSubReport, setActiveSubReport] = useState("analytics");

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
      position="sticky"
      h="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      paddingBottom="32px"
    >
      <Box display="flex" flexDirection="column" gap="45px">
        <Link to={""}>
          <HStack spacing="0" padding="32px 0 0 24px">
            <Image src="../../../public/images/logo.png" />
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
          <Link to={""}>
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
          <Link to={""}>
            <HStack
              style={{
                color: activeMenu === "user" ? "#1A72DD" : "#707070",
                backgroundColor:
                  activeMenu === "user" ? "#FFF7F3" : "transparent",
              }}
              onClick={() => handleMenuClick("user")}
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
                  visibility: activeMenu === "user" ? "visible" : "hidden",
                }}
              />
              <IconLayoutDashboard stroke={1.5} size="24px" />
              <Text fontFamily="Nunito" fontSize="18px" fontWeight="600">
                User Management
              </Text>
            </HStack>
          </Link>
          {/* product */}
          <HStack
            style={{
              color: activeMenu === "product" ? "#1A72DD" : "#707070",
              backgroundColor:
                activeMenu === "product" ? "#FFF7F3" : "transparent",
            }}
            onClick={() => {
              handleMenuClick("product");
              handleProductClick();
            }}
            w="full"
            h="56px"
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
                  visibility: activeMenu === "product" ? "visible" : "hidden",
                }}
              />
              <IconBrandDatabricks stroke={1.3} size="24px" />
              <Text fontFamily="Nunito" fontSize="18px" fontWeight="600">
                Product
              </Text>
            </Box>
            <Box padding="0 10px 0 0">
              {showProductDropdown ? (
                <IconChevronUp size="18px" />
              ) : (
                <IconChevronDown size="18px" />
              )}
            </Box>
          </HStack>
          {showProductDropdown && (
            <Box
              ml="20px"
              mt="5px"
              borderRadius="5px"
              padding="10px"
              color="#707070"
              display="flex"
              flexDirection="column"
              gap="14px"
            >
              <Link to={""}>
                <Box
                  style={{
                    borderBottom:
                      activeSubProduct === "product-list"
                        ? "2px solid #1A72DD"
                        : "2px solid #FFFFFF",
                    color:
                      activeSubProduct === "product-list"
                        ? "#1A72DD"
                        : "#707070",
                  }}
                  onClick={() => handleSubProductClick("product-list")}
                >
                  <Text
                    fontFamily="Nunito"
                    fontSize="16px"
                    fontWeight="500"
                    _hover={{ color: "transparant" }}
                  >
                    Product List
                  </Text>
                </Box>
              </Link>
              <Link to={"/manage-product"}>
                <Box
                  style={{
                    borderBottom:
                      activeSubProduct === "manage-product"
                        ? "2px solid #1A72DD"
                        : "2px solid #FFFFFF",
                    color:
                      activeSubProduct === "manage-product"
                        ? "#1A72DD"
                        : "#707070",
                  }}
                  onClick={() => handleSubProductClick("manage-product")}
                >
                  <Text
                    fontFamily="Nunito"
                    fontSize="16px"
                    fontWeight="500"
                    _hover={{ color: "transparant" }}
                  >
                    Manage Product
                  </Text>
                </Box>
              </Link>
              <Link to={"/manage-product"}>
                <Box
                  style={{
                    borderBottom:
                      activeSubProduct === "manage-category"
                        ? "2px solid #1A72DD"
                        : "2px solid #FFFFFF",
                    color:
                      activeSubProduct === "manage-category"
                        ? "#1A72DD"
                        : "#707070",
                  }}
                  onClick={() => handleSubProductClick("manage-category")}
                >
                  <Text
                    fontFamily="Nunito"
                    fontSize="16px"
                    fontWeight="500"
                    _hover={{ color: "transparant" }}
                  >
                    Manage Category
                  </Text>
                </Box>
              </Link>
            </Box>
          )}
          {/* report */}
          <HStack
            style={{
              color: activeMenu === "report" ? "#1A72DD" : "#707070",
              backgroundColor:
                activeMenu === "report" ? "#FFF7F3" : "transparent",
            }}
            onClick={() => {
              handleMenuClick("report");
              handleReportClick();
            }}
            w="full"
            h="56px"
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
                  visibility: activeMenu === "report" ? "visible" : "hidden",
                }}
              />
              <IconChartBar stroke={1.5} size="24px" />
              <Text fontFamily="Nunito" fontSize="18px" fontWeight="600">
                Report
              </Text>
            </Box>
            <Box padding="0 10px 0 0">
              {showReportDropdown ? (
                <IconChevronUp size="18px" />
              ) : (
                <IconChevronDown size="18px" />
              )}
            </Box>
          </HStack>
          {showReportDropdown && (
            <Box
              ml="20px"
              mt="5px"
              borderRadius="5px"
              padding="10px"
              color="#707070"
              display="flex"
              flexDirection="column"
              gap="14px"
            >
              <Link to={""}>
                <Box
                  style={{
                    borderBottom:
                      activeSubReport === "analytics"
                        ? "2px solid #1A72DD"
                        : "2px solid #FFFFFF",
                    color:
                      activeSubReport === "analytics" ? "#1A72DD" : "#707070",
                  }}
                  onClick={() => handleSubReportClick("analytics")}
                >
                  <Text
                    fontFamily="Nunito"
                    fontSize="16px"
                    fontWeight="500"
                    _hover={{ color: "transparant" }}
                  >
                    Analytics
                  </Text>
                </Box>
              </Link>
              <Link to={""}>
                <Box
                  style={{
                    borderBottom:
                      activeSubReport === "transactions"
                        ? "2px solid #1A72DD"
                        : "2px solid #FFFFFF",
                    color:
                      activeSubReport === "transactions"
                        ? "#1A72DD"
                        : "#707070",
                  }}
                  onClick={() => handleSubReportClick("transactions")}
                >
                  <Text
                    fontFamily="Nunito"
                    fontSize="16px"
                    fontWeight="500"
                    _hover={{ color: "#F707070" }}
                  >
                    Transactions
                  </Text>
                </Box>
              </Link>
              <Link to={""}>
                <Box
                  style={{
                    borderBottom:
                      activeSubReport === "sales-report"
                        ? "2px solid #1A72DD"
                        : "2px solid #FFFFFF",
                    color:
                      activeSubReport === "sales-report"
                        ? "#1A72DD"
                        : "#707070",
                  }}
                  onClick={() => handleSubReportClick("sales-report")}
                >
                  <Text
                    fontFamily="Nunito"
                    fontSize="16px"
                    fontWeight="500"
                    _hover={{ color: "transparant" }}
                  >
                    Sales Report
                  </Text>
                </Box>
              </Link>
            </Box>
          )}
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
              <Box w="30px" h="30px" bgColor="#1A72DD" borderRadius="50%"></Box>
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

export default SideBar;
