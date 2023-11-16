// import {
//     Box,
//     Button,
//     FormControl,
//     FormLabel,
//     Input,
//     Textarea,
//     useToast,
//     Select,
//     Image,
//     FormErrorMessage,
//     Stack,
//     VStack,
//     Text,
//     InputGroup,
//   } from "@chakra-ui/react";
//   import { BiChevronDown } from "react-icons/bi";
//   import axios from "axios";
//   import { Field, Form, Formik, useFormik } from 'formik';
//   // import {Form, useFormik } from "formik";
//   import { useEffect, useState, useRef } from "react";
//   import * as Yup from "yup";
//   import {useDropzone} from 'react-dropzone';
//   import { IconCloudUpload } from '@tabler/icons-react';
  
//   const productSchema = Yup.object().shape({
//     product_name: Yup.string().required("Product name is required"),
//     product_category_id: Yup.string().required("Category product is required"),
//     price: Yup.string().required("Price product is required"),
//     stock: Yup.string().required("Price product is required"),
//     productImage: Yup.string(),
//   });
  
//   const AddCategory = () => {
//     const toast = useToast();
//     const [product, setProduct] = useState(null);
//     const [price, setprice] = useState(null);
//     const [productImage, setProductImage] = useState(null);
//     const inputImage = useRef(null);
//     const [productCategory, setProductCategory] = useState([]);
//   //   const [stock, setStock] = useState("");
  
  
//     const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
//       accept: "image/*", // Accept only image files
//       onDrop: (acceptedFiles) => {
//         if (acceptedFiles.length > 0) {
//           const imageURL = URL.createObjectURL(acceptedFiles[0]);
//           setProductImage(imageURL);
//         }
//       },
//     });
  
//     const formProduct = async (product_name, product_category_id, price, stock) => {
//       try {
//         let formData = new FormData();
//         formData.append("product_name", product_name);
//         formData.append("product_category_id", product_category_id);
//         formData.append("price", price);
//         formData.append("stock", stock);
//         // formData.append("image", fieldImage);
//         acceptedFiles.forEach((file) => {
//           formData.append("image", file);
//         });
//         await axios.post("http://localhost:8080/product/add-product", formData);
//         alert("Success");
//       } catch (err) {
//         alert("Error");
//       }
//     };
  
//     const fetchCategory = async () => {
//       try {
//         const response = await axios.get("http://localhost:8080/product/list-category");
//         setProductCategory(response.data.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
    
//     useEffect(() => {
//       fetchCategory();
//     }, []);
  
  
//     const handleReset = () => { 
//       if (inputImage.current) { 
//           inputImage.current.value = null;
//       } 
//     }; 
  
//     const formik = useFormik({
//       initialValues: {
//         product_name: "",
//         product_category_id: "",
//         price: "",
//         stock: "",
//         eventImage: null,
//       },
//       validationSchema: productSchema,
//       onSubmit: (values) => {
//         formProduct(values.product_name, values.product_category_id, values.price, values.stock);
        
//       },
//     });
  
//     const handleAddProduct = () => {
//       // Lakukan sesuatu dengan data produk, seperti mengirim ke server
//       toast({
//         position: "top",
//         title: "Add Product",
//         description:  "Success...",
//         status: "success",
//         duration: 3000,
//         isClosable: true,
//       });
  
//       setProduct(null);
//       setprice(null);
//       setProductImage(null);
//       // setProductCategory("");
//     };
  
//   //   const handleDeleteProduct = () => {
//   //     // Lakukan sesuatu dengan penghapusan produk, seperti mengirim ke server
//   //     toast({
//   //       position: "top",
//   //       title: "Delete Product",
//   //       description: "Delected product success",
//   //       status: "warning",
//   //       duration: 3000,
//   //       isClosable: true,
//   //     });
//   //   };
  
//     const handleImageChange = (e) => {
//       const file = e.target.files[0];
//       setProductImage(file);
//     };
  
//     return (
//       <Box>
//           <form onSubmit={formik.handleSubmit}>
//           <FormControl
//                 isInvalid={formik.touched.product_name && formik.errors.product_name}
//               >
//                 <FormLabel>Product Category Name :</FormLabel>
//                 <InputGroup>
//                   <Input
//                     placeholder= "Add prodcut name"
//                     type="text"
//                     name="product_name"
//                     value={formik.values.product_name}
//                     onChange={formik.handleChange}
//                   ></Input>
//                 </InputGroup>
//                 {formik.touched.product_name && formik.errors.product_name && (
//                   <FormErrorMessage>{formik.errors.product_name}</FormErrorMessage>
//                 )}
//               </FormControl>
  
  
//               <Button type="submit" mt={4} bgColor="#1A72DD" textColor="white" colorScheme="#1A72DD" onClick={handleAddProduct}>
//           Add Category
//         </Button>
  
//         {/* <Button mt={4} ml={2} colorScheme="red">
//           Delete Product
//         </Button> */}
  
//           </form>
//       </Box>
//     );
//   };
  
//   export default AddCategory;
  