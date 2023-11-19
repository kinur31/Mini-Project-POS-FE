import { Flex, Stack } from "@chakra-ui/react";
import HeadDashboardAdmin from "../../components/dashboard/headDasboardAdmin";
import SideBar from "../../components/sidebar/sidebar";
import BodyDashboardAdmin from "../../components/dashboard/bodyDashboardAdmin";

const DashboardAdmin = () => {
  return (
    <Flex justifyContent="space-between">
      <SideBar />
      <Stack gap={0} w={"full"}>
        <HeadDashboardAdmin />
        <BodyDashboardAdmin />
      </Stack>
    </Flex>
  );
};

export default DashboardAdmin;
