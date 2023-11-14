import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useToast,
  Select,
  Image,
  FormErrorMessage,
  Stack,
  VStack,
  Text,
  InputGroup,
} from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";
import axios from "axios";
import { Field, Form, Formik, useFormik } from 'formik';
// import {Form, useFormik } from "formik";
import { useEffect, useState, useRef } from "react";
import * as Yup from "yup";
import {useDropzone} from 'react-dropzone';

const productSchema = Yup.object().shape({
  product_name: Yup.string().required("Product name is required"),
  product_category_id: Yup.string().required("Category product is required"),
  price: Yup.string().required("Price product is required"),
  stock: Yup.string().required("Price product is required"),
  productImage: Yup.string(),
});

const AddProduct = () => {
  const toast = useToast();
  const [product, setProduct] = useState(null);
  const [price, setprice] = useState(null);
  const [productImage, setProductImage] = useState(null);
  const inputImage = useRef(null);
  const [productCategory, setProductCategory] = useState([]);
//   const [stock, setStock] = useState("");


  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: "image/*", // Accept only image files
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        const imageURL = URL.createObjectURL(acceptedFiles[0]);
        setProductImage(imageURL);
      }
    },
  });

  const formProduct = async (product_name, product_category_id, price, stock) => {
    try {
      let formData = new FormData();
      formData.append("product_name", product_name);
      formData.append("product_category_id", product_category_id);
      formData.append("price", price);
      formData.append("stock", stock);
      // formData.append("image", fieldImage);
      acceptedFiles.forEach((file) => {
        formData.append("image", file);
      });
      await axios.post("http://localhost:8080/product/add-product", formData);
      alert("Success");
    } catch (err) {
      alert("Error");
    }
  };

  const fetchCategory = async () => {
    try {
      const response = await axios.get("http://localhost:8080/product/list-category");
      setProductCategory(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  
  useEffect(() => {
    fetchCategory();
  }, []);


  const handleReset = () => { 
    if (inputImage.current) { 
        inputImage.current.value = null;
    } 
  }; 

  const formik = useFormik({
    initialValues: {
      product_name: "",
      product_category_id: "",
      price: "",
      stock: "",
      eventImage: null,
    },
    validationSchema: productSchema,
    onSubmit: (values) => {
      formProduct(values.product_name, values.product_category_id, values.price, values.stock);
      
    },
  });

  const handleAddProduct = () => {
    // Lakukan sesuatu dengan data produk, seperti mengirim ke server
    toast({
      position: "top",
      title: "Add Product",
      description:  "Success...",
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    setProduct(null);
    setprice(null);
    setProductImage(null);
    // setProductCategory("");
  };

//   const handleDeleteProduct = () => {
//     // Lakukan sesuatu dengan penghapusan produk, seperti mengirim ke server
//     toast({
//       position: "top",
//       title: "Delete Product",
//       description: "Delected product success",
//       status: "warning",
//       duration: 3000,
//       isClosable: true,
//     });
//   };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProductImage(file);
  };

  return (
    <Box>
        <form onSubmit={formik.handleSubmit}>
        <FormControl
              isInvalid={formik.touched.product_name && formik.errors.product_name}
            >
              <FormLabel>Product Name :</FormLabel>
              <InputGroup>
                <Input
                  placeholder= "Add prodcut name"
                  type="text"
                  name="product_name"
                  value={formik.values.product_name}
                  onChange={formik.handleChange}
                ></Input>
              </InputGroup>
              {formik.touched.product_name && formik.errors.product_name && (
                <FormErrorMessage>{formik.errors.product_name}</FormErrorMessage>
              )}
            </FormControl>

            <FormControl
              isInvalid={formik.touched.price && formik.errors.price}
            >
              <FormLabel>Selling price :</FormLabel>
              <InputGroup>
                <Input
                  placeholder= "Input price"
                  type="number"
                  name="price"
                  value={formik.values.price}
                  onChange={formik.handleChange}
                ></Input>
              </InputGroup>
              {formik.touched.price && formik.errors.price && (
                <FormErrorMessage>{formik.errors.price}</FormErrorMessage>
              )}
            </FormControl>

            <FormControl
              isInvalid={formik.touched.stock && formik.errors.stock}
            >
              <FormLabel>Stock :</FormLabel>
              <InputGroup>
                <Input
                  placeholder= "Input stock"
                  type="number"
                  name="stock"
                  value={formik.values.stock}
                  onChange={formik.handleChange}
                ></Input>
              </InputGroup>
              {formik.touched.stock && formik.errors.stock && (
                <FormErrorMessage>{formik.errors.stock}</FormErrorMessage>
              )}
            </FormControl>

            <FormControl>
            <FormLabel>Category product :</FormLabel>
              <InputGroup>
                <Select
                  name="product_category_id"
                //   background="#262626"
                //   color="#585454"
                //   border="0"
                  placeholder= "Choose product category"
                  value={formik.values.productCategory}
                  onChange={formik.handleChange}
                >
                  {productCategory.map((item, index) => (
                    <option
                      key={index}
                      value={item.id}
                      style={{ color: "black" }}
                    >
                      {item.category_name}
                    </option>
                  ))}
                </Select>
              </InputGroup>
            </FormControl>

            <FormControl
              isInvalid={formik.touched.productImage && formik.errors.productImage}
            >
              <FormLabel>Upload Image</FormLabel>
              <Box>
              <InputGroup>
              <Stack border="1px solid white" justifyContent="center" gap={0} rounded=".5em" overflow="hidden" >
                    <VStack h="13em"  hidden={productImage? true : false}  {...getRootProps()} className="dropzone"  alignItems='center' justifyContent='center'>
                      <Input {...getInputProps()} 
                          ref={inputImage}/>
                      {/* <Image src={Upload} /> */}
                      <Text>Drag 'n' drop some files here, or click to select files</Text>
                    </VStack>
                    {productImage && (
                      <Stack className="dropzone">
                        <Image
                        
                          ref={inputImage}
                          src={productImage}
                          alt="Uploaded Image"
                          style={{ maxWidth: "100%" }}
                          />
                          <Button overflow="hidden" onClick={handleReset}>
                    {/* <Input display="none" {...getInputProps()}  */}
                          {/* ref={inputImage}/> */}
                          <Text>Reset</Text>
                          </Button>
                          </Stack>
                    )}
              </Stack>
              </InputGroup>
              {formik.touched.productImage && formik.errors.productImage && (
                <FormErrorMessage>{formik.errors.productImage}</FormErrorMessage>
              )}
              </Box>
            </FormControl>

            <Button type="submit" mt={4} colorScheme="teal" onClick={handleAddProduct}>
        Add Product
      </Button>

      {/* <Button mt={4} ml={2} colorScheme="red">
        Delete Product
      </Button> */}

        </form>
    </Box>
  );
};

export default AddProduct;
