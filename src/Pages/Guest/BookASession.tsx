import BrandLogo from '@/components/BrandLogo';
import GoBackBtn from '@/components/GoBackBtn';
import BookingStepForm from '@/components/DashboardComps/GuestElements/BookASessionSteps/BookingStepForm';

const BookASession = () => {
  return (
    <main className='bg-Grey4 py-10 min-h-screen '>
      <section className='container '>
        <header className='flex items-center justify-between mb-6'>
          <GoBackBtn />
          <div className='flex justify-center flex-1'>
            <BrandLogo className='w-2/12  ' />
          </div>
        </header>

        <BookingStepForm />
      </section>
    </main>
  );
};

export default BookASession;
