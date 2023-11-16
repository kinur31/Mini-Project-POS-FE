import HeadManageProduct from "../../components/manageProduct/headManage";
import BodyManageProduct from "../../components/manageProduct/manageProduct";
import Sidebar1 from "../../components/sidebar/sidebar1";
import { Flex, Box, Stack } from "@chakra-ui/react";


const Products = () => {
    return (
        <Flex justifyContent="space-between">
            <Sidebar1 />
            <Stack gap={0} w={"full"}>
                <HeadManageProduct />
                <BodyManageProduct />
            </Stack>
        </Flex>
    )
}

export default Products;