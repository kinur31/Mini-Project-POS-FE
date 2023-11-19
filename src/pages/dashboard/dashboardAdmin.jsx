import { Flex, Stack, Text } from "@chakra-ui/react";
import HeadDashboardAdmin from "../../components/dashboard/headDasboardAdmin";
import SideBar from "../../components/sidebar/sidebar";

const DashboardAdmin = () => {
  return (
    <Flex justifyContent="space-between">
      <SideBar />
      <Stack gap={0} w={"full"}>
        <Text>Test</Text>
        <HeadDashboardAdmin />

        {/* <BodyDashboardAdmin /> */}
      </Stack>
    </Flex>
  );
};

export default DashboardAdmin;
