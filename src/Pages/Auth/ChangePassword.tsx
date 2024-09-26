import { useFormik } from 'formik';
import * as Yup from 'yup';
// import * as API from '@/api/apis';
import { useGlobalHooks } from '@/Hooks/globalHooks';
import Spinner from '@/spinner/Spinner';
import FormInput from '@/components/FormInput';
import { Link, useNavigate } from 'react-router-dom';
import ErrorMessage from '@/components/ErrorMessage';
import GoBackBtn from '@/components/GoBackBtn';

const initialValues = {
  password: '',
  confirmPassword: '',
};

const ChangePassword = () => {
  const navigate = useNavigate();

  const {
    errors: customErrors,
    // setErrors,
    // setLoading,
    loading,
  } = useGlobalHooks();

  const onSubmit = async (formData: { password: string }) => {
    // setLoading(true);
    console.log(formData);
    navigate('/signin');
    // const dataToSend = { password: formData.password };

    // API.resetPassword(dataToSend, token)
    //   .then((res) => {
    //     const successMessage = {
    //       success: true,
    //       message: res.data.message,
    //     };
    //     console.log(res);
    //     setLoading(false);

    //     navigate('/password-reset-successfully');
    //   })
    //   .catch((err) => {
    //     const erroMessage = {
    //       success: false,
    //       message:
    //         err && err.response
    //           ? err.response.data.message
    //           : 'We encountered an error',
    //     };

    //     console.log(erroMessage);
    //     setLoading(false);

    //     setErrors({ error: true, errMessage: erroMessage.message });
    //   });
  };

  const passwordSchema = Yup.object().shape({
    password: Yup.string()
      .required(
        'Password must include number and special chars, number and minimum of 8 chars',
      )
      .min(8, ' Must be Minimum of 8 Characters')
      .matches(/^(?=.*[a-z])/, ' Must Contain One Lowercase Character')
      .matches(/^(?=.*[A-Z])/, '  Must Contain One Uppercase Character')
      .matches(/^(?=.*[0-9])/, '  Must Contain One Number Character')
      .matches(
        /^(?=.*[!@#$%^&*])/,
        '  Must Contain  One Special Case Character',
      ),

    confirmPassword: Yup.string()
      .required('Confirm password is required')
      .oneOf([Yup.ref('password')], 'Your passwords does not match'),
  });

  const { errors, touched, handleBlur, handleChange, handleSubmit } = useFormik(
    {
      initialValues: initialValues,
      validationSchema: passwordSchema,
      onSubmit,
    },
  );

  return (
    <main className='  flex flex-col items-center gap-4 justify-center bg-pryColor-400 min-h-screen'>
      <GoBackBtn className='!text-white w-11/12 md:w-5/12 mx-auto' />

      <section className=' w-11/12 md:w-5/12 mx-auto flex flex-col justify-center gap-4 bg-white rounded-lg  p-7'>
        <article className='flex flex-col items-center justify-center gap-4'>
          <hgroup>
            <h2 className='font-Karla font-bold'>Reset Password </h2>
            <p>Enter your new password to continue</p>
          </hgroup>
        </article>
        <form onSubmit={handleSubmit}>
          <article className=' w-full mt-5'>
            <FormInput
              id='password'
              name='password'
              type='password'
              label='New Password'
              placeholder='Enter your password'
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password && errors.password}
              required
            />
          </article>
          <article className=' w-full mt-5'>
            <FormInput
              id='confirmPassword'
              name='confirmPassword'
              type='password'
              label='Confirm New Password'
              placeholder='Enter your password'
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.confirmPassword && errors.confirmPassword}
              required
            />
          </article>
          <article className='mt-10'>
            <button className='main-btn w-full' type='submit'>
              {loading['pass'] ? <Spinner /> : ' Reset Password'}
            </button>
          </article>
        </form>

        <div className='flex justify-center mt-5'>
          {customErrors.error &&
          customErrors.errMessage === 'Password reset failed: jwt expired' ? (
            <div className='flex flex-wrap items-center gap-3 mt-4'>
              <ErrorMessage message='Password reset link expired' />

              <div className=''>
                <Link
                  to='/forgot-password'
                  className='text-[var(--pryColor)] font-bold border-[var(--pryColor)] border-[1px] rounded-md p-1'
                >
                  {' '}
                  Request for a new link
                </Link>
              </div>
            </div>
          ) : (
            customErrors.error && (
              <ErrorMessage message={customErrors.errMessage} />
            )
          )}
        </div>
      </section>
    </main>
  );
};

export default ChangePassword;
