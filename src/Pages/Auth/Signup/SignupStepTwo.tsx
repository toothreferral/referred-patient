import BrandLogo from '@/components/BrandLogo';
import Aside from '../Aside';
import { appAuthData } from '../Signin/Signin';
import { Link } from 'react-router-dom';
import GoBackBtn from '@/components/GoBackBtn';

const SignupStepTwo = () => {
  return (
    <main className=' flex justify-between  min-h-screen bg-white py-4 px-4'>
      <Aside />

      <aside className='w-full lg:w-[60%] flex flex-col  py-10 px-5 lg:px-10'>
        <GoBackBtn />
        <article className='flex flex-col items-center justify-center gap-7'>
          <BrandLogo className='w-10/12 md:w-4/12' />
          <hgroup>
            <h2 className='font-Karla font-bold'>Get started today!</h2>
            <p className='text-center text-Grey1 w-full'>
              Create a new account
            </p>
          </hgroup>
        </article>

        <ul className='flex flex-col items-center gap-4 mt-10 w-full md:w-7/12 mx-auto'>
          {appAuthData.map(({ id, icon, title, bg, tx, url }) => (
            <li
              key={id}
              className='shadow-lg w-full animate__animated animate__bounceIn '
            >
              <Link
                to={url}
                className={`${bg} ${tx} rounded-lg py-3 flex-1 flex items-center justify-center gap-4 `}
              >
                {icon}
                {title}
              </Link>
            </li>
          ))}
        </ul>

        <article className='w-full md:w-7/12 mx-auto text-center mt-3 '>
          <p>
            By proceeding you acknowledge that you have read and agree to the{' '}
            <Link to='#' className='text-pryColor'>
              {' '}
              Terms & Conditions
            </Link>{' '}
            and{' '}
            <Link to='#' className='text-pryColor'>
              {' '}
              Privacy Policy
            </Link>
          </p>
          <hr className='mt-6' />
        </article>
        <article className='mt-4'>
          <p className='text-center'>
            Already have an account?{' '}
            <Link to='/signin' className='text-pryColor font-bold'>
              Sign In
            </Link>
          </p>
        </article>
      </aside>
    </main>
  );
};

export default SignupStepTwo;
