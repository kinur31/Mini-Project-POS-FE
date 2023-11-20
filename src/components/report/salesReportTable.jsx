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
  const [tableData, setTableData] = useState([]);
  const [startDate, setStartDate] = useState('2023-05-17');
  const [endDate, setEndDate] = useState('2023-05-17');
  const toast = useToast();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/transaction/transaction-detail");
        const reportData = response.data?.data;
        setTableData(reportData);
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
  }, [toast, startDate, endDate]);

  return (
    <Box>
      <Table variant="striped" colorScheme="teal">
        <TableCaption>Sales Report</TableCaption>
        <Thead>
          <Tr>
            <Th>Transaction ID</Th>
            <Th>Product</Th>
            <Th>Quantity</Th>
            <Th>Total Sales</Th>
            <Th>Transaction Date</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tableData.map((data) => (
            <Tr key={data.transaction_id}>
              <Td>{data.transaction_id}</Td>
              <Td>{data.product_id}</Td>
              <Td>{data.qty}</Td>
              <Td>{formatRupiah(data.price)}</Td>
              <Td>{data.createdAt}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default SalesReportTable;
