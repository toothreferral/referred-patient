import FormInput from '@/components/FormInput';
import * as Yup from 'yup';
// import * as API from '@/api/apis';
import { useFormik } from 'formik';
import { ISignUp } from '@/Interfaces/Auth';
// import { useAppDispatch } from '@/Redux/reduxHooks';
// import { useCookies } from '@/Hooks/cookiesHook';
import Spinner from '@/spinner/Spinner';
import { useGlobalHooks } from '@/Hooks/globalHooks';
import { Link, useNavigate } from 'react-router-dom';
// import {
//   isUserOnboarded,
//   updateSessionDuration,
// } from '@/Redux/Features/onboardingSlice';
// import { userAuthData } from '@/Redux/Features/userAuthSlice';
// import { useAuthHook } from '@/Hooks/authHook';
import ErrorMessage from '@/components/ErrorMessage';
import GoBackBtn from '@/components/GoBackBtn';
import BrandLogo from '@/components/BrandLogo';

const initialValues = {
  fullName: '',
  lastName: '',
  email: '',
  password: '',
};
const SignupStepThree = () => {
  // const dispatch = useAppDispatch();
  // const { setCookies } = useCookies();
  // const { setSession } = useAuthHook();
  const navigate = useNavigate();
  const {
    errors: customErrors,
    // setErrors,
    setLoading,
    loading,
  } = useGlobalHooks();

  const onSubmit = async (userData: ISignUp) => {
    console.log(userData);

    navigate('/verify-email');

    setLoading({ ['signup']: false });
    // API.SignUp(userData)
    //   .then((res) => {
    //     const successMessage = {
    //       success: true,
    //       message: res.data.message,
    //     };

    //     const userToken = res.data.tokens.access.token;
    //     const tokenExpires = res.data.tokens.access.expires;
    //     const userId = res.data.user.id;
    //     const userEmail = res.data.user.email;
    //     const userName = `${res.data.user.firstName} ${res.data.user.lastName}`;
    //     const onBoarded = res.data.user.onboarded;

    //     setCookies('userToken', userToken);

    //     dispatch(updateSessionDuration(tokenExpires));
    //     dispatch(isUserOnboarded(onBoarded));
    //     dispatch(userAuthData({ userId, userEmail, userName }));
    //     setLoading(false);

    //     setSession(tokenExpires);
    //     navigate('/onboarding');
    //   })
    //   .catch((err) => {
    //     console.log(err);
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
    fullName: Yup.string().required('First Name is required'),
    password: Yup.string()
      .required(
        'Password must include number and special chars, number and minimum of 8 chars',
      )
      .matches(/^(?=.{8,})/, ' Must be Minimum of 8 Characters')
      .matches(/^(?=.*[a-z])/, ' Must Contain One Lowercase Character')
      .matches(/^(?=.*[A-Z])/, '  Must Contain One Uppercase Character')
      .matches(/^(?=.*[0-9])/, '  Must Contain One Number Character')
      .matches(
        /^(?=.*[!@#$%^&*])/,
        '  Must Contain  One Special Case Character',
      ),
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
    <main className='  flex flex-col items-center gap-4 justify-center bg-pryColor-400 min-h-screen'>
      <GoBackBtn className='!text-white w-11/12 md:w-5/12 mx-auto' />

      <section className=' w-11/12 md:w-5/12 mx-auto flex flex-col justify-center gap-4 bg-white rounded-lg  p-7'>
        <article className='flex flex-col items-center justify-center gap-4'>
          <BrandLogo className='w-10/12 md:w-4/12' />
          <hgroup>
            <h2 className='font-Karla font-bold'>Sign up with Email</h2>
          </hgroup>
        </article>
        <form onSubmit={handleSubmit} className='mb-3'>
          <article className='w-full'>
            <FormInput
              id='fullName'
              name='fullName'
              type='text'
              label='Full Name'
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.fullName && errors.fullName}
            />
          </article>
          <article className=' w-full mt-53'>
            <FormInput
              id='email'
              name='email'
              type='email'
              label='Email'
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
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password && errors.password}
            />
          </article>

          <article className=''>
            <button
              style={{ boxShadow: '0px 8px 20px 0px #4E60FF29' }}
              className='main-btn w-full'
              type='submit'
            >
              {loading['signup'] ? <Spinner /> : 'Sign Up'}
            </button>
          </article>
        </form>

        <hr />
        <article className='mt-2'>
          <p className='text-center'>
            Already have an account?{' '}
            <Link to='/signin' className='text-pryColor font-bold'>
              Sign In
            </Link>
          </p>
        </article>

        <div className='flex flex-col items-center justfy-center w-full mt-2'>
          {!loading['signup'] && customErrors.error && (
            <ErrorMessage message={customErrors.errMessage} />
          )}
        </div>
      </section>
    </main>
  );
};

export default SignupStepThree;
