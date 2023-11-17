import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactApexChart from "react-apexcharts";

const Report = () => {
     const [chartData, setChartData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/report");
      setChartData(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const extractMonthFromDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.toLocaleString('en-US', { month: 'long' });
    return month;
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
      categories: chartData.map((dataPoint) => extractMonthFromDate(dataPoint.createdAt)),
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
      name: 'Total Sales',
      data: chartData.map((dataPoint) => ({
        x: extractMonthFromDate(dataPoint.createdAt),
        y: dataPoint.total_qty,
      })),
    },
  ];

  return (
    <>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={350}
      />
    </>
  );
};

export default Report;
