import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import "./CustomBar.css"

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Показатели сотрудника',
      },
    },
  };  
 
export const CustomBar= ({analyticsData}) => {
  const labels = Object.keys(analyticsData)
  const dataset = Object.values(analyticsData)

    const data = {
        labels,
        datasets: [
          {
            label: 'Показатели',
            data: dataset,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
      };
    return (
    <div className="custom-bar">
        <Bar options={options} data={data} />
    </div> 
)}

