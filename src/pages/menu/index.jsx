import { Box, Text, Button, Flex, Divider, Stack } from "@chakra-ui/react";
// import Search from "../../components/search";
// import Filter from "../../components/filter";
// import Product from "../../components/product";
// import Pagination from "../../components/pagination";
// import Sidebar from "../../components/sidebar/sidebar";
import { useState } from "react";
import HeadManageProduct from "../../components/manageProduct/headManage";
import Search from "../../components/search/search";
import Filter from "../../components/filterProduct/filter";
import Pagination from "../../components/pagination/pagination";
import Sidebar1 from "../../components/sidebar/sidebar1";
import ProductList from "../../components/productList/bodyProductList";


const Menu = () => {
  const [filterCategory, setFilterCategory] = useState(null);
  const [sortBy, setSortBy] = useState(null); // Default sorting by name in ascending order
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
   
  console.log(filterCategory);
  console.log("Testing");

  return (
    <Flex>
      <Sidebar1/>
      <Box display="flex" flexDirection={{base: "column", lg:"row"}} justifyContent="space-between">
        <Flex
          flexDirection="column"
          justifyContent="space-between"
          //   alignItems="center"
          w="full"
          m={0}
          p="2em"
          gap={2}
          // top={0}
        >
          <Stack>
          <Search />
          <Filter
            filterCategory={filterCategory}
            setFilterCategory={setFilterCategory}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
          </Stack>
          <ProductList
            filterCategory={filterCategory}
            setFilterCategory={setFilterCategory}
            sortBy={sortBy}
            setSortBy={setSortBy}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
            setTotalPages={setTotalPages}
          />
          <Pagination 
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
            setTotalPages={setTotalPages}
            />
        </Flex>
        {/* <Cart />
        <CartButton/> */}
        {/* <Divider/> */}
      </Box>
    </Flex>
  );
};

export default Menu;
