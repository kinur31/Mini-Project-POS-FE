import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addToCart } from "../../redux/reducers/cartSlice";

const Product = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const productName = searchParams.get("productName");
  const page = searchParams.get("page");
  console.log(`Page: ${page}`);
  const [product, setProduct] = useState([]);
  // const currentPage = searchParams.get("page") || 1;
  const dispatch = useDispatch();

  const fetchProduct = async () => {
    try {
      const response = await axios.get("http://localhost:8080/filter", {
        params: {
          productName: productName,
          productCategory: props.filterCategory,
          sortBy: props.sortBy,
          page: props.page || props.currentPage,
          pageSize: 10,
        },
      });
      setProduct(response.data.data);
      console.log(response.data.totalPage);
      props.setTotalPages(response.data.totalPage);
      // setTotalData(response.data.totalPage);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  useEffect(() => {
    fetchProduct();
    const pageFromURL = parseInt(props.page || props.currentPage, 10);
    props.setCurrentPage(pageFromURL);
  }, [product, productName, props.filterCategory, props.sortBy, props.currentPage]);

  console.log(`current: ${props.currentPage}`)
  return (
    <>
      <Box
        display="grid"
        justifyContent="center"
        alignItems="center"
        gridTemplateColumns={{
          base: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(5, 1fr)",
        }}
        w="full"
        top={0}
        h="full"
        gap={2}
      >
        {product.length > 0 ? ( product?.map((item, index) => (
          <VStack
          top={0}
            key={index}
            // p={2}
            w="full"
            // h="10em"
            pt={2}
            rounded={8}
            overflow="hidden"
            boxShadow="0px 1px 3px .5px #808080"
          >
            <Image
              w={20}
              src="https://sevenleavestea.com/wp-content/uploads/2022/05/matcha_soft_serve_latte-1-1.png"
            />
            <Text>{item.product_name}</Text>
            <Text fontWeight="bold" fontSize="13pt">
              Rp. {item.price}
            </Text>
            <Button
              rounded={0}
              overflow="hidden"
              w="full"
              colorScheme={item.status_product === false ? "red" : "facebook"}
              onClick={item.status_product === false ? null : () => handleAddToCart(item)}
              isDisabled={item.status_product === false ? true : false }
            >
              <Text>
              {item.status_product === false ? "Out of Stock" : "Add to Cart"}
              </Text>
            </Button>
          </VStack>
        ))): (
          <Box w="full">
          <Text fontWeight="bold" fontSize="13pt">Your search did not match any producs</Text>  
          </Box>
        )}
      </Box>
      {/* <HStack> */}
        {/* <Text>Page: {currentPage}</Text> */}
        {/* {currentPage > 1 && (
          <Button onClick={() => handleChangePage(currentPage - 1)}>
            Prev Page
          </Button>
        )} */}
        {/* {currentPage < totalData && (
          <Button onClick={() => handleChangePage(currentPage + 1)}>
            Next Page
          </Button>
        )} */}
      {/* </HStack> */}

    </>
  );
};

export default Product;
