import GoBackBtn from '@/components/GoBackBtn';
import doc1 from '@/assets/doc1.png';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';

const ViewAppointment = () => {
  return (
    <main className='pb-10'>
      <section className='container flex flex-wrap items-center justify-between gap-3 mt-8'>
        <div>
          <GoBackBtn />
          <h5 className='font-bold mt-3'>Appointment details</h5>
        </div>
      </section>
      <hr className='my-5' />

      <section className='container'>
        <div className='flex items-center gap-5'>
          <figure className='h-8 w-8 overflow-hidden rounded-full'>
            <img src={doc1} alt='John Brown' />
          </figure>
          <h5 className='font-semibold'>John Brown</h5>
        </div>

        <ul className='flex flex-col gap-3 mt-7'>
          <li className='flex items-center gap-4'>
            <small className='text-Grey6 w-2/12'>Time</small>
            <h5 className='font-medium w6/12'>12:00</h5>
          </li>
          <li className='flex items-center gap-4'>
            <small className='text-Grey6 w-2/12'>Date</small>
            <h5 className='font-medium w6/12'>7/19/24</h5>
          </li>
          <li className='flex items-center gap-4'>
            <small className='text-Grey6 w-2/12'>Reason</small>
            <h5 className='font-medium w6/12'>Scalling</h5>
          </li>
          <li className='flex items-center gap-4'>
            <small className='text-Grey6 w-2/12'>Email</small>
            <h5 className='font-medium w6/12'>johnbrown@yahoo.com</h5>
          </li>
        </ul>
      </section>
      <hgroup className='container mt-9'>
        <h5 className='font-bold mt-3'>Patient details</h5>
      </hgroup>

      <hr className='my-5' />

      <section className='container'>
        <ul className='flex flex-col gap-3 mt-7'>
          <li className='flex items-center gap-4'>
            <small className='text-Grey6 w-2/12'>Date of birth</small>
            <h5 className='font-medium '>10/19/1995</h5>
          </li>
          <li className='flex items-center gap-4'>
            <small className='text-Grey6 w-2/12'>Gender</small>
            <h5 className='font-medium '>Male</h5>
          </li>
          <li className='flex items-center gap-4'>
            <small className='text-Grey6 w-2/12'>Phone</small>
            <h5 className='font-medium '>(603) 555-0123</h5>
          </li>
          <li className='flex items-center gap-4'>
            <small className='text-Grey6 w-2/12'>Email</small>
            <h5 className='font-medium '>johnbrown@yahoo.com</h5>
          </li>
          <li className='flex items-center gap-4'>
            <small className='text-Grey6 w-2/12'>Referral Details</small>
            <h5 className='font-bold text-pryColor '>View Details</h5>
          </li>
        </ul>
        <div className='card w-full md:w-3/12 h-20 flex justify-center items-center gap-5 mt-6'>
          <h5 className='font-semibold'>Send a message</h5>{' '}
          <IoChatbubbleEllipsesOutline className='text-pryColor' />
        </div>
        <div className='flex items-center gap-5 mt-6'>
          <button className='outline-dark'>Cancel</button>
          <button className='main-btn'>Approve</button>
        </div>
      </section>
    </main>
  );
};

export default ViewAppointment;
