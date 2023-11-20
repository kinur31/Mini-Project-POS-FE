import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactApexChart from "react-apexcharts";
import { Box } from "@chakra-ui/react";

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
      height: 350,
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
    <Box>
      <ReactApexChart options={options} series={series} type="bar" height={350} />
    </Box>
  );
};

export default Report;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import ReactApexChart from "react-apexcharts";
// import { Box } from "@chakra-ui/react";

// const SplineAreaChart = () => {
//   const [chartData, setChartData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:8080/report");
//         setChartData(response.data.data);
//       } catch (err) {
//         console.log("Error fetching data:", err);
//       }
//     };

//     fetchData();
//   }, []);

//   const extractDayFromDate = (timestamp) => {
//     const date = new Date(timestamp);
//     return date.toLocaleDateString('en-US', { weekday: 'long' });
//   };

//   const transformedData = chartData.map((dataPoint) => ({
//     x: new Date(dataPoint.date).toISOString(),
//     y: dataPoint.totalTransactions,
//   }));

//   const series = [
//     {
//       name: 'Total Transaction',
//       data: transformedData,
//     },
//   ];

//   const options = {
//     chart: {
//       height: 350,
//       type: 'area',
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     stroke: {
//       curve: 'smooth',
//     },
//     xaxis: {
//       type: 'datetime',
//     },
//     tooltip: {
//       x: {
//         format: 'dd/MM/yy HH:mm',
//       },
//     },
//   };

//   return (
//     <Box>
//       <ReactApexChart options={options} series={series} type="area" height={350} />
//     </Box>
//   );
// };

// export default SplineAreaChart;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import ReactApexChart from "react-apexcharts";
// import { Box } from "@chakra-ui/react";

// const SplineAreaChart = () => {
//   const [chartData, setChartData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:8080/report");
//         setChartData(response.data.data);
//       } catch (err) {
//         console.log("Error fetching data:", err);
//       }
//     };

//     fetchData();
//   }, []);

//   const extractDayFromDate = (timestamp) => {
//     const date = new Date(timestamp);
//     return date.toLocaleDateString('en-US', { weekday: 'long' });
//   };

//   const dayLabels = chartData.map((dataPoint) => extractDayFromDate(dataPoint.date));

//   const transformedData = chartData.map((dataPoint) => ({
//     x: extractDayFromDate(dataPoint.date),
//     y: dataPoint.totalTransactions,
//   }));

//   const series = [
//     {
//       name: 'Total Transaction',
//       data: transformedData,
//     },
//   ];

//   const options = {
//     chart: {
//       height: 350,
//       type: 'area',
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     stroke: {
//       curve: 'smooth',
//     },
//     xaxis: {
//       type: 'category',
//       categories: dayLabels,
//     },
//     tooltip: {
//       x: {
//         format: 'dd/MM/yy HH:mm',
//       },
//     },
//   };

//   return (
//     <Box>
//       <ReactApexChart options={options} series={series} type="area" height={350} />
//     </Box>
//   );
// };

// export default SplineAreaChart;