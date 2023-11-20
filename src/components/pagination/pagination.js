import React from "react";
import {
  Box,
  Button,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";

const Pagination = (props) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handlePageChange = (page) => {
    props.setCurrentPage(page);
  };

  const renderPaginationButton = (pageNumber, label) => (
    <Button
      key={pageNumber}
      colorScheme="facebook"
      onClick={() => {
        handlePageChange(pageNumber);
        const queryParams = new URLSearchParams({ page: pageNumber }).toString();
        const newLocation = { pathname: location.pathname, search: queryParams };
        navigate(newLocation);
      }}
      fontWeight={pageNumber === props.currentPage ? "bold" : "normal"}
      variant={pageNumber === props.currentPage ? "solid" : "outline"}
    >
      {label}
    </Button>
  );

  const renderDots = () => (
    <IconButton key="dots" colorScheme="facebook" variant="outline" icon={<BsThreeDots />} disabled />
  );

  const renderPaginationButtons = () => {
    const { totalPages, currentPage } = props;
    const buttons = [];

    buttons.push(renderPaginationButton(1, "1"));

    if (currentPage > 3) {
      buttons.push(renderDots());
    }

    for (let i = currentPage - 1; i <= currentPage + 1; i++) {
      if (i > 1 && i < totalPages) {
        buttons.push(renderPaginationButton(i, i.toString()));
      }
    }

    if (currentPage < totalPages - 2) {
      buttons.push(renderDots());
    }

    if (totalPages > 1) {
      buttons.push(renderPaginationButton(totalPages, totalPages.toString()));
    }

    return buttons;
  };

  return (
    <Flex gap={3} align="center">
      {props.currentPage > 1 && (
        <IconButton
          colorScheme="facebook"
          icon={<MdOutlineArrowBackIos />}
          onClick={() => handlePageChange(props.currentPage - 1)}
          isDisabled={props.currentPage === 1}
        />
      )}

      {renderPaginationButtons()}

      {props.currentPage < props.totalPages && (
        <IconButton
          colorScheme="facebook"
          icon={<MdOutlineArrowForwardIos />}
          onClick={() => handlePageChange(props.currentPage + 1)}
          isDisabled={props.currentPage === props.totalPages}
        />
      )}
    </Flex>
  );
};

export default Pagination;
