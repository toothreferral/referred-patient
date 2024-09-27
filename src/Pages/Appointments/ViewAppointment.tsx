import GoBackBtn from '@/components/GoBackBtn';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const ViewAppointment = () => {
  return (
    <main className='pb-10'>
      <section className='container flex flex-wrap items-center justify-between gap-3 mt-8'>
        <GoBackBtn />
      </section>
      <hr className='my-5' />

      <section className='container '>
        <article className=' card overflow-hidden w-full lg:w-6/12 '>
          <div className='flex items-center gap-5 bg-PaleSky py-2 px-4'>
            <h5 className='font-semibold text-white'>Appointment Details</h5>
          </div>

          <ul className='flex flex-wrap gap-3 py-5 px-4'>
            <li className='flex flex-col gap-1 w-5/12'>
              <small className='text-Grey6'>Time</small>
              <h5 className='font-medium'>12:00</h5>
            </li>
            <li className='flex flex-col gap-1 w-5/12'>
              <small className='text-Grey6'>Date</small>
              <h5 className='font-medium'>7/19/24</h5>
            </li>
            <li className='flex flex-col gap-1 w-5/12'>
              <small className='text-Grey6'>Reason</small>
              <h5 className='font-medium'>Scalling</h5>
            </li>
            <li className='flex flex-col gap-1 w-5/12'>
              <small className='text-Grey6'>Referral Details</small>
              <Link to='#' className='font-medium text-pryColor'>
                View Details{' '}
              </Link>
            </li>
          </ul>
        </article>
      </section>

      <hr className='my-5' />

      <section className='container '>
        <article className=' card overflow-hidden w-full lg:w-6/12 '>
          <div className='flex items-center gap-5 bg-PaleSky py-2 px-4'>
            <h5 className='font-semibold text-white'>Referral Office</h5>
          </div>

          <ul className='flex flex-wrap gap-3 py-5 px-4'>
            <li className='flex flex-col gap-1 w-5/12'>
              <small className='text-Grey6'>Doctor</small>
              <h5 className='font-medium'>Dr John Brown</h5>
            </li>
            <li className='flex flex-col gap-1 w-5/12'>
              <small className='text-Grey6'>Telephone</small>
              <h5 className='font-medium'>(603) 555-0123</h5>
            </li>
            <li className='flex flex-col gap-1 w-5/12'>
              <small className='text-Grey6'>Office Name</small>
              <h5 className='font-medium'>Healthplus dental</h5>
            </li>
            <li className='flex flex-col gap-1 w-5/12'>
              <small className='text-Grey6'>Website</small>
              <h5 className='font-medium'>www.healthplus.com</h5>
            </li>
            <li className='flex flex-col gap-1 w-5/12'>
              <small className='text-Grey6'>Fax number</small>
              <h5 className='font-medium'>(603) 555-0123</h5>
            </li>
            <li className='flex flex-col gap-1 w-5/12'>
              <small className='text-Grey6'>Location</small>
              <Link to='#' className='font-medium text-pryColor'>
                View on map{' '}
              </Link>
            </li>
            <li className='flex flex-col gap-1 flex-1'>
              <small className='text-Grey6'>Address</small>
              <h5 className='font-medium '>
                651 N Broad St, Suite 201, Middletown, DE 19709
              </h5>
            </li>
          </ul>
        </article>
      </section>

      <section className='container'>
        <div className='card w-full md:w-5/12 h-20 flex justify-center items-center gap-5 mt-6'>
          <h5 className='font-semibold'>Send a message to Office Mnager </h5>{' '}
          <IoChatbubbleEllipsesOutline className='text-pryColor' />
        </div>
        <div className='flex items-center gap-5 mt-6'>
          <button className='outline-dark'>Decline</button>
          <button className='outline-btn'>Reschedule</button>
          <button className='main-btn'>Approve</button>
        </div>
      </section>
    </main>
  );
};

export default ViewAppointment;
