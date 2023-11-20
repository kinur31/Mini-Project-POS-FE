import { Box, Button, HStack, Select } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

const Filter = (props) => {
  const [categoryProduct, setCategoryProduct] = useState([]);

  const fetchCategoryProduct = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/product/list-category"
      );
      setCategoryProduct(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCategoryProduct();
  }, [props.filterCategory, props.sortBy]);

  const handleButtonClick = (categoryId) => {
    props.setFilterCategory((prevCategory) =>
      prevCategory === categoryId ? null : categoryId
    );
  };

  const handleSortChange = (value) => {
    props.setSortBy(value);
  };

  return (
    <>
      <HStack w="full" spacing={4}>
        {categoryProduct.map((item, index) => (
          <Button
            onClick={() => handleButtonClick(item.id)}
            key={index}
            value={item.id}
            colorScheme="facebook"
            variant={props.filterCategory === item.id ? "solid" : "outline"}
          >
            {item.category_name}
          </Button>
        ))}
        <Box width="fit-content">
          <Select
            borderColor="blue"
            placeholder="Sort By"
            value={props.sortBy}
            onChange={(e) => handleSortChange(e.target.value)}
          >
            <option value="name_asc">Name A-Z</option>
            <option value="name_desc">Name Z-A</option>
            <option value="price_asc">Price Ascending</option>
            <option value="price_desc">Price Descending</option>
          </Select>
        </Box>
      </HStack>
    </>
  );
};

export default Filter;
