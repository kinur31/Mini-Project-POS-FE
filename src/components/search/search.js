import {
    Input,
    InputGroup,
    InputRightElement,
    Flex,
    IconButton,
  } from "@chakra-ui/react";
  import { useState, useEffect } from "react";
  import { RiSearchLine } from "react-icons/ri";
  import { useLocation, useNavigate } from "react-router-dom";
  
  const Search = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState(() => {
      return localStorage.getItem("searchQuery") || "";
    });
  
    useEffect(() => {
      localStorage.setItem("searchQuery", searchQuery);
    }, [searchQuery]);
  
    const handleSearch = async () => {
      console.log(`Page: ${searchQuery}`);
  
      const queryParams = new URLSearchParams({
        productName: searchQuery,
      }).toString();
      const newLocation = {
        pathname: location.pathname,
        search: queryParams,
      };
  
      navigate(newLocation);
    };
  
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        handleSearch();
      }
    };
  
    return (
      <Flex gap={1}>
        <InputGroup>
          <Input
            type="text"
            value={searchQuery}
            onKeyDown={handleKeyDown}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Type keyword to search product"
          />
          <InputRightElement>
            <IconButton icon={<RiSearchLine />} onClick={handleSearch}>
              Cari
            </IconButton>
          </InputRightElement>
        </InputGroup>
      </Flex>
    );
  };
  
  export default Search;
  