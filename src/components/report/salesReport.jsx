import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import axios from 'axios';

const formatRupiah = (number) => {
  if (isNaN(number)) {
    return '';
  }
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);
};

const SalesReportChart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const startDate = '2023-05-17';
        const endDate = '2023-05-17';

        const response = await axios.get(`http://localhost:8080/report?startDate=${startDate}&endDate=${endDate}`);
        const reportData = response.data.data;

        const formattedData = reportData.map((dataPoint) => ({
          ...dataPoint,
          totalSales: formatRupiah(dataPoint.totalSales), 
        }));

        setChartData(reportData);
      } catch (error) {
        console.error('Error fetching sales report:', error);
      }
    };

    fetchData();
  }, []);

  const options = {
    chart: {
      type: 'bar',
      height: 430,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: 'top',
          maxItems: chartData.length,
        },
      },
    },
    xaxis: {
      categories: chartData.map((dataPoint) => dataPoint.date),
    },
    title: {
      text: 'Sales Report',
      align: 'left',
    },
  };

  const series = [
    {
      name: 'Total Sales',
      data: chartData.map((dataPoint) => dataPoint.totalSales),
    },
  ];

  return <ReactApexChart options={options} series={series} type="bar" height={350} />;
};

export default SalesReportChart;
