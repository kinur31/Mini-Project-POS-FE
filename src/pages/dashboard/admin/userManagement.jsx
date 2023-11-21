import { Flex, Stack } from "@chakra-ui/react";
import SideBar from "../../../components/sidebar/sidebar";
import HeadDashboardAdmin from "../../../components/dashboard/headDasboardAdmin";
import BodyDashboardAdmin from "../../../components/dashboard/bodyDashboardAdmin";
import Sidebar1 from "../../../components/sidebar/sidebar1";
// import HeadDashboardAdmin from "../../components/dashboard/headDasboardAdmin";
// import SideBar from "../../components/sidebar/sidebar";
// import BodyDashboardAdmin from "../../components/dashboard/bodyDashboardAdmin";

const UserManagement = () => {
  return (
    <Flex justifyContent="space-between">
      {/* <SideBar /> */}
        <Sidebar1/>
      <Stack gap={0} w={"full"}>
        <HeadDashboardAdmin />
        <BodyDashboardAdmin />
      </Stack>
    </Flex>
  );
};

export default UserManagement;
