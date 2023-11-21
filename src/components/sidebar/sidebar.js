// import { useState } from "react";
// import {
//   Box,
//   Button,
//   Flex,
//   Icon,
//   List,
//   ListItem,
//   Text,
//   useDisclosure,
// } from "@chakra-ui/react";
// // import { BiViewList, BiGraphUp, BiEnvelope, BiChat, BiCalendarEvent, BiBookmark, BiPeople } from "react-icons/bi";
// import { ImSpoonKnife } from "react-icons/im";
// import { VscGraph } from "react-icons/vsc";
// import { PiCoffeeFill, PiIceCreamFill } from "react-icons/pi";
// import { BiSolidReport,  BiLogOut } from "react-icons/bi";
// import { MdAccountBox, MdOutlineProductionQuantityLimits } from "react-icons/md";


// const Sidebar = () => {

// const [isOpen, setIsOpen] = useState(false);

//   const onToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleItemClick = () => {
//     // Logic untuk apa yang ingin dilakukan ketika item diklik
//     setIsOpen(false); // Untuk menutup sidebar setelah item diklik
//   };

   

//   return (
//     <Box>
//     <Flex>
//       {isOpen && (
//         <Box
//           position="fixed"
//           top="0"
//           left="0"
//           w="100%"
//           h="100%"
//           bg="rgba(0, 0, 0, 0.5)"
//           onClick={onToggle}
//         />
//       )}

//       <Box
//         as="nav"
//         pos="fixed"
//         top="0"
//         left={isOpen ? "0" : "-20rem"}
//         h="100vh"
//         w="20rem"
//         bg="gray.200"
//         transition="left 0.3s ease-in-out"
//         p="4"
//       >
//         <Flex  w="full"
//           h={16}
//           alignItems="center"
//           mb="4">
//           <Icon as={PiCoffeeFill} boxSize="6" mr="2" />
//           <Text fontSize="xl" fontWeight="bold">
//             Brand
//           </Text>
//         </Flex>

//         <List spacing="2">
//           <ListItem  onClick={handleItemClick} className="active">
//             <Icon as={VscGraph} boxSize="5" mr="2" /> 
//             Dashboard
//           </ListItem>
//           <ListItem onClick={handleItemClick}>
//           <Icon as={MdOutlineProductionQuantityLimits}  Size="5" mr="2"/> 
//             Product
//           </ListItem>
//           <ListItem onClick={handleItemClick}>
//             <Icon as={BiSolidReport} boxSize="5" mr="2" />
//             Report
//           </ListItem>
//           <ListItem onClick={handleItemClick}>
//             <Icon as={MdAccountBox} boxSize="5" mr="2" />
//             Account
//           </ListItem>
//           <ListItem onClick={handleItemClick}>
//             <Icon as={BiLogOut} boxSize="5" mr="2" />
//             Logot
//           </ListItem>
//         </List>
//       </Box>

//       <Box ml={isOpen ? "20rem" : "0"} transition="margin-left 0.3s ease-in-out">
//           <Button onClick={onToggle} mt="4">
//             {isOpen ? "Close Sidebar" : "Open Sidebar"}
//           </Button>
//         </Box>
//     </Flex>
//     </Box>
//   );
// };

// export default Sidebar;
