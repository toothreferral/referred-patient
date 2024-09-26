import FormInput from '@/components/FormInput';
import * as Yup from 'yup';
// import * as API from '@/api/apis';
import { useFormik } from 'formik';
import Spinner from '@/spinner/Spinner';
import { useGlobalHooks } from '@/Hooks/globalHooks';
import ErrorMessage from '@/components/ErrorMessage';
import GoBackBtn from '@/components/GoBackBtn';
import { useNavigate } from 'react-router-dom';

const initialValues = {
  email: '',
};

const ForgotPasswordRequest = () => {
  const navigate = useNavigate();

  const {
    errors: customErrors,
    // setErrors,
    // setLoading,
    loading,
  } = useGlobalHooks();

  const onSubmit = async (formData: { email: string }) => {
    console.log(formData);

    navigate('/reset-password');
    // API.requestPasswordChange(formData)
    //   .then((res) => {
    //     const successMessage = {
    //       success: true,
    //       message: res.data.message,
    //     };

    //     setLoading(false);
    //     setLinkSent(true);
    //     // navigate('/resetpassword');
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

  const signUpSchema = Yup.object().shape({
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
          <hgroup>
            <h2 className='font-Karla font-bold'>Forgot Password? </h2>
            <p>Enter your email to reset your password</p>
          </hgroup>
        </article>

        <form onSubmit={handleSubmit}>
          <article className=' w-full mt-5'>
            <FormInput
              id='email'
              name='email'
              type='email'
              label='Email Address'
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && errors.email}
            />
          </article>
          <article className='mt-10'>
            <button className='main-btn w-full' type='submit'>
              {loading['f-pass'] ? <Spinner /> : ' Reset Password'}
            </button>
          </article>

          <div className='flex justify-center mt-6'>
            {customErrors.error && (
              <ErrorMessage message={customErrors.errMessage} />
            )}
          </div>
        </form>
      </section>
    </main>
  );
};

export default ForgotPasswordRequest;
