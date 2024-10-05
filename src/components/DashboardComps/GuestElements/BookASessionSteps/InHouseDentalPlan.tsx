import { subPlanData } from '@/components/AllData';
import PlanCard from '@/components/DashboardComps/GuestElements/BookASessionSteps/PlanCard';
import { useState } from 'react';
import { FaCircleCheck } from 'react-icons/fa6';

const InHouseDentalPlan = () => {
  const [selected, setSelected] = useState<{ [key: string]: boolean }>({});

  const handleSelected = (id: string) => {
    setSelected((prev) => ({ [id]: !prev[id] }));
  };
  return (
    <ul className='w-full flex flex-wrap gap-3'>
      {subPlanData.map(
        ({
          id,
          title,
          monthlyPrice,
          yearlyPrice,
          description1,
          description2,
          description3,
          description4,
          description5,
          bg,
        }) => (
          <li key={id} className='card w-full lg:w-[32%] pb-6'>
            <PlanCard
              planTitle={title}
              monthlyPay={monthlyPrice}
              yearlyPay={yearlyPrice}
              description1={description1}
              description2={description2}
              description3={description3}
              description4={description4}
              description5={description5}
              className={bg}
            />
            <div className='container text-center mt-3'>
              <button
                type='button'
                onClick={() => handleSelected(`${id}`)}
                className='main-btn w-full text-center'
              >
                {' '}
                {selected[id] ? (
                  <span className='flex items-center justify-center gap-2'>
                    {' '}
                    Selected <FaCircleCheck />{' '}
                  </span>
                ) : (
                  'Select Plan'
                )}
              </button>
            </div>
          </li>
        ),
      )}
    </ul>
  );
};

export default InHouseDentalPlan;
