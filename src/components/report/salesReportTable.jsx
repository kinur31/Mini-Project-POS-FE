import { Box, Table, TableCaption, Tbody, Td, Text, Th, Thead, Tr, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

const formatRupiah = (number) => {
  if (isNaN(number)) {
    return '';
  }
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);
};

const SalesReportTable = () => {
  const [reportData, setReportData] = useState([]);
  const [startDate, setStartDate] = useState('2023-05-17');
  const [endDate, setEndDate] = useState('2023-05-17');
  const toast = useToast();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const startDate = '2023-05-17';
        const endDate = '2023-05-17';

        const response = await axios.get("http://localhost:8080/report/all");
        setReportData(response.data?.data);
      } catch (error) {
        console.error('Error fetching sales report:', error);
        toast({
          title: 'Error Fetching Data',
          description: 'Failed to fetch sales report data.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    };

    fetchData();
  }, []);

  return (
    <Box justifyContent="center">
      <Table variant="striped" colorScheme="teal">
        <TableCaption>Sales Report</TableCaption>
        <Thead>
          <Tr>
          <Th>User</Th>
            <Th>Transaction ID</Th>
            <Th>Product</Th>
            <Th>Quantity</Th>
            <Th>Total Sales</Th>
            <Th>Transaction Date</Th>
          </Tr>
        </Thead>
        <Tbody>
          {reportData.map((dataPoint, index) => (
            <Tr key={index}>
              <Td>{dataPoint.transaction.cashier.fullname}</Td>
              <Td>{dataPoint.transaction_id}</Td>
              <Td>{dataPoint.product_id}</Td>
              <Td>{dataPoint.qty}</Td>
              <Td>{formatRupiah(dataPoint.transaction.total_price)}</Td>
              <Td>{dataPoint.transaction.createdAt}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default SalesReportTable;
