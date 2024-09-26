import { chartOptions, refData, topDealersData } from '@/components/AllData';
import BarCharts from '@/components/Charts/BarCharts';
import useUpdatePageName from '@/Hooks/useUpdatePageName';
import dayjs from 'dayjs';

const Analytics = () => {
  useUpdatePageName('Analytics');

  return (
    <main className='container'>
      <header className='my-5'>
        <h4>Good Morning, John!</h4>
        <p>{dayjs(new Date()).format('dddd, MMMM M YYYY')}</p>
      </header>
      <ul className='flex flex-wrap justify-between gap-3 text-lg font-bold '>
        <li className='px-7 w-full lg:flex-1 bg-white border-Line !border rounded-lg py-6'>
          <p className='font-normal text-sm'>Total referrals received</p>
          <h4>4,200</h4>
        </li>
        <li className='px-7 w-full lg:flex-1 bg-white border-Line !border rounded-lg py-6'>
          <p className='font-normal text-sm'>Total referrals changed</p>
          <h4>5</h4>
        </li>
        <li className='px-7 w-full lg:flex-1 bg-white border-Line !border rounded-lg py-6'>
          <p className='font-normal text-sm'>Total appointments</p>
          <h4>1,700</h4>
        </li>
      </ul>

      <section className='flex flex-wrap gap-4 justify-between mt-6'>
        <aside className='flex-1 bg-white rounded-lg p-5'>
          <div className='flex flex-wrap items-center justify-between'>
            <h4 className='font-semibold'>Referrals</h4>{' '}
            <select name='' id='' className='form-controls w-full md:w-3/12'>
              <option value=''>This Month</option>
              <option value=''>Last Month</option>
              <option value=''>This Year</option>
              <option value=''>Last Year</option>
            </select>{' '}
          </div>
          <BarCharts data={refData} options={chartOptions} />
        </aside>
        <article className='w-full md:w-5/12 bg-white rounded-lg p-5'>
          <h5 className='font-semibold'>Today Appointments</h5>

          <div className='flex items-center justify-between my-5'>
            {' '}
            <p className='text-Grey1 text-sm'>Name</p>
            <div className='flex items-center gap-5 w-5/12'>
              <p className='text-Grey1 text-sm'>Title</p>{' '}
              <p className='text-Grey1 text-sm'>Status</p>{' '}
            </div>
          </div>
          <ul className='flex flex-col gap-3'>
            {topDealersData.map(
              ({ id, title, time, imgUrl, handle, status }) => (
                <li
                  key={id}
                  className='flex justify-between items-center py-3 bg-Grey3 !border border-Line rounded-lg px-4'
                >
                  <div className='flex items-center gap-3 flex-1'>
                    <figure className=' w-[32px] h-[32px] overflow-hidden rounded-full  transition-all'>
                      <img
                        src={imgUrl}
                        alt=''
                        className='!w-full !h-full object-cover'
                      />
                    </figure>

                    <div className='flex flex-col'>
                      <h5>{title} </h5>
                      <small className='text-Grey6'>{handle} </small>
                    </div>
                  </div>
                  <div className='flex items-center gap-5 w-5/12'>
                    <p> {time} </p>
                    <div>
                      <button
                        className={` main-btn !py-2 !px-4 !text-sm ${
                          status === 'Ready' ? '!bg-positive' : '!bg-[#DF9949]'
                        }`}
                      >
                        {status}{' '}
                      </button>
                    </div>
                  </div>
                </li>
              ),
            )}
          </ul>
        </article>
      </section>
    </main>
  );
};

export default Analytics;
