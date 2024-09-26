import { IModal } from '@/Interfaces/GlobalInterfaces';
import PopUp from '@/components/popUps/PopUp';

import {
  MdDateRange,
  MdOutlineAccessTime,
  MdOutlineCancel,
} from 'react-icons/md';
import { FaLocationDot, FaPenClip } from 'react-icons/fa6';
import { TbUsers } from 'react-icons/tb';
import { FC } from 'react';

const ViewEvent: FC<IModal & { data: any }> = ({ id, close, data }) => {
  // const { handleShow } = useGlobalHooks();
  console.log('first>>', data);

  return (
    <PopUp id={id as string} className='!justify-end'>
      <section className='w-9/12 md:w-5/12 lg:w-4/12 bg-white mx-auto animate__animated animate__bounceInRight rounded-lg py-5'>
        <header className='flex justify-end items-center pt-2 container'>
          <button onClick={close}>
            <MdOutlineCancel
              className='text-Grey6 hover:bg-Grey6 hover:text-white rounded-full'
              size={20}
            />
          </button>
        </header>
        <h5 className='px-4 font-semibold text-Grey2 w-full flex items-center gap-2 py-3'>
          Scalling
        </h5>

        <hr />

        <ul className=' flex flex-wrap justify-between divide-x divide-y'>
          <li className='px-4 font-semibold text-Grey2 w-full flex items-center gap-2 py-3'>
            <FaLocationDot /> Madina Clinic{' '}
          </li>
          <li className='px-4 font-semibold text-Grey2 w-full lg:w-6/12 flex items-center gap-2 py-3'>
            <MdDateRange /> May 12, 2024{' '}
          </li>
          <li className='px-4 font-semibold text-Grey2 w-full lg:w-6/12 flex items-center gap-2 py-3'>
            <MdOutlineAccessTime />
            09:00 - 11:00{' '}
          </li>
          <li className='px-4 font-semibold text-Grey2 w-full flex items-center gap-2 py-3'>
            <TbUsers />
            Amber Grace{' '}
          </li>
          <li className='px-4 font-semibold text-Grey2 w-full flex items-center gap-2 py-3'>
            <FaPenClip />
            This is a sample note
          </li>
        </ul>
      </section>
    </PopUp>
  );
};

export default ViewEvent;
