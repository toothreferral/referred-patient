import React from 'react';
import { IModal } from '@/Interfaces/GlobalInterfaces';
import { Link } from 'react-router-dom';
import { useGlobalHooks } from '@/Hooks/globalHooks';
import { SuccesIcon } from '@/SVGs/CustomSVGs';
import PopUp from '@/components/popUps/PopUp';

const BookingSuccessfully: React.FC<IModal> = ({ id }) => {
  const { handleShow } = useGlobalHooks();

  return (
    <PopUp id={id}>
      <section className='wrapper w-full md:w-7/12 mx-auto flex flex-col py-10 px-10 justify-center animate__animated animate__bounceInRight'>
        <div className='w-full flex justify-center items-center mb-5'>
          <SuccesIcon />
        </div>
        <div className='text-center mt-9'>
          <h3 className=' mb-3 font-semibold'>
            Appointment has been successfully scheduled
          </h3>
          <p className='text-Grey6 my-3 '>
            A calendar invite has been sent to your email address.
          </p>

          <div className='mt-10'>
            <Link
              to='/'
              className='outline-btn'
              onClick={() => handleShow('book-success')}
            >
              Go to homepage
            </Link>
          </div>
        </div>
      </section>
    </PopUp>
  );
};

export default BookingSuccessfully;
