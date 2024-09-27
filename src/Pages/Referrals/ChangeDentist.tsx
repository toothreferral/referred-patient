import FindADoc from '@/components/DashboardComps/ReferralComps/FindADoc';
import GoBackBtn from '@/components/GoBackBtn';

const ChangeDentist = () => {
  return (
    <main className='py-10'>
      <section className='container flex flex-wrap items-center justify-between gap-3 mt-8'>
        <div>
          <GoBackBtn />
          <h5 className='font-bold mt-3'>Change Dentist</h5>
        </div>
      </section>
      <hr className='my-5' />

      <FindADoc />
    </main>
  );
};

export default ChangeDentist;
