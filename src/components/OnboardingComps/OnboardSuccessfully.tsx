import React from 'react';
import PopUp from '../popUps/PopUp';
import { IModal } from '@/Interfaces/GlobalInterfaces';
import { Link } from 'react-router-dom';
import { useGlobalHooks } from '@/Hooks/globalHooks';
import { SuccesIcon } from '@/SVGs/CustomSVGs';

const OnboardSuccessfully: React.FC<IModal> = ({ id }) => {
  const { handleShow } = useGlobalHooks();

  return (
    <PopUp id={id}>
      <section className='wrapper w-full md:w-4/12 mx-auto flex flex-col py-10 px-10 justify-center animate__animated animate__bounceInRight'>
        <div className='w-full flex justify-center items-center mb-5'>
          <SuccesIcon />
        </div>
        <div className='text-center mt-9'>
          <h2 className=' mb-3 font-extrabold'>Congratulations 🎉</h2>
          <p className='font-medium my-3 '>
            You have successfully completed your onboarding on toothreferral.
          </p>

          <div className='mt-10'>
            <Link
              to='/'
              className='main-btn'
              onClick={() => handleShow('success')}
            >
              Explore
            </Link>
          </div>
        </div>
      </section>
    </PopUp>
  );
};

export default OnboardSuccessfully;
