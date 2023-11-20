import { Box, Text, Button, Flex, Divider, Stack } from "@chakra-ui/react";
import Search from "../search";
import Filter from "../filter";
import Product from "../product";
import { useState } from "react";
import Cart from "../cart";
import CartButton from "../cart/cartButton";
import Pagination from "../pagination";
import SideBarCashier from "../sidebar/CashierSidebar";

const Menu = () => {
  const [filterCategory, setFilterCategory] = useState(null);
  const [sortBy, setSortBy] = useState(null); // Default sorting by name in ascending order
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
   
  console.log(filterCategory);
  console.log("Testing");

  return (
    <Flex>
      <SideBarCashier/>
      <Box display="flex" flexDirection={{base: "column", lg:"row"}} justifyContent="space-between">
        <Flex
          flexDirection="column"
          // justifyContent="space-between"
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
          <Product
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
        <Cart />
        <CartButton/>
        {/* <Divider/> */}
      </Box>
    </Flex>
  );
};

export default Menu;
