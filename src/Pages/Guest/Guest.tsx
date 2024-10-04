import BrandLogo from '@/components/BrandLogo';
import FindADentist from '@/components/DashboardComps/GuestElements/FindADentist';
import GoBackBtn from '@/components/GoBackBtn';

const Guest = () => {
  return (
    <main className='bg-Grey4 py-10'>
      <section className='container space-y-7 '>
        <header className='flex items-center justify-between'>
          <GoBackBtn />
          <div className='flex justify-center flex-1'>
            <BrandLogo className='w-2/12  ' />
          </div>
        </header>
        <section className='bg-white p-3 space-y-5'>
          <hgroup>
            <h4 className='mb-3'>Find a Dentist close to you</h4>
            <hr />
          </hgroup>
          <FindADentist />
        </section>
      </section>
    </main>
  );
};

export default Guest;
