import React, { useState } from "react";
import { Box, Button, Flex, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@chakra-ui/react";

const CartButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleCartButtonClick = () => {
        setIsModalOpen(true);
      };
    
      const handleModalClose = () => {
        setIsModalOpen(false);
      };
    return (
        <>
        <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Shopping Cart</ModalHeader>
          <ModalBody>
            {/* ... (existing cart items code) */}
          </ModalBody>
          <ModalFooter>
            <Flex justifyContent="space-between" fontSize="13pt">
              <Text>Total</Text>
              {/* <Text fontWeight="bold">Rp. {calculateTotalPrice()}</Text> */}
            </Flex>
            <Button
              w="full"
              colorScheme="facebook"
            //   onClick={handleCheckout}
            //   isDisabled={cartItems.length === 0 ? true : false}
            >
              Checkout
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Box
      display={{base: "block", lg: "none"}}
        //   display="flex"
          flexDirection="column"
          position="sticky"
          bottom="0"
          gap={2}
          w="full"
          p="4"
          // bg="whitesmoke"
          mt="auto"
        >
          <Flex justifyContent="space-between" fontSize="13pt">
            <Text>Total</Text>
            {/* <Text fontWeight="bold">Rp. {calculateTotalPrice()}</Text> */}
          </Flex>
          <Button
            w="full"
            colorScheme="facebook"
            onClick={handleCartButtonClick}
            // isDisabled={cartItems.length === 0 ? true : false}
          >
            Checkout
          </Button>
        </Box>
      {/* <Box display={{base: "block", lg: "none" }} position="sticky" bottom="0" p="4">
      <Button colorScheme="facebook" onClick={handleCartButtonClick}>
        Open Cart
      </Button>
    </Box> */}
        </>
    )

}

export default CartButton;