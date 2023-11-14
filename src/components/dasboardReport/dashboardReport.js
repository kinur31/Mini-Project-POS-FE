import {  Box, Text, Stack, Flex, Grid, GridItem } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Line, Pie } from "react-chartjs-2";


function Dashboard() {
  const [totalSales, setTotalSales] = useState(0);
  const [totalTransactions, setTotalTransactions] = useState(0);
  const [grossProfit, setGrossProfit] = useState(0);
  const [revenue, setRevenue] = useState(0);

  // Fetch data from backend API
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/dashboard");
      const data = await response.json();

      setTotalSales(data.totalSales);
      setTotalTransactions(data.totalTransactions);
      setGrossProfit(data.grossProfit);
      setRevenue(data.revenue);
    };

    fetchData();
  }, []);

  return (
    <Box>
      <Box padding="4">
        <Text fontSize="2xl" fontWeight="bold">Dashboard</Text>

        <Stack spacing="4">
          <Flex alignItems="center" justifyContent="space-between">
            <Text fontSize="lg" fontWeight="bold">Total Penjualan</Text>
            <Text fontSize="lg">{totalSales}</Text>
          </Flex>

          <Flex alignItems="center" justifyContent="space-between">
            <Text fontSize="lg" fontWeight="bold">Total Transaksi</Text>
            <Text fontSize="lg">{totalTransactions}</Text>
          </Flex>

          <Flex alignItems="center" justifyContent="space-between">
            <Text fontSize="lg" fontWeight="bold">Laba Kotor</Text>
            <Text fontSize="lg">{grossProfit}</Text>
          </Flex>

          <Flex alignItems="center" justifyContent="space-between">
            <Text fontSize="lg" fontWeight="bold">Penerimaan</Text>
            <Text fontSize="lg">{revenue}</Text>
          </Flex>
        </Stack>

        <Grid templateColumns="repeat(2, 1fr)" gap="4">
          <GridItem>
            <Line
              data={{
                labels: ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"],
                datasets: [
                  {
                    label: "Total Penjualan",
                    data: [10000, 12000, 14000, 16000, 18000, 20000, 22000],
                    fill: false,
                    borderColor: "#FF0000",
                  },
                ],
              }}
              options={{
                title: {
                  display: true,
                  text: "Total Penjualan Mingguan",
                },
                legend: {
                  display: false,
                },
              }}
            />
          </GridItem>

          <GridItem>
            <Pie
              data={{
                labels: ["Martabak Manis", "Roti Bakar", "Kopi Susu", "Teh", "Lemon Tea"],
                datasets: [
                  {
                    data: [50, 20, 15, 10, 5],
                    backgroundColor: ["#FF0000", "#FFFF00", "#00FF00", "#00FFFF", "#FF00FF"],
                  },
                ],
              }}
              options={{
                title: {
                  display: true,
                  text: "Produk Terlaris",
                },
                legend: {
                  display: true,
                },
              }}
            />
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}

export default Dashboard;