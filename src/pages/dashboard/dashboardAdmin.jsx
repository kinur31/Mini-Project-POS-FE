import { Flex, Stack } from "@chakra-ui/react";
import BodyDashboardAdmin from "../../components/dashboard/bodyDashboardAdmin";
import HeadDashboarAdmin from "../../components/dashboard/headDasboardAdmin";
import SideBar from "../../components/sidebar/sidebar";
const DashboardAdmin = () => {
  return (
    <Flex justifyContent="space-between">
      <SideBar />
      <Stack gap={0} w={"full"}>
        <HeadDashboarAdmin />
        <BodyDashboardAdmin />
      </Stack>
    </Flex>
  );
};

export default DashboardAdmin;
