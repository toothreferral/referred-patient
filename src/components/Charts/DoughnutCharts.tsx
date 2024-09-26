import { Chart as CharJs, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

CharJs.register(ArcElement, Tooltip, Legend);
function DoughnutCharts({
  data,
  options,
  label,
}: {
  data: any;
  options: any;
  label: any;
}) {
  return (
    <main className='w-full  mx-auto charts py-3 position-relative flex justify-center items-center'>
      <Doughnut data={data} options={options} plugins={[label]} />
    </main>
  );
}

export default DoughnutCharts;
