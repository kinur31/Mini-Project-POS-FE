import BodyDashboardAdmin from "../../components/dashboard/bodyDashboardAdmin";
import HeadDashboarAdmin from "../../components/dashboard/headDasboardAdmin";
import Sidebar1 from "../../components/sidebar/sidebar1";
import { Flex, Stack } from "@chakra-ui/react";
const DashboardAdmin = () => {
  return (
    <Flex justifyContent="space-between">
      <Sidebar1 />
      <Stack gap={0} w={"full"}>
        <HeadDashboarAdmin />
        <BodyDashboardAdmin />
      </Stack>
    </Flex>
  );
};

export default DashboardAdmin;
