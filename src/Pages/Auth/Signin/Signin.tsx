import FormInput from '@/components/FormInput';
import * as Yup from 'yup';
// import * as API from '@/api/apis';

import { useFormik } from 'formik';
import { ISignIn } from '@/Interfaces/Auth';
// import { useAppDispatch } from '@/Redux/reduxHooks';
// import { useCookies } from '@/Hooks/cookiesHook';
import Spinner from '@/spinner/Spinner';
import { useGlobalHooks } from '@/Hooks/globalHooks';
import { Link } from 'react-router-dom';
import Aside from '../Aside';
// import {
//   isUserOnboarded,
//   updateSessionDuration,
// } from '@/Redux/Features/onboardingSlice';
// import { userAuthData } from '@/Redux/Features/userAuthSlice';
// import { useAuthHook } from '@/Hooks/authHook';
import ErrorMessage from '@/components/ErrorMessage';
// import { useUpdateLoginTimeMutation } from '@/api/apiSlice';
import { BsApple, BsFacebook } from 'react-icons/bs';
import { GoogleIcon } from '@/SVGs/CustomSVGs';
import { MdEmail } from 'react-icons/md';

const initialValues = {
  email: '',
  password: '',
};

export const appAuthData = [
  {
    id: 1,
    icon: <BsFacebook color='#fff' size={24} />,
    title: 'Sign Up with Facebook',
    bg: 'bg-[#1877F2]',
    tx: 'text-white',
    url: '#',
  },
  {
    id: 2,
    icon: <GoogleIcon />,
    title: 'Sign Up with Google',
    bg: 'bg-white',
    url: '#',
  },
  {
    id: 3,
    icon: <BsApple color='#fff' size={24} />,
    title: 'Sign Up with Apple',
    bg: 'bg-black',
    tx: 'text-white',
    url: '#',
  },
  {
    id: 4,
    icon: <MdEmail size={24} />,
    title: 'Sign Up with Email',
    bg: 'bg-[#F0F0F0]',
    url: '/signup/stepthree',
  },
];

const Signin = () => {
  // const dispatch = useAppDispatch();
  // const { setCookies } = useCookies();
  // const { setSession } = useAuthHook();
  // const navigate = useNavigate();
  const {
    errors: customErrors,
    // setErrors,
    loading,
    // setLoading,
  } = useGlobalHooks();

  // const [updateLoginTime] = useUpdateLoginTimeMutation();

  const onSubmit = async (userData: ISignIn) => {
    // setLoading(true);
    console.log(userData);
    // API.SignIn(userData)
    //   .then((res) => {
    //     const successMessage = {
    //       success: true,
    //       message: res.status === 200 ? 'User logged in successfuly' : '',
    //     };
    //     const userToken = res.data.tokens.access.token;
    //     const tokenExpires = res.data.tokens.access.expires;
    //     const userId = res.data.user.id;
    //     const userEmail = res.data.user.email;
    //     const userName = `${res.data.user.firstName} ${res.data.user.lastName}`;
    //     const onBoarded = res.data.user.onboarded;
    //     setCookies('userToken', userToken);
    //     setSession(tokenExpires);

    //     if (res?.data?.user?.userType === 'buyer') {
    //       API.UpdateUserType()
    //         .then((rsp) => {
    //           const successMessage = {
    //             success: true,
    //             message: rsp.status === 200 ? 'User logged in successfuly' : '',
    //           };

    //           const userToken = rsp.data?.data?.token.access.token;
    //           const tokenExpires = rsp?.data?.data?.token.access.expires;

    //
    //           setSession(tokenExpires);
    //           setCookies('userToken', userToken);

    //           dispatch(updateSessionDuration(tokenExpires));
    //           dispatch(isUserOnboarded(onBoarded));
    //           dispatch(userAuthData({ userId, userEmail, userName }));
    //           setLoading(false);
    //           navigate('/');
    //         })
    //         .catch((err) => {
    //           const erroMessage = {
    //             success: false,
    //             message:
    //               err && err.response
    //                 ? err.response.data.message
    //                 : 'We encountered an error',
    //           };
    //           setLoading(false);
    //           setErrors({ error: true, errMessage: erroMessage.message });
    //           navigate('/');
    //         });
    //     } else {
    //

    //       updateLoginTime({ initialTime: Date.now() });

    //       dispatch(updateSessionDuration(tokenExpires));
    //       dispatch(isUserOnboarded(onBoarded));
    //       dispatch(userAuthData({ userId, userEmail, userName }));
    //       setLoading(false);
    //       navigate('/');
    //     }
    //   })
    //   .catch((err) => {
    //     const erroMessage = {
    //       success: false,
    //       message:
    //         err && err.response
    //           ? err.response.data.message
    //           : 'We encountered an error',
    //     };
    //     setLoading(false);

    //     setErrors({ error: true, errMessage: erroMessage.message });
    //   });
  };

  const signUpSchema = Yup.object().shape({
    password: Yup.string().required('Field cannot be empty'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email address is required'),
  });

  const { touched, errors, handleBlur, handleChange, handleSubmit } = useFormik(
    {
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit,
    },
  );
  return (
    <main className=' flex justify-between items-center min-h-screen bg-white py-4 px-4'>
      <Aside />
      <aside className='white w-full lg:w-[60%] flex flex-col justify-between py-5 px-5 lg:px-10'>
        <section className='w-11/12 md:w-8/12 mx-auto flex flex-col gap-6'>
          <article className='text-center'>
            <h2 className='font-Karla font-bold mb-3'>Welcome back</h2>
            <h5>
              Enter your email address and password to log in to your account
            </h5>
          </article>
          <form onSubmit={handleSubmit}>
            <article className=' w-full '>
              <FormInput
                id='email'
                name='email'
                type='email'
                label='Email Address'
                placeholder='Enter your email address'
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && errors.email}
              />
            </article>
            <article className=' w-full mt-3'>
              <FormInput
                id='password'
                name='password'
                type='password'
                label='Password'
                placeholder='Create a strong password'
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && errors.password}
              />
            </article>
            <article className='flex items-center gap-2'>
              <Link
                to='/forgot-password'
                className='font-semibold text-[var(--pryColor)]  '
              >
                Forgot password
              </Link>
            </article>

            <article className='mt-5 w-full '>
              <button
                style={{ boxShadow: '0px 8px 20px 0px #4E60FF29' }}
                className='main-btn w-full !rounded-3xl'
                type='submit'
              >
                {loading['signin'] ? <Spinner /> : 'Login'}
              </button>
            </article>

            <div className='flex flex-col items-center justfy-center w-full mt-5'>
              {!loading && customErrors.error && (
                <ErrorMessage message={customErrors.errMessage} />
              )}
            </div>
          </form>

          <article className='flex justify-center items-center gap-1 w-full'>
            <hr className='flex-1' />
            <div className='flex-1'>
              <p className=' font-medium text-center'>Or continue with</p>
            </div>
            <hr className='flex-1' />
          </article>

          <ul className='flex items-center gap-4'>
            {appAuthData?.slice(0, 3).map(({ id, icon, bg }) => (
              <Link
                key={id}
                to='#'
                className={`${bg} rounded-3xl py-3 flex-1 flex items-center justify-center gap-4 shadow-lg`}
              >
                {icon}
                {/* {title} */}
              </Link>
            ))}
          </ul>
          <article>
            <p className=' font-medium text-center'>
              Don&apos;t have an account?{' '}
              <Link to='/signup/stepone' className='text-pryColor'>
                Sign up
              </Link>
            </p>
          </article>
        </section>
      </aside>
    </main>
  );
};

export default Signin;
