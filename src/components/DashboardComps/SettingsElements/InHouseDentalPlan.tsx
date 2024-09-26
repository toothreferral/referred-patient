import { subPlanData } from '@/components/AllData';
import PlanCard from '@/components/OnboardingComps/PlanCard';
import { Link } from 'react-router-dom';

const InHouseDentalPlan = () => {
  return (
    <main className='container py-6'>
      <header className='flex items-center justify-between my-5'>
        <hgroup>
          <h4 className='text-xl font-semibold'>In House Dental Plan</h4>

          <h6 className='text-Grey1'>
            View and edit your In house dental plans
          </h6>
        </hgroup>

        <Link to='/settings/add-new-plan' className='outline-btn'>
          Add New Plan
        </Link>
      </header>

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
            <li key={id} className='card w-full lg:w-[49%] pb-6'>
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
                settings
              />
              <div className='container text-center mt-3'>
                <Link
                  to={`/settings/edit-plan/${id}`}
                  className='main-btn w-full text-center'
                >
                  Edit Plan{' '}
                </Link>
              </div>
            </li>
          ),
        )}
      </ul>
    </main>
  );
};

export default InHouseDentalPlan;
