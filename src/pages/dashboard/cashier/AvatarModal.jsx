import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useToast,
  InputGroup,
  Stack,
  VStack,
  Image,
  FormErrorMessage,
} from "@chakra-ui/react";
import * as Yup from "yup";
import { IconCloudUpload } from "@tabler/icons-react";
import { useFormik } from "formik";
import { useDropzone } from "react-dropzone";

const AvatarModal = ({
  isOpen,
  onClose,
  user,
  userById,
  setUserById,
  updateAvatar,
}) => {
  const [image, setImage] = useState(user?.avatar);
  const [showAlert, setShowAlert] = useState(false);
  

  const toast = useToast();

  useEffect(() => {}, [onClose]);

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        const imageURL = URL.createObjectURL(acceptedFiles[0]);
        setImage(imageURL);
        formik.setFieldValue("avatar", acceptedFiles[0]);
      }
    },
  });

  const formProduct = async () => {
    try {
      let formData = new FormData();
      acceptedFiles.forEach((file) => {
        formData.append("avatar", file);
      });
      console.log(`Create Data: ${formData}`);
      console.log([...formData]);
      console.log(userById);

      await axios.patch(`http://localhost:8080/user/${userById}`, formData);
      toast({
        position: "top",
        title: "Edir Product",
        description: "Success...",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      onClose();
    } catch (err) {
      toast({
        position: "top",
        title: "Edit Product",
        description: "Error...",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const formik = useFormik({
    initialValues: {
      image: userById?.image,
    },
    // validationSchema: productSchema,
    onSubmit: (values) => {
      formProduct();
      // values.product_name,
      // values.product_category_id,
      // values.price,
      // values.stock
    },
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Avatar</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={formik.handleSubmit}>
            <Box>
              <FormControl>
                <FormLabel color="#696666">Avatar Image:</FormLabel>
                <Box
                  bgColor="#EEEDED"
                  h="265px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="10px"
                >
                  <Box
                    {...getRootProps()}
                    className="dropzone"
                    color="#ffffff"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    w="100%"
                    h="100%"
                    position="relative"
                  >
                    <Input
                      {...getInputProps()}
                      size="xl"
                      type="file"
                      w="100%"
                      h="100%"
                      position="absolute"
                      opacity="0"
                    />
                    {image && !acceptedFiles.length && (
                      <Image
                        src={`${process.env.REACT_APP_IMAGE_URL}/avatar/${image}`}
                        alt="Existing Image"
                        w="100%"
                        h="100%"
                        objectFit="cover"
                        borderRadius="10px"
                        cursor={"pointer"}
                      />
                    )}
                    {acceptedFiles.length > 0 && (
                      <Image
                        src={image}
                        alt="Selected Image"
                        w="100%"
                        h="100%"
                        objectFit="cover"
                        borderRadius="10px"
                      />
                    )}
                  </Box>
                </Box>
              </FormControl>
            </Box>

            <ModalFooter>
              <Button
                mt={4}
                mr={3}
                colorScheme="blue"
                isLoading={formik.isSubmitting}
                type="submit"
              >
                Update
              </Button>
              <Button mt={4} colorScheme="gray" onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AvatarModal;
