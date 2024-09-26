import {
  Chart as CharJs,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

CharJs.register(
  LineElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  Legend,
);

function LineChart({ data, options }: { data: any; options: any }) {
  return (
    <main className='w-full mt-5 charts'>
      <Line data={data} options={options} />
    </main>
  );
}

export default LineChart;
