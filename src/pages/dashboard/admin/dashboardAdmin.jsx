import { Flex, Stack, Text } from "@chakra-ui/react";
import HeadDashboardAdmin from "../../../components/dashboard/headDasboardAdmin";
import BodyDashboardAdmin from "../../../components/dashboard/bodyDashboardAdmin";
import PageReport from "../../report";
import Sidebar1 from "../../../components/sidebar/sidebar1";
import Report from "../../../components/report/chart";

const DashboardAdmin = () => {
  return (
    <Flex justifyContent="space-between">
      <Sidebar1/>
      {/* <Text>Test</Text> */}
      <PageReport/>
    </Flex>
  );
};

export default DashboardAdmin;
