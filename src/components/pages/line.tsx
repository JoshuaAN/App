import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: false,
      text: 'Nutrient View',
    },
  },
};

const labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Calcium',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      borderColor: 'rgb(175, 0, 0)',
      backgroundColor: 'rgba(175, 0, 0, 0.2)',
    },
    {
      label: 'Iron',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      borderColor: 'rgb(0, 175, 0)',
      backgroundColor: 'rgba(0, 175, 0, 0.2)',
    },
    {
      label: 'Vitamin B12',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      borderColor: 'rgb(0, 0, 175)',
      backgroundColor: 'rgba(0, 0, 175, 0.2)',
    },
    {
      label: 'Vitamin D',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      borderColor: 'rgb(175, 175, 0)',
      backgroundColor: 'rgba(175, 175, 0, 0.2)',
    },
    {
      label: 'Magnesium',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      borderColor: 'rgb(0, 175, 175)',
      backgroundColor: 'rgba(0, 175, 175, 0.2)',
    },
    {
      label: 'Vitamin D',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      borderColor: 'rgb(175, 0, 175)',
      backgroundColor: 'rgba(175, 0, 175, 0.2)',
    },
  ],
};

const App: React.FC = () => {
  return <Line options={options} data={data} />;
}

export default App;