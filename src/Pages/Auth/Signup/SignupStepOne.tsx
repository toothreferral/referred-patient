import BrandLogo from '@/components/BrandLogo';
import Aside from '../Aside';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SignupStepOne = () => {
  const [isChecked, setIsChecked] = useState<{ [key: number]: boolean }>({
    1: true,
  });

  const docTypeData = [
    {
      id: 1,
      title: (
        <>
          {' '}
          I am a Dental <br /> Provider
        </>
      ),
      checked: isChecked,
      bgClass: 'provider',
    },
    {
      id: 2,
      title: (
        <>
          {' '}
          I am a Referred <br /> Patient
        </>
      ),
      checked: isChecked,
      bgClass: 'patient',
    },
    {
      id: 3,
      title: (
        <>
          {' '}
          I am searching <br />
          for a Dentist
        </>
      ),
      checked: isChecked,
      bgClass: 'staff',
    },
    {
      id: 4,
      title: (
        <>
          {' '}
          I am a Dental <br /> Staff
        </>
      ),
      checked: isChecked,
      bgClass: 'dentist',
    },
  ];

  const handleChange = (id: number) => {
    setIsChecked(() => ({ [id]: true }));
  };

  return (
    <main className=' flex justify-between  min-h-screen bg-white py-4 px-4'>
      <Aside />

      <aside className='w-full lg:w-[60%] flex flex-col  py-10 px-5 lg:px-10'>
        <hgroup className='flex flex-col items-center justify-center gap-4'>
          <h2 className='flex flex-wrap items-center font-Karla font-medium justify-center gap-4'>
            <span className=' mt-0 lg:mt-5'>Welcome to</span>
            <BrandLogo className='w-10/12 md:w-5/12' />
          </h2>
          <p className='text-center mt-3 text-Grey1 w-full'>
            Please select which best describes you
          </p>
        </hgroup>

        <ul className='flex flex-wrap gap-3 justify-between mt-9'>
          {docTypeData?.map(({ id, title, checked, bgClass }) => (
            <li
              key={id}
              className={`${bgClass} ${
                isChecked[id] ? ' border-pryColor' : 'border-Grey5'
              } rounded-lg w-full md:w-[47%] border-[1.5px] animate__animated animate__bounceIn`}
              onClick={() => handleChange(id)}
            >
              <input
                id=''
                type='radio'
                onChange={() => handleChange(id)}
                checked={checked[id] ? true : false}
              />
              <p className='font-semibold text-base w-5/12'> {title}</p>
            </li>
          ))}
        </ul>

        <article className='mt-20 flex justify-end'>
          <Link to='/signup/steptwo' className='main-btn'>
            Continue
          </Link>
        </article>
      </aside>
    </main>
  );
};

export default SignupStepOne;
