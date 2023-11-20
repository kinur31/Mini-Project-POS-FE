import React, { useState, useRef } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { TbCircleMinus } from "react-icons/tb";
import { MdAddCircleOutline } from "react-icons/md";
import { FiTrash2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../../redux/reducers/cartSlice";
import axios from "axios";
import {
  // ... other imports
  setPaymentAmount,
  setPaymentChange,
  resetTransaction, // Import the new resetPaymentChange action
} from "../../redux/reducers/paymentSlice";
import { checkoutAsync } from "../../redux/reducers/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const toast = useToast();

  const handleIncrement = (itemId) => {
    dispatch(incrementQuantity(itemId));
  };

  const handleDecrement = (itemId) => {
    dispatch(decrementQuantity(itemId));
  };

  const handleRemove = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const paymentAmount = useSelector((state) => state.payment.paymentAmount);
  const paymentChange = useSelector((state) => state.payment.paymentChange);
  // const [paymentChange, setPaymentChange] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const cashInputRef = useRef(''); // Use useRef for cashInput

  const handleCheckout = () => {
    // const totalAmount = calculateTotalPrice();
    // dispatch(setPaymentAmount(totalAmount));
    // const cashierAmount = parseFloat(cashInputRef.value);
    // dispatch(setPaymentAmount(cashierAmount))
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleCashInputChange = (e) => {
    const enteredCash = parseFloat(e.target.value);
    dispatch(setPaymentAmount(enteredCash));

    // const cashAmount = parseFloat(cashInput);
    const totalPayment = calculateTotalPrice();
    dispatch(setPaymentChange(enteredCash - totalPayment));

    // Assuming calculatePaymentChange is a function that calculates the payment change
    // const calculatedPaymentChange = calculatePaymentChange(enteredCash);

    // setPaymentChange(isNaN(calculatedPaymentChange) ? 0 : calculatedPaymentChange);
  };

  const calculatePaymentChange = (enteredCash) => {
    // Assuming you have a totalAmount that you want to calculate change for
    const totalAmount = 100; // Replace with your actual total amount

    // Calculate payment change
    const change = enteredCash - totalAmount;

    return change >= 0 ? change : 0;
  };

  const handlePaymentSubmit = () => {
    const totalPayment = calculateTotalPrice();

    if (!isNaN(paymentAmount) && paymentAmount >= totalPayment) {
      dispatch(setPaymentAmount(paymentAmount));
      dispatch(checkoutAsync(paymentAmount, paymentChange));
      setIsModalOpen(false);

      toast({
        position:"top",
        title: "Payment Successful",
        description: `Change: Rp. ${paymentChange}`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      // Optionally, you can reset the transaction or perform any other actions after successful payment
      dispatch(resetTransaction());
    } else {
      toast({
        position:"top",
        title: "Invalid Cash Amount",
        description: "Please enter a valid amount.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };


  const calculateTotalPrice = () => {
    return cartItems.reduce((total, cartItem) => {
      return total + cartItem.price * cartItem.qty;
    }, 0);
  };

  return (
    <>
      <Flex
        display={{ base: "none", lg: "flex" }}
        flexDirection="column"
        position="sticky"
        top="0"
        w="460px"
        h="100vh"
        overflowY="auto"
        borderLeftWidth="1px"
        p="0 2em 0 2em"
        minH="100vh"
      >
        <Box display="flex" flexDirection="column" pt={4} gap={2} w="full">
          <Heading size="md">Cart Items:</Heading>
          {/* {cartItems.map((cartItem) => (
            <Flex
              key={cartItem.id}
              justifyContent="space-between"
              alignItems="center"
              p={1}
              bg="whitesmoke"
              rounded={10}
            >
              <Image
                w={20}
                src="https://sevenleavestea.com/wp-content/uploads/2022/05/matcha_soft_serve_latte-1-1.png"
              />
              <Stack>
                <Text>{cartItem.product_name}</Text>
                <Text fontWeight="bold" fontSize="13pt">
                  Rp. {cartItem.price}
                </Text>
                <Flex
                  w="full"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <IconButton
                    icon={<TbCircleMinus color="blue" size="22" />}
                    colorScheme="transparent"
                    isDisabled={cartItem.qty===1}
                    onClick={() => handleDecrement(cartItem.id)}
                  ></IconButton>
                  <Text fontWeight="bold" fontSize="13pt">
                    {cartItem.qty}
                  </Text>
                  <IconButton
                    icon={<MdAddCircleOutline color="blue" size="22" />}
                    colorScheme="transparent"
                    onClick={() => handleIncrement(cartItem.id)}
                  ></IconButton>
                </Flex>
              </Stack>
              <IconButton
                icon={<FiTrash2 color="blue" size="22" />}
                colorScheme="transparent"
                onClick={() => handleRemove(cartItem.id)}
              ></IconButton>
            </Flex>
          ))} */}
          {cartItems.length > 0 ? (
            <>
              {cartItems.map((cartItem) => (
                <Flex
                  key={cartItem.id}
                  justifyContent="space-between"
                  alignItems="center"
                  p={1}
                  bg="whitesmoke"
                  rounded={10}
                >
                  <Image
                    w={20}
                    src="https://sevenleavestea.com/wp-content/uploads/2022/05/matcha_soft_serve_latte-1-1.png"
                  />
                  <Stack>
                    <Text>{cartItem.product_name}</Text>
                    <Text fontWeight="bold" fontSize="13pt">
                      Rp. {cartItem.price}
                    </Text>
                    <Flex
                      w="full"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <IconButton
                        icon={<TbCircleMinus color="blue" size="22" />}
                        colorScheme="transparent"
                        isDisabled={cartItem.qty === 1}
                        onClick={() => handleDecrement(cartItem.id)}
                      ></IconButton>
                      <Text fontWeight="bold" fontSize="13pt">
                        {cartItem.qty}
                      </Text>
                      <IconButton
                        icon={<MdAddCircleOutline color="blue" size="22" />}
                        colorScheme="transparent"
                        onClick={() => handleIncrement(cartItem.id)}
                      ></IconButton>
                    </Flex>
                  </Stack>
                  <IconButton
                    icon={<FiTrash2 color="blue" size="22" />}
                     colorScheme="transparent"
                    onClick={() => handleRemove(cartItem.id)}
                  ></IconButton>
                </Flex>
              ))}
            </>
          ) : (
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Image src="./images/cart_is_empty.png" />
              <Flex gap={1.5} alignItems="center">
              <Text fontWeight="bold" fontSize="13pt">
                Your Cart
              </Text>
              <Text fontWeight="bold" as="span" color="red">is Empty</Text>
              </Flex>
              <Text w="15em" textAlign="center">Must add items on the cart before you proceed to checkout</Text>
            </Flex>
          )}
        </Box>

        <Box
          display="flex"
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
            <Text fontWeight="bold">Rp. {calculateTotalPrice()}</Text>
          </Flex>
          <Button
            w="full"
            colorScheme="facebook"
            onClick={handleCheckout}
            isDisabled={cartItems.length === 0 ? true : false}
          >
            Checkout
          </Button>
        </Box>
        {/* Payment Modal */}
        <Modal isOpen={isModalOpen} onClose={handleModalClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Cash Payment</ModalHeader>
            <ModalBody>
              <Text>Enter the cash amount:</Text>
              <Input
                type="number"
                placeholder="Enter amount"
                value={paymentAmount}
                onChange={handleCashInputChange}
              />
              <Text>Payment Change:</Text>
              <Input type="number" placeholder={paymentChange} readOnly />
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" onClick={handlePaymentSubmit}>
                Submit Payment
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </>
  );
};

export default Cart;
