import { Box, Divider, Flex, Heading, Stack, Text, VStack } from "@chakra-ui/layout"
import Sidebar from "../../../components/sidebar/sidebar";
import { Avatar, AvatarBadge } from "@chakra-ui/avatar";
import { Button, IconButton } from "@chakra-ui/button";
import { BiSolidEdit } from "react-icons/bi";
import { Input } from "@chakra-ui/input";
import { useRef, useState } from 'react';        
import CashierSidebar from "../../../components/sidebar/CashierSidebar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

const CashierProfile = ({handleFile}) => {
    const hiddenFileInput = useRef(null); 

    const handleClick = event => {
      hiddenFileInput.current.click();   
    };
  
    const handleChange = event => {
      const fileUploaded = event.target.files[0];
      handleFile(fileUploaded);                   // ADDED
    };
    const { user, isLogin } = useSelector((state) => state.AuthReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
    return (
        <Flex>
          
      <CashierSidebar/>
        <Box display="flex" justifyContent="space-between" m={0} w="full" p={4}>
            <Stack w="20em" alignItems="center">
                <Box>
            <Avatar size="2xl" rounded="full" src="./images/carousel/banner1.jpg">
                
            <Flex gap={0} position="absolute" bottom={2} right={0}>
            <IconButton
            colorScheme="facebook"
            size="md"
            icon={<BiSolidEdit />  }
            rounded="full"
        // className="button-upload"
        onClick={handleClick}
      />
      <Input 
        type="file"
        onChange={handleChange}
        ref={hiddenFileInput}
        display="none"
        // style={{display:'none'}}
      />
            </Flex>

            </Avatar>

                </Box>
                <Text fontWeight="bold" fontSize={"18px"}>
                {isLogin ? user?.fullname : "Guest"}
                {isLogin ? user?.id : "Guest"}
                {isLogin ? user?.email : "Guest"}
                  </Text>
                <Text>Cashier</Text>
            </Stack>
            <Stack w="full">
            <Heading size="md">Personal Information</Heading>

            </Stack>

        </Box>
        </Flex>
    )
}

export default CashierProfile;