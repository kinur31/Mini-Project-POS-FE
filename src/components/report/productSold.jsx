import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactApexChart from "react-apexcharts";
import { Box } from "@chakra-ui/react";

const TransactionDetailsChart = () => {
  const [chartData, setChartData] = useState([]);

  const fetchTransactionDetail = async () => {
    try {
      const response = await axios.get("http://localhost:8080/transaction/transaction-detail");
      setChartData(response?.data?.data || []);
    } catch (err) {
      console.error("Error fetching transaction details:", err);
    }
  };

  useEffect(() => {
    fetchTransactionDetail();
  }, []);

  // Sort the data by quantity sold in descending order
  const sortedData = [...chartData].sort((a, b) => b.qty - a.qty);

  // Select the top 10 items
  const top10Data = sortedData.slice(0, 10);

  const options = {
    chart: {
      type: 'bar',
      height: 250
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: 'top',
          maxItems: top10Data.length,
        },
      }
    },
    xaxis: {
      categories: top10Data.map((dataPoint) => dataPoint?.product?.product_name || ""),
      labels: {
        show: true, 
        rotate: -45, 
      },
    },
    title: {
      text: "Top 10 Sold Products",
      align: "left",
    },
  };

  const series = [
    {
      name: "Quantity Sold",
      data: top10Data.map((dataPoint) => dataPoint.qty),
    },
  ];

  return (
    <Box>
      <ReactApexChart options={options} series={series} type="bar" width={650} height={250} />
    </Box>
  );
};

export default TransactionDetailsChart;
