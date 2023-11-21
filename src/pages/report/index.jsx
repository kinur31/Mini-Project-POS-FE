import { Box, Text, Flex } from "@chakra-ui/layout";
// import SalesChart from "../../components/report";
import Report from "../../components/report/chart";
// import TransactionChart from "../../components/report";
import TransactionDetailsChart from "../../components/report/productSold";
import SalesReportChart from "../../components/report/salesReport";

const PageReport = () => {
  return (
    <Box>
      <Flex alignItems="center" w="full" m={4} p={6}>
        <Report />
        {/* <SalesChart/> */}
        <TransactionDetailsChart />
      </Flex>
      {/* <TransactionChart/> */}
      <SalesReportChart />
    </Box>
  );
};

export default PageReport;
