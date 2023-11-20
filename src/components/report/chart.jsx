import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactApexChart from "react-apexcharts";
import { Box, Flex } from "@chakra-ui/react";
import TransactionDetailsChart from "./productSold";

const Report = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/report");
        setChartData(response.data.data);
      } catch (err) {
        console.log("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  const extractDayFromDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', { weekday: 'long' });
  };

  const options = {
    chart: {
      type: 'bar',
      height: 250,
    },
    plotOptions: {
      bar: {
        distributed: true,
      },
    },
    xaxis: {
      type: 'category',
      categories: chartData.map((dataPoint) => extractDayFromDate(dataPoint.date)),
      labels: {
        rotate: -45,
        style: {
          fontSize: '10px',
        },
      },
      axisTicks: {
        show: true,
        borderType: 'solid',
        color: '#78909C',
        height: 6,
        offsetX: 0,
        offsetY: 0,
      },
    },
    title: {
      text: 'Sales',
      align: 'left',
    },
  };

  const series = [
    {
      name: 'Total Transaction',
      data: chartData.map((dataPoint) => ({
        x: extractDayFromDate(dataPoint.date),
        y: dataPoint.totalTransactions,
      })),
    },
    // {
    //   name: 'Total Products Sold',
    //   data: chartData.map((dataPoint) => ({
    //     x: extractDayFromDate(dataPoint.date),
    //     y: dataPoint.totalProductSols,
    //   })),
    // },
    // {
    //   name: 'Total Sales',
    //   data: chartData.map((dataPoint) => ({
    //     x: extractDayFromDate(dataPoint.date),
    //     y: dataPoint.totalSales,
    //   })),
    // },
  ];

  return (
    <Flex justifyContent="center" alignItems="center">
      <ReactApexChart options={options} series={series} type="bar" width={650} height={250} />
    </Flex>
  );
};

export default Report;