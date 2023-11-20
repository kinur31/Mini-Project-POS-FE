import { Box, Text } from "@chakra-ui/layout";
// import SalesChart from "../../components/report";
import Report from "../../components/report";
// import TransactionChart from "../../components/report";
import TransactionDetailsChart from "../../components/report/productSold";
import SalesReportChart from "../../components/report/between";
// import SplineAreaChart from "../../components/report";


const PageReport = () => {
  return (
    <Box w="full" m={0} p={4}>
      <Report/>
       {/* <SalesChart/> */}
{/* <SplineAreaChart/> */}
      <TransactionDetailsChart />
      <Text>Check</Text>
      {/* <TransactionChart/> */}
<SalesReportChart/>

    </Box>
  );
};

export default PageReport;
