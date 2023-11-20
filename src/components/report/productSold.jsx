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
      height: 430
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: 'top',
          maxItems: top10Data.length, // Display labels for all bars
        },
      }
    },
    xaxis: {
      categories: top10Data.map((dataPoint) => dataPoint?.product?.product_name || ""),
      labels: {
        show: true, // Show labels along the X-axis
        rotate: -45, // Rotate the labels for better visibility
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
      <ReactApexChart options={options} series={series} type="bar" height={350} />
    </Box>
  );
};

export default TransactionDetailsChart;
