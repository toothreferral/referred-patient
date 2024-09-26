import React from 'react';
import './logout.css';
import { useAuthHook } from '../../Hooks/authHook';
import PopUp from '@/components/popUps/PopUp';
import { IModal } from '@/Interfaces/GlobalInterfaces';
import { LogoutIcon } from '@/SVGs/CustomSVGs';

const Logout: React.FC<IModal> = ({ id, close }) => {
  const { logoutUser } = useAuthHook();
  // const [updateLogoutTime] = useUpdateLogoutTimeMutation();

  const handleLogout = async () => {
    // await updateLogoutTime({ initialTime: Date.now() });
    logoutUser();
  };

  return (
    <PopUp id={id}>
      <section className='bg-white rounded-lg px-4 py-6 text-center flex flex-col items-center gap-4'>
        <article className='w-12 h-12 rounded-full bg-Grey5 grid place-items-center'>
          <div className='w-9 h-9 rounded-full bg-Grey3 grid place-items-center'>
            <LogoutIcon />
          </div>
        </article>

        <hgroup>
          <h4 className='font-bold'>Log Out?</h4>
          <p className='text-Grey6'>Are you sure you want to logout?</p>
        </hgroup>
        <article className='flex justify-center gap-3 w-full'>
          <button
            className='outline-dark w-5/12 !px-3 !text-center'
            onClick={close}
          >
            Cancel
          </button>
          <button
            className='main-btn w-5/12 !px-3 !text-center'
            onClick={handleLogout}
          >
            Yes
          </button>
        </article>
      </section>
    </PopUp>
  );
};

export default Logout;
