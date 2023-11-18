import BodyManageProduct from "../../components/manageProduct/manageProduct";
import Sidebar1 from "../../components/sidebar/sidebar1";
import { Flex, Box, Stack } from "@chakra-ui/react";
import HeadCategory from "../../manageCategory/headCategory";
import BodyCategory from "../../manageCategory/manageCategory";


const Category = () => {
    return (
        <Flex justifyContent="space-between">
            <Sidebar1 />
            <Stack gap={0} w={"full"}>
                <HeadCategory />
                <BodyCategory />
                {/* <BodyManageProduct /> */}
            </Stack>
        </Flex>
    )
}

export default Category;